# 🥦 FitNest

FitNest is an API designed to enable gyms to efficiently track their customers' workout plans and meals.

## 👨🏻‍💻 Built With

* 🔴 NestJS: a framework for building efficient, scalable Node.js web applications;
* △ Prisma: a next-generation object–relational mapper (ORM);
* 💎 Zod: TypeScript-first schema validation with static type inference;
* 🗂️ PostgreSQL: a powerful, open source object-relational database system;
* 🔮 Insomnia: API Client for REST, GraphQL, GRPC and OpenAPI design tool for developers

## ✅ What has been implemented so far

### 🏋🏻‍♀️ Customer

* We add a customer to the system. Note: the customer won't be added if their email address exists in the gym's database.
* We retrieve a list of all the gym's customers;
* We find a customer through their ID;
* We update a customer based on their email and address;
* We remove a customer based on their ID;
* We retrieve a list of the gym's customers along with their information (workouts, meals, profile).

### 📋 Profile

* We connect a profile to an existing customer;
* We retrieve a list of all the gym's customer's profiles;
* We remove a profile on its ID;

### 🥗 Meal

* We connect a meal to an existing customer;
* We retrieve a list of meals along with the customers who will eat them.

### 💪 Workout

* We connect a workout session to an existing customer;
* We retrieve a list of workout sessions along with the customers who will go through them.
* We remove a workout session based on its ID.
