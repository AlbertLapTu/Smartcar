# API Documentation

## Available Endpoints

**Vehicles**

The vehicles endpoint returns information about the current vehicle.

Please note that the only vehicle IDs which will return any kind of valid response will be vehicleId **1234** and vehicleId **1235**.

<h3> Vehicle endpoints</h3>

| REST Verb | Endpoint              |
| --------- | --------------------- |
| GET       | /vehicles/:id         |
| GET       | /vehicles/:id/doors   |
| GET       | /vehicles/:id/fuel    |
| GET       | /vehicles/:id/battery |
| POST      | /vehicles/:id/engine  |

### Sample requests

Sample requests:

```
Using cURL

$ curl http://localhost:3000/vehicles/
       -X POST
       -H 'Content-Type: application/json'
       -d '{"action": "START"}'

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

# Endpoints

### /vehicles/:id

| Description             | URL Structure | Params | Payload | Status Code | Error |
| ----------------------- | ------------- | ------ | ------- | ----------- | ----- |
| Get vehicle information | /vehicles/:id | None   | None    | 200 - OK    | 404   |

**Example response**

```
{
  "vin": "1213231",
  "color": "Metallic Silver",
  "doorCount": 4,
  "driveTrain": "v8"
}
```

### /vehicles/:id/doors

| Description            | URL Structure       | Params | Payload | Status Code | Error |
| ---------------------- | ------------------- | ------ | ------- | ----------- | ----- |
| Get door security info | /vehicles/:id/doors | None   | None    | 200 - OK    | 404   |

**Example response**

```
[
  {
    "location": "frontLeft",
    "locked": true
  },
  {
    "location": "frontRight",
    "locked": true
  },
  {
    "location": "backLeft",
    "locked": true
  },
  {
    "location": "backRight",
    "locked": false
  }
]
```

### /vehicles/:id/fuel

| Description                | URL Structure      | Params | Payload | Status Code | Error |
| -------------------------- | ------------------ | ------ | ------- | ----------- | ----- |
| Get fuel percentage levels | /vehicles/:id/fuel | None   | None    | 200 - OK    | 404   |

**Example response**

```
{
  "percent": 30.2
}
```

### /vehicles/:id/battery

| Description            | URL Structure         | Params | Payload | Status Code | Error |
| ---------------------- | --------------------- | ------ | ------- | ----------- | ----- |
| Get battery percentage | /vehicles/:id/battery | None   | None    | 200 - OK    | 404   |

**Example response**

```
{
  "percent": 50.3
}
```

### /vehicles/:id/engine

| Description       | URL Structure        | Params | Payload                        | Status Code | Error |
| ----------------- | -------------------- | ------ | ------------------------------ | ----------- | ----- |
| Start/stop engine | /vehicles/:id/engine | None   | { "action": "START" / "STOP" } | 201 - OK    |       |

{
"status": "success|error"
}

Screenshots

Errors
What are some of the error messages
