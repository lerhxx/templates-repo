import Taro from '@tarojs/taro'
import cookies from 'weapp-cookie'

import { removeStorage } from '@utils/storage'
import { USERINFO } from "@constants/storage"
import RES_CODES from '@constants/res-codes'
import { goToLogin } from '@utils/index'

const CODE_AUTH_EXPIRED = [ RES_CODES.RESPONSE_TOKEN_INVALID ]

async function Request(params) {
    try {
        const {
            url,
            method = 'GET',
            header={},
            data={},
            prefix,
            isUpload,
            opt={}
        } = params
        
        const comUrl = url
        const domain = comUrl.replace(/https?:\/\//, '').split('/')[0]
        header['x-csrf-token'] = cookies.get('csrfToken', domain) || ''

        const res = !isUpload ? await Taro.request({
            url: comUrl,
            method,
            header,
            data
        })
        : await Taro.uploadFile({
            url: comUrl,
            header,
            filePath: opt.filePath,
            name: opt.name,
            formData: data
        })

        if (!opt.ignoreUnLogin && ( CODE_AUTH_EXPIRED.find(code => code === res.statusCode || code === res.data.code) )) {
            removeStorage(USERINFO)
            goToLogin()
            throw new Error('请登录')
        }

        if (res.statusCode < 200 || res.statusCode >= 300 && res.statusCode !== 304) {
            throw new Error(`请求失败，${res.errMsg} ${res.statusCode}`)
        }

        const resData = isUpload ? JSON.parse(res.data) : res.data

        const { code, msg } = resData
        if (code !== 0) {
            throw new Error(msg)
        }
        return resData.data
    } catch(err) {
        throw err
    }
}

function showErrToast(err, defaultMsg?: string) {
    let errText = err.message || err.msg || err.errMsg || defaultMsg

    if (/request:fail/.test(errText)) {
        errText = `请求失败, 请稍后重试`
    }
    Taro.showToast({
        title: errText,
        icon: 'none'
    })
}

export default Request

export {
    showErrToast
}