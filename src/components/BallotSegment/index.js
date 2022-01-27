import React from "react";
import { RichText } from "components";
import {
  Description,
  DescriptionGroup,
  DescriptionWrapper,
  LineItem,
  RadioGroup,
} from "./style";

export const BallotSegment = ({ candidates }) => {
  console.log(candidates);
  return (
    <div>
      <DescriptionWrapper>
        <DescriptionGroup>
          {candidates.map((candidate, i) => (
            <Description key={i}>
              <strong>{`Candidate #${i + 1}`}</strong>
              <RichText raw={candidate.description.raw} />
            </Description>
          ))}
        </DescriptionGroup>
      </DescriptionWrapper>

      <RadioGroup id="candidates">
        {candidates.map((candidate, i) => (
          <LineItem key={i}>
            <label>
              <input type="radio" name="candidates" key={i} />
              {" " + candidate.title}
            </label>
          </LineItem>
        ))}
      </RadioGroup>
    </div>
  );
};
