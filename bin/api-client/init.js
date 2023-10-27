import axios from "axios";
import { API_URL } from "../env.js";
export async function apiClient(method, path, access_token, params, opts) {
    const hasBody = !["get", "delete"].includes(method);
    if (path.includes(":")) {
        const pathSplit = path.split("/");
        for (let i = 0; i < pathSplit.length; i++) {
            const part = pathSplit[i];
            if (part && part.startsWith(":")) {
                const key = part.replace(":", "");
                if (!params || !(key in params)) {
                    throw new Error(`Missing param ${key} in ${method} ${path}`);
                }
                pathSplit[i] = params[key];
                delete params[key];
            }
        }
        path = pathSplit.join("/");
    }
    const res = await axios.request({
        method: method,
        url: path,
        baseURL: `${API_URL}`,
        data: hasBody ? params : undefined,
        params: hasBody ? undefined : params,
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        ...opts,
    });
    const data = res.data.data;
    data.status = res.status;
    return data;
}
//# sourceMappingURL=init.js.map