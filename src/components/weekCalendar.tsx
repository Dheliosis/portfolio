import dayjs from "dayjs"

export default function WeekCalendar() {
	dayjs.locale("fr")
	const firstDayOfWeek = dayjs().day(1).format("D")
	const today = dayjs().day()
	const dayInFrench = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

	function getDateOfDay(index: number) {
		return parseInt(firstDayOfWeek) + index
	}

	function isToday(index: number) {
		// La semaine commence un dimanche, donc pour commencer un lundi on retir -1 à today pour afficher le bon jour
		return index === today - 1
	}
	return (
		<>
			<div className="flex justify-around">
				{dayInFrench.map((day, index) => (
					<div
						key={day}
						className={`flex flex-col items-center px-2 py-3 rounded-lg ${
							isToday(index) ? "bg-primary-blue text-white" : ""
						}`}
					>
						<p>{day}.</p>
						<p>{getDateOfDay(index)}</p>
					</div>
				))}
			</div>
		</>
	)
}
