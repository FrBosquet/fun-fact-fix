const actions = [
  "swam",
  "danced",
  "fought",
  "shouted",
  "drank",
  "got drunk",
  "learned to sew",
  "defended my house",
  "discovered that Arizmendi is an aztec/mayen surname",
  "turned off the camera"
];

const moments = [
  "two years ago",
  "the day we first met",
  "during my last birtday",
  "that time when i was so busy",
  "I dont remember when, but",
  "on my first day at taxfix",
  "during the last reconnect",
  "that time when",
  "in the middle of a meeting"
];

const people = [
  "with a shark",
  "with two weird guys",
  "with an otter",
  "with a tax exert",
  "with Tim",
  "with Juanito and Hernan",
  "with a retired policeman",
  "from a midnight agressor",
  "from a gang of monkeys",
  "because of a guy who doesnt mean to be rude"
];

const places = [
  "in the taxfix 5 anniversary party",
  "in the taxfix new office",
  "at my parents house",
  "at a park",
  "in the middle of Berlin",
  "inside a plane",
  "on a lake",
  "in my hometown",
  "in a meeting booth"
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

  return `${when} I ${action} ${who} ${where}`;
};
