interface ISignup {
    name: string,
    email: string,
    age: number,
    password: string
}

interface ISignin {
    email: string,
    password: string
}

interface IAccessToken {
    refreshToken: string,
}

export { ISignup, ISignin, IAccessToken }