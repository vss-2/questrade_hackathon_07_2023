class Payment {

	/**
	 * @description Implements a class object 
	 * similiar to what is stored in database.
	 * @param {number} ContractID 
	 * @param {number} Quote 
	 */

	constructor(ContractID, Quote){
		this.ContractID = ContractID;
		this.Quote = Quote;
		this.DOC_UUID_Receipt = null;
	}

}
