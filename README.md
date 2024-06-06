## arabic-helper

This library provides essential functionalities tailored for Arabic JavaScript developers, specifically designed to streamline common Arabic-related operations.

### Functions
#### `timeToText(time)`

This function takes a time string in the format HH:MM:SS and returns the Arabic text representation of the time.

- **Parameters:**
  - `time`: A string representing the time in HH:MM:SS format.
- **Returns:**
  - A string representing the time in Arabic text.

#### `timeToText(time)`

This function converts time in HH:MM:SS format to Arabic text.

- **Parameters:**
  - `time`: A string representing the time in HH:MM:SS format.
- **Returns:**
  - A string representing the time in Arabic text.

### Example Usage

```javascript
const { arabicHelper } = require('arabic-helper');

console.log(arabicHelper.timeToText('15:30:45')); // Output: الساعة الثالثة والنصف وخمسة وأربعون ثانية
console.log(arabicHelper.timeToText('10:20'));    // Output: الساعة العاشرة وعشرون دقيقة
console.log(arabicHelper.timeToText('2:01'));     // Output: الساعة الثانية ودقيقة
