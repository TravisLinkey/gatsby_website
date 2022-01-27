import React, { useState } from "react";
import { Heading, HeadingWrapper, FeaturesSegmentWrapper } from "./style";
import Alarm from "../../images/AlarmButton_Green.png";
import Leaf from "../../images/LeafButton_Green.png";
import NoAds from "../../images/NoAdButton_Green.png";
import AlarmWhite from "../../images/AlarmButton_White.png";
import LeafWhite from "../../images/LeafButton_White.png";
import NoAdsWhite from "../../images/NoAdButton_White.png";
import { SubHeading, Image } from "./style";

const alarmText =
  "Timers help you focus and stay in rythmn for your best performance";
const leafText = "Simplistic and functional layouts";
const noAdText = "Responsive and distractionless experience";

export const FeaturesSegment = ({ heading }) => {
  const [isActive, setIsActive] = useState("Alarm");
  const [labelText, setLabelText] = useState(alarmText);

  function handleButton(buttonName) {
    switch (buttonName) {
      case "Alarm":
        setLabelText(alarmText);
        return setIsActive(buttonName);
      case "Leaf":
        setLabelText(leafText);
        return setIsActive(buttonName);
      case "NoAd":
        setLabelText(noAdText);
        return setIsActive(buttonName);
    }
  }

  return (
    <FeaturesSegmentWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <div>
          <Image
            src={isActive === "Alarm" ? Alarm : AlarmWhite}
            alt=""
            onClick={() => handleButton("Alarm")}
          />
          <Image
            src={isActive === "Leaf" ? Leaf : LeafWhite}
            alt=""
            onClick={() => handleButton("Leaf")}
          />
          <Image
            src={isActive === "NoAd" ? NoAds : NoAdsWhite}
            alt=""
            onClick={() => handleButton("NoAd")}
          />
        </div>
        <SubHeading>
          <h2 style={{ color: "white" }}>{labelText}</h2>
        </SubHeading>
      </HeadingWrapper>
    </FeaturesSegmentWrapper>
  );
};
