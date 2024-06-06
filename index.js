const {
  hourToText12,
  hourToText24,
  minuteToText,
  secondToText,
} = require("./convertHelpers");

const timeToText = {
  twelveSystem: (time) => {
    try {
      const [hour, minute, second, meridiem] = time
        .match(/(\d{1,2}):(\d{1,2}):?(\d{1,2})?\s*([AP]M)?/i)
        .slice(1);
      const meridiemText =
        meridiem === "PM" ? " مساءً" : meridiem === "AM" ? " صباحاً" : "";
      const secondText = second
        ? ` ${secondToText(parseInt(second) || 0)}`
        : "";
      const minuteText = ` ${minuteToText(
        parseInt(minute.replace(/^0+/, "")) || 0
      )}`;
      const newHour = minuteText.includes("إلا ربع")
        ? parseInt(hour) + 1
        : parseInt(hour);
      const hourText = `${hourToText12(newHour)}`;

      const timeText = `الساعة ${hourText}${minuteText}${secondText}${meridiemText}`;
      return timeText.trim();
    } catch (e) {
      return e;
    }
  },
  twentyfourSystem: (time, daytime = false) => {
    try {
      const [hour, minute, second, meridiem] = time
        .match(/(\d{1,2}):(\d{1,2}):?(\d{1,2})?\s*([AP]M)?/i)
        .slice(1);
      const secondText = second
        ? ` ${secondToText(parseInt(second) || 0)}`
        : "";
      const minuteText = ` ${minuteToText(
        parseInt(minute.replace(/^0+/, "")) || 0
      )}`;
      const newHour = minuteText.includes("إلا ربع")
        ? parseInt(hour) + 1
        : parseInt(hour);
      const hourText = `${hourToText24(newHour)}`;

      let meridiemText;
      if (daytime) {
        if (hour == 24 || hour < 12) {
          meridiemText = " صباحاً";
        } else if (hour === 12) {
          meridiemText = " ظهراً";
        } else if (hour >= 12 && hour < 16) {
          meridiemText = " ظهراً";
        } else if (hour >= 16 && hour < 19) {
          meridiemText = " عصراً";
        } else {
          meridiemText = " مساءً";
        }
      } else {
        if (hour >= 24 && hour < 12) {
          meridiemText = " صباحاً";
        } else {
          meridiemText = " مساءً";
        }
      }
      const timeText = `الساعة ${hourText}${minuteText}${secondText}${meridiemText}`;
      return timeText.trim();
    } catch (e) {
      return e;
    }
  },
};

module.exports = {
  timeToText,
};
console.log(timeToText.twentyfourSystem("15:45:14", daytime=true));
