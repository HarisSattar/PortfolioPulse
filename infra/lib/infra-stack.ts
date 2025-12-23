import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import * as path from 'path';

export class PortfolioPulseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // 1. The Bucket to hold your code
    const websiteBucket = new s3.Bucket(this, 'PortfolioPulseBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // Security best practice
    });

    // 2. The CloudFront distribution (The URL users visit)
    const distribution = new cloudfront.Distribution(this, 'PortfolioPulseDist', {
      defaultBehavior: { 
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
    });

    // 3. Deployment: Sync the Next.js 'out' folder to S3
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../out'))],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'], // Clears the cache on update
    });

    // Output the URL to your terminal
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: distribution.domainName,
    });
  }
}
