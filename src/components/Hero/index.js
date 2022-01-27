import React from "react";
import {
  HeroWrapper,
  HeadingWrapper,
  Heading,
  SubHeading,
  Info,
} from "./style";
import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";

export const Hero = ({ heading, subHeading, backgroundImage }) => {
  const pluginImage = getImage(backgroundImage);
  return (
    <HeroWrapper>
      <BgImage image={pluginImage}>
        <HeadingWrapper>
          <div>
            <Heading>{heading}</Heading>
            <SubHeading>{subHeading}</SubHeading>
            <Info>A fitness app that pays you to workout.</Info>
            <Info>
              Staying healthy, like investing, is all about being consistent.
            </Info>
            <Info>
              <strong style={{ color: "#46d4aa" }}>LIFTS</strong> are
              distributed in exchange for a dailty workout.
            </Info>
            <Info>These are ERC-20 compliant tokens.</Info>
            <Info>Get fit. Participate in web 3.0.</Info>
          </div>
        </HeadingWrapper>
      </BgImage>
    </HeroWrapper>
  );
};
