/*
 * CODERBYTE COUNTING MINUTES ONE CHALLENGE
 *
 * Problem Statement
 * Have the function CountingMinutes(str) take the str
 * parameter being passed which will be two times
 * (each properly formatted with a colon and am or pm)
 * separated by a hyphen and return the total number of minutes
 * between the two times. The time will be in a 12 hour clock
 * format.
 * For example: if str is 9:00am-10:00am then the
 * output should be 60. If str is 1:00pm-11:00am the output
 * should be 1320.
 *
 * Examples
 * Input 1: "12:30pm-12:00am"
 * Output 1: 690
 *
 * Input 2: "1:23am-1:08am"
 * Output 2: 1425
 *
 */

function CountingMinutes(str) {
  const [time1, time2] = str.split('-');

  const getPastMinutes = (time) => {
    const [hours, minutes] = time.slice(0, -2).split(':').map(Number);
    const period = time.slice(-2);

    if (period === 'am') {
      return hours !== 12 ? hours * 60 + minutes : minutes;
    }

    // period === 'pm'
    const allAmMinutes = 60 * 12;
    return hours !== 12
      ? hours * 60 + minutes + allAmMinutes
      : minutes + allAmMinutes;
  };

  const allDayMinutes = 60 * 24;

  const pastMinutes1 = getPastMinutes(time1);
  const pastMinutes2 = getPastMinutes(time2);
  return pastMinutes2 > pastMinutes1
    ? pastMinutes2 - pastMinutes1
    : allDayMinutes - pastMinutes1 + pastMinutes2;
}

// Test cases
console.log(CountingMinutes('9:00am-10:00am')); // Output: 60
console.log(CountingMinutes('9:00am-12:00pm')); // Output: 180
console.log(CountingMinutes('12:00pm-12:00am')); // Output: 720
console.log(CountingMinutes('12:30pm-12:00am')); // Output: 690
console.log(CountingMinutes('1:23am-1:08am')); // Output: 1425
