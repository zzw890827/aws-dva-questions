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

21. A developer maintains an Amazon API Gateway REST API. Customers use the API through a frontend UI and Amazon Cognito authentication. The developer has a new version of the API that contains new endpoints and backward-incompatible interface changes. The developer needs to provide beta access to other developers on the team without affecting customers. Which solution will meet these requirements with the LEAST operational overhead?
    - [ ] A. Define a development stage on the API Gateway API. Instruct the other developers to point the endpoints to the development stage.
    - [ ] B. Define a new API Gateway API that points to the new API application code. Instruct the other developers to point the endpoints to the new API.
    - [ ] C. Implement a query parameter in the API application code that determines which code version to call.
    - [ ] D. Specify new API Gateway endpoints for the API endpoints that the developer wants to add.

    <details>
       <summary>Answer</summary>

       A.

    </details>

22. A developer is creating an application that will store personal health information (PHI). The PHI needs to be encrypted at all times. An encrypted Amazon RDS for MySQL DB instance is storing the data. The developer wants to increase the performance of the application by caching frequently accessed data while adding the ability to sort or rank the cached datasets. Which solution will meet these requirements?
    - [ ] A. Create an Amazon ElastiCache for Redis instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.
    - [ ] B. Create an Amazon ElastiCache for Memcached instance. Enable encryption of data in transit and at rest. Store frequently accessed data in the cache.
    - [ ] C. Create an Amazon RDS for MySQL read replica. Connect to the read replica by using SSL. Configure the read replica to store frequently accessed data.
    - [ ] D. Create an Amazon DynamoDB table and a DynamoDB Accelerator (DAX) cluster for the table. Store frequently accessed data in the DynamoDB table.
  
    <details>
       <summary>Answer</summary>

       A.
       - A. Amazon ElastiCache for Redis supports both encryption at rest and in transit. Additionally, Redis supports sorted data structures like Sorted Sets, which can be used for sorting or ranking datasets.
       - B. Amazon ElastiCache for Memcached supports encryption in transit but does not support encryption at rest (as of my last update in January 2022). Therefore, it's not suitable for storing PHI data that needs to be encrypted at all times.
       - C. Amazon RDS for MySQL read replica can be used to offload read traffic from the primary database, but it doesn't serve as a caching layer like ElastiCache. Also, while connecting with SSL provides encryption in transit, it doesn't necessarily improve cache-like performance for frequently accessed data.
       - D. Amazon DynamoDB with DAX is a caching solution for DynamoDB, but the architecture is more suited for applications that already leverage DynamoDB as the primary database. If you're not already using DynamoDB, introducing it solely for caching may be overkill. Additionally, DAX provides in-memory caching, so you would have to ensure the in-memory data is also encrypted.

    </details>

23. A company has a multi-node Windows legacy application that runs on premises. The application uses a network shared folder as a centralized configuration repository to store configuration files in .xml format. The company is migrating the application to Amazon EC2 instances. As part of the migration to AWS, a developer must identify a solution that provides high availability for the repository. Which solution will meet this requirement MOST cost-effectively?
    - [ ] A. Mount an Amazon Elastic Block Store (Amazon EBS) volume onto one of the EC2 instances. Deploy a file system on the EBS volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.
    - [ ] B. Deploy a micro EC2 instance with an instance store volume. Use the host operating system to share a folder. Update the application code to read and write configuration files from the shared folder.
    - [ ] C. Create an Amazon S3 bucket to host the repository. Migrate the existing .xml files to the S3 bucket. Update the application code to use the AWS SDK to read and write configuration files from Amazon S3.
    - [ ] D. Create an Amazon S3 bucket to host the repository. Migrate the existing xml files to the S3 bucket. Mount the S3 bucket to the EC2 instances as a local volume. Update the application code to read and write configuration files from the disk.

    <details>
       <summary>Answer</summary>

       C.

    </details>

24. A company wants to deploy and maintain static websites on AWS. Each website's source code is hosted in one of several version control systems, including AWS CodeCommit, Bitbucket, and GitHub. The company wants to implement phased releases by using development, staging, user acceptance testing, and production environments in the AWS Cloud. Deployments to each environment must be started by code merges on the relevant Git branch. The company wants to use HTTPS for all data exchange. The company needs a solution that does not require servers to run continuously. Which solution will meet these requirements with the LEAST operational overhead?
    - [ ] A. Host each website by using AWS Amplify with a serverless backend. Conned the repository branches that correspond to each of the desired environments. Start deployments by merging code changes to a desired branch.
    - [ ] B. Host each website in AWS Elastic Beanstalk with multiple environments. Use the EB CLI to link each repository branch. Integrate AWS CodePipeline to automate deployments from version control code merges.
    - [ ] C. Host each website in different Amazon S3 buckets for each environment. Configure AWS CodePipeline to pull source code from version control. Add an AWS CodeBuild stage to copy source code to Amazon S3.
    - [ ] D. Host each website on its own Amazon EC2 instance. Write a custom deployment script to bundle each website's static assets. Copy the assets to Amazon EC2. Set up a workflow to run the script when code is merged.

    <details>
       <summary>Answer</summary>

       A.
       - A. AWS Amplify with a serverless backend would allow for static site hosting with HTTPS support. Amplify can automatically deploy changes based on branches in connected repositories, which aligns with the requirement for deployments initiated by code merges. It also provides a serverless approach, meaning no continuously running servers.
       - B. AWS Elastic Beanstalk (EB) is designed for scalable web applications and services but can also host static sites. Using EB with the CLI to link repositories and integrating AWS CodePipeline can meet the deployment requirements. However, EB does have an underlying infrastructure that would be running continuously. Additionally, the setup and maintenance of EB, the EB CLI, and CodePipeline might introduce a higher operational overhead compared to other solutions.
       - C. Hosting in S3 buckets would mean static hosting with HTTPS (when integrated with Amazon CloudFront). Using CodePipeline and CodeBuild to automate deployments from version control and copy to S3 aligns with the requirements. However, this involves multiple components (S3, CodePipeline, CodeBuild), which can add operational overhead, albeit less than option B.
       - D. Using Amazon EC2 would mean continuously running servers, which violates one of the requirements. Also, manually writing deployment scripts and managing EC2 instances introduces significant operational overhead.

    </details>

25. A company is migrating its on-premises database to Amazon RDS for MySQL. The company has read-heavy workloads, and wants to make sure it re-factors its code to achieve optimum read performance for its queries. How can this objective be met?
    - [ ] A. Add database retries to effectively use RDS with vertical scaling.
    - [ ] B. Use RDS with multi-AZ deployment.
    - [ ] C. Add a connection string to use an RDS read replica for read queries.
    - [ ] D. Add a connection string to use a read replica on an EC2 instance.
    <details>
       <summary>Answer</summary>

       C.

    </details>

26. A developer is creating an application that will be deployed on IoT devices. The application will send data to a RESTful API that is deployed as an AWS Lambda function. The application will assign each API request a unique identifier. The volume of API requests from the application can randomly increase at any given time of day. During periods of request throttling, the application might need to retry requests. The API must be able to handle duplicate requests without inconsistencies or data loss. Which solution will meet these requirements?
    - [ ] A. Create an Amazon RDS for MySQL DB instance. Store the unique identifier for each request in a database table. Modify the Lambda function to check the table for the identifier before processing the request.
    - [ ] B. Create an Amazon DynamoDB table. Store the unique identifier for each request in the table. Modify the Lambda function to check the table for the identifier before processing the request.
    - [ ] C. Create an Amazon DynamoDB table. Store the unique identifier for each request in the table. Modify the Lambda function to return a client error response when the function receives a duplicate request.
    - [ ] D. Create an Amazon ElastiCache for Memcached instance. Store the unique identifier for each request in the cache. Modify the Lambda function to check the cache for the identifier before processing the request.

    <details>
       <summary>Answer</summary>

       B.

    </details>

27. A developer wants to expand an application to run in multiple AWS Regions. The developer wants to copy Amazon Machine Images (AMIs) with the latest changes and create a new application slack in the destination Region. According to company requirements, all AMIs must be encrypted in all Regions. However, not all the AMIs that the company uses are encrypted. How can the developer expand the application to run in the destination Region while meeting the encryption requirement?
    - [ ] A. Create a new AMIs, and specify encryption parameters. Copy the encrypted AMIs to the destination Region. Delete the unencrypted AMIs.
    - [ ] B. Use AWS Key Management Service (AWS KMS) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.
    - [ ] C. Use AWS Certificate Manager (ACM) to enable encryption on the unencrypted AMIs. Copy the encrypted AMIs to the destination Region.
    - [ ] D. Copy the unencrypted AMIs to the destination Region. Enable encryption by default in the destination Region.

       <summary>Answer</summary>

       B.
      - A. Creating new AMIs with encryption enabled and then copying them to the destination region is feasible. However, you cannot directly specify encryption parameters on the source AMIs if they are already created and unencrypted. This option implies creating new encrypted AMIs from the instances and then copying them to the destination region, which is plausible but may not be the most straightforward solution.
      - B. AWS Key Management Service (AWS KMS) is used for managing encryption keys, but you cannot directly "enable encryption" on an existing unencrypted AMI using KMS. However, you can copy the AMI and specify a KMS key for encryption during the copy process.
      - C. AWS Certificate Manager (ACM) is for managing SSL/TLS certificates, not for encrypting AMIs.
      - D. If "encryption by default" is enabled in the destination region, any new EBS volumes or snapshot created in that region would be encrypted. However, simply copying an unencrypted AMI to the destination region won't encrypt the AMI automatically, even if encryption by default is enabled.

    </details>

28. A company hosts a client-side web application for one of its subsidiaries on Amazon S3. The web application can be accessed through Amazon CloudFront from <https://www.example.com>. After a successful rollout, the company wants to host three more client-side web applications for its remaining subsidiaries on three separate S3 buckets. To achieve this goal, a developer moves all the common JavaScript files and web fonts to a central S3 bucket that serves the web applications. However, during testing, the developer notices that the browser blocks the JavaScript files and web fonts. What should the developer do to prevent the browser from blocking the JavaScript files and web fonts?
    - [ ] A. Create four access points that allow access to the central S3 bucket. Assign an access point to each web application bucket.
    - [ ] B. Create a bucket policy that allows access to the central S3 bucket. Attach the bucket policy to the central S3 bucket.
    - [ ] C. Create a cross-origin resource sharing (CORS) configuration that allows access to the central S3 bucket. Add the CORS configuration to the central S3 bucket.
    - [ ] D. Create a Content-MD5 header that provides a message integrity check for the central S3 bucket. Insert the Content-MD5 header for each web application request.

    <details>
       <summary>Answer</summary>

       C.

    </details>

29. An application is processing clickstream data using Amazon Kinesis. The clickstream data feed into Kinesis experiences periodic spikes. The PutRecords API call occasionally fails and the logs show that the failed call returns the response shown below, Which techniques will help mitigate this exception? (Choose two.)

    ```json
    {
      "FailedRecordCount": "1",
      "Records": [
         {
            "SequenceNumber": "2123137863287632187",
            "ShardID": "ShardId-463783687423"
         },
         {
            "ErrorCode": "ProvisionedThroughputExceededException",
            "ErrorMessage": "Rate Exceeded for shard ShardId-463783687423 in stream exampleStreamName under account 1234567."
         }
      ]
    }
    ```

    - [ ] A. Implement retries with exponential backoff.
    - [ ] B. Use a PutRecord API instead of PutRecords.
    - [ ] C. Reduce the frequency and/or size of the requests.
    - [ ] D. Use Amazon SNS instead of Kinesis.
    - [ ] E. Reduce the number of KCL consumers.

    <details>
       <summary>Answer</summary>

       AC.
       - A. This is a common best practice for handling throttling errors. By implementing retries with exponential backoff, the application can make repeated attempts to send the data, with increasing wait times between each attempt, until the request succeeds or a maximum number of retries is reached.
       - B. Switching to the PutRecord API from the PutRecords API wouldn't necessarily resolve the throughput exception, especially if the volume of data being sent is the root cause of the problem.
       - C. By reducing the frequency or size of the requests, you're sending data at a rate that better aligns with the Kinesis stream's provisioned throughput, which can help avoid the "Rate Exceeded" errors.
       - D. SNS serves a different use case compared to Kinesis. SNS is for pub/sub messaging while Kinesis is designed for real-time streaming data. Switching to SNS would not directly address the issue of the throughput exception and may not meet the application's requirements.
       - E. Reducing the number of KCL (Kinesis Client Library) consumers wouldn't help with the "Rate Exceeded" errors. The error in question is related to putting (or writing) data into the stream, not reading from it. The number of KCL consumers affects the read capacity, not the write capacity.

    </details>

30. A company has an application that uses Amazon Cognito user pools as an identity provider. The company must secure access to user records. The company has set up multi-factor authentication (MFA). The company also wants to send a login activity notification by email every time a user logs in. What is the MOST operationally efficient solution that meets this requirement?
    - [ ] A. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon API Gateway API to invoke the function. Call the API from the client side when login confirmation is received.
    - [ ] B. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Add an Amazon Cognito post authentication Lambda trigger for the function.
    - [ ] C. Create an AWS Lambda function that uses Amazon Simple Email Service (Amazon SES) to send the email notification. Create an Amazon CloudWatch Logs log subscription filter to invoke the function based on the login status.
    - [ ] D. Configure Amazon Cognito to stream all logs to Amazon Kinesis Data Firehose. Create an AWS Lambda function to process the streamed logs and to send the email notification based on the login status of each user.

    <details>
       <summary>Answer</summary>

       B.

    </details>

31. A developer has an application that stores data in an Amazon S3 bucket. The application uses an HTTP API to store and retrieve objects. When the PutObject API operation adds objects to the S3 bucket the developer must encrypt these objects at rest by using server-side encryption with Amazon S3 managed keys (SSE-S3). Which solution will meet this requirement?
    - [ ] A. Create an AWS Key Management Service (AWS KMS) key. Assign the KMS key to the S3 bucket.
    - [ ] B. Set the x-amz-server-side-encryption header when invoking the PutObject API operation.
    - [ ] C. Provide the encryption key in the HTTP header of every request.
    - [ ] D. Apply TLS to encrypt the traffic to the S3 bucket.

    <details>
       <summary>Answer</summary>

       B.

    </details>

32. A developer needs to perform geographic load testing of an API. The developer must deploy resources to multiple AWS Regions to support the load testing of the API. How can the developer meet these requirements without additional application code?
    - [ ] A. Create and deploy an AWS Lambda function in each desired Region. Configure the Lambda function to create a stack from an AWS CloudFormation template in that Region when the function is invoked.
    - [ ] B. Create an AWS CloudFormation template that defines the load test resources. Use the AWS CLI create-stack-set command to create a stack set in the desired Regions.
    - [ ] C. Create an AWS Systems Manager document that defines the resources. Use the document to create the resources in the desired Regions.
    - [ ] D. Create an AWS CloudFormation template that defines the load test resources. Use the AWS CLI deploy command to create a stack from the template in each Region.

    <details>
       <summary>Answer</summary>

       B.

    </details>

33. A developer is creating an application that includes an Amazon API Gateway REST API in the us-east-2 Region. The developer wants to use Amazon CloudFront and a custom domain name for the API. The developer has acquired an SSL/TLS certificate for the domain from a third-party provider. How should the developer configure the custom domain for the application?
    - [ ] A. Import the SSL/TLS certificate into AWS Certificate Manager (ACM) in the same Region as the API. Create a DNS A record for the custom domain.
    - [ ] B. Import the SSL/TLS certificate into CloudFront. Create a DNS CNAME record for the custom domain.
    - [ ] C. Import the SSL/TLS certificate into AWS Certificate Manager (ACM) in the same Region as the API. Create a DNS CNAME record for the custom domain.
    - [ ] D. Import the SSL/TLS certificate into AWS Certificate Manager (ACM) in the us-east-1 Region. Create a DNS CNAME record for the custom domain.

    <details>
       <summary>Answer</summary>

       D.
       When using a custom domain with Amazon API Gateway and CloudFront, the SSL/TLS certificate needs to be in AWS Certificate Manager (ACM). However, the important detail to remember is that even if your API Gateway is in a region other than us-east-1, when you are associating a custom domain name with an API Gateway, the certificate for the custom domain name should be imported into ACM in the us-east-1 region. This is because API Gateway uses CloudFront for custom domain names, and CloudFront distributions require certificates to be in the us-east-1 region.

    </details>

34. A developer is creating a template that uses AWS CloudFormation to deploy an application. The application is serverless and uses Amazon API Gateway. Amazon DynamoDB, and AWS Lambda. Which AWS service or tool should the developer use to define serverless resources in YAML?
    - [ ] A. CloudFormation serverless intrinsic functions
    - [ ] B. AWS Elastic Beanstalk
    - [ ] C. AWS Serverless Application Model (AWS SAM)
    - [ ] D. AWS Cloud Development Kit (AWS CDK)

    <details>
       <summary>Answer</summary>

       C.
       - A. CloudFormation serverless intrinsic functions: CloudFormation does support creating serverless resources but doesn't have the shorthand syntax that AWS SAM provides for serverless applications.
       - B. AWS Elastic Beanstalk: This service is primarily used for deploying web applications and services. It isn't focused on serverless applications or defining resources in YAML specifically for serverless scenarios.
       - C. AWS Serverless Application Model (AWS SAM): This is the correct choice. AWS SAM provides a simplified CloudFormation syntax to express serverless resources, making it easier to define serverless applications.
       - D. AWS Cloud Development Kit (AWS CDK): The AWS CDK is a software development framework to define cloud infrastructure in code and provision it through AWS CloudFormation. While you can define serverless resources using the AWS CDK, it uses programming languages like TypeScript, Python, etc., not YAML or JSON.

    </details>

35. A developer wants to insert a record into an Amazon DynamoDB table as soon as a new file is added to an Amazon S3 bucket. Which set of steps would be necessary to achieve this?
    - [ ] A. Create an event with Amazon EventBridge that will monitor the S3 bucket and then insert the records into DynamoDB.
    - [ ] B. Configure an S3 event to invoke an AWS Lambda function that inserts records into DynamoDB.
    - [ ] C. Create an AWS Lambda function that will poll the S3 bucket and then insert the records into DynamoDB.
    - [ ] D. Create a cron job that will run at a scheduled time and insert the records into DynamoDB.

    <details>
       <summary>Answer</summary>

       B.

    </details>

36. A development team maintains a web application by using a single AWS CloudFormation template. The template defines web servers and an Amazon RDS database. The team uses the Cloud Formation template to deploy the Cloud Formation stack to different environments. During a recent application deployment, a developer caused the primary development database to be dropped and recreated. The result of this incident was a loss of data. The team needs to avoid accidental database deletion in the future. Which solutions will meet these requirements? (Choose two.)
    - [ ] A. Add a CloudFormation Deletion Policy attribute with the Retain value to the database resource.
    - [ ] B. Update the CloudFormation stack policy to prevent updates to the database.
    - [ ] C. Modify the database to use a Multi-AZ deployment.
    - [ ] D. Create a CloudFormation stack set for the web application and database deployments.
    - [ ] E. Add a Cloud Formation DeletionPolicy attribute with the Retain value to the stack.

    <details>
       <summary>Answer</summary>

       AB.
      - A. This will ensure that even if the stack is deleted or the database resource is removed from the template, the database will not be deleted.
      - B. By denying update actions on the database resource, you can prevent unintentional changes that might be harmful.

    </details>

37. A company has an Amazon S3 bucket that contains sensitive data. The data must be encrypted in transit and at rest. The company encrypts the data in the S3 bucket by using an AWS Key Management Service (AWS KMS) key. A developer needs to grant several other AWS accounts the permission to use the S3 GetObject operation to retrieve the data from the S3 bucket. How can the developer enforce that all requests to retrieve the data provide encryption in transit?
    - [ ] A. Define a resource-based policy on the S3 bucket to deny access when a request meets the condition "aws:SecureTransport": "false".
    - [ ] B. Define a resource-based policy on the S3 bucket to allow access when a request meets the condition "aws:SecureTransport": "false".
    - [ ] C. Define a role-based policy on the other accounts' roles to deny access when a request meets the condition of "aws:SecureTransport": "false".
    - [ ] D. Define a resource-based policy on the KMS key to deny access when a request meets the condition of "aws:SecureTransport": "false".

    <details>
       <summary>Answer</summary>

       A.
       - A. This is the correct approach. By setting a condition that denies access when "aws:SecureTransport" is "false", you ensure that only encrypted (in transit) requests can access the S3 bucket.
       - B. This would explicitly allow non-secure (unencrypted in transit) requests, which is opposite of what we want.
       - C. While it's possible to define such a policy on the other accounts' roles, it's simpler and more effective to manage the encryption enforcement directly on the S3 bucket, ensuring that no matter who or where the request comes from, the encryption in transit is enforced.
       - D. The KMS key's policy will determine who can use the key for encrypting/decrypting. However, it's not where you'd typically enforce the SSL/TLS requirement for accessing the data in S3. That should be enforced at the S3 bucket level.

    </details>

38. An application that is hosted on an Amazon EC2 instance needs access to files that are stored in an Amazon S3 bucket. The application lists the objects that are stored in the S3 bucket and displays a table to the user. During testing, a developer discovers that the application does not show any objects in the list. What is the MOST secure way to resolve this issue?
    - [ ] A. Update the IAM instance profile that is attached to the EC2 instance to include the S3:' permission for the S3 bucket.
    - [ ] B. Update the IAM instance profile that is attached to the EC2 instance to include the S3:ListBucket permission for the S3 bucket.
    - [ ] C. Update the developer's user permissions to include the S3:ListBucket permission for the S3 bucket.
    - [ ] D. Update the S3 bucket policy by including the S3:ListBucket permission and by setting the Principal element to specify the account number of the EC2 instance.
    <details>
       <summary>Answer</summary>

       B.

    </details>

39. A company is planning to securely manage one-time fixed license keys in AWS. The company's development team needs to access the license keys in automaton scripts that run in Amazon EC2 instances and in AWS CloudFormation stacks. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. Amazon S3 with encrypted files prefixed with “config”
    - [ ] B. AWS Secrets Manager secrets with a tag that is named SecretString
    - [ ] C. AWS Systems Manager Parameter Store SecureString parameters
    - [ ] D. CloudFormation NoEcho parameters

    <details>
       <summary>Answer</summary>

       C.

    </details>

40. A company has deployed infrastructure on AWS. A development team wants to create an AWS Lambda function that will retrieve data from an Amazon Aurora database. The Amazon Aurora database is in a private subnet in company's VPC. The VPC is named VPC1. The data is relational in nature. The Lambda function needs to access the data securely. Which solution will meet these requirements?
    - [ ] A. Create the Lambda function. Configure VPC1 access for the function. Attach a security group named SG1 to both the Lambda function and the database. Configure the security group inbound and outbound rules to allow TCP traffic on Port 3306.
    - [ ] B. Create and launch a Lambda function in a new public subnet that is in a new VPC named VPC2. Create a peering connection between VPC1 and VPC2.
    - [ ] C. Create the Lambda function. Configure VPC1 access for the function. Assign a security group named SG1 to the Lambda function. Assign a second security group named SG2 to the database. Add an inbound rule to SG1 to allow TCP traffic from Port 3306.
    - [ ] D. Export the data from the Aurora database to Amazon S3. Create and launch a Lambda function in VPC1. Configure the Lambda function query the data from Amazon S3.
    <details>
       <summary>Answer</summary>

       A.
       This is a good approach. By attaching the Lambda function to the VPC, it can access resources inside the VPC. Also, by using the same security group for both Lambda and Aurora, you can set rules that allow them to communicate with each other.While placing the Lambda function in VPC1 is correct, modifying the Lambda function's security group (SG1) inbound rules to allow traffic from Port 3306 is not appropriate. Instead, the Aurora's security group (SG2) should allow incoming traffic on port 3306 from the Lambda function.

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
