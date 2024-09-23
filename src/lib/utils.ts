import FacebookRound from "/assets/social-media-icons/facebook-round.png";
import InstagramRound from "/assets/social-media-icons/instagram-round.png";
import LinkedInRound from "/assets/social-media-icons/linkedIn-round.png";
import TwitterXRound from "/assets/social-media-icons/twitter-x-round.png";
import WhatsAppRound from "/assets/social-media-icons/whatsapp-round.png";

import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function isValidUrl(url: string): boolean {
  console.log(url);
  // Regular expression pattern to match the URL requirements
  return true;
}

export function isUrl(value: string): string {
  if (
    value.substring(0, 7) === "http://" ||
    value.substring(0, 8) === "https://"
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

export const socialMediaIcon = (platform: SocialMediaPlatform) => {
  switch (platform) {
    case "instagram":
      return InstagramRound;
    case "linkedIn":
      return LinkedInRound;
    case "twitter-x":
      return TwitterXRound;
    case "facebook":
      return FacebookRound;
    case "whatsapp":
      return WhatsAppRound;
  }
};

export function toTitleCase(str: string): string {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string into words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
    )
    .join(" "); // Join the words back into a single string
}
