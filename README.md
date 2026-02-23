# JSFW Final Running App

## Run Instructions
- open the command line in the project folder and execute the command 'npm install'
- open the command line in the frontend folder and execute the command 'npm install'
- open the command line in the backend folder and execute the command 'npm install'
- open the command line in the backend folder and execute the command 'npm run dev'
- open command line in the frontend folder and execute the command 'npm run dev'
- ctrl click the local host link in the frontend command line to open the project

## A1

### Screens Added
- Leaderboard Screen (LeaderboardTable component, LightDarkToggle component, FunnyButton component)
- Contact Screen (ContactWidget component)

### Components Created
- Contact Widget: Takes in text input, submit button executes a console.log()
- Funny Button: Opens a link to a funny video
- Leaderboard Table: Reads json file and displays as a table
- Light Dark Toggle: div class reads theme.value to determine styling, button changes the value and it read and changes the theme in run time
  
### Stores Created
- theme.ts: holds a const ref that is either "light or "dark" and a function 'toggle' to switch between them

## Final Assignmnet

### Purpose
This app's primary purpose was to be an exercise for learning the use of mySQL and mongoDB and integrating databases in web app frameworks. 
This app uses mySQL to hold a leaderboard database with a table 'scores' that holds sample data.
MongoDB is used for an inquiry database that holds emails, names, and inquiries.

The endpoints used were /api/leaderboard, /api/leaderboard-summary, and /api/contact.
/api/leaderboard returned all the usernames and scores from the leaderboard database in the 'scores' table in descending order of scores
/api/leaderboard-summary returned just the first 3 elements from the 'scores' table
/api/contact routed to other api calls to the mongodb, one to POST a new inquiry, one to GET all the inquiries from a specific email, and one to GET the name attached to a specific email

Pinia is being used to store the current user. 
When a user successfully logs in on the LoginPage, their name is displayed
If a user is logged in and goes to the ContactPage, their past inquiries are displayed as well

### Limitations
The LoginPage only checks if the email being used has sent an inquiry to the mongodb, proper authentication is not being used
There is no current way to write to the leaderboard database, only to read it
