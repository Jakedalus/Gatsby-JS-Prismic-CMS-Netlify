import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
query PageQuery($id: String){
  prismic {
    allPages(id: $id) {
      edges {
        node {
          page_title
          _meta {
            uid
            id
          }
        }
      }
    }
  }
}`;

const Page = props => {
  console.log('Page, props:', props);
  return (
    <div>
      <h1>
        Page
      </h1>
    </div>
  )
}

export default Page;