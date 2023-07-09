CREATE TABLE ACCOUNTS (
    AccountID INT GENERATED ALWAYS AS IDENTITY,
    Email VARCHAR(64),
    Password VARCHAR(64),
    AccountType INT,
    CreateAt DATE DEFAULT NOW(),
    PRIMARY KEY(AccountID)
);

CREATE TABLE CLIENTS (
    AccountID INT,
    SocialSecurityNumber VARCHAR(16),
    Telephone VARCHAR(16),
    LastScoreCheck DATE DEFAULT NULL,
    Score INT DEFAULT NULL,
    DocUUID VARCHAR(32),
    CONSTRAINT fk_AccountID 
      FOREIGN KEY(AccountID) 
        REFERENCES ACCOUNTS(AccountID)
);

CREATE TABLE CONTRACTS (
    ContractID INT GENERATED ALWAYS AS IDENTITY,
    AccountID INT,
    Loan INT,
    InterestRate INT,
    Currency VARCHAR(8),
    Quotes INT,
    CONSTRAINT fk_AccountID 
        FOREIGN KEY(AccountID) 
            REFERENCES ACCOUNTS(AccountID),
    PRIMARY KEY(ContractID)
);

CREATE TABLE CONTRACT_DATE (
    ContractID INT,
    TimeRange INT,
    TimeUnity VARCHAR(8),
    StartDate DATE,
    EndDate DATE,
    CONSTRAINT fk_ContractID 
        FOREIGN KEY(ContractID) 
            REFERENCES CONTRACTS(ContractID)
);

CREATE TABLE PAYMENTS (
    ContractID INT, 
    Quote INT,
    Doc_UUID_Receipt VARCHAR(64) DEFAULT NULL,
    CONSTRAINT fk_ContractID 
        FOREIGN KEY(ContractID)
            REFERENCES CONTRACTS(ContractID)
);
