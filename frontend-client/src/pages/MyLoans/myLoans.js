import React from 'react';
import styles from '../global.module.css';
import { Link } from 'react-router-dom';
import Loan from '../../components/Loan/loan';
import logo from '../../assets/Logo.png';

export default function MyLoan() {
	const fake_loans = [
		{
			id: 1,
			startDate: '01/01/2021',
			endDate: '31/12/2023',
			value: 'BRL$1000.00',
			interestRate: '10%',
			totalQuotes: 20,
			quotesPayed: 5
		},
		{
			id: 2,
			startDate: '01/01/2022',
			endDate: '31/12/2025',
			value: 'ARS$700.000.00',
			interestRate: '30%',
			totalQuotes: 25,
			quotesPayed: 2
		},
		{
			id: 3,
			startDate: '01/01/2023',
			endDate: '31/12/2027',
			value: 'USD$1500.00',
			interestRate: '8%',
			totalQuotes: 40,
			quotesPayed: 5
		}
	];

	return(
		<>
		
		<div className={styles.header}>
			<img src={logo} alt="qApp" width={'56px'} height={'56px'} className={styles.round_logo}/>
			<div className={styles.header_links}>
				<Link to={'/new/loan'} style={{ textDecoration: 'none' }}>
					<a href='/' className={styles.cta_text_black}>New Loan</a>
				</Link>
			</div>
			<Link to={'/logout'}>
				<button className={styles.rect_action_button}>
					Log out
				</button>
			</Link>
		</div>

		<div className={styles.call_to_action}>
			<div className={styles.customer_comment}>
				{Loan(fake_loans[0])}
			</div>

			<div className={styles.customer_comment}>
				{Loan(fake_loans[1])}
			</div>

			<div className={styles.customer_comment}>
				{Loan(fake_loans[2])}
			</div>
		</div>
		</>
	)
}
