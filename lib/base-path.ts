const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const BASE_PATH = raw.endsWith("/") && raw.length > 1 ? raw.slice(0, -1) : raw;

export function withBase(path: string) {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:") ||
    path.startsWith("#") ||
    path.startsWith("//")
  ) {
    return path;
  }

  const [beforeHash, hash] = path.split("#");
  const [pathnameRaw, search] = beforeHash.split("?");
  let pathname = pathnameRaw.startsWith("/") ? pathnameRaw : `/${pathnameRaw}`;

  if (BASE_PATH && (pathname === BASE_PATH || pathname.startsWith(`${BASE_PATH}/`))) {
    return `${pathname}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
  }

  const last = pathname.split("/").pop() ?? "";
  if (pathname !== "/" && !pathname.endsWith("/") && !last.includes(".")) {
    pathname += "/";
  }

  return `${BASE_PATH}${pathname}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}
