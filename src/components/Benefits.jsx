import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div>
            {benefits.map((item)=>(
                <div className=""></div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
