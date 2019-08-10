import { IS_WEIXIN } from './env-type'
import { getApp } from '@tarojs/taro';


// 持久化存储
interface iGlobalDataOption {
    key: string;
    data: any;
    option: {
        expiredTime: number;          // 毫秒
    }
}
/**
 * @param datas 
 * @param app app 实例，Page() 中调用可不传
 */
function saveInGlobalData(datas: iGlobalDataOption[]=[], app?) {
    if (!IS_WEIXIN || !datas.length) {
        return
    }

    const that = app || getApp({allowDefault: true})
    that.globalData = that.globalData || {}
    datas.forEach(item => {
        const { key, data, option={} } = item
        if (!key) {
            return
        }
        const { expiredTime } = option
        that.globalData[key] = data
        expiredTime && ( that.globalData[`${key}_expiredTime`] = +new Date() + expiredTime )
    })
}

function getGlobalData(key, app?) {
    const that = app || getApp()
    const globalData = that.globalData || {}
    return globalData[key] || null
}

export {
    saveInGlobalData,
    getGlobalData
}