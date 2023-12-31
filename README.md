# Person API for CRUD Operations on "Person" Resource

Welcome to the README for the Person API project. This API performs CRUD operations on a "Person" resource using a MongoDB database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository to your local machine:

  ```bash
  git clone https://github.com/patrickishaf/json-endpoint.git
  ```

2. Navigate to the project directory:
  ```bash
  cd json-endpoint
  ```

3. Install the project dependencies:
  ```bash
  npm install
  ```

4. Create a .env file in the project's root directory to store environment variables:
  ```bash
  MONGODB_URI=mongodb://localhost/your-database-url
  ```

5. Start the server
  ```
  npm start
  ```

The API should now be running on http://localhost:3000 (or the port specified in your .env file).

## API Endpoints
Here are the CRUD endpoints available:

- **GET** */api/:user_id* : Get details for a specific person by ID.
- **POST** */api/* : Create a new person.
- **PATCH** */api/:id* : Update a person by ID.
- **DELETE** */api/:id* : Delete a person by ID.

## Use Case Diagram

![UML diagrams](https://github.com/patrickishaf/json-endpoint/assets/56861840/ee93af51-5fdc-4dd7-a6e1-638339ad37d7)


For detailed API documentation, please refer to the DOCUMENTATION.md file.

## Testing the API
You can test the API using Postman. The steps are as follows:

1. View the documentation using this link

https://documenter.getpostman.com/view/27707407/2s9YC5wruy

2. Import the postman collection

3. Click on the dropdown of the collection and select "generate tests"

4. Locate "Run Collection" at the top-right corner of postman

## Acknowledgments
Special thanks to Zuri and the mentors.





