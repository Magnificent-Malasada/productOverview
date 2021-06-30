// import http from 'k6/http';
// import { check, group, sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '20s', target: 300 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
//     { duration: '1m', target: 30 }, // stay at 100 users for 10 minutes
//     { duration: '30s', target: 0 }, // ramp-down to 0 users
//   ],
//   // thresholds: {
//   //   http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
//   //   'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
//   // },
//   thresholds: {
//     http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//     http_req_duration: ['p(95)<100', 'max <250'], // 95% of requests should be below 200ms, max duration less than 250ms
//   }
// };

// const BASE_URL = 'http://localhost:3000';

// export default function () {
//   // let loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
//   //   username: USERNAME,
//   //   password: PASSWORD,
//   // });
//   const max = 1000011;

//   let product_id = Math.floor(Math.random() * max) || 1;



//   let res = http.get(`${BASE_URL}/products`)


//   check(res, {
//     'response code is 200': (res) => res.status === 200,
//     'response duration < 250ms': (res) => res.timings.duration < 250,
//   });

//   // let authHeaders = {
//   //   headers: {
//   //     Authorization: `Bearer ${loginRes.json('access')}`,
//   //   },
//   // };

//   // let myObjects = http.get(`${BASE_URL}/my/crocodiles/`, authHeaders).json();
//   // check(myObjects, { 'retrieved crocodiles': (obj) => obj.length > 0 });

//   sleep(1);
// };


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // ramp up traffic to 10 users over 10s
    { duration: '15s', target: 100 }, // ramp up to 100 users over 15s
    { duration: '1m', target: 1000 }, // ramp up to 1000 users over 1m
  ],
};

export default function () {
  const maxCount = 1000;

  let product_id = Math.floor(Math.random() * maxCount) || 1;
  let res = http.get('http://localhost:3000/products/?count=1000');
  check(res, {'status was 200': r => r.status === 200});
  sleep(1);
}