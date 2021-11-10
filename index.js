export function getDay() {
	const today = new Date();
	const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return daysArr[today.getDay()];
}
const day = document.querySelector('.today');
day.innerHTML = getDay();