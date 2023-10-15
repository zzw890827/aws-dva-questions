# AWS PAS 1-65

1. A company is migrating its SAP S/4HANA landscape from on premises to AWS. An SAP solutions architect is designing a backup solution for the SAP S/4HANA landscape on AWS. The backup solution will use AWS Backint Agent for SAP HANA (AWS Backint agent) to store backups in Amazon S3. The company's backup policy for source systems requires a retention period of 150 days for weekly full online backups. The backup policy requires a retention period of 30 days for daily transaction log backups. The company must keep the same backup policy on AWS while maximizing data resiliency. The company needs the ability to retrieve the backup data one or two times each year within 10 hours of the retrieval request. The SAP solutions architect must configure AWS Backint agent and S3 Lifecycle rules according to these parameters. Which solution will meet these requirements MOST cost-effectively?
   - [ ] A. Configure the target S3 bucket to use S3 Glacier Deep Archive for the backup files. Create S3 Lifecycle rules on the S3 bucket to delete full online backup files that are older than 150 days and to delete log backup files that are older than 30 days.
   - [ ] B. Configure the target S3 bucket to use S3 Standard storage for the backup files. Create an S3 Lifecycle rule on the S3 bucket to move all the backup files to S3 Glacier Instant Retrieval. Create additional S3 Lifecycle rules to delete full online backup files that are older than 150 days and to delete log backup files that are older than 30 days.
   - [ ] C. Configure the target S3 bucket to use S3 One Zone-Infrequent Access (S3 One Zone-IA) for the backup files. Create S3 Lifecycle rules on the S3 bucket to move full online backup files that are older than 30 days to S3 Glacier Flexible Retrieval and to delete log backup files that are older than 30 days. Create an additional S3 Lifecycle rule to delete full online backup files that are older than 150 days.
   - [ ] D. Configure the target S3 bucket to use S3 Standard-Infrequent Access (S3 Standard-IA) for the backup files. Create S3 Lifecycle rules on the S3 bucket to move full online backup files that are older than 30 days to S3 Glacier Flexible Retrieval and to delete log backup files that are older than 30 days. Create an additional S3 Lifecycle rule to delete full online backup files that are older than 150 days.

   <details>
      <summary>Answer</summary>

      D.
      - Data Retention: Full online backups should be retained for 150 days, and daily transaction log backups for 30 days.
      - Data Retrieval: The ability to retrieve backup data within 10 hours.
      - Here are the different S3 storage classes' considerations:
        - S3 Glacier Deep Archive: This is the lowest cost storage class and supports long-term retention and digital preservation. Retrieval times can be up to 12 hours.
        - S3 Glacier Instant Retrieval: As of my last update in September 2021, there's no "S3 Glacier Instant Retrieval" storage class in AWS. However, assuming that it provides quicker retrieval, we would need to consider the cost-effectiveness.
        - S3 One Zone-Infrequent Access (One Zone-IA): This storage class stores data in a single availability zone and is designed for data that can be recreated if lost. It is less expensive than S3 Standard-IA.
        - S3 Standard-Infrequent Access (Standard-IA): This is for data that is accessed less frequently, but requires rapid access when needed.
      - Considering the above:
        - A. Glacier Deep Archive is the most cost-effective storage, but the retrieval time can be up to 12 hours, which violates the 10-hour requirement.
        - B. This might be a feasible option if "S3 Glacier Instant Retrieval" offers quick retrievals, but we need to consider the cost.
        - C. One Zone-IA might be cost-effective, but it risks data durability as it stores data in a single AZ. If that AZ becomes unavailable, the data could be lost. The requirement is to maximize data resiliency, which One Zone-IA doesn't provide.
        - D. Standard-IA provides good durability by storing data across multiple AZs. Transitioning data to S3 Glacier Flexible Retrieval (if it provides retrieval within 10 hours) after 30 days can be cost-effective.
      - Based on the given information: The answer is D. Configure the target S3 bucket to use S3 Standard-Infrequent Access (S3 Standard-IA) for the backup files. Create S3 Lifecycle rules on the S3 bucket to move full online backup files that are older than 30 days to S3 Glacier Flexible Retrieval and to delete log backup files that are older than 30 days. Create an additional S3 Lifecycle rule to delete full online backup files that are older than 150 days.

   </details>

2. A global retail company is running its SAP S/4HANA workload on AWS. The company's business has grown in the past few years, and user activity has generated a significant amount or data in the SAP S/4HANA system.
The company wants to expand into new geographies. Before the company finalizes the expansion plan, the company wants to perform analytics on the historical data from the past few years. The company also wants to generate sales forecasts for potential expansion locations.
An SAP solutions architect must implement a solution to extract the data from SAP S/4HANA into Amazon S3. The solution also must perform the required analytics and forecasting tasks.
Which solution will meet these requirements with the LEAST custom development effort?
   - [ ] A. Use AWS AppSync to extract the data from SAP S/4HANA and to store the data in Amazon S3. Use AWS Glue to perform analytics. Use Amazon Forecast for sales forecasts.
   - [ ] B. Use the SAP Landscape Transformation (LT) Replication Server SDK to extract the data, to integrate the data with SAP Data Services, and to store the data in Amazon S3. Use Amazon Athena to perform analytics. Use Amazon Forecast for sales forecasts.
   - [ ] C. Use Amazon AppFlow to extract the data from SAP S/4HANA and to store the data in Amazon S3. Use Amazon QuickSight to perform analytics. Use Amazon Forecast for sales forecasts.
   - [ ] D. Integrate AWS Glue and AWS Lambda with the SAP Operational Data Provisioning (ODP) Framework to extract the data from SAP S/4HANA and to store the data in Amazon S3. Use Amazon QuickSight to perform analytics. Use Amazon Forecast for sales forecasts.

   <details>
      <summary>Answer</summary>

      C.
      - Option A is not suitable as AWS AppSync is not intended for this kind of workload.
      - Option B is a valid choice but might involve a significant setup for both SAP LT Replication and SAP Data Services.
      - Option C uses AWS-native services that are designed to integrate with each other and with SaaS applications, providing a streamlined solution.
      - Option D might require more custom development and integration effort.

   </details>

3. A company's SAP solutions architect needs to design an architecture to deploy a highly available SAP S/4HANA application on AWS. The company requires the SAP NetWeaver ASAP ASCS components and the SAP HANA database components or the application to be highly available. The company will operate the SAP NetWeaver ASCS, SAP NetWeaver PAS, and SAP HANA database components on separate Amazon EC2 instances. Each EC2 instance will run the Red Hat Enterprise Linux operating system. The company's AWS account has a VPC with a CIDR block that uses the 10.0.0.0/24 address block. The VPC contains two subnets. Each subnet is assigned to a different Availability Zone. The company has no other VPCs in this account, and the company has no other AWS accounts. Which set of overlay IP addresses can the SAP solutions architect use to provide the required highly available architecture?
   - [ ] A. Two overlay IP addresses: 10.0.0.50 for SAP ASCS and 10.0.0.54 for SAP HANA
   - [ ] B. Two overlay IP addresses: 192.168.0.50 for SAP ASCS and 192.168.0.54 for SAP HANA
   - [ ] C. Three overlay IP addresses: 10.0.0.50 for SAP ASCS, 10.0.0.52 for SAP ERS, and 10.0.0.54 for SAP HANA
   - [ ] D. Three overlay IP addresses: 192.168.0.50 for SAP ASCS, 192.168.0.52 for SAP ERS, and 192.168.0.54 for SAP HANA

   <details>
      <summary>Answer</summary>

      C.
      The key consideration here is to ensure high availability for the SAP NetWeaver ASCS (Application Server Central Services) and SAP HANA. For high availability setups in SAP, the usage of Enqueue Replication Servers (ERS) is common. ERS is used to replicate the lock table, which is managed by the ASCS instance.

      The SAP documentation typically references using three IP addresses in high-availability clusters:
      - For the ASCS instance.
      - For the ERS instance.
      - For the database (SAP HANA in this context).

      Given the above, we require three overlay IP addresses. Regarding the IP address ranges, the overlay IPs should fall within the VPC's CIDR range. The given VPC CIDR block is 10.0.0.0/24, which means any IP within the 10.0.0.1 to 10.0.0.254 range can be used (excluding the network and broadcast addresses). Thus, the correct choice is: C. Three overlay IP addresses: 10.0.0.50 for SAP ASCS, 10.0.0.52 for SAP ERS, and 10.0.0.54 for SAP HANA.

   </details>

4. A company has grown rapidly in a short period of time. This growth has led to an increase in the volume of data, the performance requirements for storage, and the memory and vCPU requirements for the company's SAP HANA database that runs on AWS. The SAP HANA database is a scale-up installation. Because of the increased requirements, the company plans to change the Amazon EC2 instance type to a virtual EC2 High Memory instance and plans to change the Amazon Elastic Block Store (Amazon EBS) volume type to a higher performance volume type for the SAP HANA database. The EC2 instance is a current-generation instance, both before and after the change. Additionally, the EC2 instance and the EBS volume meet all the prerequisites for instance type change and EBS volume type change. An SAP basis administrator must advise the company about whether these changes will require downtime for the SAP system. Which guidance should the SAP basis administrator provide to the company?
   - [ ] A. The change in EC2 instance type does not require SAP system downtime, but the change in EBS volume type requires SAP system downtime.
   - [ ] B. The change in EC2 instance type requires SAP system downtime, but the change in EBS volume type does not require SAP system downtime.
   - [ ] C. Neither the change in EC2 instance type nor the change in EBS volume type requires SAP system downtime.
   - [ ] D. Both the change in EC2 instance type and the change in EBS volume type require SAP system downtime.

   <details>
      <summary>Answer</summary>

      B.
      - Changing an Amazon EC2 instance type: When you change the EC2 instance type (especially for a memory-intensive application like SAP HANA), you need to stop the instance, change the instance type, and then start the instance. The process of stopping and starting the instance will interrupt the availability of SAP HANA, which means there will be downtime for the SAP system.
      - Changing the Amazon EBS volume type: Changing the type of an EBS volume typically involves modifying the volume type, which can often be done without detaching the volume or restarting the instance that it's attached to. Therefore, many EBS volume modifications do not require downtime.

   </details>

5. A company is running its on-premises SAP ERP Central Component (SAP ECC) system on an Oracle database on Oracle Enterprise Linux. The database is 1 TB in size and uses 27,000 IOPS for its peak performance Multiple SSD volumes are striped to store Oracle data files in separate sapdata directories to gain the required IOPS. The company is planning to move this workload to AWS. The company chooses high I/O bandwidth instances with a Nitro hypervisor to host the target database instance. Downtime is not a constraint for the migration. The company needs an Amazon Elastic Block Store (Amazon EBS) storage layout that optimizes cost for the migration. How should the company reorganize the Oracle data files to meet these requirements?
   - [ ] A. Reorganize the Oracle data files into one 9 TB General Purpose SSD (gp2) EBS volume.
   - [ ] B. Reorganize the Oracle data files into a striped volume of three 3 TB General Purpose SSD (gp2) EBS volumes.
   - [ ] C. Reorganize the Oracle data files into one 1 TB General Purpose SSD (gp3) EBS volume with 27,000 provisioned IOPS.
   - [ ] D. Reorganize the Oracle data files into ten 100 GB General Purpose SSD (gp3) EBS volumes.

   <details>
      <summary>Answer</summary>

      D.
      Ten 100 GB gp3 EBS volumes: Each volume would provide a baseline performance of 3,000 IOPS and cost optimized.

   </details>

6. An SAP engineer is designing an SAP S/4HANA high availability architecture on Linux Amazon EC2 instances in two Availability Zones. The SAP engineer needs to create a solution to achieve high availability and consistency for /usr/sap/trans end /usr/sap/ file systems. Which solution will meet these requirements with the MOST reliability?
   - [ ] A. Set up an NFS server on one of the EC2 instances.
   - [ ] B. Use Amazon Elastic File System (Amazon EFS).
   - [ ] C. Use the EC2 local instance store.
   - [ ] D. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach.

    <details>
      <summary>Answer</summary>

      B.

   </details>

7. A company migrated its SAP environment to AWS 6 months ago. The landscape consists of a few thousand Amazon EC2 instances for production, development, quality, and sandbox environments. The company wants to minimize the operational cost of the landscape without affecting system performance and availability. Which solutions will meet these requirements? (Choose two.)
   - [ ] A. Scale down the EC2 instance size for non-production environments.
   - [ ] B. Create an AWS Systems Manager document to automatically stop and start the SAP systems. Use Amazon CloudWatch to automate the scheduling of this task.
   - [ ] C. Review the billing data for the EC2 instances. Analyze the workload, and choose an EC2 Instance Savings Plan.
   - [ ] D. Create an AWS Systems Manager document to automatically stop and start the SAP systems and EC2 instances for non-production environments outside business hours. Use Amazon EventBridge to automate the scheduling of this task.
   - [ ] E. Create an AWS Systems Manager document to automatically stop and start the SAP systems and EC2 instances. Maintain the schedule in the Systems Manager document to automate this task.

    <details>
      <summary>Answer</summary>

      AD.
      - Scaling down is one of the most direct ways to save costs.
      - Stopping instances outside of business hours can also lead to significant savings, especially for non-production environments.

   </details>

8. An SAP solutions architect needs to design a highly available solution to support a 12 TB SAP HANA system on AWS. The solution will be deployed in a single AWS Region. Which solution will meet these requirements MOST cost-effectively?
   - [ ] A. Use an SAP certified high availability cluster solution and SAP HANA backup and restore.
   - [ ] B. Use an SAP certified high availability cluster solution and SAP HANA system replication with data preload.
   - [ ] C. Use an SAP certified high availability cluster solution and multi-tiered SAP HANA system replication.
   - [ ] D. Use an SAP certified high availability cluster solution and storage replication with AWS Elastic Disaster Recovery.

   <details>
      <summary>Answer</summary>

      D.
      <https://docs.aws.amazon.com/wellarchitected/latest/sap-lens/best-practice-17-2.html>

   </details>

9. A company's SAP solutions architect is configuring a network architecture for an SAP HANA multi-node environment. The company requires isolation of the logical network zones: client, internal, and storage. The database runs on X1 (memory optimized) Amazon EC2 instances and uses Amazon Elastic Block Store (Amazon EBS) volumes for persistent storage. Which combination of actions will provide the required isolation? (Choose three.)
   - [ ] A. Attach an AWS Network Firewall policy for each zone to the subnet for the node cluster.
   - [ ] B. Attach a secondary elastic network interface to each instance for the internal communications between nodes.
   - [ ] C. Attach a secondary elastic network interface to each instance for the storage communications.
   - [ ] D. Configure a security group with rules that allow only TCP connections within the security group on the ports that are assigned for the internal network connections. Associate the security group with the appropriate elastic network interface on each instance.
   - [ ] E. Configure a security group with rules that allow only TCP connections with the external customer network on the ports that are assigned for the client connections. Associate the security group with the appropriate elastic network interface.
   - [ ] F. Configure a security group with rules that allow Non-Volatile Memory Express (NVMe) connections within the subnet range. Associate the security group with the appropriate elastic network interface on each instance.

   <details>
      <summary>Answer</summary>

      BCD.

   </details>

10. An SAP database analyst installs AWS Backint Agent for SAP HANA (AWS Backint agent) by using AWS Systems Manager. The SAP database analyst runs an initial test to perform a database backup for a 512 GB SAP HANA database. The database runs on an SAP certified Amazon EC2 instance type with General Purpose SSD (gp2) Amazon Elastic Block Store (Amazon EBS) volumes for all disk storage. The backup is running too slowly. Which actions should the SAP database analyst take to improve the performance of AWS Backint agent? (Choose two.)

    - [ ] A. Set the parallel_data_backup_backint_channels parameter to a number greater than 1.
    - [ ] B. Select a Provisioned IOPS SSD (io2) volume as the backup target for AWS Backint agent.
    - [ ] C. Delete unnecessary older backup files from backups that SAP Backint agent performed.
    - [ ] D. Change the existing gp2-based SAP HANA data volumes to the Provisioned IOPS SSD (io2) EBS volume type.
    - [ ] E. Reinstall AWS Backint agent by using the AWS Backint installer rather than the Systems Manager document.

    <details>
      <summary>Answer</summary>

      AD.
      Increasing the value of the parallel_data_backup_backint_channels parameter allows the Backint agent to execute more than one backup process in parallel, improving the overall backup speed. Switching the EBS volume type from gp2 to io2 provides more consistent and faster I/O performance, which can also speed up backup processes.

     </details>

11. A company is planning to retire a data center where a few legacy SAP applications run. The applications are SAP R/3 4.6C with a Microsoft SQL Server 2005 database end are running on Windows Server 2008. The applications are outside the extended maintenance period. There is no SAP support for the applications. The company has no plans to upgrade the applications or move the applications to a different platform. The company does not have a policy to maintain installation media for any of the applications. The company wants to migrate the applications to AWS. How can the company migrate the applications to AWS?
    - [ ] A. Use AWS Launch Wizard for SAP to launch the applications on AWS. Migrate the applications by using backup and restore.
    - [ ] B. Perform an SAP system copy from the source to the target by using SAP Software Provisioning Manager.
    - [ ] C. Use AWS Application Migration Service to migrate the applications.
    - [ ] D. Manually install the applications on AWS. Perform a database synchronization from the source to the target.

    <details>
       <summary>Answer</summary>

       C.

    </details>

12. A company is running its SAP S/4HANA production system on AWS. The system is 5 TB in size and has a high performance and IOPS demand for the SAP HANA data storage. The company is using Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) storage with burstable IOPS to meet this demand. An SAP solutions architect needs to review the current storage layout and recommend a more cost-effective solution without compromising storage performance. What should the SAP solutions architect recommend to meet these requirements?
    - [ ] A. Switch from burstable IOPS to allocated IOPS for the gp2 storage.
    - [ ] B. Replace all the gp2 storage with Provisioned IOPS SSD (io2) storage.
    - [ ] C. Replace all the gp2 storage with gp3 storage. Configure the required IOPS.
    - [ ] D. Replace all the gp2 storage with gp3 storage at baseline IOPS.

    <details>
       <summary>Answer</summary>

       C.

    </details>

13. A company uses SAP S/4HANA as its ERP solution. The company is using AWS Backint Agent for SAP HANA (AWS Backint agent) for backups. Although the configuration is correct for AWS Backint agent, the backups are falling with the following error.`NoCredentialProviders: no valid providers in chain.` What could be the reason for this error?
    - [ ] A. AWS Systems Manager Agent is not installed on the Amazon EC2 instance.
    - [ ] B. No IAM role is attached to the Amazon EC2 instance.
    - [ ] C. AWS Backint agent binaries are owned by a non-root user.
    - [ ] D. AWS Backint agent is connecting to Amazon S3 with VPC endpoints.

    <details>
       <summary>Answer</summary>

       B.

    </details>

14. A company needs to migrate its SAP HANA landscape from an on-premises data center to AWS. The company's existing SAP HANA database instance is oversized. The company must resize the database instance as part of the migration. Which combination of steps should the company take to ensure that the target Amazon EC2 instance is sized optimally for the SAP HANA database instance? (Choose two.)
    - [ ] A. Determine the peak memory utilization of the existing on-premises SAP HANA system.
    - [ ] B. Determine the average memory utilization of the existing on-premises SAP HANA system.
    - [ ] C. For the target system, select any SAP certified EC2 instance that provides more memory than the current average memory utilization.
    - [ ] D. For the target system, select the smallest SAP certified EC2 instance that provides more memory than the current peak memory utilization.
    - [ ] E. For the target system, select any current-generation EC2 memory optimized instance.

    <details>
       <summary>Answer</summary>

       AD.
       When sizing an SAP HANA instance, it's crucial to take into account the peak memory utilization. Choosing an instance size that is based on the average memory utilization may result in performance issues during periods of peak demand. Therefore, it's important to choose an instance that can handle the highest memory demand anticipated. It's also more cost-effective to choose the smallest instance that meets these requirements.

    </details>

15. A company plans to migrate a critical SAP S/4HANA workload from on-premises hardware to AWS. An SAP solutions architect needs to develop a solution to effectively monitor the SAP landscape on AWS for this workload. The solution must capture resource utilization and must follow a serverless approach to monitor the SAP environment. The solution also must track all the API calls that are made within the company's AWS account. Which combination of steps should the SAP solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Configure Amazon CloudWatch detailed monitoring for the AWS resources in the SAP landscape. Use AWS Lambda, and create the Lambda layer "sapjco" for the SAP Java Connector. Deploy the solution with AWS Serverless Application Repository for sap-monitor.
    - [ ] B. Set up a Multi-AZ deployment of SAP on AWS. Use Amazon EC2 Auto Scaling to add or remove EC2 instances automatically based on the CPU utilization of the SAP instance.
    - [ ] C. Use AWS CloudTrail to log and retain account activity related to actions across the SAP on AWS infrastructure.
    - [ ] D. Use the AWS Personal Health Dashboard to get a personalized view of performance and availability of the underlying AWS resources.
    - [ ] E. Use AWS Trusted Advisor to optimize the AWS infrastructure and to improve security and performance.
    <details>
       <summary>Answer</summary>

       AC.
       - For monitoring the SAP landscape using a serverless approach: Option A is appropriate.
       - For tracking all the API calls that are made within the company's AWS account: Option C is the best choice.

    </details>

16. A company is planning to deploy SAP HANA on AWS. The block storage that hosts the SAP HANA data volume must have at least 64,000 IOPS per volume and must have a maximum throughput of at least 500 MiB/s per volume. Which Amazon Elastic Block Store (Amazon EBS) volume meets these requirements?
    - [ ] A. General Purpose SSD (gp2) EBS volume
    - [ ] B. General Purpose SSD (gp3) EBS volume
    - [ ] C. Provisioned IOPS SSD (io2) EBS volume
    - [ ] D. Throughput Optimized HDD (st1) EBS volume

    <details>
       <summary>Answer</summary>

       C.
       The Provisioned IOPS SSD (io2) EBS volume allows you to provision up to 64,000 IOPS per volume, which is suitable for the IOPS requirement mentioned in the question. Furthermore, io2 volumes offer a maximum throughput of 1,000 MiB/s per volume, which also meets the requirement for a maximum throughput of at least 500 MiB/s per volume.

    </details>

17. An SAP engineer is configuring AWS Backint Agent for SAP HANA (AWS Backint agent) for an SAP HANA database that is running on an Amazon EC2 instance. After the configuration, the backups fail. During investigation, the SAP engineer notices that the AWS Backint agent logs contain numerous AccessDenied messages. Which actions should the SAP engineer take to resolve this issue? (Choose two.)
    - [ ] A. Update the EC2 role permissions to allow S3 bucket access.
    - [ ] B. Verify that the configuration file has the correct formatting of the S3BucketOwnerAccountID.
    - [ ] C. Install AWS Systems Manager Agent (SSM Agent) correctly by using the sudo command.
    - [ ] D. Install the correct version of Python for AWS Backint agent.
    - [ ] E. Add the execute permission to the AWS Backint agent binary.

    <details>
       <summary>Answer</summary>

       AB.
       <https://docs.aws.amazon.com/sap/latest/sap-hana/aws-backint-agent-troubleshooting.html>

    </details>

18. A company is running its production SAP HANA system on AWS. The SAP HANA system is hosted on an Amazon EC2 instance that runs SUSE Linux Enterprise Server 12. The operating system patch version is out of date, and SAP has identified some critical security vulnerabilities. SUSE publishes a critical patch update that requires a system restart to fix the issue. The company must apply this patch along with many prerequisite patches. Which solution will meet these requirements with the LEAST system downtime?
    - [ ] A. Use the SUSE Linux Enterprise Server patching update process and SUSE tools to apply the required patches to the existing instance.
    - [ ] B. Use AWS Systems Manager Patch Manager to automatically apply the patches to the existing instance.
    - [ ] C. Use AWS Launch Wizard for SAP to provision a second SAP HANA instance with an AMI that contains the required patches. Use SAP HANA system replication to copy the data from the original SAP HANA instance to the newly launched SAP HANA instance. Perform SAP HANA system replication takeover.
    - [ ] D. Use AWS Launch Wizard for SAP to provision a second SAP HANA instance with an AMI that contains the required patches. Use SAP HANA native backup and restore to copy the data from the original SAP HANA instance to the newly launched SAP HANA instance.

    <details>
       <summary>Answer</summary>

       C.
       <https://docs.aws.amazon.com/sap/latest/sap-hana/hana-ops-administration.html>

    </details>

19. A company recently implemented an architecture in which all the systems and components of the company's SAP environment are hosted on AWS. Front-end users connect from the corporate data center. SAP application servers and database servers are hosted in a private subnet. The company has the following requirements: • Ensure that the instances in the private subnet can connect to the internet and other AWS services. • Prevent instances from receiving inbound traffic that is initiated by someone on the inter-net. • For SAP support, allow a remote connection between the company's network and SAP. Ensure that access is available to the production environment as needed. Which solution will meet these requirements?
    - [ ] A. Use a NAT gateway to ensure connectivity between the instances in the private subnet and other AWS services. Deploy SAProuter in a public subnet. Assign a public IP address that is reachable from the internet.
    - [ ] B. Use NAT instances to ensure connectivity between the instances in the private subnet and other AWS services. Deploy SAProuter in the private subnet with an Elastic IP address that is reachable from the internet.
    - [ ] C. Use a bastion host to ensure connectivity between the instances in the private subnet and other AWS services. Set up an AWS Direct Connect connection between the SAP support network and the AWS Region where the architecture is implemented.
    - [ ] D. Use an internet gateway to ensure connectivity between the instances in the private subnet and other AWS services. Deploy SAProuter in a public subnet. Assign a public IP address that is reachable from the internet.
    <details>
       <summary>Answer</summary>

       A.
       Ensure that the instances in the private subnet can connect to the internet and other AWS services. This is typically achieved using NAT. Moreover, SAProuter is an SAP application that is used to secure network communication between SAP systems and external networks. Deploying SAProuter in the appropriate location can facilitate this requirement.

    </details>

20. A company plans to move its SAP systems from on premises to AWS to reduce infrastructure costs. The company is willing to make a 3-year commitment. However, the company wants to have maximum flexibility for the selection of Amazon EC2 instances across AWS Regions, instance families, and instance sizes. Which purchasing option will meet these requirements at the LOWEST cost?
    - [ ] A. Spot Instances
    - [ ] B. 3-year Compute Savings Plan
    - [ ] C. 3-year EC2 Instance Savings Plan
    - [ ] D. 3-year Reserved Instances

    <details>
       <summary>Answer</summary>

       B.
       Compute Savings Plan offers the flexibility to change instance families, sizes, operating systems, and AWS regions at any time and still benefit from cost savings. It's a great option for businesses that are willing to make a long-term commitment but require flexibility in their cloud infrastructure.

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
