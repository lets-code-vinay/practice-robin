-- Create a database Bankdb 

CREATE database Bankdb;
 
-- Create a table User with Id , Name, Age, PhoneNumber, Address

CREATE TABLE User(
    Id int primary key NOT NULL,
    Name CHAR(25) NOT NULL,
    Age int NOT NULL,
    PhoneNumber int NOT NULL,
    Address char(50) NOT NULL);

-- Adding data into User

INSERT INTO 
User(Id,Name,Age,PhoneNumber,Addres) VALUES(1,'Veer',23,6574835467,'xyz');
User(Id,Name,Age,PhoneNumber,Addres) VALUES(2,'Sameer',25,9765835467,'pqr');
User(Id,Name,Age,PhoneNumber,Addres) VALUES(3,'Bunty',23,9574835467,'abc');

 
-- Create a table AccountInfo with Id , accountNumber , Balance and User_id 

CREATE table AccountInfo(
    Id int primary key NOT NULL, 
    AccountNumber int NOT NULL,
    Balance int NOT NULL, 
    User_Id int NOT NULL);

-- Adding data into Account Info

INSERT into AccountInfo(Id,AccountNumber,Balance,User_Id) values(1,1234567890,30000,22);
INSERT into AccountInfo(Id,AccountNumber,Balance,User_Id) values(2,3334567890,50000,24);
INSERT into AccountInfo(Id,AccountNumber,Balance,User_Id) values(3,8734567890,40000,27);
 
-- Write Join queries  CROSS JOIN INNER JOIN LEFT, RIGHT, FULL OUTER JOIN 
-- Cross join

SELECT User_Id,Name,AccountNumber from User cross join AccountInfo;

-- Inner join

SELECT Name, Age, Address from User inner join AccountInfo on User.Id=AccountInfo.Id;

-- Left outer join

SELECT Name, Age, Address from User left outer join AccountInfo on User.Id=AccountInfo.Id;

-- right outer join

SELECT Name, Age, Address from User right outer join AccountInfo on User.Id=AccountInfo.Id;

-- Full outer join

SELECT Name, Age, Address from User full outer join AccountInfo on User.Id=AccountInfo.Id;

