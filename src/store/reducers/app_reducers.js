const { CHANGE_ACTIVE_NAV, CHANGE_DICOM_URLS, CHANGE_USER_DETAILS } = require('../actions/types')

const initialState = {
    ACTIVE_NAV: '',
    DICOM_URLS: [],
    USER_DETAILS: {},
}

const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAV: {
            return {
                ...state,
                ACTIVE_NAV: action.payload,
            }
        }
        case CHANGE_DICOM_URLS: {
            return {
                ...state,
                DICOM_URLS: action.payload,
            }
        }
        case CHANGE_USER_DETAILS: {
            return {
                ...state,
                USER_DETAILS: action.payload,
            }
        }
        default: {
            return {...state};
        }
    }
}

export default appReducers;
