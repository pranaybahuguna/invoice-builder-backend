"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var devConfig = exports.devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "AESCReND12d",
  frontendURL: "http://localhost:4200",
  google: {
    clientId: "179544937848-un871s8iraukh7ve609fontf7jn0g9ju.apps.googleusercontent.com",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvZW52L2RldmVsb3BtZW50LmpzIl0sIm5hbWVzIjpbImRldkNvbmZpZyIsInBvcnQiLCJkYXRhYmFzZSIsInNlY3JldCIsImZyb250ZW5kVVJMIiwiZ29vZ2xlIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJjYWxsYmFja1VSTCIsImdpdGh1YiIsImV0aGVyZWFsIiwidXNlcm5hbWUiLCJwYXN3b3JkIiwiaG9zdCIsIm1lYW5BcHBHbWFpbCIsImVtYWlsIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsZ0NBQVk7QUFDdkJDLFFBQU0sSUFEaUI7QUFFdkJDLFlBQVUsaUJBRmE7QUFHdkJDLFVBQVEsYUFIZTtBQUl2QkMsZUFBYSx1QkFKVTtBQUt2QkMsVUFBUTtBQUNOQyxjQUNFLDBFQUZJO0FBR05DLGtCQUFjLDBCQUhSO0FBSU5DLGlCQUFhO0FBSlAsR0FMZTtBQVd2QkMsVUFBUTtBQUNOSCxjQUFVLHNCQURKO0FBRU5DLGtCQUFjLDBDQUZSO0FBR05DLGlCQUFhO0FBSFAsR0FYZTtBQWdCdkJFLFlBQVU7QUFDUkMsY0FBVSxpQ0FERjtBQUVSQyxhQUFTLHFCQUZEO0FBR1JDLFVBQU0scUJBSEU7QUFJUlosVUFBTTtBQUpFLEdBaEJhO0FBc0J2QmEsZ0JBQWM7QUFDWkMsV0FBTywyQkFESztBQUVaQyxjQUFVO0FBRkU7QUF0QlMsQ0FBbEIiLCJmaWxlIjoiZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGV2Q29uZmlnID0ge1xuICBwb3J0OiAzMDAwLFxuICBkYXRhYmFzZTogXCJpbnZvaWNlLWJ1aWxkZXJcIixcbiAgc2VjcmV0OiBcIkFFU0NSZU5EMTJkXCIsXG4gIGZyb250ZW5kVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMFwiLFxuICBnb29nbGU6IHtcbiAgICBjbGllbnRJZDpcbiAgICAgIFwiMTc5NTQ0OTM3ODQ4LXVuODcxczhpcmF1a2g3dmU2MDlmb250ZjdqbjBnOWp1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXG4gICAgY2xpZW50U2VjcmV0OiBcIkFrd1dhaUM5YWVuSnpzOGtKcU4zOEpwc1wiLFxuICAgIGNhbGxiYWNrVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9nb29nbGUvY2FsbGJhY2tcIlxuICB9LFxuICBnaXRodWI6IHtcbiAgICBjbGllbnRJZDogXCIzNGY5MmQxYzRmZThhMjliMWNjYlwiLFxuICAgIGNsaWVudFNlY3JldDogXCJmNmIzNmRiYzE4NzFiODVlYWYyM2RjOGM4OWNkMzc3YjBjY2VjY2M0XCIsXG4gICAgY2FsbGJhY2tVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL2dpdGh1Yi9jYWxsYmFja1wiXG4gIH0sXG4gIGV0aGVyZWFsOiB7XG4gICAgdXNlcm5hbWU6IFwic3V1M3JtenhrY283N2Y0ekBldGhlcmVhbC5lbWFpbFwiLFxuICAgIHBhc3dvcmQ6IFwiIG54Vk1jbnN6TU1EdmhSek5FdlwiLFxuICAgIGhvc3Q6IFwic210cC5ldGhlcmVhbC5lbWFpbFwiLFxuICAgIHBvcnQ6IDU4N1xuICB9LFxuICBtZWFuQXBwR21haWw6IHtcbiAgICBlbWFpbDogXCJtZWFuYXBwLm5vcmVwbHlAZ21haWwuY29tXCIsXG4gICAgcGFzc3dvcmQ6IFwibnhWTWNuc3pNTUR2aFJ6TkV2XCJcbiAgfVxufTtcbiJdfQ==