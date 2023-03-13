/* eslint-disable react/no-unescaped-entities */
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { dayActivities } from "@/lib/dayActivities"
import Image from "next/image"
import prog from "public/img/weekActivities/programmeur.png"

export default function WeekCalendar() {
	dayjs.locale("fr")
	const today = dayjs().day()
	const dayInFrench = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
	const [hourValue, setHourValue] = useState(dayjs().hour())
	const [selectedDay, setSelectedDay] = useState(today - 1)
	const [selectedActivity, setSelectedActivity] = useState({})

	useEffect(() => {
		setSelectedActivity(getDayActivity(selectedDay))
	}, [selectedDay, hourValue])

	function getDateOfDay(index: number) {
		// La semaine anglaise commence le dimanche donc mon index 0 qui ets pour moi le lundi
		// est le dimanche dans le code, j'ajoute donc 1 à l'index pour retomber sur le bon jour
		return dayjs()
			.day(index + 1)
			.date()
	}

	function isDaySelected(index: number) {
		return selectedDay === index
	}

	function getDayActivity(day: number) {
		switch (day) {
		case 2: {
			return getWednesdayActivity()
		}
		case 4: {
			return getFridayActivity()
		}
		case 5: {
			return getSaturdayActivity()
		}
		case 6: {
			return getSundayActivity()
		}
		case 0:
		case 1:
		case 3:
		default: {
			return getNormalDayActivity()
		}
		}
	}

	function getNormalDayActivity() {
		if (hourValue >= 12 && hourValue < 14) {
			return dayActivities.meal
		}

		if (hourValue >= 9 && hourValue < 18) {
			return dayActivities.work
		}

		if (hourValue >= 7 && hourValue < 9) {
			return dayActivities.morningRouting
		}

		if (hourValue < 7 || hourValue >= 23) {
			return dayActivities.sleep
		}

		if (hourValue > 17 && hourValue < 23) {
			return dayActivities.endOfDay
		}
		return dayActivities.other
	}

	function getWednesdayActivity() {
		if (hourValue >= 20 && hourValue < 22) {
			return dayActivities.hand
		} else {
			return getNormalDayActivity()
		}
	}

	function getFridayActivity() {
		if (hourValue >= 19 && hourValue < 21) {
			return dayActivities.hand
		} else {
			return getNormalDayActivity()
		}
	}

	function getSaturdayActivity() {
		if (hourValue < 8 || hourValue >= 23) {
			return dayActivities.sleep
		}
		if (hourValue >= 8 && hourValue < 10) {
			return dayActivities.morningRouting
		}
		if (hourValue >= 10 && hourValue < 13) {
			return dayActivities.handGirls
		}
		if (hourValue >= 13 && hourValue < 14) {
			return dayActivities.meal
		}
		if (hourValue >= 14 && hourValue < 19) {
			return dayActivities.handMatch
		}

		return dayActivities.other
	}

	function getSundayActivity() {
		if (hourValue < 10 || hourValue >= 22) {
			return dayActivities.sleep
		} else {
			return dayActivities.other
		}
	}

	return (
		<div className="lg:flex lg:flex-col lg:justify-center items-center">
			<div className="lg:w-1/2">
				<div className="flex justify-around pb-5">
					{dayInFrench.map((day, index) => (
						<button
							key={day}
							className={`flex flex-col items-center px-2 py-3 rounded-lg ${isDaySelected(index) ? "bg-primary-blue text-white" : ""
							}`}
							onClick={() => setSelectedDay(index)}
						>
							<p>{day}.</p>
							<p>{getDateOfDay(index)}</p>
						</button>
					))}
				</div>
				<div>
					<input
						id="default-range"
						type="range"
						className="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						onChange={e => setHourValue(+e.target.value)}
						value={hourValue}
						min={1}
						max={24}
					/>
					<div className="flex justify-center items-center pt-4">
						<div className="flex flex-col items-center w-1/2">
							<p className="text-5xl font-bold pb-4">
								<span className="text-primary-blue">{hourValue}</span>h
							</p>
							<p >{selectedActivity.description}</p>
						</div>
						<div className="w-1/2">
							<Image src={selectedActivity.icon} alt={"activity"}></Image>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
