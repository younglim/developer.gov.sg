export function getCompareDate() {
  // gets local time, sg / kl timing
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("");
}

export function getEventDataByDate(date, element) {
  switch (true) {
    case date < getCompareDate():
      element.setAttribute("data-event-status", "past-event");
      return { status: "past", backgroundColor: "#323232" };
    case date == getCompareDate():
      element.setAttribute("data-event-status", "upcoming-event");
      return { status: "now", backgroundColor: "#D0021B" };
    default:
      element.setAttribute("data-event-status", "upcoming-event");
      return { status: "upcoming", backgroundColor: "#0161AF" };
  }
}
