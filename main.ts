let yy = 0
let xx = 0
let xxx = 0
let x = 0
let fmList = [
1,
0,
0,
0,
1,
0,
0,
0,
0,
0,
0,
0,
1,
1,
0,
0,
1,
0,
0,
1,
0,
0,
1,
1,
1,
1,
0,
0,
0,
0,
0,
1,
1,
0,
1,
1,
0,
0,
0,
1,
1,
0,
1,
1,
0,
0,
1,
1,
1,
0,
1,
0,
0,
1,
1,
0,
1,
0,
1,
0,
0,
1,
0,
0,
0,
0,
1,
0,
1,
0,
0,
0,
1,
0,
0,
1,
0,
0,
0,
0,
1,
0,
0,
0,
0,
1,
0,
1,
0,
0,
1,
0,
0,
1,
0,
0,
1,
1,
1,
0,
1,
1,
0,
1,
1,
0,
1,
0,
1,
0,
0,
1,
1,
1,
0,
0,
1,
1,
1,
0,
0,
0,
1,
0,
0,
0,
1,
0,
1,
0,
1,
0,
0,
1,
0,
1,
1,
0,
0,
0,
1,
0,
0,
1,
0,
0,
0,
1,
0,
0,
1,
0,
1,
0,
1,
0,
1,
0,
1,
0,
0,
0,
0,
0,
1,
0,
1,
0,
0,
1,
0,
0,
1,
1,
1,
0,
1,
0,
1,
0,
0,
1,
1,
0,
0,
1,
0,
1,
0,
0,
1,
0,
0,
1,
0,
0,
0,
0,
0,
0,
1,
0,
0,
0,
1,
0,
1,
1,
0,
1,
0,
1,
1,
1,
0,
0,
1,
0,
0,
1,
0,
0,
1,
0,
0,
0,
1,
1,
0,
1,
0,
0,
0,
0,
0,
1,
0,
0,
1,
0,
0,
1,
1,
0,
0,
0,
0,
1,
0,
0
]
basic.forever(function () {
    xxx = 0
    for (let index = 0; index < 5; index++) {
        xx = x + xxx
        yy = 0
        for (let index = 0; index < 5; index++) {
            if (fmList[xx + yy * 50] == 1) {
                led.plot(xxx, yy)
            } else {
                led.unplot(xxx, yy)
            }
            yy += 1
        }
        xxx += 1
    }
    x += 1
    if (x >= 46) {
        control.waitMicros(1000000)
        x = 0
    }
    control.waitMicros(300000)
})
