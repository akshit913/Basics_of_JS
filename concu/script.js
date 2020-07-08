let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')

let count = 0
btnCount.onclick = function () {
    count++;
    divVal.textContent = count
}
btnWait.onclick = function () {
    divStatus.textContent = 'WAITING'
    let start = Date.now()
    while (Date.now() < start + 5000) {}
    divStatus.textContent = 'DONE'
}