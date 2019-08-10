import Taro, { PureComponent } from '@tarojs/taro'
import { Input } from '@tarojs/components'

export default class NumberInput extends PureComponent<any, any> {
    static externalClasses = [
        'external-class'
    ]

    handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '')
        this.props.onInput(value)
        return value
    }
    
    render() {
        const {
            value,
            password,
            placeholder,
            placeholderStyle,
            placeholderClass,
            disabled,
            maxLength,
            cursorSpacing,
            autoFocus,
            focus,
            confirmType,
            cursor,
            selectionStart,
            selectionEnd,
            adjustPosition,
            onFocus,
            onBlur,
            onConfirm,
            className,
            customStyle
        } = this.props
        return (
            <Input
                value={value}
                type='number'
                password={password}
                placeholder={placeholder}
                placeholderStyle={placeholderStyle}
                placeholderClass={placeholderClass}
                disabled={disabled}
                maxLength={maxLength}
                cursorSpacing={cursorSpacing}
                autoFocus={autoFocus}
                focus={focus}
                confirmType={confirmType}
                cursor={cursor}
                selectionStart={selectionStart}
                selectionEnd={selectionEnd}
                adjustPosition={adjustPosition}
                onInput={this.handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onConfirm={onConfirm}
                className={className}
                style={customStyle}
            />
        )
    }
}
