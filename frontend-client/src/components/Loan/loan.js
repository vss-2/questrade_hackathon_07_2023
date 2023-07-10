
import { Link } from 'react-router-dom';
import styles from '../../pages/global.module.css';

export default function Loan(params) {
	console.log(params)
  return (
		<Link to={`/loan/${params.id}`} style={{ textDecoration: 'none' }} >
			<div>
				<h3 className={styles.h3_no_decoration}>Starting date: {params.startDate}</h3>
				<h3 className={styles.h3_no_decoration}>Ending date: {params.endDate}</h3>
				<h3 className={styles.h3_no_decoration}>Value: {params.value}</h3>
				<h3 className={styles.h3_no_decoration}>Quotes payed / Total Quotes: {params.quotesPayed} / {params.totalQuotes}</h3>
				<h3 className={styles.h3_no_decoration}>Interest Rate: {params.interestRate}</h3>
			</div>
		</Link>
	)
}