import Taro, { Component, Config } from "@tarojs/taro"
import { View, Button } from "@tarojs/components"
import withShare from '@components/share'
import wrapComponent from '@components/wrap-component'
import NavBarText from '@components/nav-bar-text'

import { goToLogin } from '@utils/index'

import { connect } from '@tarojs/redux'

import './index.scss'

@connect(state => state.userInfo)
@withShare()
@wrapComponent()
export default class Home extends Component<any, any> {
    config: Config = {
        navigationBarTitleText: 'HOme'
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View className='page__wrap home__wrap'>
                <NavBarText title='home' />
                <Button onClick={goToLogin}>Login</Button>
            </View>
        )
    }
}
