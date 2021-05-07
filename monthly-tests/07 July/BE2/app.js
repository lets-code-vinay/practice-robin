const T1 = async () => {
  return "results of asyncT1";
};

const T2 = async () => {
  return "results of asyncT2";
};

const T3 = async () => {
  return "results of asyncT3";
};

const list = [T1, T2, T3];

const myModule = async (tasks) => {
  const results = [];
  for (const fn of tasks) {
    const data = await fn();
    results.push(data);
  }
  console.log(results);
};

const results = myModule(list);

console.log(results);