# Next.js Html-to-Pdf

## Demo

https://next-html-to-pdf.vercel.app/

## API
 
### Host Name

https://next-html-to-pdf.vercel.app/
###  `/api/pdf`

* **Method:** `GET`

* **Query Parameters:**

| Field | Type | Description |
| :---: | :---: | :--- |
| title | String | Title of the PDF |

* **Request Example:**

`https://[HOST_NAME]/api/pdf?title=abc`  

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
|  -  | Buffer | PDF in binary |

* **Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| message | String | Error message. |

* **Error Response Example:**

```json
{ "message": "Unexpected server error" }
```
## Installation

1. `$ npm install`

2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage

1. `$ npm run dev`: starts a Next.js server in development mode

2. `$ npm run build`: builds the application for production usage

3. `$ npm run start`: starts a Next.js server in production mode

4. `$ npm run lint`: manually checks files inside src folder

## Deploy to cloud platform

[Vercel](https://vercel.com/) support the deployment of `Next.js`

## Notes:

1. Fix format error automatically on save

2. Use Aribnb lint rule

## Refs:

1. [Origial idea about local server pdf generation](https://www.npmjs.com/package/html-pdf-node-ts)

2. [About Solving Bugs while running CI/CD: Run "PUPPETEER_PRODUCT=firefox npm install" or "PUPPETEER_PRODUCT=firefox yarn install"](https://github.com/vercel/vercel/discussions/4903)

3. [next-typescript-boilerplate](https://github.com/andy770921/next-typescript-boilerplate)

4. [PDF file download using Axios](https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios)