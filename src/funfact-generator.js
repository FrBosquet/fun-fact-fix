const actions = [
  "swam",
  "danced",
  "fought",
  "shouted",
  "drank",
  "got drunk",
  "learned to sew"
];

const moments = [
  "two years ago",
  "the day we first met",
  "during my last birtday",
  "that time when i was so busy",
  "I dont remember when, but",
  "on my first day at taxfix",
  "during the last reconnect"
];

const people = [
  "a shark",
  "two weird guys",
  "an otter",
  "a tax exert",
  "Tim",
  "Juanito and Hernan",
  "a retired policeman",
  "a midnight agressor"
];

const places = [
  "in the taxfix 5 anniversary party",
  "in the taxfix new office",
  "t my parents house",
  "at a park",
  "in the middle of Berlin",
  "inside a plane",
  "on a lake"
];

const pick = (arr) => {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

export const funFactGenerator = () => {
  const when = pick(moments);
  const action = pick(actions);
  const who = pick(people);
  const where = pick(places);

  return `${when} I ${action} with ${who} ${where}`;
};
