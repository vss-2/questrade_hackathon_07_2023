class Clients {

	/**
	 * @description Implements a class object 
	 * similiar to what is stored in database.
	 * @param {number} AccountID 
	 * @param {string} Email 
	 * @param {string} Password 
	 * @param {number} Type 
	 * @param {Date} CreateAt 
	 */

	constructor(AccountID, Email, Password, Type, CreateAt){
		this.AccountID = AccountID;
		this.Email = Email;
		this.Password = Password;
		this.Type = Type;
		this.CreateAt = CreateAt;
	}

}