import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actionTypes";

export const sidebarOpen = () => (dispatch) => {
    try{
        dispatch({
            type: SIDEBAR_OPEN,
            payload: true
        })
    } catch (e) {
        console.log(e)
    }
}

export const sidebarClose = () => (dispatch) => {
    try{
        dispatch({
            type: SIDEBAR_CLOSE,
            payload: false
        })
    } catch (e) {
        console.log(e)
    }
}
