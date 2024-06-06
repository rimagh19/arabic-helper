# <img src="https://i.ibb.co/vjK3LTk/tern-1.png" alt="Logo" width="120" height="120" style="border-radius: 50%;"> arabic-helper
This library provides essential functionalities tailored for Arabic JavaScript developers, specifically designed to streamline common Arabic-related operations.

### Functions

#### timeToText.twelveSystem(time)
This function converts time in the 12-hour format (with optional AM/PM) to its Arabic text representation.

- **Parameters**:
  - `time`: A string representing the time in HH:MM:SS AM/PM format.
- **Returns**:
  - A string representing the time in Arabic text.

#### timeToText.twentyfourSystem(time, [daytime=false])
This function converts time in the 24-hour format to its Arabic text representation, optionally including period-specific phrases (morning, afternoon, evening).

- **Parameters**:
  - `time`: A string representing the time in HH:MM:SS format.
  - `daytime`: A boolean indicating whether to include period-specific phrases (default is `false`).
- **Returns**:
  - A string representing the time in Arabic text.

### Example Usage

```javascript
const { timeToText } = require('arabic-helper');

console.log(timeToText.twelveSystem('7:45 AM')); 
// Output: الساعة السابعة وخمسة وأربعون دقيقة صباحاً

console.log(timeToText.twelveSystem('2:01 PM'));    
// Output: الساعة الثانية ودقيقة مساءً

console.log(timeToText.twentyfourSystem('15:30:45', true)); 
// Output: الساعة الثالثة والنصف وخمس وأربعون ثانية عصراً

console.log(timeToText.twentyfourSystem('10:20', true));    
// Output: الساعة العاشرة وعشرون دقيقة صباحاً

console.log(timeToText.twentyfourSystem('19:06:14'));     
// Output: الساعة السابعة وست دقائق وأربع عشرة ثانية مساءً
