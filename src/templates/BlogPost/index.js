import React from "react";
import { graphql } from "gatsby";
import { Layout, RichText } from "components";

const BlogPost = (props) => {
  console.log(props);
  return (
    <Layout>
      <RichText raw={props.data.contentfulBlogPost.pageContent.raw} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: { eq: $postId }) {
      publishedDate(formatString: "DD MM YYYY")
      pageContent {
        raw
      }
      description
      title
      contentful_id
      slug
    }
  }
`;

export default BlogPost;
