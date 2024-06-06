function timeToText(time) {
  // 1- split text to hour, minute, second [HH:MM:SS to [HH, MM, SS]]
  let [hour, minute, second] = time.split(":");
  let secondText = "";
  let minuteText = "";
  let hourText = "";
  
  // 2- Trim any zeros from the left (e.g. 06 to 6, 01 to 1)
  // 3- Convert each part to integer (after trimming zeros)
  // 4- Parse each component if exists
  if (second) {
    second = second.replace(/^0+/, "");
    second = parseInt(second) || 0;
    secondText = secondToText(second);
  }
  if (minute) {
    minute = minute.replace(/^0+/, "");
    minute = parseInt(minute) || 0;
    minuteText = minuteToText(minute);
  }
  if (hour) {
    hour = hour.replace(/^0+/, "");
    hour = parseInt(hour) || 0;
    hour = minuteText === "إلا ربع" ? hour + 1: hour
    if(hour==13){hour = 1}
    hourText = hourToText(hour);
  }

  // 5- Assemble time and return it
  let timeText = `الساعة ${hourText} ${minuteText}`;
  if (secondText) {
    timeText += ` ${secondText}`;
  }
  return timeText;
}

function secondToText(second) {
  let secondText;
  switch (second) {
    case 0:
      secondText = "وصفر ثواني";
      break;
    case 1:
      secondText = "وثانية";
      break;
    case 2:
      secondText = "وثانيات";
      break;
    default:
      if (second <= 9) {
        secondText = `و${arabicNumbers(second)} ثواني`;
      } else {
        secondText = `و${arabicNumbers(second)} ثانية`;
      }
      break;
  }

  return secondText;
}

function minuteToText(minute) {
  let minuteText;
  switch (minute) {
    case 0:
      minuteText = "تماما";
      break;
    case 1:
      minuteText = "ودقيقة";
      break;
    case 2:
      minuteText = "ودقيقتان";
      break;
    case 10:
      minuteText = "وعشر دقائق";
      break;
    case 15:
      minuteText = "وربع";
      break;
    case 20:
      minuteText = "وثلث";
      break;
    case 30:
      minuteText = "ونصف";
      break;
    case 45:
      minuteText = "إلا ربع";
      break;
    default:
      if (minute <= 9) {
        minuteText = `و${arabicNumbers(minute)} دقائق`;
      } else {
        minuteText = `و${arabicNumbers(minute)} دقيقة`;
      }
      break;
  }
  return minuteText;
}

function hourToText(hour) {
  let hourText;
  switch (hour) {
    case 1:
      hourText = "الواحدة";
      break;
    case 2:
      hourText = "الثانية";
      break;
    case 3:
      hourText = "الثالثة";
      break;
    case 4:
      hourText = "الرابعة";
      break;
    case 5:
      hourText = "الخامسة";
      break;
    case 6:
      hourText = "السادسة";
      break;
    case 7:
      hourText = "السابعة";
      break;
    case 8:
      hourText = "الثامنة";
      break;
    case 9:
      hourText = "التاسعة";
      break;
    case 10:
      hourText = "العاشرة";
      break;
    case 11:
      hourText = "الحادية عشر";
      break;
    case 12:
    case 0:
      hourText = "الثانية عشر";
      break;
  }
  return hourText;
}

function arabicNumbers(index) {
  const arabicNumbers = [
    "",
    "",
    "",
    "ثلاثة",
    "أربعة",
    "خمسة",
    "ستة",
    "سبعة",
    "ثمانية",
    "تسعة",
    "عشرة",
    "أحد عشر",
    "اثنا عشر",
    "ثلاثة عشر",
    "أربعة عشر",
    "خمسة عشر",
    "ستة عشر",
    "سبعة عشر",
    "ثمانية عشر",
    "تسعة عشر",
    "عشرون",
    "واحد وعشرون",
    "اثنان وعشرون",
    "ثلاثة وعشرون",
    "أربعة وعشرون",
    "خمسة وعشرون",
    "ستة وعشرون",
    "سبعة وعشرون",
    "ثمانية وعشرون",
    "تسعة وعشرون",
    "ثلاثون",
    "واحد وثلاثون",
    "اثنان وثلاثون",
    "ثلاثة وثلاثون",
    "أربعة وثلاثون",
    "خمسة وثلاثون",
    "ستة وثلاثون",
    "سبعة وثلاثون",
    "ثمانية وثلاثون",
    "تسعة وثلاثون",
    "أربعون",
    "واحد وأربعون",
    "اثنان وأربعون",
    "ثلاثة وأربعون",
    "أربعة وأربعون",
    "خمسة وأربعون",
    "ستة وأربعون",
    "سبعة وأربعون",
    "ثمانية وأربعون",
    "تسعة وأربعون",
    "خمسون",
    "واحد وخمسون",
    "اثنان وخمسون",
    "ثلاثة وخمسون",
    "أربعة وخمسون",
    "خمسة وخمسون",
    "ستة وخمسون",
    "سبعة وخمسون",
    "ثمانية وخمسون",
    "تسعة وخمسون",
    "ستون",
  ];

  return arabicNumbers[index];
}

module.exports = {
  timeToText,
};

