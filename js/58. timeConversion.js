// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45


function timeConversion(s) {
  let amPm = s.charAt(8)
  let militaryTime = ''
  let hour = s.substring(0,2)
  if (amPm == 'A' & hour == '12'){
    militaryTime = '00'
  } else if (amPm == 'A' && '01'<=hour<='11'){
    militaryTime = hour
  } else if (amPm == 'P' && hour == '12'){
    militaryTime = hour
  } else if (amPm == 'P' && '01' <= hour < '12'){
    militaryTime = parseInt(hour) + 12
  }
  return militaryTime + s.substring(2,8)
}

console.log(timeConversion('12:30:00PM'))

// 1. 12:00:00AM -> 00:00:00
// 2. 01:00:00AM - 11:00:00AM -> Do nothing
// 3. 12:00:00PM -> Do nothing
// 4. 01:00:00PM - 11:00:00PM -> Add 12 to hour