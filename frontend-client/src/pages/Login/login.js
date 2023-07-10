import styles from '../global.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

	return (
		<main>
			<div className={styles.center_modal}>
				<form>
					<div>
						<input className={styles.input_login} type='email' placeholder='Insert your email'></input>
					</div>
					<div>
						<input className={styles.input_login} type='password'></input>
					</div>
					
					{/* TODO: Remove this bad-styling quick-needed-conclusion-hackathon-all-by-myself practice */}
					<><br></br></>
					&nbsp;&nbsp;&nbsp;
					
					<Link to={'/list/loan'}>
						<button className={styles.rect_action_button}>Log In</button>
					</Link>
				</form>
			<div>
				
			</div>
			</div>
		</main>
  );

}