import { Configuration } from "webpack";

export const getResolversConfig = (): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
