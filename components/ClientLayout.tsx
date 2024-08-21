"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
};

export default ClientLayout;
