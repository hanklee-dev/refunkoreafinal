// File: global.d.ts
import React from "react";
import { AppProps } from "next/app";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module "react-tsparticles";
declare module "tsparticles-engine";
