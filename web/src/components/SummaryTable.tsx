/* map: gera uma div para cada um dos dias da semana */
/* mostra os dias não preenchidos a partir de uma iteração baseada na constante que carrega os dias do ano gerados */
// chave: weekday-índice

import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'

// array dos dias da semana
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

// atribui a as datas do ano geradas a uma constatne
const summaryDates = generateDatesFromYearBeginning()

// mínimo de dias mostrados em tela
const minimumSummaryDatesSize = 18 * 7 // 18 weeks

// dias preenchidos mostrados em tela
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
	return (
		<div className="w-full flex">
			<div className="grid grid-rows-7 grid-flow-row gap-3">
				{weekDays.map((weekDay, i) => {
					return (
						<div
							key={`${weekDay}-${i}`}
							className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
						>
							{weekDay}
						</div>
					)
				})}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summaryDates.map(date => {
					return (
						<HabitDay
							key={date.toString()}
							amount={5}
							completed={Math.round(Math.random() * 5)}
						/>
					)
				})}

				{amountOfDaysToFill > 0 &&
					Array.from({ length: amountOfDaysToFill }).map((_, i) => {
						return (
							<div
								key={i}
								className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
							/>
						)
					})}
			</div>
		</div>
	)
}
