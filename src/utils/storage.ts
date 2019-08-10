import Taro from '@tarojs/taro'

import ENV from '@src/env.config.json'

const IS_ENV = ENV.env === 'development'

function checkKey(key) {
    if (IS_ENV && !key) {
        Taro.showToast({
            title: '缺少 key',
            icon: 'none'
        })
        return false
    }
    return true
}

function updateStorage(key, data) {
    checkKey(key)
    return Taro.setStorage({ key, data })
            .catch(() => {})
}

function getStorage(key) {
    checkKey(key)
    return Taro.getStorage({ key })
            .then(res => {
                if (!res.data) {
                    throw new Error(res.errMsg)
                }
                return res.data
            })
            .catch(() => null)
}

function removeStorage(key) {
    checkKey(key)
    return Taro.removeStorage({ key })
            .catch(() => null)
}

export {
    updateStorage,
    getStorage,
    removeStorage
}
