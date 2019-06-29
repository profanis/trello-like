## n-tier architecture with node.js - express - mongo and mongoose

### Prensetation Layer

* Controllers
    
    The code of the routes/endpoints. This layer is dumb and should not have any logic. If needed could orchestrate multiple services. 

    _knowledge of: payloads_

* Payloads

    It has the structure of the json that we should return on our api calls.
    
    _knowledge of: payloads_

### Business Layer
* Services

    All the business logic belongs here

    _knowledge of: payloads, models_

### Data Layer
* Models

    This is the database layer. We should define here the schemas of our mongo documents
    
    _knowledge of: models_
* Repos

    It has the code that is reponsible to communicate with the database

    _knowledge of: models_

### Common

* Mappers

    _knowledge of: payloads, models_


**Note:** The **_"knowledge of:"_** is very important as it points out the knowledge of each layer. This gives us an advantage of having a clear separation of concerns (SoC) which makes the code easier to extend, maintain.

## Endpoints


> GET /demo

Get a list of demo items

--- 

> GET /demo/:id

Get an item by id

--- 

> POST /demo

Create a demo item

--- 

> PUT /demo/:id

Update a demo item

--- 

> DELETE /demo/:id

Delete a demo item

--- 