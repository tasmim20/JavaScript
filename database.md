4️⃣ Explain Transactions in databases

Easy answer:

A transaction is a group of database operations that either all succeed or all fail.

Why important:
Ensures data consistency
Prevents partial updates

Example:
In a banking app, transferring money:
Subtract from sender
Add to receiver
Both must succeed, or none → use a transaction.
Keywords to mention in interviews:
ACID (Atomicity, Consistency, Isolation, Durability)

ACID (Atomicity, Consistency, Isolation, Durability):
ACID ensures database transactions are safe and reliable.
1.Atomicity: Either the whole transaction happens, or nothing happens. (Example: money transfer – if one step fails, rollback.)
2.Consistency: The database stays correct after a transaction. (Example: total balance stays correct.)
3.Isolation: Transactions don’t mess with each other. (Example: two people updating same account won’t cause errors.)
4.Durability: Once done, it’s permanent, even if the server crashes. (Example: money transferred is saved.)

What are ORM & ODM?
🧠 Easy meaning

ORM (Object Relational Mapper) → used with SQL databases--A tool to interact with SQL databases using objects instead of SQL.---Prisma
ODM (Object Document Mapper) → used with NoSQL databases--A tool to interact with NoSQL databases using schemas and documents.-- mongoose
