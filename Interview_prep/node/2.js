const Q11 = ` What is AWS Lambda? When to Use AWS Lambda, Why Use AWS Lambda: Storage Capacity:`;
const A11 = `

AWS Lambda is a serverless compute service that runs your code in response to events and automatically
manages the compute resources for you, so you don't need to provision or manage servers.

When to Use AWS Lambda:

- Event-Driven Applications: When your application needs to respond to events in real-time, such as
requests, file uploads, database changes, etc.
- Microservices: It's useful for breaking down large applications into smaller, more manageable pieces.
- Scheduled Tasks: For running code on a schedule using services like CloudWatch Events.
- Data Processing: For processing data stored in various AWS services like S3, DynamoDB, etc.
- IoT: Handling data streams from IoT devices.
- Chatbots: Handling backend tasks for chat applications

Why Use AWS Lambda:
- No Server Management: AWS Lambda automatically scales and manages the infrastructure for you.
- Cost-Effective: You pay only for the compute time you consume.
- Scalability: Scales automatically in response to incoming traffic or events.
- Integration: Easily integrates with other AWS services and third-party services.
- Quick Deployment: Allows rapid deployment of code updates without downtime.

Storage capacity:
AWS Lambda itself doesn't provide persistent storage directly attached to the function instance. However,
 it can access other AWS storage services like Amazon S3 (for object storage), Amazon RDS (for databases),
  DynamoDB (NoSQL database), etc., to store and retrieve data.
`;

const Q12 = `What is Amazon EC2, and what are some common use cases?`;
const A12 = `
    - Amazon EC2 (Elastic Compute Cloud) is a web service that provides scalable, resizable virtual servers 
    in the cloud. Users can select instance types, operating systems, storage, and networking to match their 
    needs.
    
    Common Use Cases:
    - Hosting web and application servers.
    - Running batch processing and data analysis jobs.
    - Hosting enterprise applications and databases.
    - Developing and testing applications.`
