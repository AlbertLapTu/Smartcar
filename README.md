# Overview

Welcome to the Car API!

This mini API application provides a method of interfacing with General Motors' (GM) car api endpoints
by using Smartcar's API.

This application can check your fuel/battery levels, check if doors are unlocked, get general vehicle
information in addition to allowing you to start/stop your vehicle remotely.

This API is organized around REST principles [Read more about REST here](https://restfulapi.net/),
though users with minimal REST experience will still be able to follow along.

## Prerequisites

- Node.JS (as of writing this, Node is on v10.15.3) To check which node version you have, open up your terminal of choice and type:

(works both on Windows/OSX)

> node -v

- Postman (optional) - Postman is an HTTP client which allows users to easily test, interact with API's.
  [Download here](https://www.getpostman.com/)

## Installation

To install project dependencies, ensure you are at the root directory of the project.

Open up your terminal and type:

> npm install

### Tests

To run the test suite, first install the dependencies, then run `npm run watch` to ensure that all tests are ran, and will
continuously run on every save event.

### Language Support

As of August 22nd, 2019 this application only supports a NodeJS environment.
