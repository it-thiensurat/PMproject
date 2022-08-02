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
 * Check Type
 */
export function CheckTypeControll(data) {
    return (dispatch) => {
        dispatch(changeTypeCheck(data))
    }
}

export const changeTypeCheck = (data) => ({
    type: CHECK_TYPE,
    payload: data
})

/**
 * End
 */

/**
  * QR Contno
  */
 export function saveQRContno(event,data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(setStateQRContno(data))
        } else if (event == 'clear') {
            dispatch(clearQRContno())
        }
    }
}

export const setStateQRContno = (data) => ({
    type: SAVE_QR_CONTNO,
    payload: data
})

export const clearQRContno = (data) => ({
    type: CLEAR_QR_CONTNO
})
/**
 * End
 */

/**
  * QR Refno
  */
 export function saveQRRefno(event,data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(setStateQRRefno(data))
        } else if (event == 'clear') {
            dispatch(clearQRRefno())
        }
    }
}

export const setStateQRRefno = (data) => ({
    type: SAVE_QR_REFNO,
    payload: data
})

export const clearQRRefno = (data) => ({
    type: CLEAR_QR_REFNO
})
/**
 * End
 */

/**
  * QR Machine
  */
 export function saveQRMachine(event,data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(setStateQRMachine(data))
        } else if (event == 'clear') {
            dispatch(clearQRMachine())
        }
    }
}

export const setStateQRMachine = (data) => ({
    type: SAVE_QR_MACHINE,
    payload: data
})

export const clearQRMachine = (data) => ({
    type: CLEAR_QR_MACHINE
})
/**
 * End
 */

/**
  * QR Filter
  */
 export function saveQRFilter(event,data) {
    return (dispatch) => {
        if (event == 'save') {
            dispatch(setStateQRFilter(data))
        } else if (event == 'clear') {
            dispatch(clearQRFilter())
        }
    }
}

export const setStateQRFilter = (data) => ({
    type: SAVE_QR_FILTER,
    payload: data
})

export const clearQRFilter = (data) => ({
    type: CLEAR_QR_FILTER
})
/**
 * End
 */