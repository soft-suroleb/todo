import { Configuration } from "webpack-dev-server"
import { ConfigOptions } from "./types/types"

export const getDevServerConfig = (options: ConfigOptions): Configuration => {
    return {
        port: options.port,
        open: true,
    }
}
