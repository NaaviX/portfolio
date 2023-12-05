import moment from "moment";

export const getAge = (date: string): number => {
  const today = new Date();
  const birthday = new Date(date);
  const diff = new Date(today.getTime() - birthday.getTime());

  const epoch = new Date(0);

  return Math.abs(diff.getUTCFullYear() - epoch.getUTCFullYear());
};

export function formatDateMonthYear(date: Date): string {
  return moment(date).format("MMMM YYYY");
}

export function formatDurationMonthYear(dateFrom: Date, dateTo: Date): string {
  const duration = moment.duration(moment(dateTo).diff(moment(dateFrom)));
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
