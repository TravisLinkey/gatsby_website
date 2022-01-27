import React, { useState } from "react";
import {
  Heading,
  HeadingWrapper,
  WhatisSegmentWrapper,
  Image,
  SubHeading,
} from "./style";
import Runner from "../../images/RunnerButton_Green.png";
import Share from "../../images/ShareButton_Green.png";
import Calendar from "../../images/CalendarButton_Green.png";
import RunnerWhite from "../../images/RunnerButton_White.png";
import ShareWhite from "../../images/ShareButton_White.png";
import CalendarWhite from "../../images/CalendarButton_White.png";

const runnerText =
  "Custom workouts from user-defined  exercises that can be cardio, weights, or bodyweight";
const shareText = "Workouts created by others from the LiftsKits Marketplace";
const calendarText = "Personal workout history via the in-app Calendar";

export const WhatisSegment = ({ heading }) => {
  const [isActive, setIsActive] = useState("Runner");
  const [labelText, setLabelText] = useState(runnerText);

  function handleButton(buttonName) {
    switch (buttonName) {
      case "Runner":
        setLabelText(runnerText);
        return setIsActive(buttonName);
      case "Share":
        setLabelText(shareText);
        return setIsActive(buttonName);
      case "Calendar":
        setLabelText(calendarText);
        return setIsActive(buttonName);
    }
  }

  return (
    <WhatisSegmentWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        <div>
          <Image
            src={isActive === "Runner" ? Runner : RunnerWhite}
            alt=""
            onClick={() => handleButton("Runner")}
          />
          <Image
            src={isActive === "Share" ? Share : ShareWhite}
            alt=""
            onClick={() => handleButton("Share")}
          />
          <Image
            src={isActive === "Calendar" ? Calendar : CalendarWhite}
            alt=""
            onClick={() => handleButton("Calendar")}
          />
        </div>
        <SubHeading>
          <h2 style={{ color: "white" }}>{labelText}</h2>
        </SubHeading>
      </HeadingWrapper>
    </WhatisSegmentWrapper>
  );
};
