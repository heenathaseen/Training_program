const prompt = require('prompt-sync')();

const mysql = require('mysql');
let con = mysql.createConnection({
    host: '45.120.136.152',
    port: '3306',
    user: "heena",
    password: "heena",
    database: "heena"
});

console.log("\t")
console.log("Welcome to college admission \n");
console.log("\t")

let firstName = "";
let lastName = "";
let collegeName = "";
let department = "";
let email = "";
let phoneNumber = "";

let userOption = prompt("1 for registration , 2 for update, 3 for delete,4 for raedDb ")
switch (userOption) {
    case "1":
        userInput();
        printDetails();
        createDb();
        //createTable();
        insertDb();
        break;

    case "2":
        verify();
        break;
    case "3":
        deleteDb();
        break
    case "4":
        readDb();
        break;

}

function userInput() {
    firstName = prompt('Your FirstName: ');
    lastName = prompt('Your LastName: ');
    collegeName = prompt('CollegeName: ');
    department = prompt('Department: ');
    email = prompt('Email: ');
    phoneNumber = prompt('PhoneNUmber: ');
}


console.log("\n")

function printDetails() {
    console.log("YOUR DETAILS")
    console.log("\n")
    console.log('Your FirstName: ' + firstName);
    console.log('Your lastName: ' + lastName);
    console.log('CollegeName: ' + collegeName);
    console.log('Department: ' + department);
    console.log('Email: ' + email);
    console.log('PhoneNumber: ' + phoneNumber);
    console.log("\t")
}

function createDb() {
    con.connect(function(err) {
        if (err) throw err;
        console.log("connected");
    });
}

function createTable() {
    let createTable = "CREATE TABLE CollegeAdmission(id int auto_increment,FirstName varchar(20), LastName varchar(20),CollegeName varchar(20),Department varchar(20), Email varchar(20), MobileNumber int,primary key(id),unique key(MobileNumber))";
    con.query(createTable, function(err) {
        if (err) throw err;
        console.log("Table created");
    });
}

function insertDb() {
    let command = "INSERT INTO CollegeAdmission (FirstName, LastName, CollegeName, Department,Email,MobileNumber) VALUES ('" + firstName + "','" + lastName + "','" + collegeName + "','" + department + "' ,'" + email + "','" + phoneNumber + "')";
    con.query(command, function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result.affectedRows + " record(s) updated");
        disconnect();
    });;
}

function verify() {
    let mobileNumber = prompt("Your Mobile Number: ");
    let exist = `select MobileNumber from CollegeAdmission where exists(select ${mobileNumber} from CollegeAdmission) `;
    createDb();
    con.query(exist, function(err) {
        if (err) {
            console.log("error");
        };
        console.log("Number Verified");

        firstName = prompt('Your FirstName: ');
        lastName = prompt('Your LastName: ');

        let update = `update  CollegeAdmission set FirstName = '${firstName}', LastName = '${lastName}' where MobileNumber = ${mobileNumber} `;
        con.query(update, function(err) {
            if (err) throw err;
            console.log("Updated Successfully!");
        })
    })
}

function deleteDb() {
    let mobileNumber = prompt("Your Mobile Number: ");
    let exist = `select MobileNumber from CollegeAdmission where exists(select ${mobileNumber} from CollegeAdmission) `;
    createDb();
    con.query(exist, function(err) {
        if (err) {
            console.log("error");
        };
        console.log("Number Verified");

        let remove = `delete from CollegeAdmission where MobileNumber = ${mobileNumber} `;
        con.query(remove, function(err) {
            if (err) throw err;
            console.log("Deleted Successfully!");
        })
    })
}

function readDb() {
    createDb();
    let read = `select * from CollegeAdmission`;
    con.query(read, function(err, result) {
        if (err) throw err;
        console.log(result);
    })
}

function disconnect() {
    con.end(function(err) {
        if (err) throw err;
        console.log("disconnect");
        console.log("Thank you");
    });
}