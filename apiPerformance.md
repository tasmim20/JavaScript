❓ What is caching? Why do we use it?

Answer:
Caching means storing frequently used data in memory so the server doesn’t need to fetch it from the database every time.
It improves response time, reduces database load, and makes APIs faster.

👉 Example: caching user profile data or common GET requests.Caching a product list or homepage data.

❓ What is rate limiting?

Answer:
Rate limiting restricts how many requests a user or IP can make in a specific time.
It protects APIs from abuse, DDoS attacks, and excessive usage.

👉 Example: allowing 100 requests per minute per IP.Limiting login attempts to avoid brute-force attacks.

❓ Why is pagination important for large datasets?

Answer:
Pagination prevents returning all records at once, which can slow down the API and increase memory usage.
It improves performance, response time, and user experience.

👉 Example: /users?page=1&limit=10

❓ What is the N+1 query problem?

Answer:
The N+1 problem happens when the app first fetches one main record and then runs additional queries for each related record.
This causes many unnecessary database queries and performance issues.

👉 Solution: use joins, populate, eager loading, or optimized queries.

❓ Difference between horizontal and vertical scaling?

Answer:

Vertical scaling: Increase server power (CPU, RAM).

Horizontal scaling: Add more servers and distribute traffic.
👉 Horizontal scaling is better for large, scalable systems.
“In small systems, vertical scaling is enough, but for production systems I prefer horizontal scaling by adding more servers and load balancing.”

3️⃣ How do you improve API performance?

Make APIs faster and more efficient by reducing server load and response time.

Techniques:
1.Caching: Store frequently requested data in memory (Redis)
2.Pagination & limiting: Return data in chunks instead of all at once
3.Optimize database queries: Avoid N+1 queries, use indexes
4.Compression: Enable gzip for API responses
5.Rate limiting & throttling: Protect server from overload
Example:Caching the homepage product list so the DB isn’t hit every request.
