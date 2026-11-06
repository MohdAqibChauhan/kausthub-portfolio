// Test the countdown calculation logic
function getTimeUntilNextDay() {
  const now = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const currentDayIndex = now.getDay();
  const nextDayIndex = (currentDayIndex + 1) % 7;
  const nextDayName = dayNames[nextDayIndex];
  const currentDayLetter = dayLetters[currentDayIndex];

  // Midnight of next day
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const diffMs = tomorrow.getTime() - now.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours: diffHours,
    minutes: diffMins,
    nextDayName,
    currentDayLetter,
    text: `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} until ${nextDayName}`
  };
}

console.log(getTimeUntilNextDay());
