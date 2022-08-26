const { google } = require("googleapis");

module.exports.oAuthGoogleClient = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:8080/auth/google/callback"
);
