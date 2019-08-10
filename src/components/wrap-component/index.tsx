import Taro from '@tarojs/taro'

import { getGlobalData } from '@utils/persistent'
import { BARHEIGHT } from '@constants/globalData'
import { saveInGlobalData } from '@utils/persistent'

export default function WrapComponent() {
    return function component(Component) {
        class WrapComponent extends Component<any, any> {
            private isHide = false

            componentWillMount() {
                // 初始化顶部导航栏高度
                this.initNavTap()
                this.isHide = false
                super.componentWillMount && super.componentWillMount()
            }

            componentDidShow() {
                this.isHide = false
                super.componentDidShow && super.componentDidShow()
            }
        
            componentWillUnmount() {
                this.isHide = true
                super.componentWillUnmount && super.componentWillUnmount()
            }
        
            componentDidHide() {
                this.isHide = true
                super.componentDidHide && super.componentDidHide()
            }

            initNavTap = () => {
                const baseTop = getGlobalData(BARHEIGHT)
                if (baseTop) {
                    return
                }

                const info = Taro.getSystemInfoSync()
                saveInGlobalData([{
                    key: BARHEIGHT,
                    data: info.statusBarHeight + 5
                }], this.$app)
            }
        
            render() {
                return super.render()
            }
        }
        return WrapComponent
    } 
}
