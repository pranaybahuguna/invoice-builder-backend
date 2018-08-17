export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "AESCReND12d",
  google: {
    clientId:
      "179544937848-un871s8iraukh7ve609fontf7jn0g9ju.apps.googleusercontent.com",
    clientSecret: "AkwWaiC9aenJzs8kJqN38Jps",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  }
};
