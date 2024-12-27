
export interface ConfigPaths {
    entry: string;
    output: string;
    html: string;
}

export type ConfigMode = 'development' | 'production';

export interface ConfigOptions {
    port: number;
    paths: ConfigPaths;
    mode: ConfigMode;
}
