const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04PPQA3qHQzW2CgYIARAAGAQSNwF-L9IrYs-ljW4XufBxElvN4Dcopmus4tbC4p-xzdiLGlEfpNnn3tOxWnYhIy5vpcQ-2FQz2iM";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

module.exports = async ({details, user}) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'adeshpande7206@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: 'adeshpande7206@gmail.com',
            to: user.email,
            subject: 'Booking Confirmed!!',
            text: `
                Booking Details: 

                Name of Owner: ${details.name}
                Email of Owner: ${details.email}
                Phone Number of Owner: ${details.phone}
                Address of Parking Spot: ${details.address}
                Description: ${details.description}
                Rate per hour: ${details.rate} 
            `,
        }

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (err) {
        return err.message
    }
}