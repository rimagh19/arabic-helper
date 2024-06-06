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
      } else if (second <= 60) {
        secondText = `و${arabicNumbers(second)} ثانية`;
      } else {
        throw new Error(
          "Invalid second input, please provide a value between 0 and 60"
        );
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
      minuteText = "والربع";
      break;
    case 20:
      minuteText = "والثلث";
      break;
    case 30:
      minuteText = "والنصف";
      break;
    case 45:
      minuteText = "إلا ربع";
      break;
    default:
      if (minute <= 9) {
        minuteText = `و${arabicNumbers(minute)} دقائق`;
      } else if (minute <= 60) {
        minuteText = `و${arabicNumbers(minute)} دقيقة`;
      } else {
        throw new Error(
          "Invalid minute input, please provide a value between 0 and 60"
        );
      }
      break;
  }
  return minuteText;
}

function hourToText12(hour) {
  let hourText;
  switch (hour) {
    case 1:
    case 13:
      hourText = "الواحدة";
      break;
    case 2:
    case 14:
      hourText = "الثانية";
      break;
    case 3:
    case 15:
      hourText = "الثالثة";
      break;
    case 4:
    case 16:
      hourText = "الرابعة";
      break;
    case 5:
    case 17:
      hourText = "الخامسة";
      break;
    case 6:
    case 18:
      hourText = "السادسة";
      break;
    case 7:
    case 19:
      hourText = "السابعة";
      break;
    case 8:
    case 20:
      hourText = "الثامنة";
      break;
    case 9:
    case 21:
      hourText = "التاسعة";
      break;
    case 10:
    case 22:
      hourText = "العاشرة";
      break;
    case 11:
    case 23:
      hourText = "الحادية عشر";
      break;
    case 12:
    case 0:
    case 24:
      hourText = "الثانية عشر";
      break;
    default:
      throw new Error(
        "Invalid hour input, please provide a value between 0 and 24"
      );
  }
  return hourText;
}
function hourToText24(hour) {
  let hourText;
  switch (hour) {
    case 0:
      hourText = "الثانية عشرة";
      break;
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
      hourText = "الحادية عشرة";
      break;
    case 12:
      hourText = "الثانية عشرة";
      break;
    case 13:
      hourText = "الثالثة عشرة";
      break;
    case 14:
      hourText = "الرابعة عشرة";
      break;
    case 15:
      hourText = "الخامسة عشرة";
      break;
    case 16:
      hourText = "السادسة عشرة";
      break;
    case 17:
      hourText = "السابعة عشرة";
      break;
    case 18:
      hourText = "الثامنة عشرة";
      break;
    case 19:
      hourText = "التاسعة عشرة";
      break;
    case 20:
      hourText = "العشرين";
      break;
    case 21:
      hourText = "الواحدة والعشرين";
      break;
    case 22:
      hourText = "الثانية والعشرين";
      break;
    case 23:
      hourText = "الثالثة والعشرين";
      break;
    case 24:
      hourText = "الرابعة والعشرين";
      break;
    default:
      throw new Error("مدخل الساعة غير صحيح، يرجى تقديم قيمة بين 0 و 24");
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
  secondToText,
  minuteToText,
  hourToText12,
  hourToText24,
};
