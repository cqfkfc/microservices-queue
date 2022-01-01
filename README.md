# microservices-queue

To start the service, type `npm run start`

To test the services (e.g. `create_user` service), install `Packet Sender` (or other tools)

- Name: `Create User` (or any other name)
- ASCII: ```124#{"pattern":"create_user",\n"data":{"email":"d@gmail.com","password":"12345678"},\n"id":"ce51ebd3-32b1-4ae6-b7ef-e018126c4cc4"}```
- Host: `127.0.0.1`
- Port: `8888`
- Expected response: ```116#{"response":"user with email: d@gmail.comis created.","isDisposed":true,"id":"ce51ebd3-32b1-4ae6-b7ef-e018126c4cc4"}```

