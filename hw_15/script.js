// TASK 1

const response = {
  data: [
    {
      username: 'samuel',
      is_active: true,
      created_at: '2020-11-20T09:53:50.000000Z',
    },
    {
      username: 'john',
      is_active: false,
      created_at: '2020-11-20T09:53:50.000000Z',
    },
    {
      username: 'peter',
      is_active: false,
      created_at: '2020-11-20T09:53:50.000000Z',
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {meta: {paging: {total}}} = response;
console.log (total);

const {data: [{is_active: isActive}]} = response;
console.log (isActive);

// TASK 2

const user = {
  name: 'gabriel',
  surname: 'brown',
  age: 17,
  height: 178,
};

const {name, surname, ...parameters} = user;

console.log (name, surname, parameters);

// TASK 3

const max = (...values) => {
  let max = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  return max;
};

console.log (max (2, 15, 4, 10, 8, 3));

// TASK 4

const createMessage = ({
  author = 'Guest',
  text,
  receiver,
  time = new Date (),
}) => {
  return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString ()})`;
};

const message = createMessage ({
  receiver: 'John',
  text: 'Hi!',
});

console.log (message);

// TASK 5

// 5.1.
let regexp1 = /\w\d+\w/g;

let str = 'x1y 722a 333 a123v1n a55555a qwe1 1zxc';

let matches = str.match (regexp1);
console.log (matches);

//5.2.
let regexp2 = /[a-z0-9_.]+[a-z]{2,}/;

const testExamples = [
  'ex.ua',
  'google.com',
  'yandex.ru',
  'site.com.ua',
  'my-page.com',
];

for (let example of testExamples) {
    console.log(regexp2.test(example));
};

// 5.3.
let regexp3 = /\d{12,}/g;



