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

/**
 * 
 * Indicator controll
 */
export function indicatorControll(event) {
    return (dispatch) => {
        if (event) {
            dispatch(openIndicator())
        } else {
            dispatch(dismissIndicator())
        }
    }
}

export const openIndicator = (data) => ({
    type: OPEN_INDICATOR
})

export const dismissIndicator = (data) => ({
    type: DISMISS_INDICATOR
})
/**
 * End
 */

/**
 * User info
 */
export function userInfoControll(event, data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(saveUserInfo(data))
        } else if (event == 'clear') {
            dispatch(clearUserInfo())
        }
    }
}

export const saveUserInfo = (data) => ({
    type: SAVE_USERINFOR,
    payload: data
})

export const clearUserInfo = (data) => ({
    type: CLEAR_USERINFO
})
/**
* End
*/

/**
 * Token
 */
export function tokenControll(event, data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(saveToken(data))
        } else if (event == 'clear') {
            dispatch(clearToken())
        }
    }
}

export const saveToken = (data) => ({
    type: USER_TOKEN,
    payload: data
})

export const clearToken = (data) => ({
    type: CLEAR_TOKEN
})

/**
 * End
 */

/**
 * Province
 */
export function provinceControll(data) {
    return (dispatch) => {
        dispatch(saveProvince(data))
    }
}

export const saveProvince = (data) => ({
    type: SAVE_PROVINCE,
    payload: data
})
/**
 * End
 */

 /**
 * Company
 */
export function companyControll(data) {
    return (dispatch) => {
        dispatch(saveCompany(data))
    }
}

export const saveCompany = (data) => ({
    type: SAVE_COMPANY,
    payload: data
})
/**
 * End
 */

/**
 * Title
 */
export function titleControll(data) {
    return (dispatch) => {
        dispatch(saveTitle(data))
    }
}

export const saveTitle = (data) => ({
    type: SAVE_TITLE,
    payload: data
})
/**
 * End
 */

/**
 * Position
 */
export function positionControll(data) {
    return (dispatch) => {
        dispatch(savePosition(data))
    }
}

export const savePosition = (data) => ({
    type: SAVE_POSITION,
    payload: data
})
/**
 * End
 */