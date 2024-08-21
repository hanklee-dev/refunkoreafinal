import { parse } from "csv-parse/sync";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

type CSVRecord = {
  loginid: string;
  loginpassword: string;
  appleid?: string;
  applepassword?: string;
  googleid?: string;
  googlepassword?: string;
  Refundstorechoice?: string;
  birthday?: string;
  paymentdevice?: string;
  paymentway?: string;
  tryrefundquestion?: string;
};

export async function processCSVFile(fileContent: string) {
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as CSVRecord[];

  const results = [];

  for (const record of records) {
    try {
      const {
        loginid,
        loginpassword,
        appleid,
        applepassword,
        googleid,
        googlepassword,
        Refundstorechoice,
        birthday,
        paymentdevice,
        paymentway,
        tryrefundquestion,
      } = record;

      if (!loginid || !loginpassword) {
        results.push({ success: false, error: "Missing required fields" });
        continue;
      }

      const hashedPassword = await bcrypt.hash(loginpassword, 10);
      const birthdayDate = birthday ? new Date(birthday) : null;

      const userData: Prisma.UserCreateInput = {
        phoneNumber: loginid,
        password: hashedPassword,
        refundStoreChoice: Refundstorechoice,
        birthday: birthdayDate,
        paymentDevice: paymentdevice,
        paymentWay: paymentway,
        refundHistory: tryrefundquestion,
        appleId: appleid,
        applePassword: applepassword
          ? await bcrypt.hash(applepassword, 10)
          : undefined,
        googleId: googleid,
        googlePassword: googlepassword
          ? await bcrypt.hash(googlepassword, 10)
          : undefined,
      };

      const user = await prisma.user.create({ data: userData });

      results.push({
        success: true,
        user: { id: user.id, phoneNumber: user.phoneNumber },
      });
    } catch (error) {
      console.error("Error processing row:", error);
      results.push({ success: false, error: "Failed to create user" });
    }
  }

  return results;
}
