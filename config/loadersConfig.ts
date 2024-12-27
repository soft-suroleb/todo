import { ModuleOptions } from "webpack"

export const getLoadersConfig = (): ModuleOptions['rules'] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        tsLoader,
    ];
}
