var secrets = require('./secrets')
var aws = require('aws-sdk');

aws.config.update({
  accessKeyId: secrets.AWSAccessKeyId,
  secretAccessKey: secrets.AWSSecretAccessKey
});

// Hard-code region for now
aws.config.update({region: 'us-west-2'});
var s3 = new aws.S3();
var srcBucket = process.argv[2],
    tarBucket = process.argv[3];
var pathParams = {
  Bucket: srcBucket,
  Delimiter: '',
  Prefix: 'elections/2013/201307/travel'
};

s3.listObjects(pathParams, function(err, data) {
  if(err) console.log('ERR:', err);
  for(i = 0; i < data.length; i++) {
    console.log(data[i].Key);
  }
});
