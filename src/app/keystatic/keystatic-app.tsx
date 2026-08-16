"use client";

import { makePage } from "@keystatic/next/ui/app";

import keystaticConfig from "../../../keystatic.config";

/** Ceo admin je jedna klijentska aplikacija — otuda "use client" na ovom mestu. */
export default makePage(keystaticConfig);
