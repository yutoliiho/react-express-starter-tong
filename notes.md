clone: run npm install & npm run client-install
run: npm run dev (run server+client concurrently)

dependencies:
\$ npm init
\$ npm i express concurrently

dev dependency:
\$ npm i nodemon --save-dev

<!-- package.json -->

line 7:
"start": "node server.js",
"server": "nodemon server.js"

<!-- create server.js, the backend --> create server.js under /react_express_selfmaking, run "touch server.js"

const express = require('express');
const app = express();

// to make sure it's working on port 5000:
app.get('/api/customers', (req, res) => {
// res.send('hello react_express_selfmaking...!');
const customer = [
{
id: 1,
firstName: 'Alexander',
lastName: 'Auchter',
},
// ...
];
res.json(customer);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`);
});

in terminal:
\$ npm run server to start nodemon server.js

<!-- res.send() ||  res.json() -->

res.send uses content-type:text/html
res.json uses content-type:application/json

<!-- react-app -->

in a different terminal:
$ sudo npm i -g create-react-app (install create-react-app from whatever, like installing that package... like nodemon)
$ create-react-app client (install create-react-app that is named client or you can name it whatever, then it will be created in the client folder)

<!-- client/package.json -->

line 19:
"proxy": "http://localhost:5000/",
(in client/package.json after "script": {blablabla} )

$ cd client
$ npm start
// now react front-end is running on port 3000, and back-end is running on port 5000, terminal 1 & 2. (to make them run concurrently is later on..! now make sure front & back works fine seperately first...!)

<!-- directory -->

in client/src create the following:
component/customer/customers.js (need basic structure of react component, so copy App.js )
component/customer/customers.css (copy App.css)

<!-- client/src/component/customer/customers.js -->

import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
render() {
return (

<div>
<h2>Customer List</h2>
</div>
);
}
}

export default Customers;

<!-- client/src/App.js --> import Customer to App.js

import Alex from './components/customers/alex';

<!-- to make calls to the backend   +   client/src/component/customer/customers.js -->

// backend call:
before render()..
constructor() {
super();
this.state = {
customers: [],
};
}

componentDidMount() {
fetch('/api/customers')
.then((res) => res.json())
.then((customers) => this.setState({ customers }));
}

// rendering it to the front end:

<ul>
    {this.state.customers.map((e) => (
    <li key={e.id}>
        {e.firstName} {e.lastName}
    </li>
    ))}
</ul>

<!-- run concurrently at the command line: package.json-->

line 9: (running client side)
"client": "cd client && npm start"
or [same!]
"client" : "npm start --prefix client"

line10: (running in develoment mode, client + server )
"dev": "concurrently \"npm run server\" \"npm run client\""

<!-- for installing dependencies in client -->

line7:
"client-install": "cd client && npm install",

整个 app 我又重新跑了一遍在： “react-express-starter-tong”， 没有什么问题。 (https://www.youtube.com/watch?v=v0t42xBIYIs)
