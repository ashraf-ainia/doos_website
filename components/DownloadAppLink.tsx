"use client";

import type { MouseEvent, ReactNode } from "react";
import { detectMobilePlatform, storeUrlFor } from "@/lib/appLinks";

type DownloadAppLinkProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Renders as a plain link to the #download section (works without JS and on
 * desktop). On a phone/tablet it sends the user straight to the matching store.
 */
export default function DownloadAppLink({
  className,
  children,
}: DownloadAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const storeUrl = storeUrlFor(detectMobilePlatform());
    if (!storeUrl) return;

    event.preventDefault();
    window.location.href = storeUrl;
  }

  return (
    <a className={className} href="#download" onClick={handleClick}>
      {children}
    </a>
  );
}
