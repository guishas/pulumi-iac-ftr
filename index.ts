import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("pulumi-bucket-1", {
  bucket: "pulumi-bucket-1-ftr",
  tags: {
    IAC: "true",
  }
});

const secondBucket = new aws.s3.BucketV2("pulumi-bucket-2", {
  bucket: "pulumi-bucket-2-ftr",
  tags: {
    IAC: "true",
  }
});

const ecr = new aws.ecr.Repository("pulumi-ecr-1", {
  name: "pulumi-ecr-1-ftr",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true"
  }
});

export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepoUrl = ecr.repositoryUrl;