const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Second'
    });
    // reject({
    //   error: 'This request failed'
    // });
  }, 5000);
});


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'forth'
    });
    // reject({
    //   error: 'This request failed'
    // });
  }, 5000);
});

console.log('first');

promise.then((data) => {
    console.log(data);
    return promise2.then((x) => x);
 }).then((x) => {
    console.log(x);
 });

 console.log('third');