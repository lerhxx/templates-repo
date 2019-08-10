import Taro from '@tarojs/taro'
import { USERINFO } from '@constants/storage'
import {
    UPDATE
} from '@store/actionType/userInfo'

const INITIAL_STATE = {
    userInfo: Taro.getStorageSync(USERINFO)
}


export default function userInfo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                userInfo: {
                    ...action.info
                }
            }
        default:
            return state
    }
}
