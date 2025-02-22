"use strict";
class Petition {
    constructor(baseUrl) {
        this.baseUrl = "";
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        this.baseUrl = baseUrl;
    }
    request(url, method = "POST", data = null) {
        url = url.startsWith("http") ? url : `${this.baseUrl}${url}`;
        const options = { headers: this.headers, method };
        if (data)
            options.body = JSON.stringify(Object.assign({}, data));
        return window.fetch(url, options);
    }
    get(path) {
        const method = "GET";
        return this.request(path, method).then((res) => res.json());
    }
    post(path, data) {
        const method = "POST";
        return this.request(path, method, data).then((res) => res.json());
    }
    update(path, data) {
        const method = "PUT";
        return this.request(path, method, data).then((res) => res.json());
    }
    delete(path, id) {
        const method = "DELETE";
        if (id)
            path = `${path}/${id}`;
        return this.request(path, method).then((res) => res.json());
    }
}
