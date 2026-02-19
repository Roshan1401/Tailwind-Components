import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Button from "./Button";
import LandingImages from "./LandingImages";

function Hero() {
  return (
    <div className="px-6">
      <Container>
        <div className="mt-10 py-5 md:mt-10 lg:mt-15">
          <Heading tag="h1">
            Aether agents that do the work <br />
            Approvals keep you in control
          </Heading>
        </div>
        <SubHeading>
          Plug in your stack, automate the routine, and get a clean summary
          before you approve the next move.
        </SubHeading>
        <div className="mt-8 flex items-center gap-4">
          <Button className="shadow-brand-hover cursor-pointer bg-neutral-800 px-6 py-3 font-medium text-neutral-50 transition-colors duration-200">
            Start your free trial
          </Button>
          <Button className="cursor-pointer px-6 py-3 font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100">
            View role based demo
          </Button>
        </div>
        <LandingImages />
      </Container>
    </div>
  );
}

export default Hero;
