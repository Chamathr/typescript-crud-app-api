interface IResponseBody {
    status: number,
    message: string,
    body: any
}

interface IErrorBody {
    status: number,
    message: string,
    body: any
}

export { IResponseBody, IErrorBody }
