import React from "react";

function Layout() {
  return (
    <div className="h-120 w-full bg-neutral-800">
      <div className="perspective h-full w-full overflow-hidden perspective-distant transform-3d">
        <div className="relative -top-105 -right-5 grid rotate-x-35 rotate-y-0 -rotate-z-30  grid-cols-3 gap-8">
          <div className="slide-top-to-bottom grid scale-100 gap-4">
            <div className="h-full w-full">
              <img
                src="https://tailwindcss.com/plus-assets/img/heroes/templates-col-1-row-1.png"
                alt=""
                className="object-cover transform-3d"
              />
            </div>
            <div className="h-full w-full">
              <img
                src="https://tailwindcss.com/plus-assets/img/heroes/templates-col-1-row-2.png"
                alt=""
                className="aspect-856/772 object-cover transform-3d"
              />
            </div>
          </div>

          <div className="slide-top-to-bottom grid gap-4">
            <div>
              <img
                src="https://tailwindcss.com/plus-assets/img/heroes/templates-col-2-row-1.png"
                alt=""
                className="aspect-896/772 object-cover transform-3d"
              />
            </div>
            <div>
              <img
                src="https://tailwindcss.com/plus-assets/img/heroes/templates-col-2-row-2.png"
                alt=""
                className="aspect-2180 scale-100 object-cover"
              />
            </div>
          </div>

          <div className="slide-top-to-bottom grid gap-4">
            <div>
              <img
                src="https://tailwindcss.com/plus-assets/img/heroes/templates-col-3-row-1.png"
                alt=""
                className="aspect-896/2952 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
