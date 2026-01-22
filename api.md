REST API:
"A REST API is a way for a client (like a web or mobile app) and a server to communicate over the web. It uses standard HTTP methods like GET, POST, PUT, and DELETE, usually exchanging data in JSON format."

FastAPI:
"FastAPI is a Python framework used to quickly build REST APIs. It provides fast performance, automatic data validation, and interactive documentation, making it easier to develop backend services."

# What are HTTP status codes and their meaning?

Code 200: success.
Code 201:resource has been successfully created.
Code 204: no content in the response body.
400 Bad Request,
401 Unauthorized,
403 Forbidden,
404 Not Found,
500 Internal Server Error,
502 Bad Gateway,
503 Service Unavailable,

# The main parts of an HTTP response

The main parts of the HTTP response are the HTTP version, Status line, HTTP Response Header, and HTTP Response body.

# What is a URI?

URI stands for ‘Uniform Resource Identifier.

# What is caching in the REST API?

REST API stores a copy of a server response in a particular location of computer memory to retrieve the server response fast in the future. This method is temporary and called "catching."

# 1. What is REST?

REST stands for Representational State Transfer.
REST is a set of rules to design web services so that clients (like apps or browsers) can communicate with the server using HTTP.
1.Stateless: Server doesn’t remember anything. Each request has all the info it needs.
2.Resources: Everything is treated as a resource with a URL.

Example: /books = all books, /books/1 = book with ID 1
3.HTTP Methods: Standard actions:
GET → read data
POST → create data
PUT → Update data (replace)
PATCH → Update part of data
DELETE → delete data
4.Consistent URLs: Predictable and clean URLs for each resource.
5.Client-Server Separation: Frontend handles UI, backend handles data.

Imagine a library app:
/books → list all books
/books/1 → get details of one book
POST /books → add a new book
PUT /books/1 → update a book
DELETE /books/1 → remove a book

RESTful API:
A RESTful API is an API that follows REST principles. It allows the client to interact with resources (data) using standard HTTP methods.

# 2. What is a REST API?

An API is an application programming interface, which is a software-to-software interface that allows otherwise separate applications to interact and share data. In a REST API, all data is treated as resources, each one represented by a unique uniform resource identifier (URI).

# 3. What do you mean by RESTful web services?

REST API is also known as RESTful web services that follow the REST architecture.

# 4. What are cache-control headers?

Cache-control headers are used to control catching and to attain caching ability. The most commonly used cache-control headers are public, private, and No-Store.

# 5. What are the features of RESTful web services?

REStful web services have the following unique features:
Client-server decoupling
Communication support
Lightweight
Uniform interface
Stateless
Layered system
Cacheable
Code on demand

# 6. What is the definition of messaging in terms of RESTful web services?

In REST API web services, when a REST client wants to send a message to the server, it can be sent in an HTTP request form, and the same applies to the server. This kind of communication is called messaging in REST.

# 7. What’s a real-world example of a REST API?

Public REST APIs are harnessed by weather apps to display weather information and share the related data.
Airlines use APIs to expose the flight times and prices to allow travel and ticketing sites for businesses.
Public transportation services use APIs to make their data publicly open to make it available for mapping and navigation apps in real-time.

# 8.Different types of API architectures

There are other two API architectures used, SOAP (Simple Object Access Protocol), and RPC (Remote Procedure Call)

# 9. What is the difference between REST and SOAP?

REST(Representational State Transfer)

It is an architectural design pattern used to develop web services.
It is faster in speed and more cacheable.
It inherits only the security measures concerning the protocol that have been implemented.
SOAP (Simple Object Access Protocol)

It is a strict protocol used to build secure APIs.  
It is slower in speed and not cacheable.  
It is able to define its own security measures

# 10. How do you keep REST APIs secure?

REST APIs can be kept secure with the help of safety measures such as Authentication and authorization, API Server Validation, TSl/SSL Encryption, Rate-limiting for DDoS attacks, and sensitive information such as username, password, or authentication token should not be visible in URIs

# 11. What is a resource?

In REST, A resource is an object with a label and accessible on the server. Resources consist of associated data, a list of methods, and a relationship with other resources on the server.

# 12. What is a URI?

URI stands for ‘Uniform Resource Identifier.

# 13. What is caching in the REST API?

REST API stores a copy of a server response in a particular location of computer memory to retrieve the server response fast in the future. This method is temporary and called "catching."

# Important aspects of RESTful web services implementation.

a.ResourcesRequest
b.Headers
c.Request Body
d.Response Body
e.Status codes

**
link: https://www.simplilearn.com/rest-api-interview-questions-answers-article
**
