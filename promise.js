
var y = (function(x){ delete x; return x; })(1)
console.log(y)
function fakeDownloadPromise (correct) {
    return new Promise(function(resolve,reject){
       setTimeout(function(){
           let downloaddata = "some data from the web"
           if(correct){
               resolve(downloaddata)
           }else{
               reject(new Error("Could not download data"))
           }
       }, 1000)
    })
}
fakeDownloadPromise(true).then(function(data){
    console.log('Downloading data')
    console.log(data)
}).catch(function (err){
    console.log(err)
});

//IIFE 
(function sayhello() {
    console.log("hello");
})();
// function hi(){
//     a = 10;
//     let b = 20;
// }
// hi();
// console.log(a);
// // console.log(b);


for(var i = 0; i < 10 ;i++){
    (function(j){
        setTimeout(function() {
            console.log(j);
        },100)
    })(i)
} // for immediate increment of I
// if not written like above the code will print out 10 10 times
// the above behavior can be justified by the fact that the for loop will terminate before 100ms
//thus creating 10 calls to setTimeout with the value of i as 9
for(var i = 0; i < 10;i++) {
    setTimeout(console.log, 100,i)
}

var z = (function(){ return typeof arguments; })();
console.log(z);
var f = (function f(){ return "1"; }, function g(){ return 2; })(); typeof f;
console.log(f);

function constfuncs() { var funcs = []; for(var i = 0; i < 10; i++) funcs[i] = function() { return i; }; return funcs; } 
var funcs = constfuncs(); 
console.log(funcs[5]) 
var x = [typeof x, typeof y][1]; typeof typeof x;
console.log(x);