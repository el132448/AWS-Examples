#!/bin/bash

# Set AWS environment variables
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_DEFAULT_REGION=ap-northeast-1

# Set AWS CLI auto prompt
export AWS_CLI_AUTO_PROMPT=on-partial

# Install AWS CLI
cd /workspace
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify installation
aws sts get-caller-identity
aws s3 ls

echo "Environment setup complete."