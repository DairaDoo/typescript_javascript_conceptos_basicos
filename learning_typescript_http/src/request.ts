type Header = {
    Accept: string
    "Content-Type": string
}

type Options = {
    headers: Header
    method: string
    body?: string
}

interface IPetition {
    baseUrl: string
    headers: Header
    request<T>(url: string, method?: string, data?: T | null): Promise<Response>
    get<T>(path: string, id: string): Promise<T>
    post<T>(path: string, data: T): Promise<T>
    update<T>(path: string, id: string, data: T): Promise<T>
    delete<T>(path: string, id: string): Promise<T>
}

class Petition implements IPetition {
    baseUrl: string = ""
    headers: Header = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public request<T>(url: string, method: string = "POST", data: T | null = null): Promise<Response> {
        // base: http://localhost:4000/
        // path: /users
        // http://localhost:4000/users
        url = `${this.baseUrl}${url}`
        const options: Options = {headers: this.headers, method}
        if (data) options.body = JSON.stringify({...data})
        return window.fetch(url, options)
    }

    get<T>(path: string, id: string): Promise<T> {
        throw new Error("Method not implemented.")
    }
    post<T>(path: string, data: T): Promise<T> {
        throw new Error("Method not implemented.")
    }
    update<T>(path: string, id: string, data: T): Promise<T> {
        throw new Error("Method not implemented.")
    }
    delete<T>(path: string, id: string): Promise<T> {
        throw new Error("Method not implemented.")
    }
}

