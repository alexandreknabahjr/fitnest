# 🥦 FitNest

FitNest is an API designed to enable gyms to efficiently track their clients' workout plans and meals.

## 👨🏻‍💻 Built With

* 🔴 NestJS: a framework for building efficient, scalable Node.js web applications;
* △ Prisma: a next-generation object–relational mapper (ORM);
* 💎 Zod: TypeScript-first schema validation with static type inference;
* 🗂️ PostgreSQL: a powerful, open source object-relational database system;
* 🔮 Insomnia: API Client for REST, GraphQL, GRPC and OpenAPI design tool for developers

## ✅ What has been implemented so far

### 🏋🏻‍♀️ Client:

* We add a client to the system. Note: the client won't be added if their email address exists in the gym's database.
* We retrieve a list of all the gym's clients;
* We find a client through their ID;
* We update a client based on their email and address;
* We remove a client based on their ID;
* We retrieve a list of the gym's clients along with their information (workouts, meals, profile).

