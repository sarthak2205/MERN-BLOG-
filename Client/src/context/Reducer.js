const Reducer = (state, action) => {
    switch(action.type) {
        case "LOGINSTART":
            return {
                user: null,
                FetchData: true,
                error: false
            }
        case "LOGINSUCC":
            return {
                user: action.payload,
                FetchData: false,
                error: false,
            }
        case "LOGINFAILED":
            return {
                user: null,
                FetchData: false,
                error: true
            }
        case "LOGOUT":
            return{
                user: null,
                FetchData: false,
                error: false,
            }
        
        default:
            return state
    }
}

export default Reducer