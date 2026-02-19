import React from "react";

function CashFlow() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-neutral-900">
      <div className="relative h-102 w-170 overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.04)] px-6 pt-6">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_45%_25%,rgba(255,255,255,0.15)_10%,rgba(255,255,255,0.04)_50%,rgba(0,0,0,0)_70%)]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-neutral-500">Cash Flow</span>
            <h1 className="text-4xl font-bold text-neutral-300">$540,323.45</h1>
          </div>

          <div className="absolute top-15 right-5 flex gap-2">
            <button className="rounded-4xl bg-white px-3 py-1 font-semibold text-black">
              Monthly
            </button>
            <button className="rounded-4xl bg-orange-500 px-3 py-1 font-semibold text-white">
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-5 flex h-64 w-full items-end gap-5">
          <div className="flex h-full w-10 flex-col items-center justify-between pt-1 pb-6 text-sm text-neutral-400">
            <span>50K</span>
            <span>40K</span>
            <span>30K</span>
            <span>20K</span>
            <span>10K</span>
            <span>0K</span>
          </div>

          <div className="relative h-full flex-1 pb-6">
            <div className="relative h-full">
              <div className="absolute bottom-0 h-33 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute bottom-0 left-21 h-29 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute bottom-0 left-42 h-50 w-19 rounded-xl bg-[linear-gradient(to_bottom,#ff3b00_0%,#ff7a4d_50%,#fff_100%)] py-5">
                <div className="absolute left-9 z-0 flex h-30 w-[1.8px] items-center justify-center bg-neutral-100 mask-b-from-0%"></div>
                <div className="relative -top-8 left-6 h-6 w-6 rounded-full border-3 border-white bg-[#ff3e00]">
                  <div className="top absolute inset-0 bg-[radial-gradient(35%_35%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_100%)]"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-63 h-29 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute bottom-0 left-84 h-43 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute bottom-0 left-105 h-22 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute bottom-0 left-126 h-33 w-19 rounded-xl bg-[linear-gradient(to_bottom,#4a4a4a_70%)] mask-b-from-0%"></div>
              <div className="absolute right-0 -bottom-6 left-0 pb-1 text-center text-sm text-neutral-400">
                <span className="absolute left-0 w-19">Jan</span>
                <span className="absolute left-21 w-19">Feb</span>
                <span className="absolute left-42 w-19">Mar</span>
                <span className="absolute left-63 w-19">Apr</span>
                <span className="absolute left-84 w-19">May</span>
                <span className="absolute left-105 w-19">Jun</span>
                <span className="absolute left-126 w-19">Jul</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlow;
