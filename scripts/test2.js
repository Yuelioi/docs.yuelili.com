function one() {
  return "one";
}

function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("two");
    }, 3000);
  });
}

function three() {
  return "three";
}

function run() {
  Promise.all([two(), three()]).then(([result1, result2]) => {
    console.log(result1, result2);
  });
}

run();
