import { v4 as uuidv4 } from 'uuid';

class Contract {

	/**
	 * @description Implements a class object 
	 * similiar to what is stored in database.
	 * @param {number} Loan 
	 * @param {number} InterestRate 
	 * @param {string} Currency 
	 * @param {number} Quotes 
	 */

	constructor(Loan, InterestRate, Currency, Quotes){
		this.ContractID = v4();
		this.Loan = Loan;
		this.InterestRate = InterestRate;
		this.Currency = Currency;
		this.Quotes = Quotes;
	}

}