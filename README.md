## Problem Statement

Create a node server which responds to one and only one route : GET /I/want/title
This route expects a list of websites addresses in query string format e.g.

/I/want/title/?address=google.com
etc.

The number of addresses can be more than one.

The route will make request to each of the address passed to it. It will parse out the <title></title> tags, render them in html and send back the html in response. e.g. the response to above #3 example would be:


Currently the problem is being successfully implemented using **node.js callbacks**,  **async.js ** and **promises** .


## Tasks

1 - Implement the above task using plain node.js callbacks (you can use express or http or any other helper module but nothing which absracts control flow).

2 - Implement the above using some kind of flow library e.g. async.js or step.js.

3 - Implement the above using Promises. You could use any library e.g. RSVP or Q.


## Install
To install the dependencies:

    npm install

For error related to express (Cannot find module 'express'):

    npm install express

Install RSVP module

    npm install rsvp


  



**Task 1 Route**

```
http://localhost:3000/I/want/task1/title/?address=google.com
http://localhost:3000/I/want/task1/title/?address=http://yahoo.com
http://localhost:3000/I/want/task1/title/?address=google.com&address=www.dawn.com/events/

```
**Task2 Route**
```
http://localhost:3000/I/want/task2/title/?address=http://yahoo.com
http://localhost:3000/I/want/task2/title/?address=google.com&address=www.dawn.com/events/
http://localhost:3000/I/want/task2/title/?address=google.com
```
**Task3 Route**
```
http://localhost:3000/I/want/task3/title/?address=google.com
http://localhost:3000/I/want/task3/title/?address=http://yahoo.com
http://localhost:3000/I/want/task3/title/?address=google.com&address=www.dawn.com/events/
etc.

The number of addresses can be more than one.


For all other routes, the server should return HTTP code 404 .

Please make sure to add error handling e.g.

/I/want/task1/title/?address=asdasdasd should return <li> asdasdasd - NO RESPONSE </li>
