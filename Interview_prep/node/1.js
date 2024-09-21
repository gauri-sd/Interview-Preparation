const Q1 = `
1. What is CORS? How to add headers? Why do we use it?`
   
 const A1 = `
   CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict
   cross-origin HTTP requests initiated from scripts running in the browser. Cross-origin requests occur when a web
   application hosted at one origin (domain, protocol, or port) makes a request to a different origin.
   
   To add headers for CORS, the server needs to include specific HTTP headers such as Access-Control-Allow-Origin,
   Access-Control-Allow-Methods, Access-Control-Allow-Headers, etc.
   
   CORS is used to enable secure communication between web applications hosted on different origins while
   preventing unauthorized access to sensitive data. It helps protect against cross-site request forgery (CSRF) and
   other security threats.
`;

const Q2 = `
2. What is a RESTful API? How does it work?`

 const A2 = `
   A RESTful API (REST API) is an application programming interface (API) that adheres to the principles of REST
   (Representational State Transfer). It provides a standard way for software applications to communicate over the
   internet or a network by using standard HTTP methods such as GET, POST, PUT, DELETE, etc., and following RESTful principles.
   
   Here's how REST APIs work:
   - Stateless Communication: Each request from a client to the server contains all the information needed to understand
     and process the request. The server does not store any client state between requests, simplifying server implementation
     and enhancing scalability and reliability.
   - Resource-Based: Resources are the key abstraction in a RESTful API, identified by unique URIs or URLs. Clients
    interact with resources using standard HTTP methods to perform CRUD operations.
   - Uniform Interface: RESTful APIs use a uniform interface for communication between clients and servers, including
    standard HTTP methods, resource URIs, and representations of resources (e.g., JSON, XML).
   - Hypermedia as the Engine of Application State (HATEOAS): Clients can navigate the API dynamically by following
   hyperlinks embedded in resource representations, enabling them to discover and interact with resources without
   prior knowledge of their URIs.
`;

const Q3 = `
3. How do you do error logging in your Node.js application?`

    const A3 = `:
   Error logging is essential for monitoring and troubleshooting. There are various ways to implement error logging,
    ranging from basic console logging to using dedicated logging libraries like Winston or Bunyan.
`;

const Q4 = `
4. How do you do debugging in your Node.js application?`

    const A4 = `:
   Debugging Node.js applications typically involves using a combination of built-in debugging tools, logging, and
   third-party tools. Here's a high-level overview of the process:

   - Console.log: Adding console.log statements strategically throughout the code to print out variable values

   - Debugger Breakpoints: Inserting the debugger statement in the code to break execution at that point and give a
     debugging prompt in the terminal if running the code with the --inspect flag.

   - Logging Libraries: Utilizing logging libraries like Winston or Bunyan to log messages

   - Third-Party Debugging Tools: Using third-party debugging tools and services like New Relic or Sentry, which provide
     advanced monitoring, debugging, and error tracking capabilities for Node.js applications.
`;

const Q5 = `
5. Explain everything about JWT token?`

    const A5 = `:
   JWT (JSON Web Token) is a compact, URL-safe way of representing claims to be transferred between parties.
   It consists of three parts: Header, Payload, and Signature.

   JWTs are self-contained and stateless, making them efficient for distributed systems. They are commonly used for
   authentication and authorization in web applications, mobile apps, and APIs.
   However, proper handling and security practices are essential, such as using strong cryptographic algorithms and 
   securely storing keys.
`;

const Q6 = `
6. What is token and session authentication?`

    const A6 = `:
   Session-Based Authentication:
   - Overview: In session-based authentication, when a user logs in, the server creates a session for that user,
     typically including a unique session identifier (session ID) and relevant user data. The session ID is stored in a
     cookie on the client side and sent with each subsequent request to the server for validation.

   - Process: After login, the server validates the user's credentials, creates a session, and sends the session ID to the
     client. Subsequent requests include the session ID for server validation, and access control is granted based on the
     session's validity.

   Token-Based Authentication:
   - Overview: In token-based authentication, when a user logs in, the server issues a token containing relevant user
     information. The token is digitally signed by the server and sent to the client for subsequent requests. The client
     includes the token in the request's Authorization header, and the server validates the token to grant access.

   - Process: After login, the server generates a token, sends it to the client, and subsequent requests include
     the token. The server validates the token's signature and grants access based on its validity.
`;

const Q7 = `
7. What are the benefits of microservices architecture?`

    const A7 = `:
   Microservices architecture offers several benefits, including:
   - Scalability: Each service can be scaled independently based on demand, leading to better resource utilization.
   - Flexibility: Microservices allow for technology diversity, enabling teams to choose the best tools and technologies
     for each service's requirements.
   - Resilience: Failure in one service does not affect the entire system, as other services can continue to operate
     independently.
`;

const Q8 = `
8. What are the differences between SQL and NoSQL databases?`

    const A8 = `:
   SQL databases use a relational data model with tables and predefined schemas, while NoSQL databases use various data
   models like document, key-value, columnar, or graph. SQL databases are typically more suitable for structured data
   and complex queries, while NoSQL databases are better suited for distributed, high-volume data with schema flexibility.
`;

const Q9 = `
9. What is the role of a load balancer in a web application architecture?`

    const A9 = `:
   A load balancer distributes incoming client requests across multiple servers to ensure optimal resource utilization
   and prevent overload on any single server. It improves system availability by routing traffic away from failed or
   unhealthy servers and enables horizontal scalability by dynamically adding or removing server instances based on demand.
`;

const Q10 = `
10. What are the ways of communication between microservices?`

    const A10 = `:
   Microservices communicate with each other through various protocols and mechanisms, including:

   1. HTTP/REST: One of the most common ways of communication between microservices is through HTTP using RESTful APIs.
      Each microservice exposes a set of endpoints that other microservices can interact with using standard HTTP methods
      such as GET, POST, PUT, DELETE.

   2. Messaging Queues: Microservices can communicate asynchronously using messaging queues such as RabbitMQ, Kafka, or
      Amazon SQS. Messages are sent to a queue by one microservice and received by another microservice for processing.

   3. gRPC: gRPC is a high-performance, open-source RPC (Remote Procedure Call) framework developed by Google. It enables
      microservices to communicate using a binary protocol over HTTP/2, allowing for efficient and low-latency communication
      between services.

   4. Event-Driven Architecture: Microservices can communicate through events using event-driven architecture patterns
      such as publish-subscribe or event sourcing. Events are emitted by one microservice and consumed by other
      microservices that are interested in processing them.

   5. Service Mesh: Service mesh technologies like Istio or Linkerd provide a dedicated infrastructure layer for managing
      communication between microservices. They handle service discovery, load balancing, encryption, and monitoring,
      allowing developers to focus on application logic.

   Each communication method has its advantages and use cases, and the choice depends on factors such as performance
   requirements, scalability, and the complexity of the microservices architecture.
`;

