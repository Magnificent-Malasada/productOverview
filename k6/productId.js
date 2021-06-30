import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '15s', target: 100 },
    { duration: '1m', target: 1000 },
  ],
};

export default function () {
  const max = 1000011;

  let product_id = Math.floor(Math.random() * max) || 1;

  let res = http.get(`http://localhost:3000/products/${product_id}`);
  check(res, {'status was 200': r => r.status === 200});
  sleep(1);
}


// k6 run --vus 1000 productOverview.js