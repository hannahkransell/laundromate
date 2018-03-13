import moment from 'moment'

export function getDateOfWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7)
    var dow = simple.getDay()
    var ISOweekStart = simple
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1)
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay())
    return ISOweekStart
}

export function getWeek(date) {
  var date = new Date(date.getTime())
  date.setHours(0, 0, 0, 0)
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4)
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

export function addDays(date, days) {
	const dat = new Date(date.valueOf())
	dat.setDate(dat.getDate()+days)

	return dat
}

export function getDateString(date) {
	// Or toISOString or toUTCstring etc
	return moment(date).format('YYYY-MM-DD')

}