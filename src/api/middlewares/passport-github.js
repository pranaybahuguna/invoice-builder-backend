import passport from "passport";
import GithubStrategy from "passport-github";
import { devConfig } from "./../../config/env/development";
import User from "../resources/user/user.model";

export const configureGithubStrategy = () => {
  passport.use(
    new GithubStrategy.Strategy(
      {
        clientID: devConfig.github.clientId,
        clientSecret: devConfig.github.clientSecret,
        callbackURL: devConfig.github.callbackURL
      },
      async (token, refreshToken, profile, done) => {
        try {
          console.log("accessToken: ", token);
          console.log("tokenSecret: ", refreshToken);
          console.log("profile: ", profile);
          const user = await User.findOne({ "github.id": profile.id });
          if (user) {
            done(null, user);
          } else {
            const newUser = new User({});
            newUser.github.id = profile.id;
            newUser.github.token = token;
            newUser.github.displayName = profile.displayName;
            newUser.github.email = profile.emails[0].value;
            await newUser.save();
            done(null, newUser);
          }
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
