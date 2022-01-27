import React from "react";
import {
  Heading,
  HeadingWrapper,
  FutureSegmentWrapper,
  SubHeading,
  ImageSegment,
} from "./style";

import InternalTesting from "../../images/InternalTesting.png";
import PurchaseApparel from "../../images/PurchaseApparel.png";
import QRImage from "../../images/QRImage.png";

export const FutureSegment = ({ heading, subHeading }) => {
  return (
    <FutureSegmentWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
        <SubHeading>
          This platform will support{" "}
          <strong style={{ color: "#46d4aa" }}>LIFTS</strong> transfers between
          users
        </SubHeading>
        <ImageSegment>
          <img src={PurchaseApparel} alt="" />
          <img src={InternalTesting} alt="" />
          <img src={QRImage} alt="" />
        </ImageSegment>
      </HeadingWrapper>
    </FutureSegmentWrapper>
  );
};
