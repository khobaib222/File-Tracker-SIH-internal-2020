const initialState = {
    loginState: false,
    expanded: false,
    dashboardActiveButton: 1,
    QRresult: null,
    email: null,
    password: null,
    emp_name: null,
    emp_ID: null,
    emp_phone: null,
    emp_dept_id: null
}
const reducer = (state = initialState,action) => {
    switch(action.type){
        case "CHANGE_LOG_IN":
            if(action.payload===false){
                state = initialState;
            }
            else{ 
                state = {
                    ...state,
                    loginState: action.payload
                };
            }
            break;
        case "TOGGLE_SIDE_NAV":
            state = {
                ...state,
                expanded: action.payload
            }
            console.log(action.payload);
            break;
        case "TOGGLE_NAV_BUTTON":
            state = {
                ...state,
                dashboardActiveButton: action.payload,
                QRresult: null
            }
        break;
        case "CHANGE_QR_TEXT":
            state = {
                ...state,
                QRresult: action.payload
            }
        break;
        case "ID_INPUT_CHANGE":
            state = {
                ...state,
                emp_ID: action.payload
            }
        break;
        case "PASSWORD_INPUT_CHANGE":
            state = {
                ...state,
                password: action.payload
            }
            console.log(action.payload);
        break;
        case "SET_EMP_DETAILS":
            state = {
                ...state,
                emp_name: action.payload.name,
                emp_dept_id: action.payload.deptid,
                email: action.payload.email
            }
    }
    return state;
};
export default reducer;