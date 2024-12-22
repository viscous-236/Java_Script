const promiseOne = new Promise(function (resolve, reject) {
  // Do an asyc task
  // DB Calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// promiseOne.then(), has a direct connection with resolve
promiseOne.then(function () {
  console.log("Promise consumed");
}); // This will not execure unless u will put resolve() in the above setTimeout defination

// Method 2 all in one

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Vaibhav Goyal", email: "vaibhav@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user); // As then is directly connected to resolve the parametes passed above in resolve will be all stored in user
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Vaibhav Goyal", email: "vaibhav@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
// promiseFour.then(function(user){
//     console.log(user);
// }); // Will throw error as in the above defination error is set to true means its the case of reject
// we have to handle both the cases equally

promiseFour
  .then((user) => {
    return user;
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  }); //ERROR: Something went wrong
// true changes to false in the defination
// Output: { username: 'Vaibhav Goyal', email: 'vaibhav@gmail.com' }

promiseFour
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>{
    console.log("The promise is either rejested or resolved")
  });// Vaibhav Goyal

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'JAVA SCRIPT', email: 'js@.com'});
        }
        else{
            reject('ERROR: JS went wrong');
        }
    },1000)
})

// async is similarly as .then and .catch, but in this we dont handle the catch not much gracefully

// async function consumePromisefive(){
//     const response = await promiseFive
//     console.log(response);
// }
async function consumePromisefive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive(); // will throw error when error = true as we handle the case directly not in try catch method

// async function getAllusers(){
//     try {
//         const response = await fetch('https://api.github.com/users/viscous-236');
//         const data = await response.json();// as response.json also take time to convert
//         console.log(data);
//     } catch (error){
//         console.log("E: ",error);
//     }
// }// dummy data

// getAllusers();

fetch('https://api.github.com/users/viscous-236')
.then((response) => {
    return response.json()
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log("e: ",error)
})
