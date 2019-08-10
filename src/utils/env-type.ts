import Taro from '@tarojs/taro'

const CURRENT_ENV = Taro.getEnv()

export const IS_WEIXIN = CURRENT_ENV === Taro.ENV_TYPE.WEAPP