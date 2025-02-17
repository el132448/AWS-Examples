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

## s3 bucket
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

