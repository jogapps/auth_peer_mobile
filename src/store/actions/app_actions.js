import { CHANGE_ACTIVE_NAV, CHANGE_DICOM_URLS, CHANGE_USER_DETAILS } from './types';

export const changeActiveNav = item => dispatch => {
    dispatch({
        type: CHANGE_ACTIVE_NAV,
        payload: item,
    });
};

export const changeDicomUrls = item => dispatch => {
    dispatch({
        type: CHANGE_DICOM_URLS,
        payload: item,
    });
};

export const changeUserDetails = item => dispatch => {
    dispatch({
        type: CHANGE_USER_DETAILS,
        payload: item,
    });
};
