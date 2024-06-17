import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
 
export function Hero() {
  return (
    <>
    <BackgroundGradientAnimation className="absolute top-0 right-0 left-0 z-10">
    <div className="bg-green h-96 w-96"></div>
    </BackgroundGradientAnimation>

    </>
  );
}