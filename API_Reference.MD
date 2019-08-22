# API Documentation

## Available Endpoints

<h2> Vehicles </h2>

The vehicles endpoint returns information about the current vehicle.

Please note that the only vehicle IDs which will return any kind of valid response will be vehicleId **1234** and vehicleId **1235**.

<h3> Vehicle endpoints</h3>

| REST Verb | Endpoint              |
| --------- | --------------------- |
| GET       | /vehicles/:id         |
| GET       | /vehicles/:id/doors   |
| GET       | /vehicles/:id/fuel    |
| GET       | /vehicles/:id/battery |
| POST      | /vehicles/:id/doors   |

### Sample requests

<!-- Add examples of a GET request in the code. Add example of a response in code!-->

Sample requests:

```
Using cURL:

$ curl http://localhost:3000/vehicles/
       -X POST
       -H 'Content-Type: application/json'
       -d '{"id": "1234", "responseType": "JSON"}'

```

```
Using localhost environment

http://localhost.com/:3000/vehicles/1234
```

Sample response:

```
{
  "vin": "1213231",
  "color": "Metallic Silver",
  "doorCount": 4,
  "driveTrain": "v8"
}
```

\*\*Note: If you plan on not utilizing the CLI/Postman app and only wish to test endpoints through the browser, simply replace
values with a `:` preceding them to test while ensuring you have a local server up and running. (Ex: http://localhost:3000/vehicles/:id should be replaced with http://localhost:3000/vehicles/1234

### /vehicles/:id

| Description             | URL Structure | Params | Payload | Status Code | Error |
| ----------------------- | ------------- | ------ | ------- | ----------- | ----- |
| Get vehicle information | /vehicles/:id | None   | None    | 200 - OK    |       |

### /vehicles/:id/doors

| Description            | URL Structure       | Params | Payload | Status Code | Error |
| ---------------------- | ------------------- | ------ | ------- | ----------- | ----- |
| Get door security info | /vehicles/:id/doors | None   | None    | 200 - OK    |       |

### /vehicles/:id/fuel

| Description                | URL Structure      | Params | Payload | Status Code | Error |
| -------------------------- | ------------------ | ------ | ------- | ----------- | ----- |
| Get fuel percentage levels | /vehicles/:id/fuel | None   | None    | 200 - OK    |       |

### /vehicles/:id/battery

| Description            | URL Structure         | Params | Payload | Status Code | Error |
| ---------------------- | --------------------- | ------ | ------- | ----------- | ----- |
| Get battery percentage | /vehicles/:id/battery | None   | None    | 200 - OK    |       |

### /vehicles/:id/engine

| Description       | URL Structure        | Params | Payload | Status Code | Error |
| ----------------- | -------------------- | ------ | ------- | ----------- | ----- |
| Start/stop engine | /vehicles/:id/engine | None   | None    | 200 - OK    |       |

Title - the name of your API call (ex. Show All users) - use verbs that match request type and plurality - Any additional info such as description
URL - URL structure (path only, no root URL)
ex. /users or /users:id or /users?id=:id
Method
URL Params - If URL parameters exist, specify them in according with name mentioned in the URL method
Data params - Body payload - Example payload
Success Response
Code: 200
Content: { object }
Error response - Example of Error response body

Sample call and response

Available endpoints
Example requests
Description of the request
What does the request body look like
What does the response body look like

Screenshots
Running the program

Errors
What are some of the error messages
Description of:
Code - Title - Description
200 OK The request was successful
201 Created The resource was successfully created
400 Bad Request Bad request
404 Not found Resource does not exist

Resources
Other things to look at

Getting started
Dependencies for project
