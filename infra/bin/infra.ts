#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioPulseStack } from '../lib/infra-stack';

const app = new cdk.App();

// We name the stack "PortfolioPulseDeployment" in the AWS CloudFormation console
new PortfolioPulseStack(app, 'PortfolioPulseDeployment', {
  /* If you want to specify a region, uncomment below:
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
  */
});