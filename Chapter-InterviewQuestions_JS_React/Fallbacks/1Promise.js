// Step 1:--
// This will work for asynchronous part
// As we are working on setTimeout API which is an Asynnchronous WebAPI
// It fails when Synchronous Code Come
// To fix this go to Step 2

function PromisePolyfill1(executer) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executer(resolve, reject);
}

// const myPromise1 = new PromisePolyfill1((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },1000)
// })

// myPromise1
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err);

// })

// ----------------------------------------------------------------

// Step 2
// For Synchronous Code
// Important -- This does not support promise chaining

function PromisePolyfill2(executer) {
  let onResolve, onReject;

  let isFulfilled = (isRejected = isCalled = false);
  let value;

  function resolve(val) {
    isFulfilled = true;

    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;

    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  try{
      executer(resolve, reject);
  }
  catch(err){
    reject(err)
  }

}

// const myPromise2 = new PromisePolyfill2((resolve, reject) => {
//   resolve(2);
//   // With Asynchronous
//   // setTimeout(()=>{
//   //     resolve(2)
//   // },1000)

//   // With Rejection
//   // reject(3)
//   // With Asynchronous
//   // setTimeout(()=>{
//   //     reject(4)
//   // },1000)
// });

// myPromise2
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// --------------------------------------------------

// Step 3 -- With Promise Chaining
// Polyfill for Promise
function MyPromise(executor) {
    let onResolve, onReject, isFulfilled = false, isRejected = false, value;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function') {
            onResolve(value);
        }
    }

    function reject(reason) {
        isRejected = true;
        value = reason;
        if (typeof onReject === 'function') {
            onReject(value);
        }
    }

    this.then = function (callback) {
        return new MyPromise((resolve, reject) => {
            onResolve = function(val) {
                try {
                    const result = callback(val);
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            };

            if (isFulfilled) {
                onResolve(value);
            }
        });
    };

    this.catch = function (callback) {
        return new MyPromise((resolve, reject) => {
            onReject = function(val) {
                try {
                    const result = callback(val);
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        reject(result);
                    }
                } catch (err) {
                    reject(err);
                }
            };

            if (isRejected) {
                onReject(value);
            }
        });
    };

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

// Example usage:
const promise = new MyPromise((resolve, reject) => {
    // setTimeout(() => resolve(10), 1000);
    resolve(20)
});

promise
    .then((val) => {
        console.log(val); // 10
        return val * 2;
    })
    .then((val) => {
        console.log(val); // 20
        return val + 5;
    })
    .then((val) => {
        console.log(val); // 25
    })
    .catch((err) => {
        console.error(err);
    });
