# Project Notes

## AWS CLI Setup
To set up the AWS CLI in your development environment, follow these steps:
1. Set the AWS environment variables:
    ```sh
    export AWS_ACCESS_KEY_ID=
    export AWS_SECRET_ACCESS_KEY=
    export AWS_DEFAULT_REGION=
    ```
2. Install the AWS CLI:
    ```sh
    cd /workspace
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install
    ```
3. Verify the AWS CLI installation:
    ```sh
    aws sts get-caller-identity
    aws s3 ls
    ```

## Additional Notes
- Remember to keep your AWS credentials secure and do not expose them publicly.
- Use the `AWS_CLI_AUTO_PROMPT` environment variable to enable auto-prompt for the AWS CLI:
    ```sh
    export AWS_CLI_AUTO_PROMPT=on-partial
    ```

## S3 bucket
- cp
    aws s3 cp <source> <destination>
- Copy from S3 to local (Download)
    aws s3 cp s3://my-bucket/data.txt .
    aws s3api get-object --bucket my-bucket --key data.txt local-data.txt
- Copy from local to S3 (Upload)
    aws s3 cp myfile.txt s3://my-bucket/
    aws s3api put-object --bucket my-bucket --key myfile.txt --body myfile.txt
- Uplaod recursivly
    aws s3 cp <local-folder-path> s3://<bucket-name>/<local-folder-name> --recursive
    aws s3 cp images/ s3://my-example-bucket-el/ --recursive
    aws s3 cp images/ s3://my-example-bucket-el/images/ --recursive
- list object
    aws s3api list-objects --bucket my-example-bucket-el
    aws s3api list-objects --bucket my-example-bucket-el --query Contents
    aws s3api list-objects --bucket my-example-bucket-el --query Contents[].Key

## linux command
- vscode extension: Remote Development
- list in long format 
    ls -la s3/bash-scripts
- [File Type] [Owner(user) Permissions] [Group Permissions] [Other Permissions]
    drwxr-xr-x: d for directory 
    -rw-r--r--: - for regular file
    rwx: Read, write, and execute permissions.
    r-x: Read and execute permissions (no write).
    -: No permission for that particular action.
- change the permission
  chmod u+x s3/bash-scripts/*
  chmod u-x s3/bash-scripts/*
- use windows downloaded aws in WSL env
    sudo ln -s "/mnt/c/Program Files/Amazon/AWSCLIV2/aws.exe" /usr/local/bin/aws
    aws --version
- This error occurs because the script file has Windows-style line endings (CRLF - \r\n) instead of Unix-style line endings (LF - \n). This typically happens when the file is created or edited on Windows.
    dos2unix s3/bash-scripts/create-random-objects

## "Infrastructure as Code" (IaC) tools
- AWS CDK
- Terraform
- Pulumi
- CloudFormation

## AWS CDK
- npm i -g aws-cdk
mkdir hello-cdk
cd hello-cdk
cdk init sample-app --language=typescript
cdk bootstrap
cdk deploy

## Node.js and npm
- Update package list
- sudo apt update
### Install Node.js and npm
sudo apt install nodejs npm
### Verify installation
node --version
npm --version

--------------------------------
## S3 (Simple Storage Service)

### S3 Bucket
- Naming Rules
- Restrictions and Limitations
- Bucket Types
- Bucket Folders
- Bucket Versioning
- Bucket Encryption
- Static Website Hosting

### Naming Rules
- Bucket names must be unique across all AWS accounts.
- Bucket names must be between 3 and 63 characters long.
- Bucket names must be lowercase.
- Bucket names must not contain spaces or special characters.
  e.g. underscores, dots, hyphens, and special characters are not allowed.
- Bucket names must not start or end with a dash.
- Bucket names must not be IP addresses.

### Nameing Rule Example
- xn--bucket-name NOT OK(xn-- is for Punycode)
- Unicode: アマゾン.jp
  Punycode: xn--cck2b3b.jp (not correct)
- Example of valid S3 bucket names:
  my-bucket-123
  mybucket2025
  photos-uploads-001
  my.bucket.name
- Example of invalid S3 bucket names:
  My-Bucket-123 (capital letters are not allowed).
  -mybucket (cannot start with a hyphen).
  my.bucket!.name (exclamation marks are not allowed).
  my..bucket (cannot have consecutive periods).

### Restrictions and Limitations
- default 100, up to 1000 buckets per account
- need to empty the bucket to delete
- no max bucket size
- no limit on the number of objects in a bucket
- files can be from 0 bytes to 5 TB
- files larger than 100MB should be uploaded using multipart upload
- S3 for AWS Outposts has a limit of 1000 buckets per account

### Bucket Types
- General Purpose Bucket: flat hierarchy
  i.e. when list-objects, it shows
  {
    "Contents": [
      {
        "Key": "folder1/"
      },
      {
        "Key": "folder1/file1.txt"
      }
    ]
  }
- Directory Bucket: folder hierarchy
  - only to be used with S3 Express One Zone storage class
  - default limit of 10 directory buckets per account

### Bucket Folder
- S3 folder is actually an zero-byte object ends with a slash
- S3 folder don't include metadata, permission, versioning, lifecycle, etc.
- S3 folder don't contain anything, they can't be full or empty
- S3 folder aren't "moved", S3 objects containing the same prefix are renamed

Feature         | S3                     | SVN
----------------|------------------------|------------------
Folders         | Virtual (just prefix)  | Real directories
Versioning      | Optional, per bucket   | Always, per file
History         | Limited versions       | Complete history
Branching       | No built-in support    | Core feature
Metadata        | Limited key-value      | Full properties
Structure       | Flat namespace         | True hierarchy

### S3 Object Overview
- S3 objects are resources that represent data and is not infrastructure.
- Etags: hash of the object, represents a specific version of the object.
- Checksums are used to verify the integrity of the data stored in an object.
- Object Prefix is the prefix of the object.
- Object Metadata is the metadata of the object.
- Object tags are used to manage the object.
- Object Locking is used to prevent the object from being deleted.
- Object Versioning is used to manage the version of the object.


### S3 Object Checksums
- A checksum is used to verify the integrity of the data stored in an object.


