/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';

type ProfileProps = {
    className?: string;
    name: string;
    children: ReactNode;
    githubUrl: string;
    biliUrl?: string;
};

function TeamProfileCard({
                             className,
                             name,
                             children,
                             githubUrl,
                             biliUrl,
                         }: ProfileProps) {
    return (
        <div className={className}>
            <div className="card card--full-height">
                <div className="card__header">
                    <div className="avatar avatar--vertical">
                        <img
                            className="avatar__photo avatar__photo--xl"
                            src={`${githubUrl}.png`}
                            alt={`${name}'s avatar`}
                        />
                        <div className="avatar__intro">
                            <h3 className="avatar__name">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="card__body">{children}</div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        {githubUrl && (
                            <a className="button button--secondary" href={githubUrl}>
                                GitHub
                            </a>
                        )}
                        {biliUrl && (
                            <a className="button button--secondary" href={biliUrl}>
                                哔哩哔哩
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamProfileCardCol(props: ProfileProps) {
    return (
        <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
    );
}

export default function TeamRow(): JSX.Element {
    return (
        <div className="row">
            <TeamProfileCardCol
                name="好读游读"
                githubUrl="https://github.com/Haoduyoudu">
                DailyNotes Team/每日手帐最初开发者。被内部成员称为好好读书。
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="MengXi"
                githubUrl="https://github.com/MengXiCenter"
                biliUrl="https://space.bilibili.com/484426141">
                DailyNotes Team现主要运营者及维护，365天10甚至9个小时全年无休与小天才对线。
            </TeamProfileCardCol>
            <TeamProfileCardCol
                name="Jobs Au"
                githubUrl="https://github.com/pai233">
                每日手帐主要开发者之一，免费打工（
            </TeamProfileCardCol>
        </div>
    );
}
