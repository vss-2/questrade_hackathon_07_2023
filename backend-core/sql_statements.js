await sql`
FROM CONTRACTS,
SELECT InterestRate, Quotes
WHERE AccountID = ${AccountID};
`.then((e) => e.AccountID);

/**
 * @description Uses a SQL connection to query all contracts 
 * of a client given its AccountID;
 * @param {postgre} sql
 * @param {number} AccountID
 * @returns {object}
 */
async function getAllClientContracts(sql, AccountID){
	let contracts =
		await sql`
			FROM CONTRACTS,
			SELECT InterestRate, Quotes
			WHERE AccountID = ${AccountID};
		`.then( (res) => return res; );
	return contracts;
}

/**
 * @description Uses a SQL connection to query all payments
 * of a given ContractID;
 * @param {postgre} sql
 * @param {number} ContractID
 * @returns {object}
 */
async function getAllContractPayments(sql, ContractID){
	let payments = 
		await sql`
			FROM PAYMENTS
			SELECT Quote
			WHERE ContractID = ${ContractID};
		`.then( (res) => return res; );
}

/**
 * @description Uses a SQL connection to query all dates
 * of a given ContractID;
 * @param {postgre} sql
 * @param {number} ContractID
 * @returns {object}
 */
async function getContractDates(sql, ContractID){
	let dates = 
		await sql`
			FROM CONTRACT_DATE
			SELECT
			StartDate, EndDate
			WHERE ContractID = ${ContractID};
		`.then( (res) => return res; );
}
