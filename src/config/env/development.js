export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "AESCReND12d",
  google: {
    clientId:
      "179544937848-emcb3dfugh6js8jrssco4i1d552lkci1.apps.googleusercontent.com",
    clientSecret: "GLuXOu5eJWFngXbdqr1psrLJ",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  }
};
