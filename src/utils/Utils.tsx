import moment, { Duration } from "moment";

export const getAge = (date: string): number => {
  const today = new Date();
  const birthday = new Date(date);
  const diff = new Date(today.getTime() - birthday.getTime());

  const epoch = new Date(0);

  return Math.abs(diff.getUTCFullYear() - epoch.getUTCFullYear());
};

export function formatDateMonthYear(date: Date) {
  return moment(date).format("MMMM YYYY");
}

export function formatDurationMonthYear(dateFrom: Date, dateTo: Date): string {
  const duration: Duration = moment.duration(
    moment(dateTo).diff(moment(dateFrom)),
  );
  const years = duration.years();
  const months = duration.months();
  let str = "";
  str += years;
  if (years > 1) {
    str += " ans";
  } else {
    str += " an";
  }
  if (months > 0) {
    str += " et " + months + " mois";
  }
  return str;
}

const ISODateFormat = /^\d{4}-\d{2}-\d{2}?$/;

const isIsoDateString = (value: unknown): value is string => {
  return typeof value === "string" && ISODateFormat.test(value);
};

export const handleDates = (data: unknown) => {
  if (isIsoDateString(data)) return new Date(data);
  if (data === null || data === undefined || typeof data !== "object")
    return data;

  for (const [key, val] of Object.entries(data)) {
    // @ts-expect-error this is a hack to make the type checker happy
    if (isIsoDateString(val)) data[key] = new Date(val);
    else if (typeof val === "object") handleDates(val);
  }

  return data;
};
