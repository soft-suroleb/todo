import React, { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Tag } from "../tags/tags-input";

import './tags-filter.scss';
import { cn } from "../../utils";
const cls = cn('tags-filter');

const MenuProps = {
    PaperProps: {
        style: {
            color: 'var(--primary-color)',
            background: 'var(--bg-color-secondary)',
        },
    },
};

export interface TagsFilterProps {
    filter: Tag[];
    tags: Tag[];
    onChange: (tags: Tag[]) => void;
}

export const TagsFilter: React.FC<TagsFilterProps> = (props) => {
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value;
        const formattedValue = (value === 'string' ? value.split(',') : value as string[]);
        props.onChange(formattedValue);
    };

    return (
        <FormControl
            className={cls()}
            sx={{ width: 200 }}
        >
            <Select
                multiple
                displayEmpty
                value={props.filter || []}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={selected => selected.length ? selected.join(', ') : <em>{'Выберите теги'}</em>}
                inputProps={{ color: "var(--primary-color)" }}
                MenuProps={MenuProps}
            >
                {props.tags.map(tag => (
                    <MenuItem key={tag} value={tag}>
                        {tag}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
