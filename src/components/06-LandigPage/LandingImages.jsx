import React from "react";

function LandingImages() {
  return (
    <div className="animationToptoBottom relative min-h-140 w-full gap-2 pt-15 transition-all duration-200 perspective-[6000px] transform-3d">
      <img
        src="https://i.pinimg.com/1200x/d0/dd/ae/d0ddaed5dabb6e9e514fc9c9e34ec3ec.jpg"
        alt="1"
        className="absolute inset-x-0 translate-x-10 rotate-x-40 rotate-y-20 -rotate-z-30 rounded-2xl mask-r-from-50% mask-b-from-50%"
      />
      <img
        src="https://i.pinimg.com/1200x/c5/f7/e5/c5f7e5370dbe66a2eeb6325b37e0536f.jpg"
        alt="2"
        className="absolute inset-x-0 translate-x-30 -translate-y-30 rotate-x-40 rotate-y-20 -rotate-z-30 rounded-2xl mask-r-from-50% mask-b-from-70%"
      />
    </div>
  );
}

export default LandingImages;
