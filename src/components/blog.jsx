import React from 'react';

import { bcMaker } from './partials';

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