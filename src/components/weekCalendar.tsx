/* eslint-disable react/no-unescaped-entities */
import dayjs from "dayjs"
import { useState } from "react"

export default function WeekCalendar() {
	dayjs.locale("fr")
	const firstDayOfWeek = dayjs().day(1).format("D")
	const today = dayjs().day()
	const dayInFrench = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
	const [hourValue, setHourValue] = useState(dayjs().hour())

	function getDateOfDay(index: number) {
		return parseInt(firstDayOfWeek) + index
	}

	function isToday(index: number) {
		// La semaine commence un dimanche, donc pour commencer un lundi on retire -1 à today pour afficher le bon jour
		return index === today - 1
	}

	function getDayDescription() {
		switch (today) {
			case 0: {
				return sundayDescription()
			}
			case 1: {
				return normalDayDescription()
			}
			case 2: {
				return normalDayDescription()
			}
			case 3: {
				return wednesdayDescription()
			}
			case 4: {
				return normalDayDescription()
			}
			case 5: {
				return fridayDescription()
			}
			case 6: {
				return satudayDescription()
			}
		}
	}


	function normalDayDescription() {
		if (hourValue >= 12 && hourValue < 14) {
			return <p> Le midi c'est sacré, je prends mon déjeuner.</p>
		}

		if (hourValue >= 9 && hourValue < 18) {
			return <p> Je travaille, la tête plongée dans des lignes de code.</p>
		}

		if (hourValue >= 7 && hourValue < 9) {
			return <p>Il est l'heure de se préparer pour la journée.</p>
		}

		if (hourValue < 7 || hourValue >= 23) {
			return <p> Au vu de l'heure, je dors.</p>
		}

		if (hourValue > 17 && hourValue < 23) {
			return (
				<p>
					C'est le moment de lancer la console, prendre un livre ou se balader
					en ville.
				</p>
			)
		}
		return undefined
	}

	function wednesdayDescription() {
		if(hourValue >=20 && hourValue <22){
			return <p>Je suis actuellement en train de m'entrainer sur un terrain de hand</p>
		} else {
			return normalDayDescription()
		}
	}

	function fridayDescription() {
		if(hourValue >=19 && hourValue <21){
			return <p>Je suis actuellement en train de m'entrainer sur un terrain de hand</p>
		} else {
			return normalDayDescription()
		}
	}

	function satudayDescription() {
		return <p> Aujourd'hui c'est samedi</p>
	}

	function sundayDescription() {
		return <p> Aujourd'hui c'est dimanche</p>
	}

	return (
		<div>
			<div className="flex justify-around pb-5">
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
			<div>
				<input
					id="default-range"
					type="range"
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
					onChange={e => setHourValue(+e.target.value)}
					value={hourValue}
					min={1}
					max={24}
				/>
				{hourValue}
			</div>
			<div>{getDayDescription()}</div>
		</div>
	)
}
