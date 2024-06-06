# <img src="https://i.ibb.co/vjK3LTk/tern-1.png" alt="Logo" width="120" height="120" style="border-radius: 50%;"> arabic-helper
This library provides essential functionalities tailored for Arabic JavaScript developers, specifically designed to streamline common Arabic-related operations.

### Functions

#### timeToText.twelveSystem(time)
This function converts time in the 12-hour format (with optional AM/PM) to its Arabic text representation.

- **Parameters**:
  - `time`: A string representing the time in HH:MM:SS AM/PM format, where the seconds are optional.
- **Returns**:
  - A string representing the time in Arabic text.

#### timeToText.twentyfourSystem(time, [daytime=false])
This function converts time in the 24-hour format to its Arabic text representation, optionally including period-specific phrases (morning, afternoon, evening).

- **Parameters**:
  - `time`: A string representing the time in HH:MM:SS format, where the seconds are optional.
  - `daytime`: A boolean indicating whether to include period-specific phrases (default is `false`).
- **Returns**:
  - A string representing the time in Arabic text.

### Example Usage

```javascript
const arabicHelper = require('arabic-helper');

console.log(arabicHelper.timeToText.twelveSystem("12:00:00PM"));   // Output: الساعة الثانية عشر تماما وصفر ثواني مساءً
console.log(arabicHelper.timeToText.twelveSystem("03:30:45PM"));   // Output: الساعة الثالثة ونصف وخمسة وأربعون ثانية مساءً
console.log(arabicHelper.timeToText.twentyfourSystem("12:00", daytime=true));   // Output: الساعة الثانية عشرة تماما ظهراً
console.log(arabicHelper.timeToText.twentyfourSystem("07:15:00"));   // Output: الساعة السابعة وربع وصفر ثواني مساءً
console.log(arabicHelper.timeToText.twentyfourSystem("15:30:45"));   // Output: الساعة الخامسة عشرة ونصف وخمسة وأربعون ثانية مساءً

