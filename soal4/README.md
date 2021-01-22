# CodeDebugging

Code debugging built with NodeJs

### Error file env

nama file seharusnya `.env`

### Setup .env sesuai dengan app yang di register di github

```
NODE_ENV=development
PORT=3000
CLIENT_ID=bd62d96cb437f27181e4
CLIENT_SECRET=3d397acf8f274c295b76be2915c02709ecc4941a
OAUTH_URL=https://github.com/login/oauth/
API_URL=https://api.github.com
```

### Error file config

- printah init config dotEnv harus di jalankan sebelum deklarasi variabel config

  ```js
  const dotenv = require("dotenv");
  const envFound = dotenv.config();
  process.env.NODE_ENV = process.env.NODE_ENV || "development";
  const config = {
    port: process.env.PORT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    oauthUrl: process.env.OAUTH_URL,
    apiUrl: process.env.API_URL,
  }
  .....
  ```

- perintah export module dirubah langsung ke variable config agar bisa di export secara default
  ```js
  ....
  module.exports = { config };
  ```
  to
  ```js
  ...
  module.exports = config;
  ```

### Error file authService.js

- typo perintah export `module.export` seharusnya `module.exports`

### typo in authCallbackService.js

- code line:14 typo, variable promise seharusnya `resp` agar variable dikenali saat di panggil
- salah key pada saat mengembalikan data token `resp.data["accessToken"]` seharusnya `resp.data["access_token"]`
- karena fungsi `getUserInfo` mengembalikan promise, maka data response ke cliean harus berada dalam promise

  ```js
  ....
   const user = UserServices.getUserInfo(accessToken);
      user.then((user) => {
        res.json({
          data: {
            login: user.login,
            githubId: user.id,
            avatar: user.avatar_url,
            email: user.email,
            name: user.name,
            location: user.location,
          },
        });
      });
   ....
  ```

### salah code export pada userInfoService.js

- return data pada `getUserInfo` harus mengembalikan axios get

  ```js
  function getUserInfo(token) {
    return axios({
      method: "get",
      url: `${config.apiUrl}/user`,
      headers: {
        Authorization: "token " + token,
      },
    }).then((response) => {
      return response.data;
    });
  }
  ```

- module harus diexport sebagai object agar pada authCallbackService.js bisa di panggil
  ```js
  module.exports = { getUserInfo };
  ```
