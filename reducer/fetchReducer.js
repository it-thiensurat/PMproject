import {
    OPEN_INDICATOR,
    DISMISS_INDICATOR,
    SAVE_USERINFOR,
    CLEAR_USERINFO,
    USER_TOKEN,
    CLEAR_TOKEN,
    SAVE_PROVINCE,
    SAVE_COMPANY,
    SAVE_TITLE,
    SAVE_POSITION
} from '../utils/contants'

const initialState = {
    indicator: false,
    userInfo: [],
    token: '',
    province: [],
    company: [],
    title: [],
    position: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INDICATOR:
            return {
                ...state,
                indicator: true
            }
        case DISMISS_INDICATOR:
            return {
                ...state,
                indicator: false
            }
        case SAVE_USERINFOR:
            return {
                ...state,
                userInfo: action.payload
            }
        case CLEAR_USERINFO:
            return {
                ...state,
                userInfo: []
            }
        case USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case CLEAR_TOKEN:
            return {
                ...state,
                token: ''
            }
        case SAVE_PROVINCE:
            return {
                ...state,
                province: action.payload
            }
        case SAVE_COMPANY:
            return {
                ...state,
                company: action.payload
            }
        case SAVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SAVE_POSITION:
            return {
                ...state,
                position: action.payload
            }
        default:
            return state
    }
}