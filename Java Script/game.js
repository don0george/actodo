var numbers = [23, 33, 67, 22, 12, 77,50,10]

var evennum = numbers.filter(function (num) {
    if (num > 50) {
        return true
    }
    else if (num % 3 == 0) {
        return true
    }
    else if (num % 5 == 0) {
        return true
    }
})
console.log(evennum)