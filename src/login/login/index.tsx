import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import WeiXinLogin from './components/weixin-login'
import { handleLoginSuccess } from './components/login'
import withShare from '@components/share'
import NavBarText from '@components/nav-bar-text'

import { goToHome } from '@utils/index'

import '@styles/common.scss'
import './index.scss'

@withShare({
    path: 'login/login/index',
    title: '登录'
})
export default class Login extends Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleAccountLogin = () => {
        Taro.navigateTo({
            url: '/login/login/account-login/index'
        })
    }
    
    render() {
        return (
            <View className='login'>
                <NavBarText title='Login' />
                <WeiXinLogin external-class='login__wx-btn btn-color' onLogin={(data) => handleLoginSuccess(data)} />
                <Button onClick={goToHome}>Home</Button>
            </View>
        )
    }
}
