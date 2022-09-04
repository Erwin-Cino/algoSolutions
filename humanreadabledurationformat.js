function formatDuration (seconds) {
    // Complete this function
    if (!seconds) return 'now'
    let year = 0;
    let day = 0;
    let hour = 0;
    let minute = 0;
    const stringBuilder = (d,l) => `${d} ${d > 1 ? l + 's' : l}`;
    const durationArr = [];
    if (seconds >= 3600) {
      hour = Math.floor(seconds / 3600);
      seconds = seconds - (hour * 3600);
    }
    if (hour >= 24) {
      day = Math.floor(hour / 24)
      hour = hour - (day * 24)
    }
    if (day >= 365) {
      year = Math.floor(day / 365)
      day = day - (year * 365)
    }
    if (seconds >= 60) {
      minute = Math.floor(seconds / 60)
      seconds = seconds - (minute * 60)
    }
    if (year) durationArr.push(stringBuilder(year, 'year'));
    if (day) durationArr.push(stringBuilder(day, 'day'));
    if (hour) durationArr.push(stringBuilder(hour, 'hour'));
    if (minute) durationArr.push(stringBuilder(minute, 'minute'));
    if (seconds) durationArr.push(stringBuilder(seconds, 'second'));
    if (durationArr.length > 1) {
      const lastDuration = durationArr.pop();
      const output = durationArr.join(', ') + ' and ' + lastDuration;
      return output;
    } else {
      console.log(durationArr[0]) 
      return durationArr[0]
    }
  }

  console.log(formatDuration(360000))
  