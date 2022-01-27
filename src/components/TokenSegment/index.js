import React from "react";
import {
  Heading,
  HeadingWrapper,
  TokenSegmentWrapper,
  SubHeading,
  ImageSegment,
  Image,
} from "./style";

import TokenIcon from "../../images/TokenIcon.png";

export const TokenSegment = ({ heading, subHeading }) => {
  return (
    <TokenSegmentWrapper>
      <HeadingWrapper>
        <Heading>
          <strong style={{ color: "#46d4aa" }}>LIFTS </strong>
          {heading}
        </Heading>
        <ImageSegment>
          <Image src={TokenIcon} alt="" />
        </ImageSegment>
        <SubHeading>
          <span>{subHeading}</span>
        </SubHeading>
      </HeadingWrapper>
    </TokenSegmentWrapper>
  );
};
