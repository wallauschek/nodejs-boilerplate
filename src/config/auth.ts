export default {
  secret_token: process.env.JWT_SECRET_TOKEN,
  secret_refresh_token: process.env.JWT_SECRET_REFRESH_TOKEN,
  expires_in_token: "60m",
  expires_in_refresh_token: "30d",
  expires_refresh_token_days: 30,
};
