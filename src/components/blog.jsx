import React from 'react';

import { bcMaker } from './partials';

const blogMigrationDate = Date.parse("2019-06-01");
export const blogSlugPrefix = /^\/blog\/post\//;

export const blogPostBcMaker = ({ fields: { slug } }) => bcMaker(slug.replace(blogSlugPrefix, "/blog/"));

export const getBlogImage = ({ frontmatter: { image, previewImage } }, preview = false) => (
    typeof image !== 'undefined'
    && image !== null
    && image !== ''
)
    ? require(`${__dirname}/../images/${image}`)
    : null;

export const isMainpagePost = ({ frontmatter: { mainpage } }) => (
    typeof mainpage !== 'undefined'
    && mainpage !== null
    && mainpage !== ''
)
    ? mainpage
    : true;

export const generateMigrationFrontmatter = ({ frontmatter: { date } }) => (
    Date.parse(date) < blogMigrationDate
)
    ? (
        <p>
            <em>
                {'This post has been migrated from the '}
                <a href="https://github.com/jwfh/homepage#about">old JWFH WordPress blog</a>.
            </em>
        </p>
    )
    : null;
