import Taro, { Component } from '@tarojs/taro'
import { showErrToast } from '@utils/request'

import { Button } from '@tarojs/components'

import wrapComponent from '@components/wrap-component'

@wrapComponent()
export default class WeiXinLogin extends Component<any, any> {
    static externalClasses = [
        'external-class'
    ]

    constructor(props) {
        super(props)
        this.state = {}
    }

    // 登录请求
    async requestLogin(showLoading=true) {
        try {
            return {}
        } catch(err) {
            if (this.isHide) { return }
            showLoading && Taro.hideLoading()
            throw err
        }
    }

    // 登录逻辑
    async handleWxLogin(showLoading=true) {
        try {
            const res = await this.requestLogin(showLoading)
            this.props.onLogin(res)
            return res
        } catch (err) {
            showLoading && Taro.hideLoading()
            if (this.isHide) { return }
            Taro.showModal({
                title: '提示',
                content: err.message || err.errMsg,
                showCancel: false
            })
            showErrToast(err, '登录失败！')
        }
    }

    render() {
        return <Button className='external-class' openType="getUserInfo" lang="zh_CN" onGetuserinfo={() => this.handleWxLogin(true)}>
                微信登录
            </Button>
    }
}
