import React from "react";
import { Layout, RichText, SEO } from "components";
import { graphql } from "gatsby";

export default function ContentfulPage(props) {
  return (
    <Layout>
      <SEO
        title={props.data.contentfulPage.title}
        description={props.data.contentfulPage.description}
      />
      {!!props.data.contentfulPage.pageContent && (
        <RichText
          raw={props.data.contentfulPage.pageContent.raw}
          references={props.data.contentfulPage.pageContent.references}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      pageContent {
        raw
        references {
          ... on ContentfulHero {
            __typename
            contentful_id
            heading
            subHeading
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }

          ... on ContentfulFutureSegment {
            __typename
            contentful_id
            heading
            subHeading
          }

          ... on ContentfulTokenSegment {
            __typename
            contentful_id
            heading
            subHeading
          }

          ... on ContentfulFeaturesSegment {
            __typename
            contentful_id
            heading
          }

          ... on ContentfulWhatIsSegment {
            __typename
            contentful_id
            heading
          }
        }
      }
    }
  }
`;
