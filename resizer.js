var secrets = require('./secrets')
var aws = require('aws-sdk');

aws.config.update({
  accessKeyId: secrets.AWSAccessKeyId,
  secretAccessKey: secrets.AWSSecretAccessKey
});


