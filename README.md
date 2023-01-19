# E-commerce-Back-End

## Description

The motivation for this project was to create the back end for an e-commerse company. This will assist managers of an internet reatil company by allowing them to track their inventory using the latest technologies. This way they will be able to compete with other e-commerce companies.

During this project I learned: 
- how to install and implement dotenv to hide my sql log in credentials
- how to sync sequelize models to a MYSQL database
- how to formulate API routes using all CRUDE operators
- how to use validation to make sure user input is in the correct format
- how to formulate and use one to one, and many to many relationships
- how to implement try catch operators to make code more dry
- how to implement async await functions so that our code runs more smoothly and eliminates the use for .then
- using insomnia to determine if API routes work correctly

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file as well as the package-lock.json file. This application requires you to have node.js version 16.18 and you can read how to install the correct version at https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs. This application also requires the third-party packages express, sequelize, mysql2, and dotenv. It can be installed by opening the index.js terminal and entering npm i. You will be able to check the package.jason file and find the dependencies. After the required packages are installed, the user can open the terminal in the index.js file, and enter node index.js. To access the sql database you will need to add your log in credentials to the the .env file.

To install the packages check these resources:
- https://sequelize.org/docs/v6/getting-started/
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/dotenv

## Usage

This application can be used to view and manage a database with product information. The user will first need to install all of the dependencies using "npm i". Then the user will need to create the e-commerce database. This is done my running "mysql -u root -p" in the console, entering the user's SQL password, and running "source db/schema.sql" in the terminal. The user can then exit mysql. The user must then seed the database by executing the seeds file by entering "npm run seed" in the terminal. The user can then start the server using "npm run start" in the terminal. Finally the user can use an application such as insomnia to test the API CRUD routes using localhost:3001/api/. 

The demo video can be viewed here: https://drive.google.com/file/d/1CNjplpC7AfOgUusAOWSMPNeErIFTw-Bd/view.

## Credits

I followed these links and tutorials in the completion of this project:

- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
- https://sebhastian.com/sequelize-belongstomany/
- https://www.bezkoder.com/sequelize-associate-many-to-many/
- https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
- https://sequelize.org/api/v6/class/src/model.js~model
- https://medium.com/@hz.bird55/using-sequelize-bulkcreate-method-with-mysql-database-1ebd1bae2109
- https://stackoverflow.com/questions/37932677/uncaught-syntaxerror-unexpected-token-p-in-json-at-position-36
- https://www.geeksforgeeks.org/express-js-express-router-function/
- https://www.turing.com/kb/mysql-connection-with-node-js-using-sequelize-and-express

## License

No licenses were used during this project.
