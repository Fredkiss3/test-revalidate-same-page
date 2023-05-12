"use client";

import * as React from "react";
import { increment } from "./actions";
import { usePathname } from "next/navigation";

export type CounterProps = {};

export function Counter({}: CounterProps) {
  const path = usePathname();
  return (
    <form>
      {path.includes("/sub") && <input hidden readOnly name="_redirect" />}
      <button formAction={increment}>Increment</button>
    </form>
  );
}
