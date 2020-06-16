function outer (arg1){
    let var1 = 10;
    let var3 = arguments
    function inner(arg2) {
        let var2 = 20;

        console.log(arg1, var1,arg2,var2,var3)
    }
    return inner
}

let x = outer ('param1',20)
x('param2') 