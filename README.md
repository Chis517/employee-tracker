# employee-tracker

## Description

This Node.js command-line application uses MYSQL and Inquirer to help you manage a company's employee database!

When the application is started, you'll be presented with the option to View All, View all Employees, Managers, Departments, or Roles, Add an Employee, Department, or Role, Update a Role, and Change Manager.

* The View options will display a formatted table including data specific to your choice. 
* The Add options will prompt you to enter new data coorelating to the option you would like to add.
* The Update and Change options will enable you to edit an existing emloyee's role or manager.


## Installation

[SSH of repo]
git@github.com:Chis517/team-profile-gen.git

Clone the GitHub repo with the key above in your command line, then run npm i or npm install to download the packages to run the application.

Within the db folder, change the user and password values in the connection.js file to your own credentials if required.

After npm installation is complete, run mysql in the command line and enter the following:
  * source db/db.sql
  * source db/schema.sql
  Only source the seeds file below for reference
  * source db/seeds.sql 

After you source the sql files needed, run npm start in the command line to start the application. 


## Technologies

* Inquirer package
* MYSQL
* Express
* console.table
* JavaScript


## URL Link and demo

* [URL of repo]
(https://github.com/Chis517/employee-tracker)

* [URL of video demo]
(https://watch.screencastify.com/v/z1zbldsA07l5T2ZoyIOL)