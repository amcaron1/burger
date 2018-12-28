# burger

Overview
    - Displays current burgers
    - Allows user to create new burgers that are then displayed
    - Allows user to devour burgers which switched bugers to the eaten column

- connection.js
    - Requires mysql
    - Creates a connection with mysql
    - Exports the connction

- orm.js
    - Requires connection.js
    - Declares helper functions
        - printQuestionMarks function creates question marks for mysql queries
        - objToSql function converts key/value pairs to SQL
    - Declares orm object of functions that call the connection function to send queries to mysql
        - all function selects all of the burgers from the database and displays them
        - create funciton inserts a new burger in the database and updates the display
        - update funciton changes the devoured status in the database and updates the display
    - Exports orm object

- burgers_controller.js
    - Requires express
    - Requires burger.js
    - Declares a router to be an express.Router
    - Creates routes that call the burger functions from burger.js
        - router.get("/" gets all of the burgers
        - router.post"/api/burgers" creates a new burger
        - router.put("/api/burgers/:id updates the devoured condition
    - Exports router

- schema.sql
    - sql for creating database and table

- seeds.sql
    - sql for inserting initial rows in table

- burger.js
    - Requires orm.js
    - Declares burger object of functions that call the orm functions from orm.js
        - all function
        - create funciton
        - update funciton
    - Exports burger

- burger_style.css
    - Styles the handlebars

- Hamburger1.jpg
    - Background image

- burgers.js
    - Declares a jquery function that handles button clicks
        - change-devoured
        - create-form

- main.handlebars
    - Links burger_style.css
    - Links burgers.js

- index.handlebars
    - Creates html for creating a new burger and devouring it

- server.js
    - Requires express
    - Requires body-parser
    - Sets up server
    - Declares app as an express function
    - Links public directory for static content
    - Requires express-handlebars
    - Requires burgers_controller.js

    - Key or new skills
        - MVC model
            - Models
            - Orms
            - Handlebars

 - Friend_Finder Links
    - Deployed: https://stormy-reef-18159.herokuapp.com/
    - GitHub repository: https://github.com/amcaron1/burger/

- Portfolio Links
    - Deployed: https://amcaron1.github.io/Bootstrap-Portfolio/
    - GitHub repository: https://github.com/amcaron1/Bootstrap-Portfolio/           