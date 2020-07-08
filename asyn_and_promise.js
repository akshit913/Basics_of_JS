function someTask (callback) {
    console.log('started')
    setTimeout(()=>{
        console.log('ended')
        callback()
    },3000)
}

let someTaskPromise = function () {
    return new Promise(function(resolve,reject){
        someTask(resolve)
    })
}

let savedData = someTaskPromise()
savedData.then(function (){
    console.log('completed')
})