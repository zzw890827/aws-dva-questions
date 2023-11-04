# AWS DVA 03

1. A developer wants to add request validation to a production environment Amazon API Gateway API. The developer needs to test the changes before the API is deployed to the production environment. For the test, the developer will send test requests to the API through a testing tool. Which solution will meet these requirements with the LEAST operational overhead?
   - [ ] A. Export the existing API to an OpenAPI file. Create a new API. Import the OpenAPI file. Modify the new API to add request validation. Perform the tests. Modify the existing API to add request validation. Deploy the existing API to production.
   - [ ] B. Modify the existing API to add request validation. Deploy the updated API to a new API Gateway stage. Perform the tests. Deploy the updated API to the API Gateway production stage.
   - [ ] C. Create a new API. Add the necessary resources and methods, including new request validation. Perform the tests. Modify the existing API to add request validation. Deploy the existing API to production
   - [ ] D. Clone the existing API. Modify the new API to add request validation. Perform the tests. Modify the existing API to add request validation. Deploy the existing API to production.

   <details>
      <summary>Answer</summary>

      B.
      - You're working with the same API.
      - You're using API Gateway's built-in functionality for creating different stages, which is designed precisely for such scenarios.
      - It allows for easy promotion of changes from one stage to another.

   </details>

2. An online food company provides an Amazon API Gateway HTTP API to receive orders for partners. The API is integrated with an AWS Lambda function. The Lambda function stores the orders in an Amazon DynamoDB table. The company expects to onboard additional partners. Some of the partners require additional Lambda functions to receive orders. The company has created an Amazon S3 bucket. The company needs to store all orders and updates in the S3 bucket for future analysis. How can the developer ensure that all orders and updates are stored to Amazon S3 with the LEAST development effort?
   - [ ] A. Create a new Lambda function and a new API Gateway API endpoint. Configure the new Lambda function to write to the S3 bucket. Modify the original Lambda function to post updates to the new API endpoint.
   - [ ] B. Use Amazon Kinesis Data Streams to create a new data stream. Modify the Lambda function to publish orders to the data stream. Configure the data stream to write to the S3 bucket.
   - [ ] C. Enable DynamoDB Streams on the DynamoDB table. Create a new Lambda function. Associate the stream’s Amazon Resource Name (ARN) with the Lambda function. Configure the Lambda function to write to the S3 bucket as records appear in the table's stream.
   - [ ] D. Modify the Lambda function to publish to a new Amazon Simple Notification Service (Amazon SNS) topic as the Lambda function receives orders. Subscribe a new Lambda function to the topic. Configure the new Lambda function to write to the S3 bucket as updates come through the topic.

   <details>
      <summary>Answer</summary>

      C.

   </details>

3. A company's website runs on an Amazon EC2 instance and uses Auto Scaling to scale the environment during peak times. Website users across the world are experiencing high latency due to static content on the EC2 instance, even during non-peak hours. Which combination of steps will resolve the latency issue? (Choose two.)
   - [ ] A. Double the Auto Scaling group's maximum number of servers.
   - [ ] B. Host the application code on AWS Lambda.
   - [ ] C. Scale vertically by resizing the EC2 instances.
   - [ ] D. Create an Amazon CloudFront distribution to cache the static content.
   - [ ] E. Store the application's static content in Amazon S3.

   <details>
      <summary>Answer</summary>

      DE.

   </details>

4. Company A has an S3 bucket containing premier content that they intend to make available to only paid subscribers of their website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors. How can Company A provide only paid subscribers the ability to download a premier content file in the S3 bucket?
   - [ ] A. Apply a bucket policy that grants anonymous users to download the content from the S3 bucket
   - [ ] B. Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download
   - [ ] C. Add a bucket policy that requires Multi-Factor Authentication for requests to access the S3 bucket objects
   - [ ] D. Enable server side encryption on the S3 bucket for data protection against the non-paying website visitors

   <details>
      <summary>Answer</summary>

      B.

   </details>

5. A developer is creating an AWS Lambda function that searches for items from an Amazon DynamoDB table that contains customer contact information. The DynamoDB table items have the customer’s email_address as the partition key and additional properties such as customer_type, name and `job_title`. The Lambda function runs whenever a user types a new character into the customer_type text input. The developer wants the search to return partial matches of all the email_address property of a particular customer_type. The developer does not want to recreate the DynamoDB table. What should the developer do to meet these requirements?
   - [ ] A. Add a global secondary index (GSI) to the DynamoDB table with customer_type as the partition key and email_address as the sort key. Perform a query operation on the GSI by using the begins_with key condition expression with the email_address property.
   - [ ] B. Add a global secondary index (GSI) to the DynamoDB table with email_address as the partition key and customer_type as the sort key. Perform a query operation on the GSI by using the begins_with key condition expression with the email_address property.
   - [ ] C. Add a local secondary index (LSI) to the DynamoDB table with customer_type as the partition key and email_address as the sort key. Perform a query operation on the LSI by using the begins_with key condition expression with the email_address property.
   - [ ] D. Add a local secondary index (LSI) to the DynamoDB table with job_title as the partition key and email_address as the sort key. Perform a query operation on the LSI by using the begins_with key condition expression with the email_address property.

   <details>
      <summary>Answer</summary>

      A.
      The most suitable solution would be to have the customer_type as the partition key because it's the main attribute on which the search is performed. The email addresses that match partially based on the input will be fetched using the begins_with key condition expression on the sort key, which is email_address.

   </details>

6. A developer is building an application that uses AWS API Gateway APIs, AWS Lambda functions, and AWS DynamoDB tables. The developer uses the AWS Serverless Application Model (AWS SAM) to build and run serverless applications on AWS. Each time the developer pushes changes for only to the Lambda functions, all the artifacts in the application are rebuilt. The developer wants to implement AWS SAM Accelerate by running a command to only redeploy the Lambda functions that have changed. Which command will meet these requirements?
   - [ ] A. sam deploy --force-upload
   - [ ] B. sam deploy --no-execute-changeset
   - [ ] C. sam package
   - [ ] D. sam sync --watch

   <details>
      <summary>Answer</summary>

      D.
      If the developer wants to use AWS SAM Accelerate to only redeploy the Lambda functions that have changed, they should use the sam sync command. Additionally, the --watch flag can be used to automatically detect and deploy changes as they are made.

   </details>

7. A developer is building an application that gives users the ability to view bank accounts from multiple sources in a single dashboard. The developer has automated the process to retrieve API credentials for these sources. The process invokes an AWS Lambda function that is associated with an AWS CloudFormation custom resource. The developer wants a solution that will store the API credentials with minimal operational overhead. Which solution will meet these requirements in the MOST secure way?
   - [ ] A. Add an AWS Secrets Manager GenerateSecretString resource to the CloudFormation template. Set the value to reference new credentials for the CloudFormation resource.
   - [ ] B. Use the AWS SDK ssm:PutParameter operation in the Lambda function from the existing custom resource to store the credentials as a parameter. Set the parameter value to reference the new credentials. Set the parameter type to SecureString.
   - [ ] C. Add an AWS Systems Manager Parameter Store resource to the CloudFormation template. Set the CloudFormation resource value to reference the new credentials. Set the resource NoEcho attribute to true.
   - [ ] D. Use the AWS SDK ssm:PutParameter operation in the Lambda function from the existing custom resource to store the credentials as a parameter. Set the parameter value to reference the new credentials. Set the parameter NoEcho attribute to true.

   <details>
      <summary>Answer</summary>

      B:
      - Option A suggests using AWS Secrets Manager, which is specifically designed to handle and rotate secrets in a secure manner. But the described use of a GenerateSecretString resource doesn't fit the scenario of storing provided API credentials; rather, it's for generating random secrets.
      - Option B and Option D suggest using the Systems Manager Parameter Store with the ssm:PutParameter operation. Among them, Option B specifies storing the credentials as a SecureString, which means they're stored encrypted, making this choice secure.
      - Option C involves the Parameter Store as well, but the primary focus of the option seems to be on the NoEcho attribute of CloudFormation, which simply means that the value won't be echoed back in CloudFormation's outputs. This doesn't directly relate to the secure storage of the credentials.

   </details>

8. A developer is trying to get data from an Amazon DynamoDB table called demoman-table. The developer configured the AWS CLI to use a specific IAM user's credentials and executed the following command: The command returned errors and no rows were returned. What is the MOST likely cause of these issues?

    ```bash
    aws dynamodb get-item --table-name demoman-table --key `{"id": {"N": "1993"}}`
    ```

   - [ ] A. The command is incorrect; it should be rewritten to use put-item with a string argument.
   - [ ] B. The developer needs to log a ticket with AWS Support to enable access to the demoman-table.
   - [ ] C. Amazon DynamoDB cannot be accessed from the AWS CLI and needs to be called via the REST API.
   - [ ] D. The IAM user needs an associated policy with read access to demoman-table.

   <details>
      <summary>Answer</summary>

      D.

   </details>

9. An organization is using Amazon CloudFront to ensure that its users experience low-latency access to its web application. The organization has identified a need to encrypt all traffic between users and CloudFront, and all traffic between CloudFront and the web application. How can these requirements be met? (Choose two.)
   - [ ] A. Use AWS KMS to encrypt traffic between CloudFront and the web application.
   - [ ] B. Set the Origin Protocol Policy to HTTPS ONLLY
   - [ ] C. Set the Origin's HTTP Port to 443.
   - [ ] D. Set the Viewer Protocol Policy to HTTPS Only or Redirect HTTP to HTTPS.
   - [ ] E. Enable the CloudFront option Restrict Viewer Access.

   <details>
      <summary>Answer</summary>

      BD.
      - A: Incorrect. AWS KMS (Key Management Service) is used to manage cryptographic keys for your applications, not for encrypting traffic.
      - B: Correct. This ensures that CloudFront always uses HTTPS when fetching content from the origin, which will encrypt the traffic between CloudFront and the web application.
      - C: While port 443 is the default port for HTTPS, just setting the port alone doesn't dictate the protocol to be used.
      - D: This ensures that users either always use HTTPS or are redirected to HTTPS if they try to access using HTTP, which will encrypt the traffic between users and CloudFront.
      - E: This option is used to serve private content through CloudFront using signed URLs or signed cookies, not for encrypting traffic.

   </details>

10. A developer is planning to migrate on-premises company data to Amazon S3. The data must be encrypted, and the encryption keys must support automatic annual rotation. The company must use AWS Key Management Service (AWS KMS) to encrypt the data. Which type of keys should the developer use to meet these requirements?
    - [ ] A. Amazon S3 managed keys
    - [ ] B. Symmetric customer managed keys with key material that is generated by AWS
    - [ ] C. Asymmetric customer managed keys with key material that is generated by AWS
    - [ ] D. Symmetric customer managed keys with imported key material

    <details>
      <summary>Answer</summary>

      B.
      - A: This uses Amazon S3 to manage the encryption key. It doesn't provide control over key rotation directly through AWS KMS.
      - B: This allows for automatic key rotation when it's enabled in AWS KMS.
      - C: Amazon S3 does not support asymmetric CMKs for server-side encryption.
      - D: You can use imported key material, but the requirement is to have the encryption keys support automatic annual rotation. AWS KMS does not rotate symmetric CMKs that have imported key material.

     </details>

11. A team of developers is using an AWS CodePipeline pipeline as a continuous integration and continuous delivery (CI/CD) mechanism for a web application. A developer has written unit tests to programmatically test the functionality of the application code. The unit tests produce a test report that shows the results of each individual check. The developer now wants to run these tests automatically during the CI/CD process. Which solution will meet this requirement with the LEAST operational effort?
    - [ ] A. Write a Git pre-commit hook that runs the tests before every commit. Ensure that each developer who is working on the project has the pre-commit hook installed locally. Review the test report and resolve any issues before pushing changes to AWS CodeCommit.
    - [ ] B. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage after the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.
    - [ ] C. Add a new stage to the pipeline. Use AWS CodeBuild as the provider. Add the new stage before the stage that deploys code revisions to the test environment. Write a buildspec that fails the CodeBuild stage if any test does not pass. Use the test reports feature of CodeBuild to integrate the report with the CodeBuild console. View the test results in CodeBuild. Resolve any issues.
    - [ ] D. Add a new stage to the pipeline. Use Jenkins as the provider. Configure CodePipeline to use Jenkins to run the unit tests. Write a Jenkinsfile that fails the stage if any test does not pass. Use the test report plugin for Jenkins to integrate the report with the Jenkins dashboard. View the test results in Jenkins. Resolve any issues.
    <details>
       <summary>Answer</summary>

       C.
       - A: Using a Git pre-commit hook runs the tests locally before a developer commits. However, it requires each developer to have the hook installed and does not centralize the test reporting. Furthermore, it relies on local testing environments, which can introduce inconsistencies.
       - B. Adding a new stage after deploying to the test environment is not the best choice. Testing should ideally occur before deploying to catch and prevent issues before they reach any environment.
       - C. This option integrates the test phase directly into the CI/CD pipeline, ensuring the tests run before deployment, and leverages AWS CodeBuild's test reporting feature. This solution is centralized, consistent, and provides transparency to the entire team.
       - D. While Jenkins is a popular CI/CD tool, it introduces additional operational overhead by integrating and maintaining another tool in the pipeline. AWS CodePipeline and CodeBuild are natively integrated, and for this scenario, introducing Jenkins would add unnecessary complexity.

    </details>

12. A company has multiple Amazon VPC endpoints in the same VPC. A developer needs to configure an Amazon S3 bucket policy so users can access an S3 bucket only by using these VPC endpoints. Which solution will meet these requirements?
    - [ ] A. Create multiple S3 bucket polices by using each VPC endpoint ID that have the aws:SourceVpce value in the StringNotEquals condition.
    - [ ] B. Create a single S3 bucket policy that has the aws:SourceVpc value and in the StringNotEquals condition to use VPC ID.
    - [ ] C. Create a single S3 bucket policy that has the aws:SourceVpce value and in the StringNotEquals condition to use vpce*.
    - [ ] D. Create a single S3 bucket policy that has multiple aws:sourceVpce value in the StringNotEquals condition. Repeat for all the VPC endpoint IDs.

    <details>
       <summary>Answer</summary>

       C.

    </details>

13. A company uses a custom root certificate authority certificate chain (Root CA Cert) that is 10 KB in size to generate SSL certificates for its on-premises HTTPS endpoints. One of the company’s cloud-based applications has hundreds of AWS Lambda functions that pull data from these endpoints. A developer updated the trust store of the Lambda execution environment to use the Root CA Cert when the Lambda execution environment is initialized. The developer bundled the Root CA Cert as a text file in the Lambda deployment bundle. After 3 months of development, the Root CA Cert is no longer valid and must be updated. The developer needs a more efficient solution to update the Root CA Cert for all deployed Lambda functions. The solution must not include rebuilding or updating all Lambda functions that use the Root CA Cert. The solution must also work for all development, testing, and production environments. Each environment is managed in a separate AWS account. Which combination of steps should the developer take to meet these requirements MOST cost-effectively? (Choose two.)
    - [ ] A. Store the Root CA Cert as a secret in AWS Secrets Manager. Create a resource-based policy. Add IAM users to allow access to the secret.
    - [ ] B. Store the Root CA Cert as a SecureString parameter in AWS Systems Manager Parameter Store. Create a resource-based policy. Add IAM users to allow access to the policy.
    - [ ] C. Store the Root CA Cert in an Amazon S3 bucket. Create a resource-based policy to allow access to the bucket.
    - [ ] D. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store inside the Lambda function handler.
    - [ ] E. Refactor the Lambda code to load the Root CA Cert from the Root CA Cert’s location. Modify the runtime trust store outside the Lambda function handler.
    <details>
       <summary>Answer</summary>

       BE.
       - A. Storing the Root CA Cert in AWS Secrets Manager allows centralized updates. However, Secrets Manager might not be the most cost-effective solution for data that isn't frequently accessed.
       - B. AWS Systems Manager Parameter Store, especially for SecureString parameters, provides centralized storage for configuration data and secrets. This solution is more cost-effective than Secrets Manager for items that aren't accessed as frequently.
       - C. Storing the Root CA Cert in an S3 bucket also allows centralized updates. S3 is a cost-effective solution for storing data, but it might not be the most appropriate for sensitive information like certificates unless you enforce proper security controls.
       - D & E. Modifying the Lambda function to dynamically load the Root CA Cert means you won't need to repackage and redeploy the Lambda function every time the certificate is updated. The distinction between modifying the runtime trust store inside vs. outside the Lambda function handler is about performance. Modifying outside the handler (i.e., at the global scope) means it's done once when the Lambda container is initialized, which is more performance-efficient than modifying inside the handler, which would run every time the Lambda function is invoked.

    </details>

14. A developer maintains applications that store several secrets in AWS Secrets Manager. The applications use secrets that have changed over time. The developer needs to identify required secrets that are still in use. The developer does not want to cause any application downtime. What should the developer do to meet these requirements?
    - [ ] A. Configure an AWS CloudTrail log file delivery to an Amazon S3 bucket. Create an Amazon CloudWatch alarm for the GetSecretValue Secrets Manager API operation requests.
    - [ ] B. Create a secretsmanager-secret-unused AWS Config managed rule. Create an Amazon EventBridge rule to initiate notifications when the AWS Config managed rule is met.
    - [ ] C. Deactivate the applications secrets and monitor the applications error logs temporarily.
    - [ ] D. Configure AWS X-Ray for the applications. Create a sampling rule to match the GetSecretValue Secrets Manager API operation requests.

    <details>
       <summary>Answer</summary>

       B.

    </details>

15. A developer is writing a serverless application that requires an AWS Lambda function to be invoked every 10 minutes. What is an automated and serverless way to invoke the function?
    - [ ] A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function.
    - [ ] B. Configure an environment variable named PERIOD for the Lambda function. Set the value to 600.
    - [ ] C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs on a regular schedule to invoke the Lambda function.
    - [ ] D. Create an Amazon Simple Notification Service (Amazon SNS) topic that has a subscription to the Lambda function with a 600-second timer.
    <details>
       <summary>Answer</summary>

       C.

    </details>

16. A company is using Amazon OpenSearch Service to implement an audit monitoring system. A developer needs to create an AWS CloudFormation custom resource that is associated with an AWS Lambda function to configure the OpenSearch Service domain. The Lambda function must access the OpenSearch Service domain by using OpenSearch Service internal master user credentials. What is the MOST secure way to pass these credentials to the Lambda function?
    - [ ] A. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Set the NoEcho attribute to true.
    - [ ] B. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and to create a parameter in AWS Systems Manager Parameter Store. Set the NoEcho attribute to true. Create an IAM role that has the ssm GetParameter permission. Assign the role to the Lambda function. Store the parameter name as the Lambda function's environment variable. Resolve the parameter's value at runtime
    - [ ] C. Use a CloudFormation parameter to pass the master user credentials at deployment to the OpenSearch Service domain's MasterUserOptions and the Lambda function's environment variable. Encrypt the parameter's value by using the AWS Key Management Service (AWS KMS) encrypt command.
    - [ ] D. Use CloudFormation to create an AWS Secrets Manager secret. Use a CloudFormation dynamic reference to retrieve the secret's value for the OpenSearch Service domain's MasterUserOptions. Create an IAM role that has the secretsmanager:GetSecretValue permission. Assign the role to the Lambda function. Store the secret's name as the Lambda function's environment variable. Resolve the secret's value at runtime.

    <details>
       <summary>Answer</summary>

       D.

    </details>

17. An application runs on multiple EC2 instances behind an ELB. Where is the session data best written so that it can be served reliably across multiple requests?
    - [ ] A. Write data to Amazon ElastiCache.
    - [ ] B. Write data to Amazon Elastic Block Store.
    - [ ] C. Write data to Amazon EC2 Instance Store.
    - [ ] D. Write data to the root filesystem.

    <details>
       <summary>Answer</summary>

       A.

    </details>

18. An ecommerce application is running behind an Application Load Balancer. A developer observes some unexpected load on the application during non-peak hours. The developer wants to analyze patterns for the client IP addresses that use the application. Which HTTP header should the developer use for this analysis?
    - [ ] A. The X-Forwarded-Proto header
    - [ ] B. The X-Forwarded-Host header
    - [ ] C. The X-Forwarded-For header
    - [ ] D. The X-Forwarded-Port header

    <details>
       <summary>Answer</summary>

       C.

    </details>

19. A developer migrated a legacy application to an AWS Lambda function. The function uses a third-party service to pull data with a series of API calls at the end of each month. The function then processes the data to generate the monthly reports. The function has been working with no issues so far. The third-party service recently issued a restriction to allow a fixed number of API calls each minute and each day. If the API calls exceed the limit for each minute or each day, then the service will produce errors. The API also provides the minute limit and daily limit in the response header. This restriction might extend the overall process to multiple days because the process is consuming more API calls than the available limit. What is the MOST operationally efficient way to refactor the serverless application to accommodate this change?
    - [ ] A. Use an AWS Step Functions state machine to monitor API failures. Use the Wait state to delay calling the Lambda function.
    - [ ] B. Use an Amazon Simple Queue Service (Amazon SQS) queue to hold the API calls. Configure the Lambda function to poll the queue within the API threshold limits.
    - [ ] C. Use an Amazon CloudWatch Logs metric to count the number of API calls. Configure an Amazon CloudWatch alarm that stops the currently running instance of the Lambda function when the metric exceeds the API threshold limits.
    - [ ] D. Use Amazon Kinesis Data Firehose to batch the API calls and deliver them to an Amazon S3 bucket with an event notification to invoke the Lambda function.

    <details>
       <summary>Answer</summary>

       B.

    </details>

20. A Developer must analyze performance issues with production-distributed applications written as AWS Lambda functions. These distributed Lambda applications invoke other components that make up the applications. How should the Developer identify and troubleshoot the root cause of the performance issues in production?
    - [ ] A. Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs.
    - [ ] B. Use AWS CloudTrail and then examine the logs.
    - [ ] C. Use AWS X-Ray, then examine the segments and errors.
    - [ ] D. Run Amazon Inspector agents and then analyze performance.

    <details>
       <summary>Answer</summary>

       C.

    </details>

21. A developer wants to deploy a new version of an AWS Elastic Beanstalk application. During deployment, the application must maintain full capacity and avoid service interruption. Additionally, the developer must minimize the cost of additional resources that support the deployment. Which deployment method should the developer use to meet these requirements?
    - [ ] A. All at once
    - [ ] B. Rolling with additional batch
    - [ ] C. Blue/green
    - [ ] D. Immutable

    <details>
       <summary>Answer</summary>

       D.
       - A. All at once: This method updates all instances simultaneously. During the update, the application has downtime, which does not meet the requirement of avoiding service interruption.
       - B. Rolling with additional batch: This method creates an additional batch of instances to ensure full capacity during the deployment. While it avoids downtime, it temporarily increases the cost due to the additional instances, which might not minimize the cost as effectively as the immutable update.
       - C. Blue/green: This method creates a separate environment and switches the CNAME record to the new environment once it's ready. While this approach avoids downtime and ensures full capacity, it could potentially double the cost since it involves running two environments simultaneously.
       - D. Immutable: This method performs updates by launching a new set of instances in a new Auto Scaling group. Once the new instances pass health checks, they are moved into the existing Auto Scaling group, and the old instances are terminated. This method ensures full capacity, avoids downtime, and minimizes additional costs because it does not double the environment's running resources for an extended period. It adds resources temporarily and only in the amount necessary to maintain capacity.

    </details>

22. A developer has observed an increase in bugs in the AWS Lambda functions that a development team has deployed in its Node.js application. To minimize these bugs, the developer wants to implement automated testing of Lambda functions in an environment that closely simulates the Lambda environment. The developer needs to give other developers the ability to run the tests locally. The developer also needs to integrate the tests into the team’s continuous integration and continuous delivery (CI/CD) pipeline before the AWS Cloud Development Kit (AWS CDK) deployment. Which solution will meet these requirements?
    - [ ] A. Create sample events based on the Lambda documentation. Create automated test scripts that use the cdk local invoke command to invoke the Lambda functions. Check the response. Document the test scripts for the other developers on the team. Update the CI/CD pipeline to run the test scripts.
    - [ ] B. Install a unit testing framework that reproduces the Lambda execution environment. Create sample events based on the Lambda documentation. Invoke the handler function by using a unit testing framework. Check the response. Document how to run the unit testing framework for the other developers on the team. Update the CI/CD pipeline to run the unit testing framework.
    - [ ] C. Install the AWS Serverless Application Model (AWS SAM) CLI tool. Use the sam local generate-event command to generate sample events for the automated tests. Create automated test scripts that use the sam local invoke command to invoke the Lambda functions. Check the response. Document the test scripts for the other developers on the team. Update the CI/CD pipeline to run the test scripts.
    - [ ] D. Create sample events based on the Lambda documentation. Create a Docker container from the Node.js base image to invoke the Lambda functions. Check the response. Document how to run the Docker container for the other developers on the team. Update the CI/CD pipeline to run the Docker container.
  
    <details>
       <summary>Answer</summary>

       C.

    </details>

23. A developer is troubleshooting an application that uses Amazon DynamoDB in the us-west-2 Region. The application is deployed to an Amazon EC2 instance. The application requires read-only permissions to a table that is named Cars. The EC2 instance has an attached IAM role that contains the following IAM policy: When the application tries to read from the Cars table, an Access Denied error occurs. How can the developer resolve this error?

    ```json
    {
       "Version": "2012-10-17",
       "Statement": [
          {
             "Sid": "ReadOnlyAPIActions",
             "Effect": "Allow",
             "Action": [
                "dynamodb:GetItem",
                "dynamodb:BatchGetItem",
                "dynamodb:Scan",
                "dynamodb:Query",
                "dynamodb:ConditionCheckItem"
             ],
             "Resource": "arn:aws:dynamodb:us-west-2:account-id:table/Cars"
          }
       ]

    }
    ```

    - [ ] A. Modify the IAM policy resource to be “arn:aws:dynamodb-us-west-2:account-id:table/*”
    - [ ] B. Modify the IAM policy to include the dynamodb:* action.
    - [ ] C. Create a trust policy that specifies the EC2 service principal. Associate the role with the policy.
    - [ ] D. Create a trust relationship between the role and dynamodb.amazonaws.com.

    <details>
       <summary>Answer</summary>

       C.

    </details>

24. When using the AWS Encryption SDK, how does the developer keep track of the data encryption keys used to encrypt data?
    - [ ] A. The developer must manually keep track of the data encryption keys used for each data object.
    - [ ] B. The SDK encrypts the data encryption key and stores it (encrypted) as part of the returned ciphertext.
    - [ ] C. The SDK stores the data encryption keys automatically in Amazon S3.
    - [ ] D. The data encryption key is stored in the Userdata for the EC2 instance.

    <details>
       <summary>Answer</summary>

       B.
       The AWS Encryption SDK provides a set of tools for encrypting data in a manner that is compatible with AWS services. When using the AWS Encryption SDK, the developer doesn't handle the raw data encryption keys (DEKs) directly. Instead, after the data is encrypted with a DEK, the SDK encrypts the DEK itself with a customer master key (CMK). This encrypted DEK is then stored as part of the returned ciphertext. This process is known as envelope encryption.

    </details>

25. An application that runs on AWS Lambda requires access to specific highly confidential objects in an Amazon S3 bucket. In accordance with the principle of least privilege, a company grants access to the S3 bucket by using only temporary credentials. How can a developer configure access to the S3 bucket in the MOST secure way?
    - [ ] A. Hardcode the credentials that are required to access the S3 objects in the application code. Use the credentials to access the required S3 objects.
    - [ ] B. Create a secret access key and access key ID with permission to access the S3 bucket. Store the key and key ID in AWS Secrets Manager. Configure the application to retrieve the Secrets Manager secret and use the credentials to access the S3 objects.
    - [ ] C. Create a Lambda function execution role. Attach a policy to the role that grants access to specific objects in the S3 bucket.
    - [ ] D. Create a secret access key and access key ID with permission to access the S3 bucket. Store the key and key ID as environment variables in Lambda. Use the environment variables to access the required S3 objects.

    <details>
       <summary>Answer</summary>

       C.
       - A. Hardcoding credentials is a bad practice and not recommended. This approach is insecure and does not use temporary credentials.
       - B. Using AWS Secrets Manager to store long-term credentials does provide a level of security, but it's not using temporary credentials.
       - C. This is the best option among the choices. Creating a Lambda function execution role with an attached policy granting access to specific S3 objects aligns with AWS best practices. AWS Lambda assumes this role when executing the function. By using AWS Identity and Access Management (IAM) roles, Lambda functions are granted temporary credentials to access AWS services, which is in line with the requirement.
       - D. Storing long-term credentials as environment variables, even if they are encrypted, isn't a recommended best practice. It also doesn't use temporary credentials.

    </details>

26. A developer has code that is stored in an Amazon S3 bucket. The code must be deployed as an AWS Lambda function across multiple accounts in the same AWS Region as the S3 bucket. An AWS CloudFormation template that runs for each account will deploy the Lambda function. What is the MOST secure way to allow CloudFormation to access the Lambda code in the S3 bucket?
    - [ ] A. Grant the CloudFormation service role the S3 ListBucket and GetObject permissions. Add a bucket policy to Amazon S3 with the pnncipal of "AWS": [account numbers].
    - [ ] B. Grant the CloudFormation service role the S3 GetObject permission. Add a bucket policy to Amazon S3 with the principal of "*".
    - [ ] C. Use a service-based link to grant the Lambda function the S3 ListBucket and GetObject permissions by explicitly adding the S3 bucket’s account number in the resource.
    - [ ] D. Use a service-based link to grant the Lambda function the S3 GetObject permission. Add a resource of "*" to allow access to the S3 bucket.

    <details>
       <summary>Answer</summary>

       A.
       When deploying code across multiple accounts, you want to ensure that the permissions given are the least privileged, while still allowing the necessary actions. Additionally, using a wildcard principal (*) in a bucket policy is not recommended because it's overly permissive and can lead to potential security risks.

    </details>

27. A developer at a company needs to create a small application that makes the same API call once each day at a designated time. The company does not have infrastructure in the AWS Cloud yet, but the company wants to implement this functionality on AWS. Which solution meets these requirements in the MOST operationally efficient manner?
    - [ ] A. Use a Kubernetes cron job that runs on Amazon Elastic Kubernetes Service (Amazon EKS).
    - [ ] B. Use an Amazon Linux crontab scheduled job that runs on Amazon EC2.
    - [ ] C. Use an AWS Lambda function that is invoked by an Amazon EventBridge (Amazon CloudWatch Events) scheduled event.
    - [ ] D. Use an AWS Batch job that is submitted to an AWS Batch job queue.

    <details>
       <summary>Answer</summary>

       C.

    </details>

28. A developer is building a serverless application that is based on AWS Lambda. The developer initializes the AWS software development kit (SDK) outside of the Lambda handler function. What is the PRIMARY benefit of this action?
    - [ ] A. Improves legibility and stylistic convention
    - [ ] B. Takes advantage of runtime environment reuse
    - [ ] C. Provides better error handling
    - [ ] D. Creates a new SDK instance for each invocation

    <details>
       <summary>Answer</summary>

       B.

    </details>

29. A company is using Amazon RDS as the backend database for its application. After a recent marketing campaign, a surge of read requests to the database increased the latency of data retrieval from the database. The company has decided to implement a caching layer in front of the database. The cached content must be encrypted and must be highly available. Which solution will meet these requirements?
    - [ ] A. Amazon CloudFront
    - [ ] B. Amazon ElastiCache for Memcached
    - [ ] C. Amazon ElastiCache for Redis in cluster mode
    - [ ] D. Amazon DynamoDB Accelerator (DAX)

    <details>
       <summary>Answer</summary>

       C.

    </details>

30. A developer at a company recently created a serverless application to process and show data from business reports. The application's user interface (UI) allows users to select and start processing the flies. The UI displays a message when the result is available to view. The application uses AWS Step Functions with AWS Lambda functions to process the files. The developer used Amazon API Gateway and Lambda functions to create an API to support the UI. The company's UI team reports that the request to process a file is often returning timeout errors because of the size or complexity of the files. The UI team wants the API to provide an immediate response so that the UI can display a message while the files are being processed. The backend process that is invoked by the API needs to send an email message when the report processing is complete. What should the developer do to configure the API to meet these requirements?
    - [ ] A. Change the API Gateway route to add an X-Amz-Invocation-Type header with a static value of 'Event' in the integration request. Deploy the API Gateway stage to apply the changes.
    - [ ] B. Change the configuration of the Lambda function that implements the request to process a file. Configure the maximum age of the event so that the Lambda function will run asynchronously.
    - [ ] C. Change the API Gateway timeout value to match the Lambda function timeout value. Deploy the API Gateway stage to apply the changes.
    - [ ] D. Change the API Gateway route to add an X-Amz-Target header with a static value of 'Async' in the integration request. Deploy the API Gateway stage to apply the changes.

    <details>
       <summary>Answer</summary>

       A.
       The objective is to have the API return an immediate response without waiting for the processing to finish. This can be achieved by invoking the Lambda function asynchronously. The header X-Amz-Invocation-Type with a value of Event allows you to invoke the Lambda function asynchronously. This means the Lambda function will return immediately once it's invoked, and the actual processing will happen in the background.

    </details>

31. A developer has an application that is composed of many different AWS Lambda functions. The Lambda functions all use some of the same dependencies. To avoid security issues, the developer is constantly updating the dependencies of all of the Lambda functions. The result is duplicated effort for each function. How can the developer keep the dependencies of the Lambda functions up to date with the LEAST additional complexity?
    - [ ] A. Define a maintenance window for the Lambda functions to ensure that the functions get updated copies of the dependencies.
    - [ ] B. Upgrade the Lambda functions to the most recent runtime version.
    - [ ] C. Define a Lambda layer that contains all of the shared dependencies.
    - [ ] D. Use an AWS CodeCommit repository to host the dependencies in a centralized location.

    <details>
       <summary>Answer</summary>

       C.

    </details>

32. A mobile app stores blog posts in an Amazon DynamoDB table. Millions of posts are added every day, and each post represents a single item in the table. The mobile app requires only recent posts. Any post that is older than 48 hours can be removed. What is the MOST cost-effective way to delete posts that are older than 48 hours?
    - [ ] A. For each item, add a new attribute of type String that has a timestamp that is set to the blog post creation time. Create a script to find old posts with a table scan and remove posts that are older than 48 hours by using the BatchWriteItem API operation. Schedule a cron job on an Amazon EC2 instance once an hour to start the script.
    - [ ] B. For each item, add a new attribute of type String that has a timestamp that is set to the blog post creation time. Create a script to find old posts with a table scan and remove posts that are older than 48 hours by using the BatchWriteItem API operation. Place the script in a container image. Schedule an Amazon Elastic Container Service (Amazon ECS) task on AWS Fargate that invokes the container every 5 minutes.
    - [ ] C. For each item, add a new attribute of type Date that has a timestamp that is set to 48 hours after the blog post creation time. Create a global secondary index (GSI) that uses the new attribute as a sort key. Create an AWS Lambda function that references the GSI and removes expired items by using the BatchWriteItem API operation. Schedule the function with an Amazon CloudWatch event every minute.
    - [ ] D. For each item, add a new attribute of type Number that has a timestamp that is set to 48 hours after the blog post creation time. Configure the DynamoDB table with a TTL that references the new attribute.

    <details>
       <summary>Answer</summary>

       D.

    </details>

33. A developer is modifying an existing AWS Lambda function. While checking the code, the developer notices hardcoded parameter values for an Amazon RDS for SQL Server user name, password, database, host, and port. There also are hardcoded parameter values for an Amazon DynamoDB table, an Amazon S3 bucket, and an Amazon Simple Notification Service (Amazon SNS) topic. The developer wants to securely store the parameter values outside the code in an encrypted format and wants to turn on rotation for the credentials. The developer also wants to be able to reuse the parameter values from other applications and to update the parameter values without modifying code. Which solution will meet these requirements with the LEAST operational overhead?
    - [ ] A. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic.
    - [ ] B. Create an RDS database secret in AWS Secrets Manager. Set the user name, password, database, host, and port. Turn on secret rotation. Create SecureString parameters in AWS Systems Manager Parameter Store for the DynamoDB table, S3 bucket, and SNS topic.
    - [ ] C. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Create encrypted Lambda environment variables for the DynamoDB table, S3 bucket, and SNS topic. Create a Lambda function and set the logic for the credentials rotation task. Schedule the credentials rotation task in Amazon EventBridge.
    - [ ] D. Create RDS database parameters in AWS Systems Manager Parameter Store for the user name, password, database, host, and port. Store the DynamoDB table, S3 bucket, and SNS topic in Amazon S3. Create a Lambda function and set the logic for the credentials rotation. Invoke the Lambda function on a schedule.

    <details>
       <summary>Answer</summary>

       B.

    </details>

34. A Developer accesses AWS CodeCommit over SSH. The SSH keys configured to access AWS CodeCommit are tied to a user with the following permissions: The Developer needs to create/delete branches. Which specific IAM permissions need to be added, based on the principle of least privilege?

    ```json
    {
       "Version": "2012-10-17",
       "Statement": [
          {
             "Sid": "ReadOnlyAPIActions",
             "Effect": "Allow",
             "Action": [
                "codecommit:BatchGetRepository",
                "codecommit:Get*",
                "codecommit:List*",
                "codecommit:GitPull",
                "dynamodb:ConditionCheckItem"
             ],
             "Resource": "*"
          }
       ]

    }
    ```

    - [ ] A. "codecommit:CreateBranch" "codecommit:DeleteBranch"
    - [ ] B. "codecommit:Put*"
    - [ ] C. "codecommit:Update*"
    - [ ] D. "codecommit:*"

    <details>
       <summary>Answer</summary>

       A.

    </details>

35. An application that is deployed to Amazon EC2 is using Amazon DynamoDB. The application calls the DynamoDB REST API. Periodically, the application receives a ProvisionedThroughputExceededException error when the application writes to a DynamoDB table. Which solutions will mitigate this error MOST cost-effectively? (Choose two.)
    - [ ] A. Modify the application code to perform exponential backoff when the error is received.
    - [ ] B. Modify the application to use the AWS SDKs for DynamoDB.
    - [ ] C. Increase the read and write throughput of the DynamoDB table.
    - [ ] D. Create a DynamoDB Accelerator (DAX) cluster for the DynamoDB table.
    - [ ] E. Create a second DynamoDB table. Distribute the reads and writes between two tables.

    <details>
       <summary>Answer</summary>

       AB.
       - A: This is a recommended best practice when dealing with throttling errors from DynamoDB. Exponential backoff is a standard error-handling strategy for network applications in which the client periodically retries a failed request over increasing amounts of time. By doing so, it reduces the impact of request spikes on provisioned throughput.
       - B: AWS SDKs have built-in handling for exponential backoff. If the application is not currently using an SDK, switching to one could simplify the error handling.
       - C: While this would directly address the error, it also comes with increased costs. It's a valid option if the current provisioned throughput is consistently inadequate for the application's needs.
       - D: DAX is a caching service that can reduce the read load on a table. However, it doesn't help with write throughput, which seems to be the problem in this scenario. Thus, this wouldn't address the ProvisionedThroughputExceededException error related to writes.

    </details>

36. When a Developer tries to run an AWS CodeBuild project, it raises an error because the length of all environment variables exceeds the limit for the combined maximum of characters. What is the recommended solution?
    - [ ] A. Add the export LC_ALL=en_US.utf command to the pre_build section to ensure POSIX localization.
    - [ ] B. Use Amazon Cognito to store key-value pairs for large numbers of environment variables.
    - [ ] C. Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables.
    - [ ] D. Use AWS Systems Manager Parameter Store to store large numbers of environment variables.

    <details>
       <summary>Answer</summary>

       D.

    </details>

37. A company is expanding the compatibility of its photo-sharing mobile app to hundreds of additional devices with unique screen dimensions and resolutions. Photos are stored in Amazon S3 in their original format and resolution. The company uses an Amazon CloudFront distribution to serve the photos. The app includes the dimension and resolution of the display as GET parameters with every request. A developer needs to implement a solution that optimizes the photos that are served to each device to reduce load time and increase photo quality. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a dynamic CloudFront origin that automatically maps the request of each device to the corresponding photo variant.
    - [ ] B. Use S3 Batch Operations to invoke an AWS Lambda function to create new variants of the photos with the required dimensions and resolutions. Create a Lambda@Edge function to route requests to the corresponding photo variant by using request headers.
    - [ ] C. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. Change the CloudFront TTL cache policy to the maximum value possible.
    - [ ] D. Create a Lambda@Edge function that optimizes the photos upon request and returns the photos as a response. In the same function, store a copy of the processed photos on Amazon S3 for subsequent requests.

    <details>
       <summary>Answer</summary>

       D.

    </details>

38. A company is building an application for stock trading. The application needs sub-millisecond latency for processing trade requests. The company uses Amazon DynamoDB to store all the trading data that is used to process each trading request. A development team performs load testing on the application and finds that the data retrieval time is higher than expected. The development team needs a solution that reduces the data retrieval time with the least possible effort. Which solution meets these requirements?
    - [ ] A. Add local secondary indexes (LSIs) for the trading data.
    - [ ] B. Store the trading data in Amazon S3, and use S3 Transfer Acceleration.
    - [ ] C. Add retries with exponential backoff for DynamoDB queries.
    - [ ] D. Use DynamoDB Accelerator (DAX) to cache the trading data.
    <details>
       <summary>Answer</summary>

       D.

    </details>

39. A developer is working on a Python application that runs on Amazon EC2 instances. The developer wants to enable tracing of application requests to debug performance issues in the code. Which combination of actions should the developer take to achieve this goal? (Choose two.)
    - [ ] A. Install the Amazon CloudWatch agent on the EC2 instances.
    - [ ] B. Install the AWS X-Ray daemon on the EC2 instances.
    - [ ] C. Configure the application to write JSON-formatted logs to /var/log/cloudwatch.
    - [ ] D. Configure the application to write trace data to /var/log/xray.
    - [ ] E. Install and configure the AWS X-Ray SDK for Python in the application.

    <details>
       <summary>Answer</summary>

       BE.

    </details>

40. A company has an application that runs as a series of AWS Lambda functions. Each Lambda function receives data from an Amazon Simple Notification Service (Amazon SNS) topic and writes the data to an Amazon Aurora DB instance. To comply with an information security policy, the company must ensure that the Lambda functions all use a single securely encrypted database connection string to access Aurora. Which solution will meet these requirements?
    - [ ] A. Use IAM database authentication for Aurora to enable secure database connections for all the Lambda functions.
    - [ ] B. Store the credentials and read the credentials from an encrypted Amazon RDS DB instance.
    - [ ] C. Store the credentials in AWS Systems Manager Parameter Store as a secure string parameter.
    - [ ] D. Use Lambda environment variables with a shared AWS Key Management Service (AWS KMS) key for encryption.

    <details>
       <summary>Answer</summary>

       C.

    </details>

41. A developer is troubleshooting an Amazon API Gateway API. Clients are receiving HTTP 400 response errors when the clients try to access an endpoint of the API. How can the developer determine the cause of these errors?
    - [ ] A. Create an Amazon Kinesis Data Firehose delivery stream to receive API call logs from API Gateway. Configure Amazon CloudWatch Logs as the delivery stream’s destination.
    - [ ] B. Turn on AWS CloudTrail Insights and create a trail. Specify the Amazon Resource Name (ARN) of the trail for the stage of the API.
    - [ ] C. Turn on AWS X-Ray for the API stage. Create an Amazon CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.
    - [ ] D. Turn on execution logging and access logging in Amazon CloudWatch Logs for the API stage Create a CloudWatch Logs log group. Specify the Amazon Resource Name (ARN) of the log group for the API stage.

    <details>
       <summary>Answer</summary>

       D.
       This option is correct because by turning on execution logging and access logging in CloudWatch Logs for the API stage, the developer will get logs related to each API request, which can help identify the cause of the HTTP 400 errors.This option is correct because by turning on execution logging and access logging in CloudWatch Logs for the API stage, the developer will get logs related to each API request, which can help identify the cause of the HTTP 400 errors.

    </details>

42. A company developed an API application on AWS by using Amazon CloudFront, Amazon API Gateway, and AWS Lambda. The API has a minimum of four requests every second. A developer notices that many API users run the same query by using the POST method. The developer wants to cache the POST request to optimize the API resources. Which solution will meet these requirements?
    - [ ] A. Configure the CloudFront cache. Update the application to return cached content based upon the default request headers.
    - [ ] B. Override the cache method in the selected stage of API Gateway. Select the POST method.
    - [ ] C. Save the latest request response in Lambda /tmp directory. Update the Lambda function to check the /tmp directory.
    - [ ] D. Save the latest request in AWS Systems Manager Parameter Store. Modify the Lambda function to take the latest request response from Parameter Store.

    <details>
       <summary>Answer</summary>

       B.
       - A. Amazon CloudFront primarily caches based on GET requests and uses the URL (and potentially some headers, cookies, or query strings) as the cache key. POST requests are typically not cached because they can modify data on the backend, and their payload (body) isn't considered in the caching key.
       - B. API Gateway provides caching capabilities. By enabling caching on a stage, you can cache responses from your API methods. To cache responses to POST requests, you can customize the cache key to include specific headers, query string parameters, or path parameters from the request. This is the most appropriate solution among the given options.
       - C. Storing data in the Lambda /tmp directory is ephemeral and can't be relied upon for caching between invocations. There's no guarantee that two successive calls from an API user will land on the same container, and hence this isn't a reliable caching mechanism.
       - D. AWS Systems Manager Parameter Store isn't designed for caching frequently accessed data. It's designed for configuration management and isn't optimized for high-frequency reads. Relying on it for caching can lead to throttling issues.

    </details>

43. A company is building a microservices application that consists of many AWS Lambda functions. The development team wants to use AWS Serverless Application Model (AWS SAM) templates to automatically test the Lambda functions. The development team plans to test a small percentage of traffic that is directed to new updates before the team commits to a full development of the application. Which combination of steps will meet these requirements in the MOST operationally efficient way? (Choose two.)
    - [ ] A. Use AWS SAM CLI commands in AWS CodeDeploy to invoke the Lambda functions to test the deployment.
    - [ ] B. Declare the EventInvokeConfig on the Lambda functions in the AWS SAM templates with OnSuccess and OnFailure configurations.
    - [ ] C. Enable gradual deployments through AWS SAM templates.
    - [ ] D. Set the development preference type to Canary10Percent30Minutes. Use hooks to test the deployment.
    - [ ] E. Set the development preference type to Linear10Percent10Minutes. Use hooks to test the deployment.

    <details>
       <summary>Answer</summary>

       CE.
       - A. AWS SAM CLI commands are used for local development and testing, and AWS CodeDeploy is for deployment. CodeDeploy can deploy and test Lambda versions, but the SAM CLI does not invoke functions within CodeDeploy.
       - B. The EventInvokeConfig allows you to set up a destination (OnSuccess and OnFailure) for the asynchronous invocation of a Lambda function. This is more about handling the response from async invocations than about deployment preferences.
       - C. AWS SAM templates support gradual deployments. This is done by setting the deployment preference in the AWS SAM template.
       - D. The deployment preference type "Canary10Percent30Minutes" means 10% of the traffic will be routed to the new function version for 30 minutes before shifting the rest. "Hooks" can be used to run validation tests during the deployment. This is an appropriate choice for the requirement.
       - E. The deployment preference type "Linear10Percent10Minutes" means the traffic will be shifted in linear increments of 10% every 10 minutes. Using hooks to test the deployment during these intervals is also a valid option.

    </details>

44. A company is using AWS CloudFormation to deploy a two-tier application. The application will use Amazon RDS as its backend database. The company wants a solution that will randomly generate the database password during deployment. The solution also must automatically rotate the database password without requiring changes to the application. What is the MOST operationally efficient solution that meets these requirements?
    - [ ] A. Use an AWS Lambda function as a CloudFormation custom resource to generate and rotate the password.
    - [ ] B. Use an AWS Systems Manager Parameter Store resource with the SecureString data type to generate and rotate the password.
    - [ ] C. Use a cron daemon on the application’s host to generate and relate the password.
    - [ ] D. Use an AWS Secrets Manager resource to generate and rotate the password.

    <details>
       <summary>Answer</summary>

       D.

    </details>

45. A Developer has been asked to create an AWS Lambda function that is triggered any time updates are made to items in an Amazon DynamoDB table. The function has been created, and appropriate permissions have been added to the Lambda execution role. Amazon DynamoDB streams have been enabled for the table, but the function is still not being triggered. Which option would enable DynamoDB table updates to trigger the Lambda function?
    - [ ] A. Change the StreamViewType parameter value to NEW_AND_OLD_IMAGES for the DynamoDB table
    - [ ] B. Configure event source mapping for the Lambda function
    - [ ] C. Map an Amazon SNS topic to the DynamoDB streams
    - [ ] D. Increase the maximum execution time (timeout) setting of the Lambda function

    <details>
       <summary>Answer</summary>

       B.
       This option is correct. By configuring the event source mapping for the Lambda function and specifying the DynamoDB Stream as the source, AWS Lambda will be triggered whenever there are updates in the table.

    </details>

46. A developer needs to deploy an application running on AWS Fargate using Amazon ECS. The application has environment variables that must be passed to a container for the application to initialize. How should the environment variables be passed to the container?
    - [ ] A. Define an array that includes the environment variables under the environment parameter within the service definition.
    - [ ] B. Define an array that includes the environment variables under the environment parameter within the task definition.
    - [ ] C. Define an array that includes the environment variables under the entryPoint parameter within the task definition.
    - [ ] D. Define an array that includes the environment variables under the entryPoint parameter within the service definition.

    <details>
       <summary>Answer</summary>

       B.

    </details>

47. A development team maintains a web application by using a single AWS CloudFormation template. The template defines web servers and an Amazon RDS database. The team uses the Cloud Formation template to deploy the Cloud Formation stack to different environments. During a recent application deployment, a developer caused the primary development database to be dropped and recreated. The result of this incident was a loss of data. The team needs to avoid accidental database deletion in the future. Which solutions will meet these requirements? (Choose two.)
    - [ ] A. Add a CloudFormation Deletion Policy attribute with the Retain value to the database resource.
    - [ ] B. Update the CloudFormation stack policy to prevent updates to the database.
    - [ ] C. Modify the database to use a Multi-AZ deployment.
    - [ ] D. Create a CloudFormation stack set for the web application and database deployments.
    - [ ] E. Add a Cloud Formation DeletionPolicy attribute with the Retain value to the stack.

    <details>
       <summary>Answer</summary>

       AB.

    </details>

48. A developer is storing sensitive data generated by an application in Amazon S3. The developer wants to encrypt the data at rest A company policy requires an audit trail of when the AWS Key Management Service (AWS KMS) key was used and by whom. Which encryption option will meet these requirements?
    - [ ] A. Server-side encryption with Amazon S3 managed keys (SSE-S3)
    - [ ] B. Server-side encryption with AWS KMS managed keys (SSE-KMS)
    - [ ] C. Server-side encryption with customer-provided keys (SSE-C)
    - [ ] D. Server-side encryption with self-managed keys

    <details>
       <summary>Answer</summary>

       B.

    </details>

49. A company has an ecommerce application. To track product reviews, the company's development team uses an Amazon DynamoDB table. Every record includes the following: • A Review ID, a 16-digit universally unique identifier (UUID) • A Product ID and User ID, 16-digit UUIDs that reference other tables • A Product Rating on a scale of 1-5 • An optional comment from the user. The table partition key is the Review ID. The most performed query against the table is to find the 10 reviews with the highest rating for a given product. Which index will provide the FASTEST response for this query?
    - [ ] A. A global secondary index (GSI) with Product ID as the partition key and Product Rating as the sort key
    - [ ] B. A global secondary index (GSI) with Product ID as the partition key and Review ID as the sort key
    - [ ] C. A local secondary index (LSI) with Product ID as the partition key and Product Rating as the sort key
    - [ ] D. A local secondary index (LSI) with Review ID as the partition key and Product ID as the sort key

    <details>
       <summary>Answer</summary>

       A:
       - A: This is a suitable choice because it allows for partitioning by Product ID and sorting by Product Rating. Using this index, one can efficiently query for the top 10 ratings for a given product.
       - B: This index allows for partitioning by Product ID, but sorting by Review ID doesn't help in fetching top ratings efficiently.
       - C: LSIs require the same partition key as the base table, which in this case is Review ID. Therefore, this option is not valid.
       - D: This doesn't help efficiently in fetching top ratings for a given product since the sort key is Product ID and not Product Rating.

    </details>

50. A company needs to distribute firmware updates to its customers around the world. Which service will allow easy and secure control of the access to the downloads at the lowest cost?
    - [ ] A. Use Amazon CloudFront with signed URLs for Amazon S3
    - [ ] B. Create a dedicated Amazon CloudFront Distribution for each customer
    - [ ] C. Use Amazon CloudFront with AWS Lambda@Edge
    - [ ] D. Use Amazon API Gateway and AWS Lambda to control access to an S3 bucket

    <details>
       <summary>Answer</summary>

       A.

    </details>

51. A developer is testing an application that invokes an AWS Lambda function asynchronously. During the testing phase, the Lambda function fails to process after two retries. How can the developer troubleshoot the failure?
    - [ ] A. Configure AWS CloudTrail logging to investigate the invocation failures
    - [ ] B. Configure Dead Letter Queues by sending events to Amazon SQS for investigation
    - [ ] C. Configure Amazon Simple Workflow Service to process any direct unprocessed events
    - [ ] D. Configure AWS Config to process any direct unprocessed events

    <details>
       <summary>Answer</summary>

       B.

    </details>

52. A company is migrating its PostgreSQL database into the AWS Cloud. The company wants to use a database that will secure and regularly rotate database credentials. The company wants a solution that does not require additional programming overhead. Which solution will meet these requirements?
    - [ ] A. Use Amazon Aurora PostgreSQL for the database. Store the database credentials in AWS Systems Manager Parameter Store. Turn on rotation.
    - [ ] B. Use Amazon Aurora PostgreSQL for the database. Store the database credentials in AWS Secrets Manager. Turn on rotation.
    - [ ] C. Use Amazon DynamoDB for the database. Store the database credentials in AWS Systems Manager Parameter Store. Turn on rotation.
    - [ ] D. Use Amazon DynamoDB for the database. Store the database credentials in AWS Secrets Manager. Turn on rotation.

    <details>
       <summary>Answer</summary>

       B.

    </details>

53. A developer is creating a mobile application that will not require users to log in. What is the MOST efficient method to grant users access to AWS resources?
    - [ ] A. Use an identity provider to securely authenticate with the application.
    - [ ] B. Create an AWS Lambda function to create an IAM user when a user accesses the application.
    - [ ] C. Create credentials using AWS KMS and apply these credentials to users when using the application.
    - [ ] D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources.

    <details>
       <summary>Answer</summary>

       D.

    </details>

54. A company has developed a new serverless application using AWS Lambda functions that will be deployed using the AWS Serverless Application Model (AWS SAM) CLI. Which step should the developer complete prior to deploying the application?
    - [ ] A. Compress the application to a .zip file and upload it into AWS Lambda
    - [ ] B. Test the new AWS Lambda function by first tracing it in AWS X-Ray
    - [ ] C. Bundle the serverless application using a SAM package
    - [ ] D. Create the application environment using the eb create my-env command

    <details>
       <summary>Answer</summary>

       C.

    </details>

55. A company wants to automate part of its deployment process. A developer needs to automate the process of checking for and deleting unused resources that supported previously deployed stacks but that are no longer used. The company has a central application that uses the AWS Cloud Development Kit (AWS CDK) to manage all deployment stacks. The stacks are spread out across multiple accounts. The developer’s solution must integrate as seamlessly as possible within the current deployment process. Which solution will meet these requirements with the LEAST amount of configuration?
    - [ ] A. In the central AWS CDK application, write a handler function in the code that uses AWS SDK calls to check for and delete unused resources. Create an AWS CloudFormation template from a JSON file. Use the template to attach the function code to an AWS Lambda function and to invoke the Lambda function when the deployment stack runs.
    - [ ] B. In the central AWS CDK application, write a handler function in the code that uses AWS SDK calls to check for and delete unused resources. Create an AWS CDK custom resource. Use the custom resource to attach the function code to an AWS Lambda function and to invoke the Lambda function when the deployment stack runs.
    - [ ] C. In the central AWS CDK, write a handler function in the code that uses AWS SDK calls to check for and delete unused resources. Create an API in AWS Amplify. Use the API to attach the function code to an AWS Lambda function and to invoke the Lambda function when the deployment stack runs.
    - [ ] D. In the AWS Lambda console, write a handler function in the code that uses AWS SDK calls to check for and delete unused resources. Create an AWS CDK custom resource. Use the custom resource to import the Lambda function into the stack and to invoke the Lambda function when the deployment stack runs.

    <details>
       <summary>Answer</summary>

       B.
       The goal is to automate the process of checking for and deleting unused resources within the current deployment process managed by the AWS CDK (Cloud Development Kit). AWS CDK provides an integrated way to manage AWS resources. Custom resources in CDK allow you to run custom AWS Lambda functions as part of the AWS CloudFormation provisioning process.

    </details>

56. A company built a new application in the AWS Cloud. The company automated the bootstrapping of new resources with an Auto Scaling group by using AWS CloudFormation templates. The bootstrap scripts contain sensitive data. The company needs a solution that is integrated with CloudFormation to manage the sensitive data in the bootstrap scripts. Which solution will meet these requirements in the MOST secure way?
    - [ ] A. Put the sensitive data into a CloudFormation parameter. Encrypt the CloudFormation templates by using an AWS Key Management Service (AWS KMS) key.
    - [ ] B. Put the sensitive data into an Amazon S3 bucket. Update the CloudFormation templates to download the object from Amazon S3 during bootstrap.
    - [ ] C. Put the sensitive data into AWS Systems Manager Parameter Store as a secure string parameter. Update the CloudFormation templates to use dynamic references to specify template values.
    - [ ] D. Put the sensitive data into Amazon Elastic File System (Amazon EFS). Enforce EFS encryption after file system creation. Update the CloudFormation templates to retrieve data from Amazon EFS.

    <details>
       <summary>Answer</summary>

       C.

    </details>

57. A company needs to set up secure database credentials for all its AWS Cloud resources. The company’s resources include Amazon RDS DB instances, Amazon DocumentDB clusters, and Amazon Aurora DB instances. The company’s security policy mandates that database credentials be encrypted at rest and rotated at a regular interval. Which solution will meet these requirements MOST securely?
    - [ ] A. Set up IAM database authentication for token-based access. Generate user tokens to provide centralized access to RDS DB instances, Amazon DocumentDB clusters, and Aurora DB instances.
    - [ ] B. Create parameters for the database credentials in AWS Systems Manager Parameter Store. Set the Type parameter to SecureString. Set up automatic rotation on the parameters.
    - [ ] C. Store the database access credentials as an encrypted Amazon S3 object in an S3 bucket. Block all public access on the S3 bucket. Use S3 server-side encryption to set up automatic rotation on the encryption key.
    - [ ] D. Create an AWS Lambda function by using the SecretsManagerRotationTemplate template in the AWS Secrets Manager console. Create secrets for the database credentials in Secrets Manager. Set up secrets rotation on a schedule.

    <details>
       <summary>Answer</summary>

       D.

    </details>

58. A developer has created an AWS Lambda function that makes queries to an Amazon Aurora MySQL DB instance. When the developer performs a test, the DB instance shows an error for too many connections. Which solution will meet these requirements with the LEAST operational effort?
    - [ ] A. Create a read replica for the DB instance. Query the replica DB instance instead of the primary DB instance.
    - [ ] B. Migrate the data to an Amazon DynamoDB database.
    - [ ] C. Configure the Amazon Aurora MySQL DB instance for Multi-AZ deployment.
    - [ ] D. Create a proxy in Amazon RDS Proxy. Query the proxy instead of the DB instance.

    <details>
       <summary>Answer</summary>

       D.

    </details>

59. A developer is creating a new REST API by using Amazon API Gateway and AWS Lambda. The development team tests the API and validates responses for the known use cases before deploying the API to the production environment. The developer wants to make the REST API available for testing by using API Gateway locally. Which AWS Serverless Application Model Command Line Interface (AWS SAM CLI) subcommand will meet these requirements?
    - [ ] A. Sam local invoke
    - [ ] B. Sam local generate-event
    - [ ] C. Sam local start-lambda
    - [ ] D. Sam local start-api

    <details>
       <summary>Answer</summary>

       D.
       Using sam local start-api, you can make HTTP requests to your serverless application running locally as if it were deployed on AWS with API Gateway and Lambda.
    </details>

60. A company has a serverless application on AWS that uses a fleet of AWS Lambda functions that have aliases. The company regularly publishes new Lambda function by using an in-house deployment solution. The company wants to improve the release process and to use traffic shifting. A newly published function version should initially make available only to a fixed percentage of production users. Which solution will meet these requirements?
    - [ ] A. Configure routing on the alias of the new function by using a weighted alias.
    - [ ] B. Configure a canary deployment type for Lambda.
    - [ ] C. Configure routing on the new versions by using environment variables.
    - [ ] D. Configure a linear deployment type for Lambda.

    <details>
       <summary>Answer</summary>

       A.
       - A: This is the correct choice. With Lambda weighted aliases, you can route a certain percentage of traffic to one version of a Lambda function and the rest to another version. Over time, you can adjust these weights to shift more traffic to the new version.
       - B: While AWS Lambda supports canary deployments with AWS SAM and AWS CodeDeploy, this type of deployment deploys the new version to a small percentage of users for a limited time before full deployment. This doesn't match the scenario described where a fixed percentage gets the new version indefinitely.
       - C: Environment variables in Lambda are used for configuration settings, not for routing traffic between function versions.
       - D: Similar to canary deployments, linear deployments gradually shift traffic over time, but they don't hold a fixed percentage for the new version indefinitely.

    </details>

61. A company has an application that stores data in Amazon RDS instances. The application periodically experiences surges of high traffic that cause performance problems. During periods of peak traffic, a developer notices a reduction in query speed in all database queries. The team’s technical lead determines that a multi-threaded and scalable caching solution should be used to offload the heavy read traffic. The solution needs to improve performance. Which solution will meet these requirements with the LEAST complexity?
    - [ ] A. Use Amazon ElastiCache for Memcached to offload read requests from the main database.
    - [ ] B. Replicate the data to Amazon DynamoDSet up a DynamoDB Accelerator (DAX) cluster.
    - [ ] C. Configure the Amazon RDS instances to use Multi-AZ deployment with one standby instance. Offload read requests from the main database to the standby instance.
    - [ ] D. Use Amazon ElastiCache for Redis to offload read requests from the main database.

    <details>
       <summary>Answer</summary>

       A.
       While both Memcached and Redis (option D) are suitable for caching, Memcached is often considered simpler to use for straightforward caching scenarios and may require less complexity in setup and management compared to Redis, which has more advanced features.ß

    </details>

62. A developer must provide an API key to an AWS Lambda function to authenticate with a third-party system. The Lambda function will run on a schedule. The developer needs to ensure that the API key remains encrypted at rest. Which solution will meet these requirements?
    - [ ] A. Store the API key as a Lambda environment variable by using an AWS Key Management Service (AWS KMS) customer managed key.
    - [ ] B. Configure the application to prompt the user to provide the password to the Lambda function on the first run.
    - [ ] C. Store the API key as a value in the application code.
    - [ ] D. Use Lambda@Edge and only communicate over the HTTPS protocol.

    <details>
       <summary>Answer</summary>

       A.

    </details>

63. An IT department uses Amazon S3 to store sensitive images. After more than 1 year, the company moves the images into archival storage. The company rarely accesses the images, but the company wants a storage solution that maximizes resiliency. The IT department needs access to the images that have been moved to archival storage within 24 hours. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. Use S3 Standard-Infrequent Access (S3 Standard-IA) to store the images. Use S3 Glacier Deep Archive with standard retrieval to store and retrieve archived images.
    - [ ] B. Use S3 Standard-Infrequent Access (S3 Standard-IA) to store the images. Use S3 Glacier Deep Archive with bulk retrieval to store and retrieve archived images.
    - [ ] C. Use S3 Intelligent-Tiering to store the images. Use S3 Glacier Deep Archive with standard retrieval to store and retrieve archived images.
    - [ ] D. Use S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the images. Use S3 Glacier Deep Archive with bulk retrieval to store and retrieve archived images.

    <details>
       <summary>Answer</summary>

       A.

    </details>

64. A developer is building a serverless application by using the AWS Serverless Application Model (AWS SAM). The developer is currently testing the application in a development environment. When the application is nearly finished, the developer will need to set up additional testing and staging environments for a quality assurance team. The developer wants to use a feature of the AWS SAM to set up deployments to multiple environments. Which solution will meet these requirements with the LEAST development effort?
    - [ ] A. Add a configuration file in TOML format to group configuration entries to every environment. Add a table for each testing and staging environment. Deploy updates to the environments by using the SAM deploy command and the --config-env flag that corresponds to each environment.
    - [ ] B. Create additional AWS SAM templates for each testing and staging environment. Write a custom shell script that uses the SAM deploy command and the --template-file flag to deploy updates to the environments.
    - [ ] C. Create one AWS SAM configuration file that has default parameters. Perform updates to the testing and staging environments by using the --parameter-overrides flag in the AWS SAM CLI and the parameters that the updates will override.
    - [ ] D. Use the existing AWS SAM template. Add additional parameters to configure specific attributes for the serverless function and database table resources that are in each environment. Deploy updates to the testing and staging environments by using the SAM deploy command.

    <details>
       <summary>Answer</summary>

       A.
       - A: This approach allows you to define environment-specific configurations in a structured format. Deploying to a specific environment can then be done using the SAM deploy `--config-env <env_name>` command. This approach consolidates the configuration for each environment in one place, making it easier to manage.
       - B: This approach would mean maintaining multiple separate SAM templates for each environment. It would increase the complexity and effort required to maintain and deploy the application because any change in one environment's template would need to be replicated across all other environment templates.
       - C: This approach requires manual intervention every time a deployment is made to provide the overridden parameters. It's not as streamlined as using a configuration file that groups entries for each environment.
       - D: This approach is essentially the same as option C but doesn't specifically mention using the `--parameter-overrides flag`. It relies on manual intervention during deployments.

    </details>

65. A developer is working on an application that processes operating data from IoT devices. Each IoT device uploads a data file once every hour to an Amazon S3 bucket. The developer wants to immediately process each data file when the data file is uploaded to Amazon S3. The developer will use an AWS Lambda function to process the data files from Amazon S3. The Lambda function is configured with the S3 bucket information where the files are uploaded. The developer wants to configure the Lambda function to immediately invoke after each data file is uploaded. Which solution will meet these requirements?
    - [ ] A. Add an asynchronous invocation to the Lambda function. Select the S3 bucket as the source.
    - [ ] B. Add an Amazon EventBridge event to the Lambda function. Select the S3 bucket as the source.
    - [ ] C. Add a trigger to the Lambda function. Select the S3 bucket as the source.
    - [ ] D. Add a layer to the Lambda function. Select the S3 bucket as the source.

    <details>
       <summary>Answer</summary>

       C.

    </details>

66. A developer is setting up infrastructure by using AWS CloudFormation. If an error occurs when the resources described in the Cloud Formation template are provisioned, successfully provisioned resources must be preserved. The developer must provision and update the CloudFormation stack by using the AWS CLI. Which solution will meet these requirements?
    - [ ] A. Add an --enable-termination-protection command line option to the create-stack command and the update-stack command.
    - [ ] B. Add a --disable-rollback command line option to the create-stack command and the update-stack command.
    - [ ] C. Add a --parameters ParameterKey=PreserveResources,ParameterValue=True command line option to the create-stack command and the update-stack command.
    - [ ] D. Add a --tags Key=PreserveResources,Value=True command line option to the create-stack command and the update-stack command.

    <details>
       <summary>Answer</summary>

       B.
       - A. --enable-termination-protection: This option prevents the CloudFormation stack from being accidentally deleted. It does not prevent rollback upon a provisioning failure.
       - B. --disable-rollback: This option will disable rollback of the stack if stack creation fails. This is the correct option because if the stack creation fails, any resources that were created will be preserved instead of being rolled back and deleted.
       - C. --parameters ParameterKey=PreserveResources,ParameterValue=True: This is not a standard parameter for the AWS CLI create-stack or update-stack commands for CloudFormation. CloudFormation parameters are used to pass values into your CloudFormation template at runtime, and there's no built-in "PreserveResources" parameter.
       - D. --tags Key=PreserveResources,Value=True: Tags are metadata that you can assign to resources in the CloudFormation stack. They don't control the behavior of stack creation or updates.

    </details>

67. A developer is building a serverless application that connects to an Amazon Aurora PostgreSQL database. The serverless application consists of hundreds of AWS Lambda functions. During every Lambda function scale out, a new database connection is made that increases database resource consumption. The developer needs to decrease the number of connections made to the database. The solution must not impact the scalability of the Lambda functions. Which solution will meet these requirements?
    - [ ] A. Configure provisioned concurrency for each Lambda function by setting the ProvisionedConcurrentExecutions parameter to 10.
    - [ ] B. Enable cluster cache management for Aurora PostgreSQL. Change the connection string of each Lambda function to point to cluster cache management.
    - [ ] C. Use Amazon RDS Proxy to create a connection pool to manage the database connections. Change the connection string of each Lambda function to reference the proxy.
    - [ ] D. Configure reserved concurrency for each Lambda function by setting the ReservedConcurrentExecutions parameter to 10.

    <details>
       <summary>Answer</summary>

       C.

    </details>

68. A developer is preparing to begin development of a new version of an application. The previous version of the application is deployed in a production environment. The developer needs to deploy fixes and updates to the current version during the development of the new version of the application. The code for the new version of the application is stored in AWS CodeCommit. Which solution will meet these requirements?
    - [ ] A. From the main branch, create a feature branch for production bug fixes. Create a second feature branch from the main branch for development of the new version.
    - [ ] B. Create a Git tag of the code that is currently deployed in production. Create a Git tag for the development of the new version. Push the two tags to the CodeCommit repository.
    - [ ] C. From the main branch, create a branch of the code that is currently deployed in production. Apply an IAM policy that ensures no other users can push or merge to the branch.
    - [ ] D. Create a new CodeCommit repository for development of the new version of the application. Create a Git tag for the development of the new version.

    <details>
       <summary>Answer</summary>

       A.
       - A. This approach is in line with standard Git practices. You have the main branch representing the production state. One feature branch can be used for hotfixes or bug fixes to the current version, and another feature branch can be used for the development of the new version. Fixes can be merged back to the main branch as needed, and development of the new version can proceed without affecting the main branch.
       - B. Git tags are more like bookmarks or references to specific points in your Git history, often used for releases. They are not meant for ongoing development. Therefore, this isn't the best approach for the given scenario.
       - C. While it's possible to create a branch from the main branch, applying an IAM policy that restricts pushes or merges can complicate the workflow, especially if collaboration is needed. This isn't the most straightforward approach.
       - D. Creating a new CodeCommit repository might be overkill and can add unnecessary complications when trying to track changes or merge updates between the versions.

    </details>

69. A developer is creating an AWS CloudFormation stack. The stack contains IAM resources with custom names. When the developer tries to deploy the stack, they receive an InsufficientCapabilities error. What should the developer do to resolve this issue?
    - [ ] A. Specify the CAPABILITY_AUTO_EXPAND capability in the CloudFormation stack.
    - [ ] B. Use an administrators role to deploy IAM resources with CloudFormation.
    - [ ] C. Specify the CAPABILITY_IAM capability in the CloudFormation stack.
    - [ ] D. Specify the CAPABILITY_NAMED_IAM capability in the CloudFormation stack.

    <details>
       <summary>Answer</summary>

       D.
       - A. CAPABILITY_AUTO_EXPAND: This capability is needed if you are using certain CloudFormation macros that reference transforms.
       - B. Using an administrator role: This does not directly relate to the InsufficientCapabilities error. Even if you have administrative permissions, you would still need to specify the necessary capabilities when deploying a stack that creates or modifies IAM resources.
       - C. CAPABILITY_IAM: This capability allows CloudFormation to create and modify IAM resources without custom names.
       - D. CAPABILITY_NAMED_IAM: This capability allows CloudFormation to create and modify IAM resources with custom names.

    </details>

70. A company uses Amazon API Gateway to expose a set of APIs to customers. The APIs have caching enabled in API Gateway. Customers need a way to invalidate the cache for each API when they test the API. What should a developer do to give customers the ability to invalidate the API cache?
    - [ ] A. Ask the customers to use AWS credentials to call the InvalidateCache API operation.
    - [ ] B. Attach an InvalidateCache policy to the IAM execution role that the customers use to invoke the API. Ask the customers to send a request that contains the Cache-Control:max-age=0 HTTP header when they make an API call.
    - [ ] C. Ask the customers to use the AWS SDK API Gateway class to invoke the InvalidateCache API operation.
    - [ ] D. Attach an InvalidateCache policy to the IAM execution role that the customers use to invoke the API. Ask the customers to add the INVALIDATE_CACHE query string parameter when they make an API call.

    <details>
       <summary>Answer</summary>

       D.
       - A. There's no direct InvalidateCache API operation for customers to call.
       - B. While using the Cache-Control:max-age=0 HTTP header might sound like a way to control cache, it's not the direct method Amazon API Gateway provides for cache invalidation.
       - C. There isn't an InvalidateCache operation in the AWS SDK API Gateway class.
       - D. This choice accurately represents the recommended method. The IAM execution role must have the necessary permissions and customers should add the INVALIDATE_CACHE query string parameter to their API call to invalidate the cache.

    </details>
