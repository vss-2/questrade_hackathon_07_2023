CREATE TABLE ACCOUNTS (
    INT PRIMARY KEY SERIAL AccountID,
    VARCHAR(64) Email,
    VARCHAR(64) Password,
    INT AccountType,
    DATE DEFAULT NOW() CreateAt
);

CREATE TABLE CLIENTS (
    INT AccountID REFERENCES ACCOUNTS.AccountID,
    VARCHAR(16) SocialSecurityNumber,
    VARCHAR(16) Telephone,
    DATE DEFAULT NULL LastScoreCheck,
    INT DEFAULT NULL Score,
    VARCHAR(32) DocUUID
)
