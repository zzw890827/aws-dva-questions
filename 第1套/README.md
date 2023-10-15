# AWS PAS 01

1. A company is implementing an application on Amazon EC2 instances. The application needs to process incoming transactions. When the application detects a transaction that is not valid, the application must send a chat message to the company's support team. To send the message, the application needs to retrieve the access token to authenticate by using the chat API. A developer needs to implement a solution to store the access token. The access token must be encrypted at rest and in transit. The access token must also be accessible from other AWS accounts. Which solution will meet these requirements with the LEAST management overhead?
   - [ ] A. Use an AWS Systems Manager Parameter Store SecureString parameter that uses an AWS Key Management Service (AWS KMS) AWS managed key to store the access token. Add a resource-based policy to the parameter to allow access from other accounts. Update the IAM role of the EC2 instances with permissions to access Parameter Store. Retrieve the token from Parameter Store with the decrypt flag enabled. Use the decrypted access token to send the message to the chat.
   - [ ] B. Encrypt the access token by using an AWS Key Management Service (AWS KMS) customer managed key. Store the access token in an Amazon DynamoDB table. Update the IAM role of the EC2 instances with permissions to access DynamoDB and AWS KMS. Retrieve the token from DynamoDDecrypt the token by using AWS KMS on the EC2 instances. Use the decrypted access token to send the message to the chat.
   - [ ] C. Use AWS Secrets Manager with an AWS Key Management Service (AWS KMS) customer managed key to store the access token. Add a resource-based policy to the secret to allow access from other accounts. Update the IAM role of the EC2 instances with permissions to access Secrets Manager. Retrieve the token from Secrets Manager. Use the decrypted access token to send the message to the chat.
   - [ ] D. Encrypt the access token by using an AWS Key Management Service (AWS KMS) AWS managed key. Store the access token in an Amazon S3 bucket. Add a bucket policy to the S3 bucket to allow access from other accounts. Update the IAM role of the EC2 instances with permissions to access Amazon S3 and AWS KMS. Retrieve the token from the S3 bucket. Decrypt the token by using AWS KMS on the EC2 instances. Use the decrypted access token to send the massage to the chat.

   <details>
      <summary>Answer</summary>

      C.
      - Designed for Secrets: Secrets Manager is purpose-built for managing secrets, making it an ideal solution for storing sensitive information like access tokens.
      - Encryption: Secrets Manager always encrypts secrets at rest and provides a straightforward mechanism to handle decryption upon retrieval.
      - Cross-account Access: Using a resource-based policy, Secrets Manager allows secrets to be accessed from other AWS accounts.
      - Rotation: One of the distinct features of Secrets Manager is the built-in capability to rotate secrets automatically, though it might not be necessary for this scenario.
      - Management Overhead: While Secrets Manager provides advanced features, using it for simply storing and retrieving a secret is quite straightforward. Additionally, the automatic handling of decryption reduces the complexity on the application side.
      - Cost: Secrets Manager is typically more expensive than Parameter Store, but cost was not a primary concern mentioned in the question.

   </details>

2. A company is running Amazon EC2 instances in multiple AWS accounts. A developer needs to implement an application that collects all the lifecycle events of the EC2 instances. The application needs to store the lifecycle events in a single Amazon Simple Queue Service (Amazon SQS) queue in the company's main AWS account for further processing. Which solution will meet these requirements?
   - [ ] A. Configure Amazon EC2 to deliver the EC2 instance lifecycle events from all accounts to the Amazon EventBridge event bus of the main account. Add an EventBridge rule to the event bus of the main account that matches all EC2 instance lifecycle events. Add the SQS queue as a target of the rule.
   - [ ] B. Use the resource policies of the SQS queue in the main account to give each account permissions to write to that SQS queue. Add to the Amazon EventBridge event bus of each account an EventBridge rule that matches all EC2 instance lifecycle events. Add the SQS queue in the main account as a target of the rule.
   - [ ] C. Write an AWS Lambda function that scans through all EC2 instances in the company accounts to detect EC2 instance lifecycle changes. Configure the Lambda function to write a notification message to the SQS queue in the main account if the function detects an EC2 instance lifecycle change. Add an Amazon EventBridge scheduled rule that invokes the Lambda function every minute.
   - [ ] D. Configure the permissions on the main account event bus to receive events from all accounts. Create an Amazon EventBridge rule in each account to send all the EC2 instance lifecycle events to the main account event bus. Add an EventBridge rule to the main account event bus that matches all EC2 instance lifecycle events. Set the SQS queue as a target for the rule.

   <details>
      <summary>Answer</summary>

      D.

   </details>

3. An application is using Amazon Cognito user pools and identity pools for secure access. A developer wants to integrate the user-specific file upload and download features in the application with Amazon S3. The developer must ensure that the files are saved and retrieved in a secure manner and that users can access only their own files. The file sizes range from 3 KB to 300 MB. Which option will meet these requirements with the HIGHEST level of security?
   - [ ] A. Use S3 Event Notifications to validate the file upload and download requests and update the user interface (UI).
   - [ ] B. Save the details of the uploaded files in a separate Amazon DynamoDB table. Filter the list of files in the user interface (UI) by comparing the current user ID with the user ID associated with the file in the table.
   - [ ] C. Use Amazon API Gateway and an AWS Lambda function to upload and download files. Validate each request in the Lambda function before performing the requested operation.
   - [ ] D. Use an IAM policy within the Amazon Cognito identity prefix to restrict users to use their own folders in Amazon S3.

   <details>
      <summary>Answer</summary>

      D.

   </details>

4. A company is building a scalable data management solution by using AWS services to improve the speed and agility of development. The solution will ingest large volumes of data from various sources and will process this data through multiple business rules and transformations. The solution requires business rules to run in sequence and to handle reprocessing of data if errors occur when the business rules run. The company needs the solution to be scalable and to require the least possible maintenance. Which AWS service should the company use to manage and automate the orchestration of the data flows to meet these requirements?
   - [ ] A. AWS Batch
   - [ ] B. AWS Step Functions
   - [ ] C. AWS Glue
   - [ ] D. AWS Lambda

   <details>
      <summary>Answer</summary>

      B.

   </details>

5. A developer has created an AWS Lambda function that is written in Python. The Lambda function reads data from objects in Amazon S3 and writes data to an Amazon DynamoDB table. The function is successfully invoked from an S3 event notification when an object is created. However, the function fails when it attempts to write to the DynamoDB table. What is the MOST likely cause of this issue?
   - [ ] A. The Lambda function's concurrency limit has been exceeded.
   - [ ] B. DynamoDB table requires a global secondary index (GSI) to support writes.
   - [ ] C. The Lambda function does not have IAM permissions to write to DynamoDB.
   - [ ] D. The DynamoDB table is not running in the same Availability Zone as the Lambda function.

   <details>
      <summary>Answer</summary>

      C.

   </details>

6. A developer is creating an AWS CloudFormation template to deploy Amazon EC2 instances across multiple AWS accounts. The developer must choose the EC2 instances from a list of approved instance types. How can the developer incorporate the list of approved instance types in the CloudFormation template?
   - [ ] A. Create a separate CloudFormation template for each EC2 instance type in the list.
   - [ ] B. In the Resources section of the CloudFormation template, create resources for each EC2 instance type in the list.
   - [ ] C. In the CloudFormation template, create a separate parameter for each EC2 instance type in the list.
   - [ ] D. In the CloudFormation template, create a parameter with the list of EC2 instance types as Allowed Values.

   <details>
      <summary>Answer</summary>

      D.

   </details>

7. A developer has an application that makes batch requests directly to Amazon DynamoDB by using the BatchGetltem low-level API operation. The responses frequently return values in the UnprocessedKeys element. Which actions should the developer take to increase the resiliency of the application when the batch response includes values in UnprocessedKeys? (Choose two.)
   - [ ] A. Retry the batch operation immediately.
   - [ ] B. Retry the batch operation with exponential backoff and randomized delay.
   - [ ] C. Update the application to use an AWS software development kit (AWS SDK) to make the requests.
   - [ ] D. Increase the provisioned read capacity of the DynamoDB tables that the operation accesses.
   - [ ] E. Increase the provisioned write capacity of the DynamoDB tables that the operation accesses.

   <details>
      <summary>Answer</summary>

      BD.
      - B: Exponential backoff is a standard error-handling strategy for network applications in which the client periodically retries a failed request over an increasing amount of time. The randomized delay is to ensure that retries from different clients don't all happen at the exact same time, causing another spike.
      - D: Increase the provisioned read capacity of the DynamoDB tables that the operation accesses.

   </details>

8. A company is running a custom application on a set of on-premises Linux servers that are accessed using Amazon API Gateway. AWS X-Ray tracing has been enabled on the API test stage. How can a developer enable X-Ray tracing on the on-premises servers with the LEAST amount of configuration?
   - [ ] A. Install and run the X-Ray SDK on the on-premises servers to capture and relay the data to the X-Ray service.
   - [ ] B. Install and run the X-Ray daemon on the on-premises servers to capture and relay the data to the X-Ray service.
   - [ ] C. Capture incoming requests on-premises and configure an AWS Lambda function to pull, process, and relay relevant data to X-Ray using the PutTraceSegments API call.
   - [ ] D. Capture incoming requests on-premises and configure an AWS Lambda function to pull, process, and relay relevant data to X-Ray using the PutTelemetryRecords API call.
   <details>
      <summary>Answer</summary>

      B.

   </details>

9. A company wants to share information with a third party. The third party has an HTTP API endpoint that the company can use to share the information. The company has the required API key to access the HTTP API. The company needs a way to manage the API key by using code. The integration of the API key with the application code cannot affect application performance. Which solution will meet these requirements MOST securely?
   - [ ] A. Store the API credentials in AWS Secrets Manager. Retrieve the API credentials at runtime by using the AWS SDK. Use the credentials to make the API call.
   - [ ] B. Store the API credentials in a local code variable. Push the code to a secure Git repository. Use the local code variable at runtime to make the API call.
   - [ ] C. Store the API credentials as an object in a private Amazon S3 bucket. Restrict access to the S3 object by using IAM policies. Retrieve the API credentials at runtime by using the AWS SDK. Use the credentials to make the API call.
   - [ ] D. Store the API credentials in an Amazon DynamoDB table. Restrict access to the table by using resource-based policies. Retrieve the API credentials at runtime by using the AWS SDK. Use the credentials to make the API call.

   <details>
      <summary>Answer</summary>

      A.

   </details>

10. A developer is deploying a new application to Amazon Elastic Container Service (Amazon ECS). The developer needs to securely store and retrieve different types of variables. These variables include authentication information for a remote API, the URL for the API, and credentials. The authentication information and API URL must be available to all current and future deployed versions of the application across development, testing, and production environments. How should the developer retrieve the variables with the FEWEST application changes?
    - [ ] A. Update the application to retrieve the variables from AWS Systems Manager Parameter Store. Use unique paths in Parameter Store for each variable in each environment. Store the credentials in AWS Secrets Manager in each environment.
    - [ ] B. Update the application to retrieve the variables from AWS Key Management Service (AWS KMS). Store the API URL and credentials as unique keys for each environment.
    - [ ] C. Update the application to retrieve the variables from an encrypted file that is stored with the application. Store the API URL and credentials in unique files for each environment.
    - [ ] D. Update the application to retrieve the variables from each of the deployed environments. Define the authentication information and API URL in the ECS task definition as unique names during the deployment process.

    <details>
      <summary>Answer</summary>

      A.

     </details>

11. A company is migrating legacy internal applications to AWS. Leadership wants to rewrite the internal employee directory to use native AWS services A developer needs to create a solution for storing employee contact details and high-resolution photos for use with the new application. Which solution will enable the search and retrieval of each employee's individual details and high-resolution photos using AWS APIs?
    - [ ] A. Encode each employee s contact information and photos using Base64 Store the information in an Amazon DynamoDB table using a sort key.
    - [ ] B. Store each employee's contact information in an Amazon DynamoDB table along with the object keys for the photos stored in Amazon S3.
    - [ ] C. Use Amazon Cognito user pools to implement the employee directory in a fully managed software-as-a-service (SaaS) method.
    - [ ] D. Store employee contact information in an Amazon RDS DB instance with the photos stored in Amazon Elastic File System (Amazon EFS).

    <details>
       <summary>Answer</summary>

       B.
       As the question says that we have to store high-resolution photos, the solution is to use the S3 here. Because, DynamoDb cannot be used to store anything that is above 400 KB.

    </details>

12. A developer is creating an application that will give users the ability to store photos from their cellphones in the cloud. The application needs to support tens of thousands of users. The application uses an Amazon API Gateway REST API that is integrated with AWS Lambda functions to process the photos. The application stores details about the photos in Amazon DynamoDB. Users need to create an account to access the application. In the application, users must be able to upload photos and retrieve previously uploaded photos. The photos will range in size from 300 KB to 5 MB. Which solution will meet these requirements with the LEAST operational overhead?
    - [ ] A. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos and details in the DynamoDB table. Retrieve previously uploaded photos directly from the DynamoDB table.
    - [ ] B. Use Amazon Cognito user pools to manage user accounts. Create an Amazon Cognito user pool authorizer in API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.
    - [ ] C. Create an IAM user for each user of the application during the sign-up process. Use IAM authentication to access the API Gateway API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.
    - [ ] D. Create a user’s table in DynamoDB. Use the table to manage user accounts. Create a Lambda authorizer that validates user credentials against the users table. Integrate the Lambda authorizer with API Gateway to control access to the API. Use the Lambda function to store the photos in Amazon S3. Store the object's S3 key as part of the photo details in the DynamoDB table. Retrieve previously uploaded photos by querying DynamoDB for the S3 key.

    <details>
       <summary>Answer</summary>

       B.

    </details>

13. A company receives food orders from multiple partners. The company has a microservices application that uses Amazon API Gateway APIs with AWS Lambda integration. Each partner sends orders by calling a customized API that is exposed through API Gateway. The API call invokes a shared Lambda function to process the orders. Partners need to be notified after the Lambda function processes the orders. Each partner must receive updates for only the partner's own orders. The company wants to add new partners in the future with the fewest code changes possible. Which solution will meet these requirements in the MOST scalable way?
    - [ ] A. Create a different Amazon Simple Notification Service (Amazon SNS) topic for each partner. Configure the Lambda function to publish messages for each partner to the partner's SNS topic.
    - [ ] B. Create a different Lambda function for each partner. Configure the Lambda function to notify each partner's service endpoint directly.
    - [ ] C. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure the Lambda function to publish messages with specific attributes to the SNS topic. Subscribe each partner to the SNS topic. Apply the appropriate filter policy to the topic subscriptions.
    - [ ] D. Create one Amazon Simple Notification Service (Amazon SNS) topic. Subscribe all partners to the SNS topic.
    <details>
       <summary>Answer</summary>

       C.
       <https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html>

    </details>

14. A financial company must store original customer records for 10 years for legal reasons. A complete record contains personally identifiable information (PII). According to local regulations. PII is available to only certain people in the company and must not be shared with third parties. The company needs to make the records available to third-party organizations for statistical analysis without sharing the PII. A developer wants to store the original immutable record in Amazon S3. Depending on who accesses the S3 document, the document should be returned as is or with all the PII removed. The developer has written an AWS Lambda function to remove the PII from the document. The function is named removePii. What should the developer do so that the company can meet the PII requirements while maintaining only one copy of the document?
    - [ ] A. Set up an S3 event notification that invokes the removePii function when an S3 GET request is made. Call Amazon S3 by using a GET request to access the object without PII.
    - [ ] B. Set up an S3 event notification that invokes the removePii function when an S3 PUT request is made. Call Amazon S3 by using a PUT request to access the object without PII.
    - [ ] C. Create an S3 Object Lambda access point from the S3 console. Select the removePii function. Use S3 Access Points to access the object without PII.
    - [ ] D. Create an S3 access point from the S3 console. Use the access point name to call the GetObjectLegalHold S3 API function. Pass in the removePii function name to access the object without PII.

    <details>
       <summary>Answer</summary>

       C.
       The best solution for the given requirements is to use an S3 Object Lambda function to remove the PII from the document. S3 Object Lambda is a new feature that allows the developer to add custom code to S3 GET requests. The developer can create an S3 Object Lambda function to remove the PII from the document and configure S3 to use the function whenever an object is requested from a specific access point. This way, depending on who accesses the document, the document will either be returned as is or with the PII removed, without having to store multiple copies of the document.
    </details>

15. A developer is deploying an AWS Lambda function. The developer wants the ability to return to older versions of the function quickly and seamlessly. How can the developer achieve this goal with the LEAST operational overhead?
    - [ ] A. Use AWS OpsWorks to perform blue/green deployments.
    - [ ] B. Use a function alias with different versions.
    - [ ] C. Maintain deployment packages for older versions in Amazon S3.
    - [ ] D. Use AWS CodePipeline for deployments and rollbacks.
    <details>
       <summary>Answer</summary>

       B.
       Using Lambda versioning and aliases, a developer can point to different versions of the function seamlessly. This feature allows for easy rollbacks and switching between different versions without having to redeploy the function. The other options involve more operational overhead and/or don't directly support the seamless rollback requirement.

    </details>

16. A developer has written an AWS Lambda function. The function is CPU-bound. The developer wants to ensure that the function returns responses quickly. How can the developer improve the function's performance?
    - [ ] A. Increase the function's CPU core count.
    - [ ] B. Increase the function's memory.
    - [ ] C. Increase the function's reserved concurrency.
    - [ ] D. Increase the function's timeout.

    <details>
       <summary>Answer</summary>

       B.
       By increasing the memory, you're also increasing the CPU power, which will help in processing a CPU-bound task faster. The other options don't directly improve the function's CPU processing capabilities.

    </details>

17. For a deployment using AWS Code Deploy, what is the run order of the hooks for in-place deployments?
    - [ ] A. BeforeInstall -> ApplicationStop -> ApplicationStart -> AfterInstall
    - [ ] B. ApplicationStop -> BeforeInstall -> AfterInstall -> ApplicationStart
    - [ ] C. BeforeInstall -> ApplicationStop -> ValidateService -> ApplicationStart
    - [ ] D. ApplicationStop -> BeforeInstall -> ValidateService -> ApplicationStart

    <details>
       <summary>Answer</summary>

       B.
       <https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-server>

    </details>

18. A company is building a serverless application on AWS. The application uses an AWS Lambda function to process customer orders 24 hours a day, 7 days a week. The Lambda function calls an external vendor's HTTP API to process payments. During load tests, a developer discovers that the external vendor payment processing API occasionally times out and returns errors. The company expects that some payment processing API calls will return errors. The company wants the support team to receive notifications in near real time only when the payment processing external API error rate exceed 5% of the total number of transactions in an hour. Developers need to use an existing Amazon Simple Notification Service (Amazon SNS) topic that is configured to notify the support team. Which solution will meet these requirements?
    - [ ] A. Write the results of payment processing API calls to Amazon CloudWatch. Use Amazon CloudWatch Logs Insights to query the CloudWatch logs. Schedule the Lambda function to check the CloudWatch logs and notify the existing SNS topic.
    - [ ] B. Publish custom metrics to CloudWatch that record the failures of the external payment processing API calls. Configure a CloudWatch alarm to notify the existing SNS topic when error rate exceeds the specified rate.
    - [ ] C. Publish the results of the external payment processing API calls to a new Amazon SNS topic. Subscribe the support team members to the new SNS topic.
    - [ ] D. Write the results of the external payment processing API calls to Amazon S3. Schedule an Amazon Athena query to run at regular intervals. Configure Athena to send notifications to the existing SNS topic when the error rate exceeds the specified rate.

    <details>
       <summary>Answer</summary>

       B.

    </details>

19. A company is offering APIs as a service over the internet to provide unauthenticated read access to statistical information that is updated daily. The company uses Amazon API Gateway and AWS Lambda to develop the APIs. The service has become popular, and the company wants to enhance the responsiveness of the APIs. Which action can help the company achieve this goal?
    - [ ] A. Enable API caching in API Gateway.
    - [ ] B. Configure API Gateway to use an interface VPC endpoint
    - [ ] C. Enable cross-origin resource sharing (CORS) for the APIs.
    - [ ] D. Configure usage plans and API keys in API Gateway.

    <details>
       <summary>Answer</summary>

       A.

    </details>

20. A developer wants to store information about movies. Each movie has a title, release year, and genre. The movie information also can include additional properties about the cast and production crew. This additional information is inconsistent across movies. For example, one movie might have an assistant director, and another movie might have an animal trainer. The developer needs to implement a solution to support the following use cases: For a given title and release year, get all details about the movie that has that title and release year. For a given title, get all details about all movies that have that title. For a given genre, get all details about all movies in that genre. Which data store configuration will meet these requirements?
    - [ ] A. Create an Amazon DynamoDB table. Configure the table with a primary key that consists of the title as the partition key and the release year as the sort key. Create a global secondary index that uses the genre as the partition key and the title as the sort key.
    - [ ] B. Create an Amazon DynamoDB table. Configure the table with a primary key that consists of the genre as the partition key and the release year as the sort key. Create a global secondary index that uses the title as the partition key.
    - [ ] C. On an Amazon RDS DB instance, create a table that contains columns for title, release year, and genre. Configure the title as the primary key.
    - [ ] D. On an Amazon RDS DB instance, create a table where the primary key is the title and all other data is encoded into JSON format as one additional column.

    <details>
       <summary>Answer</summary>

       A.

    </details>

21. A company runs its SAP Business Suite on SAP HANA systems on AWS. The company's production SAP ERP Central Component (SAP ECC) system uses an x1e.32xlarge (memory optimized) Amazon EC2 instance and is 3.5 TB in size. Because of expected future growth, the company needs to resize the production system to use a u-* EC2 High Memory instance. The company must resize the system as quickly as possible and must minimize downtime during the resize activities. Which solution will meet these requirements?
    - [ ] A. Resize the instance by using the AWS Management Console or the AWS CLI.
    - [ ] B. Create an AMI of the source system Launch a new EC2 High Memory instance that is based on that AMI.
    - [ ] C. Launch a new EC2 High Memory instance. Install and configure SAP HANA on the new instance by using AWS Launch Wizard for SAP. Use SAP HANA system replication to migrate the data to the new instance.
    - [ ] D. Launch a new EC2 High Memory instance. Install and configure SAP HANA on the new instance by using AWS Launch Wizard for SAP. Use SAP HANA backup and restore to back up the source system directly to Amazon S3 and to migrate the data to the new instance.

    <details>
       <summary>Answer</summary>

       C.

    </details>

22. A company deploys its SAP ERP system on AWS in a highly available configuration across two Availability Zones. The cluster is configured with an overlay IP address and a Network Load Balancer (NLB) to provide access to the SAP application layer to all users. The company's analytics team has created several Operational Data Provisioning (ODP) extractor services for the SAP ERP system. A highly available ETL system will call the ODP extractor services. The ETL system is hosted on Amazon EC2 instances that are deployed in an analytics VPC in a different AWS account. An SAP solutions architect needs to prevent the ODP extractor services from being used as an attack vector to overload the SAP ERP system. Which solution will provide the MOST protection for the ODP extractor services?
    - [ ] A. Configure VPC peering between the SAP VPC and the analytics VPC. Use network ACL rules in the SAP VPC to allow traffic to the NLB from only authorized sources: the analytics VPC CIDR block and the SAP end users' network CIDR block.
    - [ ] B. Create a transit gateway in the SAP account. Share the transit gateway with the analytics account. Attach the SAP VPC and the analytics VPC to the transit gateway. Use network ACL rules in the SAP VPC to allow traffic to the NLB from only authorized sources: the analytics VPC CIDR block and the SAP end users' network CIDR block.
    - [ ] C. Configure VPC peering between the SAP VPC and the analytics VPUpdate the NLB security group rules to accept traffic only from authorized sources: the ETL instances CIDR block and the SAP end users' network CIDR block.
    - [ ] D. Create a VPC endpoint service configuration on the SAP VPC. Specify the NLB in the endpoint configuration. In the analytics account, create an IAM role that has permission to create a connection to the endpoint service. Attach the role to the ETL instances. While logged in to the ETL instances, programmatically create an interface endpoint to the NLB. Accept the request to activate the interface connection.
  
    <details>
       <summary>Answer</summary>

       D.
       VPC Endpoint Service + IAM Role: This is the most restrictive and secure approach. The VPC endpoint service allows you to expose a specific service (in this case, the NLB for SAP) to another VPC. By using IAM roles attached to the ETL instances, you can very tightly control which instances can access the SAP system. This would provide the most granular level of access control and thus the most protection against potential misuse of the ODP extractor services.

    </details>

23. A company wants to migrate a native SAP HANA database to AWS. The database ingests large amounts of data every month, and the size of the database is growing rapidly. The company needs to store data for 10 years to meet a regulatory requirement. The company uses data from the last 2 years frequently in several reports. This recent data is critical and must be accessed quickly. The data that is 3-6 years old is used a few times a year and can be accessed in a longer time frame. The data that is more than 6 years old is rarely used and also can be accessed in a longer time frame. Which combination of steps will meet these requirements? (Choose three.)
    - [ ] A. Keep the frequently accessed data from the last 2 years in a hot tier on an SAP HANA certified Amazon EC2 instance.
    - [ ] B. Move the frequently accessed data from the last 2 years to SAP Information Life Cycle Management (ILM) with SAP IQ.
    - [ ] C. Move the less frequently accessed data that is 3-6 years old to a warm tier on Amazon Elastic File System (Amazon EFS) by using SAP HANA dynamic tiering.
    - [ ] D. Move the less frequently accessed data that is 3-6 years old to a warm tier on Amazon Elastic File System (Amazon EFS) by using data aging.
    - [ ] E. Move the rarely accessed data that is more than 6 years old to a cold tier on Amazon S3 by using SAP Data Hub.
    - [ ] F. Move the rarely accessed data that is more than 6 years old to a cold tier on SAP BW Near Line Storage (NLS) with Apache Hadoop.

    <details>
       <summary>Answer</summary>

       ACE.

    </details>

24. An SAP engineer is designing a storage configuration for an SAP S/4HANA production system on AWS. The system will run on an Amazon EC2 instance with a memory size of 2 TB. The SAP HANA sizing report recommends storage of 2,400 GB for data and 512 GB for logs. The system requires 9,000 IOPS for data storage and throughput of 300 MBps for log storage. Which Amazon Elastic Block Store (Amazon EBS) volume configuration will meet these requirements MOST cost-effectively?
    - [ ] A. For /hana/data, use two 900 GB Provisioned IOPS SSD (io1) EBS volumes that are configured with RAID 0 striping and the required IOPS. For /hana/log, use one 512 GB General Purpose SSD (gp3) EBS volume that is configured with the required throughput.
    - [ ] B. For /hana/data, use one 2,400 GB General Purpose SSD (gp3) EBS volume that is configured with the required IOPS. For /hana/log, use one 512 GB gp3 EBS volume that is configured with the required throughput.
    - [ ] C. For /hana/data use two 1,200 GB Provisioned IOPS SSD (io2) EBS volumes that are configured with RAID 0 striping and the required IOPS. For /hana/log, use one 525 GB io2 EBS volume that is configured with the required throughput.
    - [ ] D. For /hana/data, use two 1,200 GB General Purpose SSD (gp3) EBS volumes that are configured with RAID 0 striping and the required IOPS. For /hana/log, use one 512 GB gp3 EBS volume that is configured with the required throughput.

    <details>
       <summary>Answer</summary>

       B.

    </details>

25. A company is running SAP on premises and is using hard disk drive (HDD) cost-optimized storage to store SAP HANA archive files. The company directly mounts these disks as local file systems. The company also backs up the archives on a regular basis. The company needs to migrate this setup to AWS. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. Use General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volumes as the archive destination. Use Amazon S3 for backups. Use S3 Glacier for long-term retention of the archives.
    - [ ] B. Use Provisioned IOPS SSD (io1) Amazon Elastic Block Store (Amazon EBS) volumes as the archive destination. Back up the archives to Cold HDD (sc1) EBS volumes.
    - [ ] C. Use Provisioned IOPS SSD (io1) Amazon Elastic Block Store (Amazon EBS) volumes as the archive destination. Use Amazon S3 for backups. Use S3 Glacier for long-term retention of the archives.
    - [ ] D. Use Cold HDD (sc1) Amazon Elastic Block Store (Amazon EBS) volumes as the archive destination. Use Amazon S3 for backups. Use S3 Glacier for long-term retention or the archives.
    <details>
       <summary>Answer</summary>

       D.

    </details>

26. A company recently migrated its SAP workload to AWS. The company's SAP engineer implements SAProuter on an Amazon EC2 instance that runs SUSE Linux Enterprise Server. The EC2 instance is in a public subnet and is an On-Demand Instance. The SAP engineer performs all the necessary configurations for SAProuter, security groups, and route tables. The SAProuter system needs to be online and available only when SAP Support is needed. The SAP engineer performs an initial test to validate SAP Support connectivity with SAProuter. The test is successful, and the SAP engineer stops the EC2 instance. When an event occurs that causes the company to need SAP Support, the company starts the EC2 instance that hosts SAProuter. After the EC2 instance is running, the SAP Support team cannot establish connectivity with SAProuter. What should the SAP engineer do to permanently resolve this issue?
    - [ ] A. Re-install SAProuter on an EC2 instance in a private subnet. Update the SAProuter configuration with the instance's private IP address. Deploy a managed NAT gateway for AWS. Route SAP connectivity through the NAT gateway.
    - [ ] B. Allocate an Elastic IP address to the EC2 instance that hosts SAProuter. Update the SAP router configuration with the Elastic IP address.
    - [ ] C. Modify the security group that is associated with the EC2 instance that hosts SAProuter to allow access to all ports from the 0.0.0.0/0 CIDR block.
    - [ ] D. Update the SAProuter configuration with the private IP address of the EC2 instance that hosts SAProuter.

    <details>
       <summary>Answer</summary>

       B.
    </details>

27. A company wants to deploy an SAP HANA database on AWS by using AWS Launch Wizard for SAP. An SAP solutions architect needs to run a custom post-deployment script on the Amazon EC2 instance that Launch Wizard provisions. Which actions can the SAP solutions architect take to provide the post-deployment script in the Launch Wizard console? (Choose two.)
    - [ ] A. Provide the FTP URL of the script.
    - [ ] B. Provide the HTTPS URL of the script on a web server.
    - [ ] C. Provide the Amazon S3 URL of the script.
    - [ ] D. Write the script inline.
    - [ ] E. Upload the script.
    <details>
       <summary>Answer</summary>

       CE.

    </details>

28. A company is evaluating options to migrate its on-premises SAP ERP Central Component (SAP ECC) EHP 8 system to AWS. The company does not want to make any changes to the SAP versions or database versions. The system runs on SUSE Linux Enterprise Server and SAP HANA 2.0 SPS 05. The existing on-premises system has a 1 TB database. The company has 1 Gbps or internet bandwidth available for the migration. The company must complete the migration with the least possible downtime and disruption to business. Which solution will meet these requirements?
    - [ ] A. Install SAP ECC EHP 8 on Amazon EC2 instances. Use the same SAP SID and kernel version that the source system uses. Install SAP HANA on EC2 instances. Use the same version of SAP HANA that the source system uses. Take a full backup of the source SAP HANA database to disk. Copy the backup by using an AWS Storage Gateway Tape Gateway. Restore the backup on the target SAP HANA instance that is running on Amazon EC2.
    - [ ] B. Install SAP ECC EHP 8 on Amazon EC2 instances. Use the same SAP SID and kernel version that the source system uses. Install SAP HANA on EC2 instances. Use the same version of SAP HANA that the source database uses. Establish replication at the source, and register the SAP HANA instance that is running on Amazon EC2 as secondary. After the systems are synchronized, initiate a takeover so that the SAP HANA instance that is running on Amazon EC2 becomes primary. Shut down the on-premises system. Start SAP on the EC2 instances.
    - [ ] C. Install SAP ECC EHP 8 on Amazon EC2 instances. Use the same SAP SID and kernel version that the source system uses. Install SAP HANA on EC2 instances. Use the same version that the source system uses. Take a full offline backup of the source SAP HANA database. Copy the backup to Amazon S3 by using the AWS CLI. Restore the backup on a target SAP HANA instance that runs on Amazon EC2. Start SAP on the EC2 instances.
    - [ ] D. Take an offline SAP Software Provisioning Manager export of the on-premises system. Use an AWS Storage Gateway File Gateway to transfer the export. Import the export on Amazon EC2 instances to create the target SAP system.

    <details>
       <summary>Answer</summary>

       B.

    </details>

29. A company has deployed SAP workloads on AWS. The company's SAP applications use an IBM Db2 database and an SAP HANA database. An SAP solutions architect needs to create a solution to back up the company's databases. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. Use an Amazon Elastic Block Store (Amazon EBS) volume to store backups for the databases. Run a periodic script to move the backups to Amazon S3 and to delete the backups from the EBS volume.
    - [ ] B. Use AWS Backint Agent for SAP HANA to move the backups for the databases directly to Amazon S3.
    - [ ] C. Use an Amazon Elastic Block Store (Amazon EBS) volume to store backups for the Db2 database. Run periodic scripts to move the backups to Amazon S3 and to delete the backups from the EBS volume. For the SAP HANA database, use AWS Backint Agent for SAP HANA to move the backups directly to Amazon S3.
    - [ ] D. Use Amazon Elastic File System (Amazon EFS) to store backups for the databases.

    <details>
       <summary>Answer</summary>

       C.
        AWS Backint Agent for SAP HANA is designed to backup SAP HANA databases directly to Amazon S3. This solution bypasses the need for intermediate storage, which can save costs. However, this option doesn't provide a solution for the IBM Db2 database.

    </details>

30. A company has implemented its ERP system on SAP S/4HANAon AWS. The system is based on Enqueue Standalone Architecture (ENSA2) and is highly available. As part of an availability test, the company failed over its system to secondary nodes in the second Availability Zone. When the system failed over, the initial licenses were no longer valid. What could be the reason for this behavior?
    - [ ] A. The company needs to apply SAP licenses after each failover.
    - [ ] B. The cluster configuration is not correct.
    - [ ] C. The company needs two separate sets of licenses for ASCS instances in each Availability Zone.
    - [ ] D. The company stopped and restarted the secondary node as part of the last maintenance.

    <details>
       <summary>Answer</summary>

       B.
       This option is incorrect because SAP licenses are typically bound to a system ID (SID), and are not bound to a specific machine or instance. In a High Availability setup, the SAP system, including the ASCS instances, has the same SID on both the primary and secondary nodes. Therefore, the same license should work for both nodes. SAP does not require separate licenses for each ASCS instance in each Availability Zone.
       The licensing of SAP systems is based on the SAPS (SAP Application Performance Standard) capacity of the system and the number of users that will be accessing the system, not the number of instances or servers that the system is running on. Therefore, having separate ASCS instances in different Availability Zones for High Availability purposes should not require additional SAP licenses.

    </details>

31. A global company is planning to migrate its SAP S/4HANA workloads and SAP BW/4HANA workloads to AWS. The company’s database will not grow more than 3 TB for the next 3 years. The company's production SAP HANA system has been designed for high availability (HA) and disaster recovery (DR) with the following configurations: • HA: SAP HANA system replication configured with SYNC mode and LOGREPLAY operation mode across two Availability Zones with the same size SAP HANA node • DR: SAP HANA system replication configured with ASYNC mode and LOGREPLAY operation mode across AWS Regions with the same size SAP HANA node. All the SAP HANA nodes in the current configuration are the same size. For HA, the company wants an RPO of 0 and an RTO of 5 minutes. For DR, the company wants an RPO of 0 and an RTO of 3 hours. How should the company design this solution to meet the RPO and RTO requirements MOST cost-effectively?
    - [ ] A. Maintain HA with SAP HANA system replication configured with SYNC mode and table preload turned on across two Availability Zones. In each Availability Zone, use the same size SAP HANA node. Decrease the size of the DR node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with ASYNC mode and table preload turned on. Increase the size of the DR node during a DR event.
    - [ ] B. Maintain HA with SAP HANA system replication configured with SYNC mode and table preload turned on across two Availability Zones. In each Availability Zone, use the same size SAP HANA node. Decrease the size of the DR node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with ASYNC mode and table preload turned off. Increase the size of the DR node during a DR event.
    - [ ] C. Maintain HA with SAP HANA system replication across two Availability Zones. Decrease the size of the HA secondary node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with SYNC mode and table preload turned on. Increase the size of the HA secondary node during an HA event. Decrease the size of the DR node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with table preload turned on. Increase the size of the DR node during a DR event.
    - [ ] D. Maintain HA with SAP HANA system replication across two Availability Zones. Decrease the size of the HA secondary node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with SYNC mode and table preload turned on. Increase the size of the HA secondary node during an HA event. Decrease the size of the DR node to at least 64 GiB of memory or the row store size plus 20 GiB, whichever is higher, with table preload turned off. Increase the size of the DR node during a DR event.

    <details>
       <summary>Answer</summary>

       B.
       High Availability (HA): The goal is to ensure that there is no data loss (RPO = 0) and that the system can be back online within 5 minutes (RTO = 5 minutes). For this, system replication with SYNC mode is appropriate as it ensures that the primary and secondary systems are in sync. The 'table preload' feature ensures that tables are preloaded into memory on the secondary site. This reduces the startup time, ensuring a faster RTO.
       Disaster Recovery (DR): The goal here is to ensure no data loss (RPO = 0) and a recovery time of up to 3 hours (RTO = 3 hours). Using ASYNC mode for system replication is adequate for DR scenarios as it ensures data is replicated but allows for some lag.

    </details>

32. A company is planning to implement its production SAP HANA database with an XS Advanced runtime environment on AWS. The company must provision the necessary AWS resources and install the SAP HANA database within 1 day to meet an urgent business request. The company must implement a solution that minimizes operational effort. Which combination of steps should the company take to meet these requirements? (Choose two.)
    - [ ] A. Install XS Advanced runtime by using the SAP HANA database lifecycle manager (HDBLCM).
    - [ ] B. Provision AWS resources by using the AWS Management Console. Install SAP HANA by using the SAP HANA database lifecycle manager (HDBLCM).
    - [ ] C. Use AWS Launch Wizard for SAP.
    - [ ] D. Develop and use AWS CloudFormation templates to provision the AWS resources.
    - [ ] E. Evaluate and identify the certified Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volume types for SAP HANA.

    <details>
       <summary>Answer</summary>

       AC.
       A. Install XS Advanced runtime by using the SAP HANA database lifecycle manager (HDBLCM).
          - The SAP HANA database lifecycle manager (HDBLCM) is a tool provided by SAP to manage the lifecycle of SAP HANA. It can be used to install or update the SAP HANA database and associated components, including XS Advanced runtime. By using HDBLCM, the company will ensure that the installation of XS Advanced is in line with SAP's best practices and recommendations.
       C. Use AWS Launch Wizard for SAP.
          - AWS Launch Wizard for SAP provides a guided way of sizing, configuring, and deploying SAP HANA applications on AWS, making it simpler and faster. The AWS Launch Wizard not only helps in provisioning the required AWS resources (like EC2, EBS, etc.) but also automates the installation of SAP HANA. By using the Launch Wizard, the company can accelerate the provisioning and installation process while ensuring that the deployment adheres to AWS's best practices for running SAP HANA on the platform.

    </details>

33. A company wants to migrate its SAP environments to AWS. The SAP environments include SAP ERP Central Component (SAP ECC). SAP Business Warehouse (SAP BW), and SAP Process Integration (SAP PI) systems. As part of the migration, the company wants to do a system transformation to SAP S/4HANA. The company wants to implement SAP Fiori by using an SAP Gateway hub deployment and an internet-facing SAP Web Dispatcher for this SAP S/4HANA system only. Employees around the world will access the SAP Fiori launchpad. The company needs to allow access to only the URLs that are required for running SAP Fiori. How should an SAP security engineer design the security architecture to meet these requirements?
    - [ ] A. Deploy the SAP Web Dispatcher in a public subnet. Allow access to only the IP addresses that employees use to access the SAP Fiori server.
    - [ ] B. Deploy the SAP Web Dispatcher in a private subnet. Allow access to only the ports that are required for running SAP Fiori.
    - [ ] C. Deploy the SAP Web Dispatcher in a public subnet. Allow access to only the paths that are required for running SAP Fiori.
    - [ ] D. Deploy the SAP Web Dispatcher in a private subnet. Allow access to only the SAP S/4HANA system that serves as the SAP Fiori backend system for the SAP Gateway hub.

    <details>
       <summary>Answer</summary>

       C.

    </details>

34. A company recently implemented its SAP S/4HANA system on AWS. An SAP engineer must set up a Pacemaker cluster on Amazon EC2 instances to provide high availability. Which solution will meet this requirement?
    - [ ] A. Set up a fencing mechanism for the cluster by using a block device.
    - [ ] B. Set up an overlay IP address as a public IP address.
    - [ ] C. Create a route to the overlay IP address on the on-premises network.
    - [ ] D. Create an EC2 instance profile that has an IAM role that allows access modification of the route table.

    <details>
       <summary>Answer</summary>

       D.
       In order to provide high availability with Pacemaker cluster on Amazon EC2, you need a method for the cluster to manage node-level failures. This is known as "fencing" in Pacemaker. However, traditional fencing mechanisms like using block devices or power switches are not applicable in a cloud environment like AWS. Instead, you can leverage EC2 instance profiles with an IAM role that allows the modification of route tables. This IAM role can be used to reroute network traffic, essentially performing the "fencing" action in the

    </details>

35. A company runs core business processes on SAP. The company plans to migrate its SAP workloads to AWS. Which combination of prerequisite steps must the company take to receive integrated support for SAP on AWS? (Choose three.)
    - [ ] A. Purchase an AWS Developer Support plan or an AWS Enterprise Support plan.
    - [ ] B. Purchase an AWS Business Support plan or an AWS Enterprise Support plan.
    - [ ] C. Enable Amazon CloudWatch detailed monitoring.
    - [ ] D. Enable Amazon EC2 termination protection.
    - [ ] E. Configure and run the AWS Data Provider for SAP agent.
    - [ ] F. Use Reserved Instances for all Amazon EC2 instances that run SAP.

    <details>
       <summary>Answer</summary>

       BCE.

    </details>

36. A company is planning to migrate its SAP S/4HANAand SAP BW/4HANA workloads to AWS. The company is currently using a third-party solution to back up its SAP HANA database and application. The company wants to retire the third-party backup solution after the migration to AWS. The company needs a backup solution on AWS to manage its SAP HANA database and application backups. The solution must provide secure storage of backups and must optimize cost. Which solution will meet these requirements?
    - [ ] A. Use SAP HANA Studio, SAP HANA HDBSQL, and SAP HANA Cockpit to perform backups to local Amazon Elastic Block Store (Amazon EBS) volumes. Enable EBS volume encryption. Use AWS Backup to perform application backups with AMIs or snapshots to Amazon S3. Enable S3 encryption.
    - [ ] B. Use SAP HANA Cockpit to implement a backup policy and perform SAP HANA database backups to Amazon S3 with AWS Backint Agent for SAP HANA. Enable S3 encryption. Use AWS Backup with backup plans to perform application backups with AMIs or snapshots. Enable S3 encryption.
    - [ ] C. Use AWS Backup with backup plans to perform SAP HANA database backups to Amazon S3 with AWS Backint Agent for SAP HANA. Enable S3 encryption. Use AWS Backup with backup plans to perform application backups with AMIs or snapshots. Enable S3 encryption.
    - [ ] D. Use SAP HANA Studio, SAP HANA HDBSQL, and SAP HANA Cockpit to perform backups to local Amazon Elastic Block Store (Amazon EBS) volumes. Copy the backups to Amazon S3. Use AWS Backup to schedule application backups with AMIs or snapshots to Amazon S3.

    <details>
       <summary>Answer</summary>

       B.
       This solution is the best fit because it uses SAP HANA Cockpit and AWS Backint Agent for SAP HANA to directly backup HANA databases to Amazon S3, and AWS Backup to handle the application backups. Both the database and application backups are stored in S3 with encryption enabled for security.

    </details>

37. A company is running its SAP S/4HANA system on AWS. The company needs to retain database backups for the previous 30 days. The company is taking full online backups by using SAP HANA Studio and is storing the backup files on General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volumes. The company needs to reduce the cost of this storage. What should the company do to achieve the LOWEST cost for the backup storage?
    - [ ] A. Continue to use SAP HANA Studio to back up the SAP HANA database to gp3 EBS volumes. After each backup is completed, use Linux shell scripts to move the backup to Amazon S3. Set up an S3 Lifecycle configuration to delete the backups that are older than 30 days.
    - [ ] B. Continue to use SAP HANA Studio to back up the SAP HANA database. Use Throughput Optimized HDD (st1) EBS volumes to store each backup. After each backup is completed, use Linux shell scripts to move the backup to Amazon S3. Set up an S3 Lifecycle configuration to delete the backups that are older than 30 days.
    - [ ] C. Use AWS Backup to take full online backups of the SAP HANA database.
    - [ ] D. Continue to use SAP HANA Studio to back up the SAP HANA database. Use AWS Backint Agent for SAP HANA to store each backup. Set up an Amazon S3 Lifecycle configuration to delete the backups that are older than 30 days.

    <details>
       <summary>Answer</summary>

       D.

    </details>

38. A company is migrating a 20 TB SAP S/4HANA system to AWS. The company wants continuous monitoring of the SAP S/4HANA system and wants to receive notification when CPU utilization is greater than 90%. An SAP solutions architect must implement a solution that provides this notification with the least possible effort. Which solution meets these requirements?
    - [ ] A. Create an AWS Lambda function that checks CPU utilization and sends the notification.
    - [ ] B. Use AWS CloudTrail to check the CPU utilization metric. Set up an Amazon Simple Notification Service (Amazon SNS) topic to send the notification.
    - [ ] C. Use Amazon CloudWatch to set a CPU utilization alarm. Set up an Amazon Simple Notification Service (Amazon SNS) topic to send the notification.
    - [ ] D. Use the Amazon CloudWatch dashboard to monitor CPU utilization. Set up an Amazon Simple Notification Service (Amazon SNS) topic to send the notification.
    <details>
       <summary>Answer</summary>

       C.

    </details>

39. A company has run SAP HANA on AWS for a few years on an Amazon EC2 X1 instance with dedicated tenancy. Because of business growth, the company plans to migrate to an EC2 High Memory instance by using a resize operation. The SAP HANA system is set up for high availability with SAP HANA system replication and clustering software. Which combination of steps should the company take before the migration? (Choose three.)
    - [ ] A. Ensure that the source system is running on a supported operating system version.
    - [ ] B. Update all references to the IP address of the source system, including the /etc/hosts file for the operating system and DNS entries, to reflect the new IP address.
    - [ ] C. Adjust the storage size of SAP HANA data, log, shared, and backup volumes.
    - [ ] D. Resize the instance through the AWS Management Console or the AWS CLI.
    - [ ] E. Ensure that there is a backup of the source system.
    - [ ] F. Update the DNS records. Check the connectivity between the SAP application servers and the new SAP HANA instance.

    <details>
       <summary>Answer</summary>

       ADE.

    </details>

40. A company has migrated its SAP workloads to AWS. A third-party team performs a technical evaluation and finds that the SAP workloads are not fully supported by SAP and AWS. What should the company do to receive full support from SAP and AWS?
    - [ ] A. Purchase an AWS Developer Support plan.
    - [ ] B. Turn on Amazon CloudWatch basic monitoring.
    - [ ] C. Ensure that the /usr/sap file system is running on local instance storage.
    - [ ] D. Ensure that the AWS Data Provider for SAP agent is configured and running.
    <details>
       <summary>Answer</summary>

       D.
       To receive full support from both SAP and AWS for SAP workloads running on AWS, it is necessary to have the AWS Data Provider for SAP agent configured and running. This agent collects performance data from the AWS infrastructure and makes it available to SAP applications for SAP's support and services.

    </details>

41. A company wants to deploy SAP BW/4HANA on AWS. An SAP technical architect selects a u-6tb1.56xlarge Amazon EC2 instance to host the SAP HANA database. The SAP technical architect must design a highly available architecture that achieves the lowest possible RTO and a near-zero RPO. The solution must not affect the performance of the primary database. Which solution will meet these requirements?
    - [ ] A. Deploy two u-6tb1.56xlarge EC2 instances for SAP HANA in separate AWS Regions. Set up synchronous SAP HANA system replication between the instances.
    - [ ] B. Deploy two u-6tb1.56xlarge EC2 instances for SAP HANA in separate AWS Regions. Set up asynchronous SAP HANA system replication between the instances.
    - [ ] C. Deploy two u-6tb1.56xlarge EC2 instances for SAP HANA in separate Availability Zones in the same AWS Region. Set up synchronous SAP HANA system replication between the instances.
    - [ ] D. Deploy two u-6tb1.56xlarge EC2 instances for SAP HANA in separate Availability Zones in the same AWS Region. Set up asynchronous SAP HANA system replication between the instances.

    <details>
       <summary>Answer</summary>

       C.

    </details>

42. A company has a 48 TB SAP application that runs on premises and uses an IBM Db2 database. The company needs to migrate the application to AWS. The company has strict uptime requirements for the application with maximum downtime of 24 hours each weekend. The company has established a 1 Gbps AWS Direct Connect connection but can spare bandwidth for migration only during non-business hours or weekends. How can the company meet these requirements to migrate the application to AWS?
    - [ ] A. Use SAP Software Provisioning Manager to create an export of the data. Move this export to AWS during a weekend by using the Direct Connect connection. On AWS. import the data into the target SAP application. Perform the cutover.
    - [ ] B. Set up database replication from on premises to AWS. On the day of downtime, ensure that the replication finishes. Perform cutover to AWS.
    - [ ] C. Use an AWS Snowball Edge Storage Optimized device to send an initial backup to AWS. Capture incremental backups daily. When the initial backup is on AWS, perform database restore from the initial backup and keep applying incremental backups. On the day of cutover, perform the final incremental backup. Perform cutover to AWS.
    - [ ] D. Use AWS Application Migration Service (CloudEndure Migration) to migrate the database to AWS. On the day of cutover, switch the application to run on AWS servers.

    <details>
       <summary>Answer</summary>

       C.

    </details>

43. A company is running SAP S/4HANA on AWS. The company has deployed its current database infrastructure on a u-12tb1.112xlarge Amazon EC2 instance that uses default tenancy and SUSE Linux Enterprise Server for SAP 15 SP1. The company must scale its SAP HANA database to an instance with more RAM. An SAP solutions architect needs to migrate the database to a u-18tb1.metal High Memory instance. How can the SAP solutions architect meet this requirement?
    - [ ] A. Use the AWS Management Console to stop the current instance. Change the instance type to u-18tb1.metal. Start the instance.
    - [ ] B. Use the AWS CLI to stop the current instance. Change the instance type to u-18tb1.metal. Start the instance.
    - [ ] C. Use the AWS CLI to stop the current instance. Create an AMI from the current instance. Use the new AMI to launch a new u-18tb1.metal instance with host tenancy.
    - [ ] D. Use the AWS Management Console to stop the current instance. Create an AMI from the current instance. Use the new AMI to launch a new u-18tb1.metal instance with dedicated tenancy.

    <details>
       <summary>Answer</summary>

       D.

    </details>

44. financial services company is implementing SAP core banking on AWS. The company must not allow any system information to traverse the public internet. The company needs to implement secure monitoring of its SAP ERP Central Component (SAP ECC) system to check for performance issues and faults in its application. The solution must maximize security and must be supported by SAP and AWS. How should the company integrate AWS metrics with its SAP system to meet these requirements?
    - [ ] A. Set up SAP Solution Manager to call Amazon CloudWatch and Amazon EC2 endpoints with REST-based calls to populate SAPOSCOL details. Use SAP transaction ST06N to monitor CPU and memory utilization on each EC2 instance.
    - [ ] B. Install the AWS Data Provider for SAP on the Amazon EC2 instances that host SAP. Allow access to the Amazon CloudWatch and EC2 endpoints through a NAT gateway. Create an IAM policy that allows the ec2:DescribeInstances action, the cloudwatch:GetMetricStatistics action, and the ec2:DescribeVolumes action for all EC2 resources.
    - [ ] C. Install the AWS Data Provider for SAP on the Amazon EC2 instances that host SAP. Create VPC endpoints for Amazon CloudWatch and Amazon EC2. Allow access through these endpoints. Create an IAM policy that allows the ec2:DescribeInstances action, the cloudwatch:GetMetricStatistics action, and the ec2:DescribeVolumes action for all EC2 resources.
    - [ ] D. Install the AWS Data Provider for SAP on the Amazon EC2 instances that host SAP. Create VPC endpoints for Amazon CloudWatch and Amazon EC2. Allow access through these endpoints. Create an IAM policy that allows all actions for all EC2 resources.

    <details>
       <summary>Answer</summary>

       C.
       - A. This option involves making REST-based calls to Amazon CloudWatch and Amazon EC2. However, this could traverse the public internet unless specific security measures are put in place. It does not fully meet the requirement for maximum security.
       - B. Allowing access to Amazon CloudWatch and EC2 endpoints through a NAT gateway does not satisfy the requirement to keep data off the public internet. NAT gateway still involves routing the traffic over the public internet, even though it is doing so from within the AWS network.
       - C. This option is the most aligned with the requirements. By installing the AWS Data Provider for SAP and creating VPC endpoints for Amazon CloudWatch and Amazon EC2, you can ensure that the data does not traverse the public internet. VPC endpoints allow resources in your VPC to communicate with AWS services directly, bypassing the public internet. This maximizes security and meets the constraints. The IAM policy is also appropriately scoped to only the necessary actions.
       - D. Similar to option C, this provides the required VPC endpoints, but the IAM policy is too permissive ("allows all actions for all EC2 resources"). This doesn't align with the principle of least privilege, which is a key part of maximizing security.
       Therefore, option C appears to be the best choice to meet the company's requirements for a secure, supported integration between AWS and its SAP system.

    </details>

45. A company is running SAP on anyDB at a remote location that has slow and inconsistent internet connectivity. The company wants to migrate its system to AWS and wants to convert its database to SAP HANA during this process. Because of the inconsistent internet connection, the company has not established connectivity between the remote location and the company’s VPC in the AWS Cloud. How should the company perform this migration?
    - [ ] A. Migrate by using SAP HANA system replication over the internet connection. Specify a public IP address on the target system.
    - [ ] B. Migrate by using SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move. Use an AWS Snowball Edge Storage Optimized device to transfer the SAP export files to AWS.
    - [ ] C. Migrate by using SAP HANA system replication with initialization through backup and restore. Use an AWS Snowball Edge Storage Optimized device to transfer the SAP export files to AWS.
    - [ ] D. Migrate by using SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move. Use Amazon Elastic File System (Amazon EFS) to transfer the SAP export files to AWS.

    <details>
       <summary>Answer</summary>

       B.
       - A: While SAP HANA system replication over the internet is a legitimate method of migration, it heavily relies on a stable and fast internet connection. Given the scenario, this is not suitable due to the inconsistent internet connection.
       - B: Using the SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move is a method that combines the update and migration processes. It's suitable for systems that are being moved to the cloud. The AWS Snowball Edge Storage Optimized device is a physical device that you can use to move terabytes to petabytes of data into and out of AWS, without relying on an internet connection. Given the inconsistency of the internet connection in the scenario, using Snowball Edge to transfer the SAP export files makes sense.
       - C: This option combines SAP HANA system replication with initialization through backup and restore, and using an AWS Snowball Edge device. While the use of Snowball is suitable, this method adds a level of complexity in initializing replication through backup and restore.
       - D: The use of SUM DMO with System Move is appropriate, but using Amazon Elastic File System (Amazon EFS) for transfer would require a consistent internet connection, which is not the case in the scenario described.

    </details>

46. A company runs its SAP ERP 6.0 EHP 8 system on SAP HANA on AWS. The system is deployed on an r4.16xlarge Amazon EC2 instance with default tenancy. The company needs to migrate the SAP HANA database to an x2gd.16xlarge High Memory instance. After an operations engineer changes the instance type and starts the instance, the AWS Management Console shows a failed instance status check. What is the cause of this problem?
    - [ ] A. The operations engineer missed the network configuration step during the post-migration activities.
    - [ ] B. The operations engineer missed the Amazon CloudWatch configuration step during the post-migration activities.
    - [ ] C. The operations engineer did not install Elastic Network Adapter (ENA) drivers before changing the instance type.
    - [ ] D. The operations engineer did not create a new AMI from the original instance and did not launch a new instance with dedicated tenancy from the AMI.

    <details>
       <summary>Answer</summary>

       C.
       The r4.16xlarge and x2gd.16xlarge EC2 instances are part of different families and might have different networking capabilities. The x2gd.16xlarge instance type supports Enhanced Networking with Elastic Network Adapter (ENA), and it requires that the ENA driver is installed to function properly. If the driver is not installed and enabled, then the instance might not pass the instance status check after a change in instance type.

    </details>

47. A company uses an SAP application that runs batch jobs that are performance sensitive. The batch jobs can be restarted safely. The SAP application has six application servers. The SAP application functions reliably as long as the SAP application availability remains greater than 60%. The company wants to migrate the SAP application to AWS. The company is using a cluster with two Availability Zones. How should the company distribute the SAP application servers to maintain system reliability?
    - [ ] A. Distribute the SAP application servers equally across three partition placement groups.
    - [ ] B. Distribute the SAP application servers equally across three Availability Zones.
    - [ ] C. Distribute the SAP application servers equally across two Availability Zones.
    - [ ] D. Create an Amazon EC2 Auto Scaling group across two Availability Zones. Set a minimum capacity value of 4.

    <details>
       <summary>Answer</summary>

       B.
       With this approach, if one AZ goes down, the Auto Scaling group will work to maintain the minimum capacity of 4 servers by launching instances in the available AZ. Therefore, even with the loss of an entire AZ, the SAP application would still have 4 servers running, maintaining 66.6% availability, which is above the required 60%.

    </details>

48. A company wants to migrate its SAP S/4HANA software from on premises to AWS in a few weeks. An SAP solutions architect plans to use AWS Launch Wizard for SAP to automate the SAP deployment on AWS. Which combination of steps must the SAP solutions architect take to use Launch Wizard to meet these requirements? (Choose two.)
    - [ ] A. Download the SAP software files from the SAP Support Portal. Upload the SAP software files to Amazon S3. Provide the S3 bucket path as an input to Launch Wizard.
    - [ ] B. Provide the SAP S-user ID and password as inputs to Launch Wizard to download the software automatically.
    - [ ] C. Format the S3 file path syntax according to the Launch Wizard deployment recommendation.
    - [ ] D. Use an AWS CloudFormation template for the automated deployment of the SAP landscape.
    - [ ] E. Provision Amazon EC2 instances. Tag the instances to install SAP S/4HANA on them.

    <details>
       <summary>Answer</summary>

       AC.
      - Provide the necessary SAP software files. These files can be uploaded to an Amazon S3 bucket, and then you'll provide the path to those files in the Launch Wizard. This is because AWS doesn't have rights to download the software from SAP Support Portal on your behalf.
      - Make sure the S3 file path is correctly formatted according to the recommendations of the Launch Wizard, which makes it possible for the Launch Wizard to access and use the SAP software files for deployment.

    </details>

49. A company wants to migrate its SAP landscape from on premises to AWS. What are the MINIMUM requirements that the company must meet to ensure full support of SAP on AWS? (Choose three.)
    - [ ] A. Enable detailed monitoring for Amazon CloudWatch on each instance in the landscape.
    - [ ] B. Deploy the infrastructure by using SAP Cloud Appliance Library.
    - [ ] C. Install, configure, and run the AWS Data Provider for SAP on each instance in the landscape.
    - [ ] D. Protect all production instances by using Amazon EC2 automatic recovery.
    - [ ] E. Deploy the infrastructure for the SAP landscape by using AWS Launch Wizard for SAP.
    - [ ] F. Deploy the SAP landscape on an AWS account that has either an AWS Business Support plan or an AWS Enterprise Support plan.

    <details>
       <summary>Answer</summary>

       ACF.
       - <https://docs.aws.amazon.com/sap/latest/general/overview-sap-on-aws.html>

    </details>

50. An SAP specialist is building an SAP environment. The SAP environment contains Amazon EC2 instances that run in a private subnet in a VPC. The VPC includes a NAT gateway. The SAP specialist is setting up IBM Db2 high availability disaster recovery for the SAP cluster. After configuration of overlay IP address routing, traffic is not routing to the database EC2 instances. What should the SAP specialist do to resolve this issue?
    - [ ] A. Open a security group for SAP ports to allow traffic on port 443.
    - [ ] B. Create route table entries to allow traffic from the database EC2 instances to the NAT gateway.
    - [ ] C. Turn off the source/destination check for the database EC2 instances.
    - [ ] D. Create an IAM role that has permission to access network traffic. Associate the role with the database EC2 instances.

    <details>
       <summary>Answer</summary>

       B.

    </details>

51. A company has deployed its SAP applications into multiple Availability Zones in the same AWS Region. To accommodate storage of media files, database table export and import, and files dropped by third-party tools, the company has mounted Amazon Elastic File System (Amazon EFS) file systems between the SAP instances. The company needs to retrieve the files quickly for installations, updates, and system refreshes. Over time, the EFS file systems have grown exponentially to multiple terabytes. An SAP solutions architect must optimize storage cost for the files that are stored in Amazon EFS. Which solution will meet this requirement with the LEAST administrative overhead?
    - [ ] A. Scan the files manually to identify unnecessary files. Delete the unnecessary files.
    - [ ] B. Move the files to Amazon S3 Glacier Deep Archive.
    - [ ] C. Apply a lifecycle policy on the files in Amazon EFS to move the files to EFS Standard-Infrequent Access (Standard-IA).
    - [ ] D. Move the files to Amazon S3 Glacier. Apply an S3 Glacier vault lock policy to the files.
    <details>
       <summary>Answer</summary>

       C.

    </details>

52. A company wants to migrate its on-premises servers to AWS. These servers include SAP ERP Central Component (SAP ECC) on Oracle Database. The company is running SAP ECC application servers and Oracle Database servers on AIX. The company must migrate the SAP workloads to AWS with minimal changes. Which solution will meet these requirements?
    - [ ] A. Perform a heterogeneous migration for SAP on AWS. Specify the SAP ECC application servers to run on SUSE Linux Enterprise Server. Specify Oracle Database to run on Oracle Enterprise Linux on a Dedicated Host.
    - [ ] B. Perform a homogeneous migration for SAP on AWS. Specify the SAP ECC application servers and Oracle Database to run on AIX.
    - [ ] C. Perform a heterogeneous migration for SAP on AWS. Specify the SAP ECC application servers and Oracle Database to run on Oracle Enterprise Linux.
    - [ ] D. Perform a heterogeneous migration for SAP on AWS. Specify the SAP ECC application servers and Oracle Database to run on Windows.

    <details>
       <summary>Answer</summary>

       C.
       - Heterogeneous Migration: This involves moving from one operating system or database architecture to another. For instance, moving from AIX to Linux would be a heterogeneous migration.
       - Homogeneous Migration: This involves moving to a similar environment, like moving between the same operating systems and database architectures.

       The company is currently running SAP ECC application servers and Oracle Database servers on AIX. The objective is to migrate to AWS with minimal changes.
       - A. This option involves moving SAP ECC to SUSE Linux Enterprise Server and the Oracle Database to Oracle Enterprise Linux on a Dedicated Host. This is a heterogeneous migration, as it involves moving from AIX to Linux.
       - B. This option would maintain the AIX platform for both SAP ECC and Oracle Database. However, AWS does not support AIX natively, making this option unfeasible.
       - C. This option involves moving both the SAP ECC application servers and Oracle Database to Oracle Enterprise Linux, making it a heterogeneous migration. This is possible as AWS supports Linux-based instances.
       - D. This option proposes moving both the SAP ECC application servers and Oracle Database to Windows. This is a heterogeneous migration because it involves moving from AIX to Windows. However, while SAP ECC can run on Windows, it's less common and might introduce more complexity than running on a Linux-based environment.

       Considering the minimal changes requirement and the given options, the most straightforward option would be to perform a heterogeneous migration and use Linux-based instances on AWS, as Linux has robust support for SAP ECC and Oracle.

    </details>

53. A company is migrating its SAP workloads to AWS. The company’s IT team installs a highly available SAP S/4HANA system that uses the SAP HANA system replication cluster package on SUSE Linux Enterprise Server. The IT team deploys the system by using cluster nodes in different Availability Zones within the same AWS Region. After the initial launch of the SAP application, the application is accessible. However, after failover, the IT team cannot access the application even though the system is up and running on the secondary node. After investigation, an SAP solutions architect discovers that the virtual IP address has not been used correctly. Which combination of steps should the SAP solutions architect take to resolve this problem? (Choose two.)
    - [ ] A. Use an overlay IP address as a secondary IP address with the primary node of the cluster.
    - [ ] B. Choose an overlay IP address within the VPC CIDR block that corresponds with the secondary node of the cluster.
    - [ ] C. Use an overlay IP address as a virtual IP address.
    - [ ] D. Choose an overlay IP address within the VPC CIDR block that corresponds with the primary node of the cluster.
    - [ ] E. Choose an overlay IP address outside the VPC CIDR block that hosts the application and the database.

    <details>
       <summary>Answer</summary>

       CE.

    </details>

54. A company needs to implement high availability for its SAP S/4HANA system on AWS. The company will use a SUSE Linux Enterprise Server clustering solution in private subnets across two Availability Zones. An SAP solutions architect must ensure that the solution can route traffic to the active SAP instance in this clustered configuration. What should the SAP solutions architect do to meet these requirements?
    - [ ] A. Implement the SAP cluster solution by using a secondary private IP address. Reassign the secondary private IP address from one network interface to another network interface in the event of any failure that affects the primary instance.
    - [ ] B. Implement the SAP cluster solution by using an Elastic IP address. Mask the failure of an instance or software by rapidly remapping the address to another instance in the account.
    - [ ] C. Implement the SAP cluster solution by using a public IP address. Use this public IP address for communication between the instances and the internet.
    - [ ] D. Implement the SAP cluster solution by using an overlay IP address that is outside the CIDR block of the VPC. Use overlay IP address routing to dynamically update the route table to point to the active node and provide external access by using a Network Load Balancer or AWS Transit Gateway.

    <details>
       <summary>Answer</summary>

       D.

    </details>
