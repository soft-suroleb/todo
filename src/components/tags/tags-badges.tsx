import React from "react";

import './tags-badges.scss';
import { cn } from "../../utils";
const cls = cn('tags-badges');

export interface TagsBadgesProps {
    className?: string;
    tags: string[];
    onDeleteTag: (tag: string) => void;
}

export const TagsBadges: React.FC<TagsBadgesProps> = (props) => {
    return (
        <div
            className={cls('', props.className)}
            style={
                { paddingRight: props.tags.length ? '10px' : undefined }
            }
        >
            {props.tags.map((tag, idx) => (
                <div
                    className={cls('item')}
                    key={idx}
                >
                    <span className={cls('tag')}>{tag}</span>
                    <span
                        className={cls('delete')}
                        onClick={() => props.onDeleteTag(tag)}
                    >
                        &times;
                    </span>
                </div>
            ))}
        </div>
    )
}
