import { Tag } from "../components/tags/tags-input";
import { useParam } from "./use-param";

export interface Filter {
    tags: Tag[];
    search: string;
}

export const useFilter = () => {
    const [tags, setTags] = useParam<Tag[]>('tags', []);
    const [search, setSearch] = useParam<string>('search', '');

    const onChange = (newFilter: Filter) => {
        setTags(newFilter.tags);
        setSearch(newFilter.search);
    }

    return {
        filter: { tags, search },
        onChange
    };
};
