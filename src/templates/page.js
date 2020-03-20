import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

export const query = graphql`
query PageQuery($id: String){
  prismic {
    allPages(id: $id) {
      edges {
        node {
          page_title
          content
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
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
  const content = props.data.prismic.allPages.edges[0].node.content;
  return (
    <>
      <RichText render={pageTitle} />
      <RichText render={content} />
    </>
  )
}

export default Page;