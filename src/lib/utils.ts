import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function onBuy() {
  if ((window as any)?.fbq) {
    (window as any).fbq("track", "InitiateCheckout");
  }
  window.location.href = "https://pay.cakto.com.br/39h99uu_639125";
}
