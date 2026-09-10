"use client";

import { useEffect } from "react";
import { BASE_PATH, withBase } from "@/lib/base-path";

function rewrite(el: Element) {
  if (el instanceof HTMLAnchorElement) {
    const href = el.getAttribute("href");
    if (!href) return;
    const next = withBase(href);
    if (next !== href) el.setAttribute("href", next);
    return;
  }
  if (el instanceof HTMLImageElement) {
    const src = el.getAttribute("src");
    if (!src) return;
    const next = withBase(src);
    if (next !== src) el.setAttribute("src", next);
  }
}

export function BasePathFix() {
  useEffect(() => {
    if (!BASE_PATH) return;

    const scan = (root: ParentNode) => {
      root.querySelectorAll("a[href], img[src]").forEach(rewrite);
    };

    scan(document);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            rewrite(node);
            scan(node);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
