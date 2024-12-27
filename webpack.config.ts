import webpack from 'webpack';
import path from 'path';
import { getWebpackConfig } from './config/webpackConfig';
import { ConfigOptions } from './config/types/types';

export interface EnvVariables {
    mode: ConfigOptions['mode'];
    port: ConfigOptions['port'];
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = getWebpackConfig({
        port: env.port ?? 3000,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        mode: env.mode ?? 'development',
    })

    return config;
}
