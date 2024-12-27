import webpack from 'webpack';
import path from 'path';
import { getLoadersConfig } from './loadersConfig';
import { getPluginsConfig } from './pluginsConfig';
import { ConfigOptions } from './types/types';
import { getDevServerConfig } from './devServerConfig';
import { getResolversConfig } from './resolversConfig';

export const getWebpackConfig = (options: ConfigOptions) => {
    const { mode, paths } = options;

    const config: webpack.Configuration = {
        mode: mode ?? 'development',
        entry: paths.entry,
        module: {
            rules: getLoadersConfig(options),
        },
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: getPluginsConfig(options),
        resolve: getResolversConfig(),
        devServer: getDevServerConfig(options),
    }

    return config;
}
