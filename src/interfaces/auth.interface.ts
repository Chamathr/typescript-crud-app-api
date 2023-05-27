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

export { ISignup, ISignin }