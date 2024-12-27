import { Configuration } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { ConfigOptions } from "./types/types"

export const getPluginsConfig = ({ paths }: ConfigOptions): Configuration['plugins'] => {
    return [
        new HtmlWebpackPlugin({ template: paths.html })
    ]
}
