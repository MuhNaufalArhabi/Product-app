# Product API Documentation

## Endpoint:

- `POST /user/register`
- `POST /user/login`
- `GET /order`
- `POST /order`

&nbsp;

## 1. POST /user/register

Request:

- body:

```json
{
  "username": "admin",
  "email": "admin@mail.com",
  "password": "admin"
}
```

_Response (201 - Created)_

```json
{
  "message": "User created successfully"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```
&nbsp;

## 2. POST /user/login

Request:

```json
{
    "email": "admin@mail.com",
    "password": "admin"
}
```

_Response (200 - OK)_
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY3NjY0NDE0NiwiZXhwIjoxNjc3MjQ4OTQ2fQ.l0OX7wPiWvKqc1JuzKuwpw5HczU7M5GRUpzLWJoZxfY"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Invalid email or password"
}
```
&nbsp;

## 3. GET /order

_Response (200 - OK)_
```json
[
    {
        "name": "Laptop",
        "quantity": 1,
        "price": 10000000
    },
    {
        "name": "Smartphone",
        "quantity": 1,
        "price": 5000000
    }
]
OR
[]
```
&nbsp;

## 4. POST /order

Request:
```json
{
    "name": "TV",
    "quantity": 1,
    "price": 3000000
}
```

_Response (200 - OK)_
```json
{
    "message": "Succes create order"
}
```

_Response (400 - Bad Request)_
```json
{
    "message": "Order failed to create"
}
```
&nbsp;

## Global Error

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal server error"
}
```