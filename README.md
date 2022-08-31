# social-network-api

## Task

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technologies used:

Node JS,express,MongoDB,POSTMAN

## Installation:

Clone the repository using SSH keys:

git clone git@github.com:smeea-2018/social-network-api.git

Install the required packages

npm install
npm i express
npm i dotevnv
npm install mongoose --save

Create database and insert value in datbase

Start execution
npm run start

## Mock-Up

The following videos show the web application's appearance and functionality:

<a href = "https://drive.google.com/file/d/1clH9PGtp4bR5-s2oAIxnNApqLfeNtnvo/view">Watch Video </a>

![Mock-up](./addReactionsandFriends.gif)

<a href= "https://drive.google.com/file/d/1tsLjHgzhr_8JxaTezE9v6aWbwuv6sFnY/view">Watch Video</a>
![functionality demonstration-add reaction and friend](./socialNetworkApi.gif)

<a href= "https://drive.google.com/file/d/1R6QvZgFFAPDIYMi-hqgeejmgYf2Nsf_B/view">Watch Video</a>
![functionality demonstration-delete reaction and friend](./deletereactionsandfriends.gif.gif)

## Contact Me:

<a href = "mailto: smeeaa131@gmail.com"> email </a>
