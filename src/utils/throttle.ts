import Taro from '@tarojs/taro'

function throttle(fn, gap=1500, isFirstRun?) {
    let lastTime = 0
    return function() {
        let nowTime = + new Date()
        !isFirstRun && !lastTime && (lastTime === nowTime)
        if (nowTime - lastTime > gap) {
            fn.apply(this, arguments)
            lastTime = nowTime
        }
    }
}

function throttleNavigate() {
    try {
        Object.defineProperties(Taro, {
            navigateTo: {
                value: throttle(Taro.navigateTo)
            },
            redirectTo: {
                value: throttle(Taro.redirectTo)
            },
            switchTab: {
                value: throttle(Taro.switchTab)
            },
            navigateBack: {
                value: throttle(Taro.navigateBack)
            },
            reLaunch: {
                value: throttle(Taro.reLaunch)
            }
        })
    } catch(err) {
        console.log(`navigateThrottle fail:`, err)
    }
}

export {
    throttle,
    throttleNavigate
}
