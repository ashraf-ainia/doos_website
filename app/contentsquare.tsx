"use client";

import { useEffect } from "react";
import { injectContentsquareScript } from "@contentsquare/tag-sdk";

export function Contentsquare() {
  useEffect(() => {
    injectContentsquareScript({ clientId: "3eeeeeb4ad556" });
  }, []);

  return null;
}
