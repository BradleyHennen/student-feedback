# Student Feedback

Application that take in feedback information from students (e.g. How are you feeling today?, comments, etc.) and stores them into a database. Admin page shows feedback results and give ability to delete or flag submissions.

## Built With

- React
- Redux
- Node
- JavaScript
- Express
- PostgreSQL
- pg
- Material-UI
- HTML
- CSS
- Axios

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Link to software that is required before you attempt to start the app.

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Create Database and Table

Create a new database called `prime_feedback` and run the SQL query from the data.sql file. 

### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
2. Start postgres if not running already by using `brew services start postgresql`
3. `npm install`
4. `npm run server`
5. `npm run client`
6. Navigate to `localhost:3000`

### Completed Features

High level list of items completed.

- [x] Feedback loop for students to submit
- [x] Admin page displays results
- [x] Results can be flagged or deleted

### Next Steps

- [ ] Style admin page
- [ ] Add passport authentication

## Authors

* Bradley Hennen