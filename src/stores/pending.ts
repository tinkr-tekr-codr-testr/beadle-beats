const randomUpTo = (max: number) => {
  return Math.floor(Math.random() * max);
};

const matchesIndices = [] as number[];
const cordLength = 5;

const matchesCount = randomUpTo(2);
let currentCord = new Array(5);
const prevCord = new Array(5);

for (let i = 0; i < matchesCount; i++) {
  const indexPending = randomUpTo(cordLength);
  if (matchesIndices.includes(indexPending)) i--;
  else matchesIndices.push(indexPending);
}

for (const i in matchesIndices) currentCord[i] = prevCord[i];

currentCord = currentCord.map((el) => (el ? el : randomUpTo(3)));
