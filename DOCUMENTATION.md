## Introduction and Overview

This API performs Create, Read, Update and Delete operations on a Person resource.
The Person resource has two important fields: **name** and **_id**

## API Base URL

*https://json-endpoint.onrender.com*

## Authentication

This is an open API and you don't need any authetication to access it

## Responses

Every response is either a _SuccessResponse_ or _ErrorResponse_ object.

_SuccessResponse_ and _ErrorResponse_ both have the structure below:
 ```typescript
 {
    status: string
    message: string | undefined
    data: any
 }
 ```

In success and error responses, the *message* field is optional. It is present in some responses and absent in others. The other fields are always present.

The main difference between both response types is that for every _SuccessResponse_ object, the value of *status* is the string *"success"* while for _ErrorResponse_ objects, the value of the *status* field is the string *"error"*

### Sample success response

```javascript
{
    status: 'success',
    message: 'Person has been updated successfully',
    data: {
      name: 'Some name',
      _id: 'iueuyre89reigfbyuhrr'
    }
}
```

## API Contract

All the API endpoints here go to to the base url above. You can just imagine that they are all prepended with the base url. Therefore, if an endpoint's URL is */api/endpoint*, its full url is *https://json-endpoint.onrender.com/api/endpoint*

These endpoints are available for consumption:

### Get Person

### Request
> **URL:**  /api/{user_id}
>
> **HTTP METHOD:** GET
>
> **BODY:** None
### Response
> **HTTP Status:**
>
> _200 Ok_ if the user_id is present and there is a Person in the db with a matching ID
>
> _400 Bad Request_ if the user_id is not present
>
> _500 Internal Server Error_ if something goes wrong on the server and the fetch is unable to complete successfully
>
### Success Response Body
```javascript
{
    "status": "success",
    "data": {
        "_id": "6502a8bd623bb68f8fc04815",
        "name": "Volkswaggen E-sport",
    }
}
```
### Error Response Body
```javascript
{
    "status": "error",
    "data": "something went wrong on the server"
}
```

### Create Person

### Request
> **URL:**  /api
>
> **HTTP METHOD:** POST
>
> **BODY:** ```{ name: string }```
### Response
> **HTTP Status:**
>
> _200 Ok_ if the request body contains a name field
>
> _400 Bad Request_ if the request body does not contain a name field
>
> _500 Internal Server Error_ if something goes wrong on the server and the creation is unable to complete successfully
>
### Success Response Body
```javascript
{
    "status": "success",
    "message": "created new person successfully"
    "data": {
        "name": "Volkswaggen E-sport",
        "_id": "6502a8bd623bb68f8fc04815",
    }
}
```
### Error Response Body
```javascript
{
    "status": "error",
    "data": "something went wrong on the server"
}
```

### Edit Person

### Request
> **URL:**  /api/{user_id}
>
> **HTTP METHOD:** PATCH
>
> **BODY:** ```{ name: string }```
### Response
> **HTTP Status:**
>
> _200 Ok_ if the request body contains a name field, the url contains a user_id path segment and a user with a matching _id field exists in the db and is returned successfully
>
> _400 Bad Request_ if the request body does not contain a name field or the url does not contain a user_id path segment
>
> _500 Internal Server Error_ if something goes wrong on the server and the update is unable to complete successfully
>
### Success Response Body
```javascript
{
    "status": "success",
    "message": "updated user successfully",
    "data": null
}
```
### Error Response Body
```javascript
{
    "status": "error",
    "data": "something went wrong on the server"
}
```

### Delete Person

### Request
> **URL:**  /api/{user_id}
>
> **HTTP METHOD:** DELETE
>
> **BODY:** None
### Response
> **HTTP Status:**
>
> _200 Ok_ if the url contains a user_id and a user with a matching _id field exists in the db and is deleted successfully
>
> _400 Bad Request_ if the url does not contain a user_id path segment
>
> _500 Internal Server Error_ if something goes wrong on the server and the user deletion is unable to complete successfully
>
### Success Response Body
```javascript
{
    "status": "success",
    "message": "deleted Margrove Park successfully",
    "data": {
        "_id": "65025e19d5deff5877697021",
        "name": "Margrove Park",
    }
}
```
### Error Response Body
```javascript
{
    "status": "error",
    "data": "invalid user ID"
}
```