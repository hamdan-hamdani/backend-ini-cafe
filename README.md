# Ini-Cafe Backend Express
![](https://img.shields.io/badge/Code%20Style-Standard-blue)
![](https://img.shields.io/badge/Dependencies-Express-informational)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) 
- Redis

## Installation

Clone this repository and then use the package manager npm to install dependencies.


```bash
npm install
```

## Setup .env example

Create .env file in your root project folder.

```env

DB_HOST = localhost
DB_USER = hamdan
DB_PASSWORD= Hamdan123!
DB_DATABASE= ini_cafe
PORT = 4000
SECRET_KEY = Hacker-dilarang-masuk
INSERT_PRODUCT = http://localhost:4000/uploads/
PORT_REDIS = 6379


```

## Run the app

Development mode

```bash
npm run dev
```

Deploy mode

## REST API

You can view my Postman collection [here](https://www.getpostman.com/collections/40b939c653a5e421f752) </br>
or </br>
[![run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/40b939c653a5e421f752)

## License
[MIT](https://choosealicense.com/licenses/mit/)