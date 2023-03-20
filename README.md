1. Create a .env file with values:
    <br>`PORT=5005`
    <br>`PROXY_COUNT=1`
    <br>`RATE_LIMIT_MAX=10`
    <br>`RATE_LIMIT_TIMER=1`


2. Run Command `npm i`

3. Run Command `npm start`

4. Open `localhost:5005/ip` in a browser and refresh more than 10 times under a min

5. Open `localhost:5005/ip2` in a browser and refresh more than 10 times under a min

6. Repeat `Step 5` from another device under a min (`Step 5` and `Step 6` together should be done under a min)

7. Refer `Troubleshooting Proxy Issues` section at `https://www.npmjs.com/package/express-rate-limit`, if there is any issue related to ip based rate limiting.