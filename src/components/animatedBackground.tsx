import styles from "@/styles/animatedBackground.module.css"

interface animatedBackgroundInterface{
	bgColor: string
}
export default function AnimatedBackground({bgColor}: animatedBackgroundInterface) {
	return (
		<>
			<div className={styles.area}>
				<ul className={styles.circles}>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
					<li className={bgColor}></li>
				</ul>
			</div>
		</>
	)
}
