import { Duration, Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';

export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      lifecycleRules: [
        {
          transitions: [
            {
              storageClass: s3.StorageClass.INFREQUENT_ACCESS,
              transitionAfter: Duration.days(30)
            }
          ]
        }
      ]
    });

    const queue = new sqs.Queue(this, 'HelloCdkQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'HelloCdkTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));

    new cdk.CfnOutput(this, 'BucketName', {
      value: bucket.bucketName,
      description: 'The name of the S3 bucket',
      exportName: 'MyBucketName',
    });
  }
}
