import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object into a regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number whith decimal placec
export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// format Error Functions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  // Normalize Zod errors (supports both issues[] and flatten formats)
  if (error?.name === "ZodError" || Array.isArray(error?.issues)) {
    if (Array.isArray(error?.issues)) {
      return error.issues
        .map((issue: { message: string }) => issue.message)
        .join(". ");
    }
    if (typeof error?.flatten === "function") {
      const { fieldErrors, formErrors } = error.flatten();
      const messages = [
        ...Object.values(fieldErrors || {}).flat(),
        ...(formErrors || []),
      ].filter(Boolean) as string[];
      if (messages.length > 0) return messages.join(". ");
    }
    if (Array.isArray(error?.errors)) {
      return error.errors.map((e: { message: string }) => e.message).join(". ");
    }
  } else if (
    error?.name === "PrismaClientKnownRequestError" &&
    error?.code === "P2002"
  ) {
    // Handle Prisma Error
    const target = Array.isArray(error?.meta?.target)
      ? error.meta.target[0]
      : error?.meta?.target;
    const field =
      typeof target === "string" && target.length > 0 ? target : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`;
  } else {
    // Habdle other Errors
    if (typeof error?.message === "string") return error.message;
    try {
      return JSON.stringify(error);
    } catch {
      return "Unknown error";
    }
  }
}

// Round number to 2 decimal places
export function round2(value: number | string) {
  if (typeof value === "number") {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  } else if (typeof value === "string") {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error("Value is not a number or string");
  }
}

// cureency formater
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 2,
});

// formater cureency usnig the formatter above
export function formatCurrency(amount: number | string | null) {
  if (typeof amount === "number") {
    return CURRENCY_FORMATTER.format(amount);
  } else if (typeof amount === "string") {
    return CURRENCY_FORMATTER.format(Number(amount));
  } else {
    return "NaN";
  }
}

// Format Number
const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}

// Shourten UUID
export function formatId(id: string) {
  return `...${id.substring(id.length - 6)}`;
}

// Format date and times
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );
  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );
  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );
  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

// form the pagination
export function formUrlQuery({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string | null;
}) {
  const query = qs.parse(params);

  query[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query,
    },
    {
      skipNull: true,
    }
  );
}
