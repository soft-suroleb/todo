import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ConfigOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getPluginsConfig = ({ mode, paths }: ConfigOptions): Configuration['plugins'] => {
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
    ];

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    return plugins;
}
