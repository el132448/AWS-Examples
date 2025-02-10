# Project Notes

## AWS Configuration

### Environment Variables
- `AWS_ACCESS_KEY_ID`:
- `AWS_SECRET_ACCESS_KEY`: 
- `AWS_DEFAULT_REGION`: 

### AWS CLI Setup
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

### Additional Notes
- Remember to keep your AWS credentials secure and do not expose them publicly.
- Use the `AWS_CLI_AUTO_PROMPT` environment variable to enable auto-prompt for the AWS CLI:
    ```sh
    export AWS_CLI_AUTO_PROMPT=on-partial
    ```

## Other Information
- Add any other relevant notes or information here.

##
$ env | grep AWS-Example
PWD=/workspaces/AWS-Examples
GITHUB_REPOSITORY=el132448/AWS-Examples
CODESPACE_VSCODE_FOLDER=/workspaces/AWS-Examples