import styles from './Loader.module.scss';

export default function Loader() {
	return (
		<>
			<div className={styles.ripple1}></div>
			<div className={styles.ripple2}></div>
			<div className={styles.ripple3}></div>
		</>
	);
}
