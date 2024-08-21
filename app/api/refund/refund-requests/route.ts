import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { storeType, amount, reason } = await request.json();

  const refundRequest = await prisma.refundRequest.create({
    data: {
      userId: session.user.id,
      storeType,
      amount,
      reason,
    },
  });

  return NextResponse.json(refundRequest);
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 10;

  const where: any = {};
  if (status) {
    where.status = status;
  }
  if (session.user.role !== "ADMIN") {
    where.userId = session.user.id;
  }

  const refundRequests = await prisma.refundRequest.findMany({
    where,
    include: { user: true },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.refundRequest.count({ where });

  return NextResponse.json({
    refundRequests,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status, reason } = await request.json();

  const updatedRefundRequest = await prisma.refundRequest.update({
    where: { id },
    data: { status, reason },
    include: { user: true },
  });

  return NextResponse.json(updatedRefundRequest);
}
