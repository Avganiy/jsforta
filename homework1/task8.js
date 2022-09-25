// task 8
function timeCalculations() {
  const second = 1;
  const secondsInMinute = 60 * second;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;

  const currentDate = new Date();
  const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const secondsInCurrentMonth = daysInCurrentMonth * secondsInDay;

  alert(`
    Hour contains ${secondsInHour} seconds.
    Day contains ${secondsInDay} seconds.
    30-days month contains ${secondsInMonth} seconds.
    Current month contains ${secondsInCurrentMonth} seconds.`);
}