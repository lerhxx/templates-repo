import { Text } from '@tarojs/components'
import { Navbar } from '@components/nav-bar'

import '@styles/iconfont.scss'
import './index.scss'

export default function NavBarText({ title }) {
    return (
        <Navbar btns={['back']} >
            <Text className='nav-bar-text__title'>{title}</Text>
        </Navbar>
    )
}
