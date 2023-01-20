import dayjs from 'dayjs'

// função que gera todas as datas do ano, do dia primeiro ao último
export function generateDatesFromYearBeginning() {
	const firstDayOfTheYear = dayjs().startOf('year')
	const today = new Date()

	const dates = []
	let compareDate = firstDayOfTheYear

	// enquanto a data for anterior ao dia atual, inclur 1 dia a cada iteração
	while (compareDate.isBefore(today)) {
		dates.push(compareDate.toDate())
		compareDate = compareDate.add(1, 'day')
	}

	return dates
}
