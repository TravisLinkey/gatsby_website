import React from "react";
import { Layout } from "components";
import { ContactWrapper, Heading, SubmitButton } from "../components/style";
import { graphql } from "gatsby";
import { BallotSegment } from "../components/BallotSegment";

export default function VotingPage(props) {
  return (
    <Layout>
      <ContactWrapper>
        <h1>{props.data.contentfulVotingPage.heading}</h1>
        {!!props.data.contentfulVotingPage &&
          props.data.contentfulVotingPage.ballots.map((ballot, i) => (
            <BallotSegment
              key={i}
              candidates={ballot.candidates}
            ></BallotSegment>
          ))}
        <div>
          <SubmitButton>Place Vote</SubmitButton>
        </div>
      </ContactWrapper>
    </Layout>
  );
}

export const query = graphql`
  query BallotQuery {
    contentfulVotingPage {
      id
      heading
      ballots {
        contentful_id
        candidates {
          contentful_id
          title
          description {
            raw
          }
        }
      }
    }
  }
`;
