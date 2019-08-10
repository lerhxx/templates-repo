import Taro from '@tarojs/taro'

import { IS_WEIXIN } from '@utils/env-type'
import { isFunction } from '@utils/helper'

interface IShareOpts {
    title?: string;
    imageUrl?: string;
    path?: string;
}

export default function withShare(opts = {} as IShareOpts) {
    const defaultPath = '/pages/home/index'
    const defaultTitle = ''
    const defaultImageUrl = ''
    const shareOpt = {}

    return function shareComponent(Component) {
        class WithShare extends Component {
            async componentWillMount() {
                IS_WEIXIN && wx.showShareMenu({ withShareTicket: true })
                this.shareOpt = opts
                super.componentWillMount && super.componentWillMount()
            }

            onShareAppMessage(res) {
                let { title, imageUrl, path = null } = this.shareOpt
                if (res.from === 'button') {
                    const dataset = res.target.dataset
                    path = dataset.path
                    title = dataset.title
                    imageUrl = dataset.img
                } else {
                    path = this.$setSharePath && isFunction(this.$setSharePath) ? this.$setSharePath() : path || defaultPath
                    title = this.$setShareTitle && isFunction(this.$setShareTitle) ? this.$setShareTitle() : title || defaultTitle
                    imageUrl = this.$setShareImageUrl && isFunction(this.$setShareImageUrl) ? this.$setShareImageUrl() : imageUrl ||defaultImageUrl
                }

                return {
                    title,
                    path,
                    imageUrl
                }

            }

            render() {
                return super.render()
            }
        }
        return WithShare
    }
}
