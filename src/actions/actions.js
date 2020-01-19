export function changeLoginState(loginState){
    return{
        type:"CHANGE_LOG_IN",
        payload: loginState
    }
}
export function toggleSideBar(expanded){
   
    return {
        type:"TOGGLE_SIDE_NAV",
        payload: expanded
    }
}
export function toggleNavButton(navButtonId){
    return {
        type:"TOGGLE_NAV_BUTTON",
        payload: navButtonId
    }
}
export function changeQRresult(result){
    return{
        type: "CHANGE_QR_TEXT",
        payload: result
    }
}
export function inputID(result){
    return{
        type: "ID_INPUT_CHANGE",
        payload: result
    }
}
export function inputPassword(result){
    return{
        type: "PASSWORD_INPUT_CHANGE",
        payload: result
    }
}
export function setEmployeeDetails(object){
    return{
        type: "SET_EMP_DETAILS",
        payload: object
    }
}