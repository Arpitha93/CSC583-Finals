# Simple Visitor sign-up system

## Non-Functional Requirements 

#### Design and Tool selection analysis
This application is based on MVC(Module View Controller).
* **Framework evaluation** - ExpressJS is back-end web application framework running on top of Node.js. Express is used for the simplicity and ease of the program. Many popular framework are based on express. Several popular Node.js frameworks are built on Express:MEAN, Hydra-express etc.
* **Performance** - Express provides a thin layer of fundamental web application features, without obscuring Node.js features.
* **Usability** - Use and maintainance of Express is easy with myriad of utility methods and middleware.
* **Backend** - For database mongodb is used, as it is easy to integrate with express framework and also serves our minimal application.
* **Frontend** - Bootstrap is used for front-end minimalistic looks.
* **Hands-on evaluation** - Followed a tutorial on YouTube for step by step to build a login page. Use of Express framework pretty much made easy, with all built-in functions and community supports and online tutorials. Mongoose provides a straight-forward, schema-based solution to model application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box..   
* **Documentation** - I prefered using Markdown for documentation, because it is so intuitive, and also easy to learn. The syntax is simple and straightforward. 

## Installation Instruction

#### Technology Requirements
* [Node.js](https://nodejs.org/) 
* [Mongodb](https://www.mongodb.com)
* [Bootstrap](https://getbootstrap.com/)
* [ExpressJS](https://expressjs.com/)
* [Express Validator](https://www.npmjs.com/package/express-validator)
* [Body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
* [Cookie-parser](https://expressjs.com/en/resources/middleware/cookie-parser.html)
* [Session](https://www.npmjs.com/package/express-session)
* [Passport](https://github.com/jaredhanson/passport)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Flash](https://www.npmjs.com/package/express-flash)
* [Mongoose](http://mongoosejs.com/)

Application is packaged with all the dependencies and it is captured in package.json, and installed dependency modules are located in **node-modules** folder.
* Download the project from Github (https://github.com/Arpitha93/CSC583-Finals)
* Extract the contents.
* Start the database server from command prompt or shell.
    ```sh
    mkdir C:/data/db
    cd mongodb_installpath/bin
    mongod
    ```
* Start the app server
    ```sh
    cd extractedPath
    node app.js
    ```
Server will be started, connect the server using http://localhost:5000 

## Architecture discussion

### NodeJS
Node.js is an open-source server side runtime environment. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript. Node.js runs in a single process and the application code runs in a single thread and thereby needs less resources than other platforms.

### ExpressJS
ExpressJS is a prebuilt NodeJS framework that can help in creating server-side web applications faster and smarter. Simplicity, minimalism, flexibility, scalability are some of its characteristics. All sorts of routing features including routing, separate handlers for put, get, post, etc..., wildcard handling, variables pulled automatically from URLs. Routing by case sensitivity or no case sensitivity 

### MangoDB
MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document. Any relational database has a typical schema design that shows number of tables and the relationship between these tables. While in MongoDB, there is no concept of relationship.

## Plan of action
- [x] Nonfunctional analysis
- [x] Architecture design
- [x] Registration form design
- [x] Data models design
- [x] Data addition unit test end to end 
- [x] Admin data view page design
- [x] Admin login page design
- [x] Bootstrap integration
- [x] Admin registration page
- [x] Admin authentication before accessing the data table
- [x] Admin view has a page pagination
- [x] Form entry validation
- [x] Deploy the client on to a real tablet
- [x] Basic unit testing
- [x] Database installation and setup
- [ ] Email firing off to a designated admin address when a visitor has signed in
- [ ] Docker container based application deployment for easy scalability and redundancy

References
----------------
* https://zellwk.com/blog/crud-express-mongodb/
* https://www.youtube.com/watch?v=gnsO8-xJ8rs
* https://github.com/bradtraversy/loginapp








