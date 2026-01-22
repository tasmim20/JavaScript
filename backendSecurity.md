1.Question: What is CORS and why is it needed?
Answer:
“I used CORS to allow only my frontend domain to access the backend APIs. This prevents unauthorized websites from calling the API.”

2.SQL / NoSQL Injection – Example + Answer
Question: How do you prevent injection attacks?

Answer:
“I prevent injections by validating input and using ORMs like Prisma and Mongoose instead of raw queries.”

Example:
Never directly using user input in database queries.

3.Question: What are XSS and CSRF?

Answer:
“XSS allows attackers to inject scripts, and CSRF forces users to perform unwanted actions. I handle them using validation, secure cookies, and proper headers.”

Example:
Using HTTP-only cookies and CSRF tokens.

4.Question: How do you manage sensitive data?

Answer:
“I store secrets like database URLs in environment variables and never commit them to Git.”

Example:
Using .env files and different configs for dev and prod

5.Question: Why do you use input validation?
Answer:
“I used Zod to validate request data before processing it. This prevents invalid data and improves API reliability.”
Example:
Validating user registration inputs like email and password.

6.Question: Why is logging important?
Answer:
“I use logging to track errors and understand system behavior in production. It helps debug issues faster.”

7.Question: Why use reusable services?

Answer:
“I created reusable services for common logic like authentication and email sending. This reduces duplication.”

Example:
One email service used across multiple modules.

8.Question: What is your experience with code reviews?

Answer:
“I participate in code reviews to improve code quality and learn best practices. I also refactor code to make it cleaner and more maintainable.”
Example:
Optimizing duplicated logic into shared services.

**XSS (Cross-Site Scripting)attacks the user’s browser=bad code runs on the website
XSS is when a hacker puts bad JavaScript code into a website, and that code runs in other users’ browsers.
👉 It can steal login information or change the page.
CSRF(Cross-Site Request Forgery) abuses the user’s login session= ser is fooled into sending a request.
CSRF is when a hacker tricks a logged-in user into doing something they didn’t want to do.
👉 Like changing a password or sending a request without the user knowing.**
