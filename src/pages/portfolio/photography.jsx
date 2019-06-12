import React from 'react';
import {Link} from 'gatsby';

import {PhotoLayout} from '../../components/layout';
import {NarrowContainer, bcMaker} from '../../components/partials';
import SEO from '../../components/seo';
import Sheena from '../../images/Composition-Web.jpg';

const SecondPage = () => (
  <PhotoLayout
    title="Photography"
    photo={Sheena}
    breadcrumbs={bcMaker('projects/photography')}
  >
    <NarrowContainer>
      <h1>Second page</h1>
    </NarrowContainer>
  </PhotoLayout>
);

export default SecondPage;
