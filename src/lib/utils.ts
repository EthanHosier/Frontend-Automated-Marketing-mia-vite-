import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function isValidUrl(urlString: string): boolean {
  try {
    new URL(urlString);
    return true;
  } catch (_) {
    return false;
  }
}

export function isUrl(value: string): string {
  if (
    value.substring(0, 4) === "http://" ||
    value.substring(0, 5) === "https://"
  ) {
    return isValidUrl(value) ? value : "";
  }

  const newUrl = "https://" + value;
  return isValidUrl(newUrl) ? newUrl : "";
}

export function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .splice(0, 2)
    .join("");
}
