const getDate = () => {
  return new Date();
}

const greetUserByDayTime = (userName, currentDate) => {
  const currentHour = currentDate.getHours();

  const morningStart = 5;
  const dayStart = 11;
  const eveningStart = 17;
  const nightStart = 23;

  if (currentHour >= morningStart && currentHour < dayStart) {
    return `Good morning, ${userName}! It's ${currentHour} o'clock`;
  } else if (currentHour >= dayStart && currentHour < eveningStart) {
    return `Good day, ${userName}! It's ${currentHour} o'clock`;
  } else if (currentHour >= eveningStart && currentHour < nightStart) {
    return `Good evening, ${userName}! It's ${currentHour} o'clock`;
  } else if (currentHour >= nightStart && currentHour < morningStart) {
    return `Good night, ${userName}! It's ${currentHour} o'clock`;
  }
}

module.exports.greetUserByDayTime = greetUserByDayTime;
module.exports.getDate = getDate;