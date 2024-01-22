export enum StatusCode {
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
}

export class ApiError extends Error {
    #code: StatusCode;

    constructor(url: string, code: StatusCode) {
        super(`Error fetching ${url}: ${code}`);
        this.#code = code;
    }

    get code(): StatusCode {
        return this.#code;
    }
}
