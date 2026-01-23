Event Loop in JS

Definition:
The Event Loop is the mechanism that allows JavaScript (single-threaded) to handle asynchronous tasks without blocking the main thread.

How it works (in story terms):

Call Stack → what JS is currently executing (chef’s plate).

Heap → memory storage (fridge).

Web APIs → browser/server helpers for async tasks (oven, blender).

Callback Queue → completed async tasks waiting for JS to pick up (orders waiting).

Event Loop → checks if call stack is empty, then moves tasks from queue to stack (manager assigning orders).

Microtasks vs Macrotasks:

Microtasks (Promises) → VIP orders, run first

Macrotasks (setTimeout, setInterval) → normal orders, run after microtasks

JavaScript Runtime – Software Company Analogy
**1️⃣ Call Stack → Developer’s Active Tasks**
Each developer can work on one task at a time.
The call stack is like a developer’s current to-do list.
LIFO (Last In, First Out) → last task assigned is done first.
**2️⃣ Heap → Company Database**
The heap is like the company’s database/server.
All objects, arrays, and functions are stored here.
Developers pull data from the database when working.
**3️⃣ Web APIs → Specialized Teams / External Services**
Async operations (timers, API calls) are handled by specialized teams like QA, DevOps, or external services.
These teams work in parallel, so main developers don’t wait.
**4️⃣ Callback Queue → Task Inbox**
Completed async tasks are put in the task inbox (queue) for developers to pick up.
Developers only pick tasks from inbox when their current stack is empty.
**5️⃣ Event Loop → Project Manager**
Event loop = project manager monitoring the developers.
If a developer is free, manager assigns the next task from the inbox.
Ensures async tasks don’t block ongoing work.
**6️⃣ Microtasks vs Macrotasks**
Microtasks → Urgent Bug Fixes (Promises) → handled first, even if new normal tasks arrive.
Macrotasks → Regular Features / Reports (setTimeout, I/O) → handled after urgent bugs.
