
const myPromises = new Promise(function (solve, reject) {
    //producing code (May take some time)
    let name = 'Hr Delwar';

    if (name) {
        solve(name);
    } else {
        reject('error');
    }
});

// consuming code (must wait for a fulfilled promise)
myPromises.then(
    function (value) { console.log(value) },
    function (error) { console.log(error) }
)

// promise with timeout function 
const welcome = new Promise(function(welcomeMsg){
    setTimeout(function(){
        welcomeMsg('Welcome to my world!')
    }, 3000);
});

// consuming code 
welcome.then(
    function(value){
        console.log(value);
    }
);