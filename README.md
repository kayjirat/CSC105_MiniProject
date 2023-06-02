# Art Collection
Art Collection is a website that collects exhibitions for users to explore before visiting.

## Features

| Feature | Description                |
| :-------- | :------------------------- |
| `Signup` | create account for the website|
| `Login/Logout` | log in and log out from the website|
| `update profile` | edit account |

## To run the frontend and backend
Frontend -> cd frontend
```bash
  npm start
```
Backend -> cd backend
```bash
  npm run dev
```

## API endpoints

### Log in

URL
`POST /login`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | email address |
| `password` | `string` | password | 

Example

```
{
  email: "kay@gmail.com",
  password: "1234"
}
```
#### Success

`200` success

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | success status |
| `message` | `string` | login result |
| `user` | `string` | the response with userId email hashpassword username and bio |


Example

```
{
    success: true,
    message: "Login credential is correct",
    user: {
        "userId": 1,
        "email": "kay@gmail.com",
        "password": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "username": "kay",
        "bio": null
    }
}
```
### Register

URL
`POST /register`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | username | 
| `email` | `string` | email address |  
| `password` | `string` | password | 

Example

```
{
    username: "k",
    email: "kay@gmail.com",
    password: "1234"
}
```
#### Success

`200` success

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | success status |
| `message` | `string` | register result |


Example

```
{
    success: true,
    message: "User has been created",
}
```
### Authentication Check

URL
`GET /check`

#### Request cookies

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | token "user" in the cookies |


Example

```
{
    user: "eyJhbGciOiJIUzI1Ni...""
}
```
#### Success

`200` success

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | success status |
| `message` | `string` | Authentication status |


Example

```
{
    success: true,
    message: "User is logged in",
}
```
