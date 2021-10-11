const aws = require('aws-sdk');
const ses = new aws.SES();

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S;
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S;

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [candidateEmail],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Successfully registered' },
              Body: {
                Text: {
                  Data: `Dear ${candidateName}, Thank you for the registration`
                },
              },
            },
          })
          .promise();
    }
  }
  return { status: 'done' };
};