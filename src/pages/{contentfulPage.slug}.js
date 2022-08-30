import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      slug
      title
      description {
        description
      }
    }
  }
`;

export default Page;
