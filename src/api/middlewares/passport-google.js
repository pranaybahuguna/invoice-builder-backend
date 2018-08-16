import passport from "passport";
import GoogleStrategy from "passport-google-oauth";
import { devConfig } from "./../../config/env/development";

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
export const configureGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      {
        clientID: devConfig.google.clientId,
        clientSecret: devConfig.google.clientSecret,
        callbackURL: devConfig.google.callbackURL
      },
      async (accessToken, refreshToken, profile, done) => {
        //User.findOrCreate({ googleId: profile.id }, function(err, user) {
        // return done(err, user);
        // });
        console.log("accessToken: ", accessToken);
        console.log("tokenSecret: ", refreshToken);
        console.log("profile: ", profile);
        console.log("done: ", done);
      }
    )
  );
};
