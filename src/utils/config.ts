import * as env from "env-var";

export function getConfig(param: string): string {
    
    // eslint-disable-next-line no-underscore-dangle
    
    /*eslint-disable */
    if (!("_env_" in window)) {
        throw new Error("Missing configuration");
    }
    // eslint-disable-next-line: no-any
    if (!(window as any)._env_[param]) {
        // throw new Error("Missing required environment variable: " + param);
        return env.get(param).required().asString();
    }
    // eslint-disable-next-line: no-any
    return (window as any)._env_[param];
}

