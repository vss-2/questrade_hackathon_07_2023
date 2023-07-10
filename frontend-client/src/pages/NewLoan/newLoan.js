import React from 'react';
import styles from '../global.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

export default function NewLoan() {
	return (
		<>

			<div className={styles.header}>
				<img src={logo} alt="qApp" width={'56px'} height={'56px'} className={styles.round_logo} />
				<div className={styles.header_links}>
					<Link to={'/my_loans'} style={{ textDecoration: 'none' }}>
						<a href='/' className={styles.cta_text_black}>My Loans</a>
					</Link>
				</div>
				<Link to={'/logout'}>
					<button className={styles.rect_action_button}>
						Log out
					</button>
				</Link>
			</div>

			<div className={styles.call_to_action}>
				<h2 className={styles.cta_text_green}>Request a new loan!</h2>
				<div>
					<h4 className={styles.cta_text_green}>Annex your last paycheck</h4>
					<input type='file'></input>
				</div>

				<><br></br></>
				&nbsp;&nbsp;&nbsp;

				<button className={styles.rect_action_button}>Submit to a credit analysis</button>
			</div>
		</>
	)
}
