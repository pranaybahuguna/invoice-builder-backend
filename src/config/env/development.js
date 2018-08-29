export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "AESCReND12d",
  frontendURL: "http://localhost:4200",
  google: {
    clientId:
      "179544937848-un871s8iraukh7ve609fontf7jn0g9ju.apps.googleusercontent.com",
    clientSecret: "AkwWaiC9aenJzs8kJqN38Jps",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  github: {
    clientId: "34f92d1c4fe8a29b1ccb",
    clientSecret: "f6b36dbc1871b85eaf23dc8c89cd377b0cceccc4",
    callbackURL: "http://localhost:3000/api/auth/github/callback"
  },
  ethereal: {
    username: "suu3rmzxkco77f4z@ethereal.email",
    pasword: " nxVMcnszMMDvhRzNEv",
    host: "smtp.ethereal.email",
    port: 587
  },
  meanAppGmail: {
    email: "meanapp.noreply@gmail.com",
    password: "nxVMcnszMMDvhRzNEv"
  }
};
