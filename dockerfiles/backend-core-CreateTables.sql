CREATE TABLE CONTRACTS (
    ContractID INT GENERATED ALWAYS AS IDENTITY,
    AccountID INT,
    Loan INT,
    InterestRate INT,
    Currency VARCHAR(8),
    Quotes INT
)

CREATE TABLE CONTRACT_DATE (
    ContractID INT,
    TimeRange INT,
    TimeUnity VARCHAR(8),
    StateDate DATE,
    EndDate DATE
    CONSTRAINT fk_ContractID 
        FOREIGN KEY(ContractID) 
            REFERENCES CONTRACTS(ContractID)
)

CREATE TABLE PAYMENTS (
    ContractID INT,
    PaymentID INT GENERATED,
    Quota INT,
    DOC_UUID_Receipt VARCHAR(64),
    PRIMARY KEY (ContractID, Quote)
    CONSTRAINT fk_ContractID 
        FOREIGN KEY(ContractID) 
            REFERENCES CONTRACTS(ContractID)
);
# FOR TESTING PURPOSES, ADDS 3 LOANS TO A PREDEFINED ACCOUNT
INSERT INTO CONTRACTS VALUES(1, 10000, 7, "BR-BRL", 20);
INSERT INTO CONTRACTS VALUES(1, 2000, 12, "US-USD", 10);
INSERT INTO CONTRACTS VALUES(1, 10000, 30, "AR-ARS", 5);