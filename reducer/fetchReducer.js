import {
    OPEN_INDICATOR,
    DISMISS_INDICATOR,
    SAVE_USERINFOR,
    CLEAR_USERINFO,
    USER_TOKEN,
    CLEAR_TOKEN,
    CHECK_TYPE,
    SAVE_QR_CONTNO,
    SAVE_QR_REFNO,
    SAVE_QR_MACHINE,
    SAVE_QR_FILTER,
    CLEAR_QR_CONTNO,
    CLEAR_QR_REFNO,
    CLEAR_QR_MACHINE,
    CLEAR_QR_FILTER
} from '../utils/contants'

const initialState = {
    indicator: false,
    userInfo: [],
    token: '',
    checkType: false,
    qrcontno: [],
    qrrefno: [],
    qrmachine: [],
    qrfilter: []
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
        case CHECK_TYPE:
            return {
                ...state,
                checkType: action.payload
            }
        case SAVE_QR_CONTNO:
            return {
                ...state,
                qrcontno: action.payload
            }
        case CLEAR_QR_CONTNO:
            return {
                ...state,
                qrcontno: []
            }
        case SAVE_QR_REFNO:
            return {
                ...state,
                qrrefno: action.payload
            }
        case CLEAR_QR_REFNO:
            return {
                ...state,
                qrrefno: []
            }
        case SAVE_QR_MACHINE:
            return {
                ...state,
                qrmachine: action.payload
            }
        case CLEAR_QR_MACHINE:
            return {
                ...state,
                qrmachine: []
            }
        case SAVE_QR_FILTER:
            return {
                ...state,
                qrfilter: action.payload
            }
        case CLEAR_QR_FILTER:
            return {
                ...state,
                qrfilter: []
            }
        default:
            return state
    }
}