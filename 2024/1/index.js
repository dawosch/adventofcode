import fs from 'fs';

const input = fs.readFileSync('./input', { encoding: 'utf-8' });

const lists = input.split('\r\n').reduce(
  (acc, cur) => {
    const line = cur.split(/\W+/);
    acc[0].push(line[0].trim());
    acc[1].push(line[1].trim());

    return acc;
  },
  [[], []]
);

// PART ONE ##########################################################

function partOne() {
  const left = lists[0].sort((a, b) => a - b);
  const right = lists[1].sort((a, b) => a - b);

  let diff = 0;
  for (let i = 0; i < left.length; i++) {
    diff += Math.abs(left[i] - right[i]);
  }
  console.log('RESULT PART ONE:', diff);
}

partOne();

// PART TWO ##########################################################

function partTwo() {
  const left = lists[0];
  const right = lists[1];

  const score = left.reduce((acc, cur) => (acc += right.filter((n) => n === cur).length * cur), 0);
  console.log('RESULT PART TWO:', score);
}

partTwo();
