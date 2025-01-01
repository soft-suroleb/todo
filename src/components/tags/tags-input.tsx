import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { TagsBadges, TagsView } from './tags-badges';
import { useForceUpdate } from '../../hooks/use-force-update';

import './tags-input.scss';
import { cn } from '../../utils';
const cls = cn('tags-input');

export type Tag = string;

export interface TagsInputProps {
    value: Tag[];
    onChange: (tags: Tag[]) => void;
};

export const TagsInput: React.FC<TagsInputProps> = (props) => {
    const forceUpdate = useForceUpdate();
    const { value, onChange } = props;
    const [tag, setTag] = useState('');
    const tagsInputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (tagsInputRef.current) {
                forceUpdate();
            } else {
                clearInterval(interval);
            }
        })

        return () => clearInterval(interval);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if ((e.key === ',' || e.key === ' ') && tag) {
            onChange(value.includes(tag) ? value : [...value, tag]);
            setTimeout(() => setTag(''), 0);
        } else if (e.key === 'Backspace' && !tag) {
            onChange(value.slice(0, -1));
        }
    }

    const onBlur = () => {
        if (tag) {
            onChange([...value, tag]);
            setTimeout(() => setTag(''), 0);
        }
    }

    const onDeleteTag = (item: Tag) => {
        onChange(value.filter(elem => elem !== item))
    }

    const createTags = () => {
        if (!tagsInputRef.current) {
            return null;
        }

        const tagsInput = tagsInputRef.current.querySelector('div.MuiInputBase-root');
        var tagsContainer = tagsInput.querySelector('#tags-container');

        if (!tagsContainer) {
            tagsContainer = document.createElement('div');
            tagsContainer.setAttribute('id', 'tags-container');
            tagsInput.insertBefore(tagsContainer, tagsInput.firstChild);
        }

        return createPortal(
            <TagsBadges
                className={cls('badges')}
                tags={value}
                view={TagsView.Secondary}
                onDeleteTag={onDeleteTag}
                withClose
            />,
            tagsContainer
        );
    }

    return (
        <>
            <TextField
                ref={tagsInputRef}
                className={cls('input', { filled: value.length > 0 })}
                label="Теги"
                variant="standard"
                multiline
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={onBlur}
            />
            {createTags()}
        </>
    )
}