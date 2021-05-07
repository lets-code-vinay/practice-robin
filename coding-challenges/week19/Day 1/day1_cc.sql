-- Create a database Companydb. 

CREATE database Companydb;
 
-- Create a table comapnydb Fields  Id Name Age PhoneNumber Address Salary Created_at (default value) 

CREATE table Companydb(
    Id int primary key not null, 
    Name char(25) not null, 
    Age int not null, 
    PhoneNumber int not null, 
    Address char(25) not null, 
    Salary int default 10000);

-- Adding data into companydb

INSERT into Companydb(Id,Name,Age,PhoneNumber,Address,Salary) values(1,'Aman',10,0123456789,"xyz",10000);
INSERT into Companydb(Id,Name,Age,PhoneNumber,Address,Salary) values(2,'ben',12,0123456789,"pqr",11000);
INSERT into Companydb(Id,Name,Age,PhoneNumber,Address,Salary) values(3,'cherry',15,0123456789,"abc",12000);

 
-- Create a table departement ID Department emp_id Created_at (default value) 

CREATE table department(
    Id int primary key not null, 
    Department char(25) not null, 
    emp_Id int default 11111);

-- Adding data into department db

INSERT into department(Id,Department,emp_Id) values(1,'Account');
INSERT into department(Id,Department,emp_Id) values(2,'Management');
INSERT into department(Id,Department,emp_Id) values(3,'IT');
INSERT into department(Id,Department,emp_Id) values(4,'Technical')
 
-- Write Join queries  CROSS JOIN INNER JOIN LEFT, RIGHT, FULL OUTER JOIN 
-- Cross join

SELECT emp_id,name,Department from Companydb cross join department;

-- Inner join

SELECT Name, Age, Address, Department from Companydb inner join departement on Companydb.Id=departement.Id;

-- Left outer join

SELECT Name, Age, Address, Department from Companydb left outer join departement on Companydb.Id=departement.Id;

-- right outer join

SELECT Name, Age, Address, Department from Companydb right outer join departement on Companydb.Id=departement.Id;

-- Full outer join

SELECT Name, Age, Address, Department from Companydb full outer join departement on Companydb.Id=departement.Id;

