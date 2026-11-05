# Experiment 8 - JWT Authentication and Password Hashing

## Prerequisite
MongoDB running locally (or set MONGO_URI in .env).

## How to run (VS Code terminal)
```
npm install
copy .env.example .env      (Windows)   /   cp .env.example .env   (Mac/Linux)
npm start
```
Edit .env and set JWT_SECRET to any long random string.

## Test with Thunder Client / Postman
1. POST http://localhost:5000/api/register
   {"name":"Rahul Sharma","email":"rahul@example.com","password":"123456"}
2. POST http://localhost:5000/api/login
   {"email":"rahul@example.com","password":"123456"}  -> copy the "token"
3. POST http://localhost:5000/api/projects  (Header: Authorization: Bearer <token>)
   {"title":"Portfolio Website","description":"My site","technology":"React"}
4. POST http://localhost:5000/api/projects without the header -> 401 Unauthorized
