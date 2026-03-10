"use client";

import { track } from "@vercel/analytics";
import { ReactNode } from "react";

type TrackLinkProps = {
  href: string;
  eventName?: string;
  label?: string;
  className?: string;
  children: ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function TrackLink({
  href,
  eventName,
  label,
  className,
  children,
  target,
  rel
}: TrackLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => {
        if (eventName) {
          track(eventName, {
            label: label || href
          });
        }
      }}
    >
      {children}
    </a>
  );
}
