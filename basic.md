❓ What is ORM?

Easy answer:
ORM (Object-Relational Mapping) is a tool that lets us work with a database using code (objects) instead of writing raw SQL queries.

👉 We can create, read, update, and delete data using JavaScript/TypeScript.

SELECT \* FROM users WHERE id = 1;
With ORM: user.findById(1);
Why do we use ORM?
1.Less SQL writing
2.Cleaner and readable code
3.Safer (helps prevent SQL injection)
4.Easy database management
ORM lets developers interact with databases using objects instead of raw SQL queries.

❓ When to use PostgreSQL and when to use MongoDB?
🟦 Use PostgreSQL when:
Data has fixed structure (tables, rows, columns)
You need relations between data (users, orders, payments)
Data consistency is very important
You need complex queries and joins
You are building financial, business, or enterprise systems
👉 Example:
Banking system, e-commerce orders, billing systems

🟩 Use MongoDB when:
Data structure is flexible or changing
You store JSON-like documents
You need fast development
You don’t need complex joins
You are working with logs, chats, posts, content
👉 Example:
Chat apps, social media posts, CMS, activity logs

**PostgreSQL is best for structured, relational data, while MongoDB is best for flexible, document-based data.**
