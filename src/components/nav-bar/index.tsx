import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { goToHome } from '@utils'
import { getGlobalData } from '@utils/persistent'
import { BARHEIGHT } from '@constants/globalData'

import '@styles/iconfont.scss'
import './index.scss'

const BTNS = {
    back: {
        icon: 'icon-arrow-left'
    },
    home: {
        icon: 'icon-home'
    }
}


export default class NavBar extends Component<any, any> {
    static externalClasses = [
        'external-wrap-class',
        'external-btn-wrap-class',
        'external-btn-class'
    ]

    static defaultProps = {
        btns: ['back', 'home']
    }

    constructor(props) {
        super(props)
        this.state = {
            canBack: false,
            baseTop: this.props.baseTop || getGlobalData(BARHEIGHT),
            btns: this.filterBtns(props.btns)
        }
    }

    componentDidShow() {
        if (!this.props.btns.includes('back')) {
            return
        }
        const pages = Taro.getCurrentPages()
        if (pages.length > 1) {
            this.setState({
                canBack: true
            })
        }
    }

    handleClick = (type) => {
        switch(type) {
            case 'back':
                Taro.navigateBack()
                break
            case 'home':
                goToHome()
                break
            default:
                break
        }
    }

    filterBtns = (btns=[]) => {
        return btns.filter(btn => BTNS[btn])
    }

    render() {
        const { canBack, baseTop, btns } = this.state
        return (
            <View className='nav-bar__wrap external-wrap-class' style={`padding-top: ${baseTop}px`}>
                <View className={`external-btn-wrap-class nav-bar__btn-wrap ${btns.length > 1 ? 'nav-bar__mul-btn-wrap' : ''}`}>
                {
                    btns.map(btn => {
                        const item = BTNS[btn]
                        return (
                            item && btn === 'back' && !canBack 
                            ? null
                            : <Text className={`external-btn-class nav-bar__btn iconfont ${item.icon}`} key={btn} onClick={() => this.handleClick(btn)} />
                        )
                    })
                }
                </View>
                { this.props.children }
            </View>
        )
    }
}
