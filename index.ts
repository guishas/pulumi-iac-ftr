import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("pulumi-bucket-1", {
  bucket: "pulumi-bucket-1-ftr",
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

export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepoUrl = ecr.repositoryUrl;