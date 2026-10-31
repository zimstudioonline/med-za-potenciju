import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const STEPS = ["Korpa", "Podaci i plaćanje", "Potvrda"] as const;

/**
 * Traka napretka kroz kupovinu: korpa → podaci → potvrda. Kupac vidi koliko
 * mu je ostalo do kraja, što smanjuje odustajanje na formi.
 */
export function CheckoutSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <nav aria-label="Koraci porudžbine" className="mx-auto max-w-xl px-6 pt-10">
      <ol className="flex items-start">
        {STEPS.map((label, index) => {
          const step = index + 1;
          const done = step < current;
          const active = step === current;
          return (
            <li
              key={label}
              aria-current={active ? "step" : undefined}
              className="relative flex flex-1 flex-col items-center"
            >
              {/* Linija ka prethodnom koraku; obojena kada je taj korak prošao. */}
              {index > 0 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-5 right-1/2 h-0.5 w-full -translate-y-1/2",
                    step <= current ? "bg-primary" : "bg-border",
                  )}
                />
              )}
              <span
                className={cn(
                  "relative z-10 flex size-10 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums",
                  done && "border-primary bg-primary text-primary-foreground",
                  active &&
                    "border-primary bg-primary text-primary-foreground ring-4 ring-primary/20",
                  !done &&
                    !active &&
                    "border-border bg-background text-muted-foreground",
                )}
              >
                {done ? <Check className="size-4" aria-hidden /> : step}
                {done && <span className="sr-only">{step}</span>}
              </span>
              <span
                className={cn(
                  "mt-2 text-center text-xs sm:text-sm",
                  active
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
