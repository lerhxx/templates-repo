import Taro from '@tarojs/taro'
import { comeUpReg } from '@constants/reg'
import { getGlobalData } from '@utils/persistent'
import { BARHEIGHT } from '@constants/globalData'


function formatPrice (price: number|string) {
    const fPrice = Number(price)
    return fPrice ? fPrice.toFixed(2) : '0.00'
}

function isFull() {
    const systemInfo =  Taro.getSystemInfoSync()
    return comeUpReg.test(systemInfo.model)
}

function getRandomInt(min, max) {
    return ~~(min + Math.random() * ( max - min ))
}

// 获取顶部导航高度
function getNavBarHeight() {
    return getGlobalData(BARHEIGHT) + 40
}

function getBaseStyle() {
    return {
        height: '100vh',
        'padding-top': `${getNavBarHeight()}px`,
        'box-sizing': 'border-box'
    }
}
function isFunction(func) {
    return typeof func === 'function'
}

// 验证手机号位数
function checkParams(params) {
    const { phone } = params
    const result = {
        msg: '',
        success: true
    }

    if (!/\d{11}/.test(phone)) {
        result.msg = '手机号不正确'
        result.success = false
    }
    
    return result
}

export {
    formatPrice,
    isFull,
    getRandomInt,
    getBaseStyle,
    isFunction,
    getNavBarHeight,
    checkParams
}
