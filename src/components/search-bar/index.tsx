import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'

import { emojiReg } from '@constants/reg'
import { isFunction } from '@utils/helper'

import '@styles/iconfont.scss'
import './index.scss'

export default class SearchBar extends Component<any, any> {
    static externalClasses = [
        'external-wrap-class'
    ]

    constructor(props) {
        super(props)
        this.state = {
            keyword: props.defaultKeyword || ''
        }
    }

    handleChange = (e) => {
        const { onChange } = this.props
        const value = e.target.value.replace(emojiReg, '')
        this.setKeyword(value)
        isFunction(onChange) && onChange(value)
    }

    clearKeyword = () => {
        this.setKeyword('')
    }

    setKeyword = (value) => {
        this.setState({
            keyword: value
        }, () => {
            const { changeKeyword } = this.props
            changeKeyword && changeKeyword(value)
        })
        return value
    }

    getKeyword = () => {
        return this.state.keyword
    }

    render() {
        const { keyword } = this.state
        const { placeholder, onSearch } = this.props
        return (
            <View className='search-bar__input-wrap external-wrap-class at-row at-row__align--center'>
                <View className='at-col at-col-1'>
                    <Text className='search-bar__input-icon iconfont icon-search' />
                </View>
                <Input
                    className='search-bar__input at-col at-col-10'
                    placeholder={placeholder}
                    placeholder-class='search-bar__input_placeholder'
                    value={keyword}
                    onInput={this.handleChange}
                    onConfirm={() => onSearch(keyword)}
                />
                {
                 keyword && <View className='at-col at-col-1 iconfont icon-close' onClick={this.clearKeyword} />
                }
            </View>
        )
    }
}
