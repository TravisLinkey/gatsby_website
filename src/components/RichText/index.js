import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  Hero,
  FutureSegment,
  TokenSegment,
  FeaturesSegment,
  WhatisSegment,
} from "components";

export const RichText = ({ raw, references = [] }) => {
  const referencesMap = {};

  references.forEach((reference) => {
    console.log(reference);
    referencesMap[reference.contentful_id] = reference;
  });

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const data = referencesMap[node.data.target.sys.id];
        switch (data.__typename) {
          case "ContentfulHero":
            return (
              <Hero
                heading={data.heading}
                subHeading={data.subHeading}
                backgroundImage={data.backgroundImage.gatsbyImageData}
              />
            );
          case "ContentfulFutureSegment":
            return (
              <FutureSegment
                heading={data.heading}
                subHeading={data.subHeading}
              />
            );
          case "ContentfulTokenSegment":
            return (
              <TokenSegment
                heading={data.heading}
                subHeading={data.subHeading}
              />
            );
          case "ContentfulFeaturesSegment":
            return <FeaturesSegment heading={data.heading} />;
          case "ContentfulWhatIsSegment":
            return <WhatisSegment heading={data.heading} />;
          default:
            return null;
        }
      },
    },
  };
  return <div>{documentToReactComponents(JSON.parse(raw), options)}</div>;
};
