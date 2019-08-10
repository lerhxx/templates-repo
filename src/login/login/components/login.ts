import Taro from '@tarojs/taro'

import { updateStorage } from '@utils/storage'
import { saveInGlobalData } from '@utils/persistent'
import { USERINFO } from "@constants/storage"


function handleLoginSuccess(data, redirectTab=1) {
    updateStorage(USERINFO, data)
    saveInGlobalData(data)
    const pages = Taro.getCurrentPages()
    pages.length > redirectTab
    ? Taro.navigateBack({ delta: redirectTab})
    : Taro.reLaunch({ url: '/pages/home/index' })
}

export {
    handleLoginSuccess
}
