import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { ConfigOptions } from "./types/types";

export const getLoadersConfig = ({ mode }: ConfigOptions): ModuleOptions['rules'] => {
    const isDev = mode === 'development';

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        cssLoader,
        tsLoader,
    ];
}
