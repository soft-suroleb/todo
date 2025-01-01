import React from "react";

import './tags-badges.scss';
import { cn } from "../../utils";
const cls = cn('tags-badges');

export enum TagsView {
    Primary = 'primary',
    Secondary = 'secondary',
};

export interface TagsBadgesProps {
    className?: string;
    tags: string[];
    view: TagsView;
    onDeleteTag?: (tag: string) => void;
    withClose?: boolean;
};

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
                    className={cls('item', { view: props.view })}
                    key={idx}
                >
                    <span className={cls('tag')}>{tag}</span>
                    {props.withClose && (
                        <span
                            className={cls('delete')}
                            onClick={() => props.onDeleteTag(tag)}
                        >
                            &times;
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}
