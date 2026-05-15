"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, unknown>;
  children: ReactNode;
};

/**
 * <a> that fires a GA event on click, then lets the navigation proceed.
 * Used for outbound links and any internal link we want richer params on
 * than the automatic page_view (e.g. attaching a slug).
 */
export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...rest
}: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventParams);
    onClick?.(e);
  }
  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
