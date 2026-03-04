const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
  Input date of the form YYYY-MM-DD
  Output month as e.g. "Sep" or "Oct"
*/
function month(inputDate) {
  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  return month;
}

/**
  Input date of the form YYYY-MM-DD
  Output day as e.g. "9" or "12"
*/
function day(inputDate) {
  const date = new Date(inputDate);
  return date.getDate();
}

function year(inputDate) {
  const date = new Date(inputDate);
  return date.getFullYear();
}

export function formatDateString(inputDate) {
  const date = new Date(inputDate);
  return `${fullMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
