export function format(date: string): string {
	const months = [
		'Января', 'Февраля', 'Марта', 'Апреля',
		'Мая', 'Июня', 'Июля', 'Августа',
		'Сентября', 'Октября', 'Ноября', 'Декабря'
	];

	const input_time = new Date(date);
	if (isNaN(input_time.getTime())) {
		return "Invalid date format";
	}

	const month = input_time.getMonth();
	const day = input_time.getDate();
	const hours = input_time.getHours();
	const minutes = input_time.getMinutes();

	const formatted_month = months[month];
	const formatted_time = `${day} ${formatted_month}, в ${hours}:${minutes}`;

	return formatted_time;
}

export function between(date1: string, date2: string): number {
    const first_date = new Date(date1);
    const second_date = new Date(date2);

    // Разница в миллисекундах между двумя датами
    const time_difference = second_date.getTime() - first_date.getTime();

    // Преобразование миллисекунд в минуты и округление вниз
    const minutes_difference = Math.floor(time_difference / (1000 * 60));

    return minutes_difference;
}