export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const getCurrentDay = () => {
  return new Date().getDate();
};

export const getCurrentMonth = () => {
  return new Date().getMonth();
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
