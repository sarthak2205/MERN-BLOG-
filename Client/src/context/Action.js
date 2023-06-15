export const LoginStart = (userCredn) => ({
    type: "LOGINSTART",
})

export const LoginSucc = (user) => ({
    type: "LOGINSUCC",
    payload: user
})
export const LoginFailed = () => ({
    type: "LOGINFAILED",
})
export const Logout = () => ({
    type: "LOGOUT",
})
