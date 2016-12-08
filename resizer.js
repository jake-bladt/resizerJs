var secrets = require('./secrets')
var aws = require('aws-sdk');

aws.config.update({
  accessKeyId: secrets.AWSAccessKeyId,
  secretAccessKey: secrets.AWSSecretAccessKey
});

// Hard-code region for now
aws.config.update({region: 'us-west-2'});
var s3 = new aws.S3();
var srcDir = process.argv[2],
    tarDir = process.argv[3];
console.log(srcDir, " -> ", tarDir);
