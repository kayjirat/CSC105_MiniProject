# Art Collection

Art Collection is a website that collects exhibitions for users to explore before visiting.

## Features

| Feature          | Description                         |
| :--------------- | :---------------------------------- |
| `Signup`         | create account for the website      |
| `Login/Logout`   | log in and log out from the website |
| `update profile` | edit account                        |
| `delete account`  | delete account                     |

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

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | email address |
| `password` | `string` | password      |

Example

```
{
  email: "kay@gmail.com",
  password: "1234"
}
```

#### Success

Response

`200` success

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `success` | `boolean` | success status                                               |
| `message` | `string`  | login result                                                 |
| `user`    | `string`  | the response with userId email hashpassword username and bio |

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

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `username` | `string` | username      |
| `email`    | `string` | email address |
| `password` | `string` | password      |

Example

```
{
    username: "k",
    email: "kay@gmail.com",
    password: "1234"
}
```

#### Success

Response

`200` success

| Parameter | Type      | Description     |
| :-------- | :-------- | :-------------- |
| `success` | `boolean` | success status  |
| `message` | `string`  | register result |

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

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `user`    | `string` | token "user" in the cookies |

Example

```
{
    user: "eyJhbGciOiJIUzI1Ni...""
}
```

#### Success

Response

`200` User is logged in

| Parameter | Type      | Description           |
| :-------- | :-------- | :-------------------- |
| `success` | `boolean` | success status        |
| `message` | `string`  | Authentication status |

Example

```
{
    success: true,
    message: "User is logged in",
}
```

### Get Logged in User

URL
`GET /user/:userId`

#### Request Body

| Parameter | Type  | Description |
| :-------- | :---- | :---------- |
| `userId`  | `int` | user id     |

#### Success

Response

`200` user found

| Parameter | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `success` | `boolean` | success status                                               |
| `message` | `string`  | user result                                                  |
| `user`    | `string`  | the response with userId email hashpassword username and bio |

Example

```
{
    success: true,
    message: "Found",
    user: [
        {
            "userId": 10,
            "email": "kk@gmail.com",
            "password": "$2a$10$7ct/FqtnK3JHKjmB48a1WORMsefE0EiVG.lZPlCxiiHvq4iyiN.si",
            "username": "kk",
            "bio": null
        }
    ]

}
```

### Edit user information

URL
`PATCH /editProfile/:userId`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`| `string` | user name                  |
| `email`   | `string` | email address              |
| `bio`     | `string` | short biographical profile |

#### Success

Response

`200` success

### Delete User

URL
`DELETE /user`

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId`  | `int`    | user id                    |

Example
```
 {
    userId: "13"
  }
```

#### Success

Response

`200` success

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `success` | `boolean` | success status |
| `message` | `string` | delete status |


Example

```
{
    success: true,
    message: "delete successful"
}
```