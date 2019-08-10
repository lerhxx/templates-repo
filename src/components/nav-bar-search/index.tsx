import Taro from '@tarojs/taro'
import { Navbar } from '@components/nav-bar'
import { SearchBar } from '@components/search-bar'

import '@styles/iconfont.scss'
import './index.scss'

export default function NavBarSearch({ defaultKeyword, onSearch, placeholder, onChange }) {
    return (
        <Navbar btns={['back']} external-wrap-class='nav-bar-search__wrap'>
            <SearchBar
                external-wrap-class='nav-bar-search__input-wrap'
                defaultKeyword={defaultKeyword}
                placeholder={placeholder || '搜索'}
                onSearch={onSearch}
                onChange={onChange}
            />
        </Navbar>
    )
}
