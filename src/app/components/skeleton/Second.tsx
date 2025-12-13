import {
  IconCircleDashedCheck,
  IconCheck,
  IconRipple,
  IconLoader2,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import React from "react";

export const SecondSkeleton = () => {
  return (
    <div className=" perspective-distant transform-3d relative translate-x-14 translate-y-0 translate-z-1 mask-b-from-50% mask-r-from-50% mask-l-from-99%"
    style={{
      transform:"rotateX(20deg) rotateZ(-34deg) rotateY(22deg)"
    }}>
      <div className="relative min-h-72 w-80 bg-neutral-200/20 p-2 flex flex-col border-2 border-neutral-300 rounded-2xl">
        <div className="flex gap-2">
          <IconCircleDashedCheck />
          <p>Campagin Planner</p>
        </div>
        <div
          className=" relative group my-4 h-64
    bg-neutral-200
    bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
    bg-size-[10px_10px]
    bg-fixed perspective-distant transform-3d rounded-2xl
  "
        >
          <div className=" absolute inset-0 bg-white
      h-full w-full overflow-hidden
      -translate-y-5 translate-x-5
      transition-transform ease-in-out duration-300
      group-hover:translate-x-0
      group-hover:translate-y-0 p-2 rounded-2xl">
            <Tracker>
            <Bgborder>
            <TrackerItem>
                <div className="flex items-center gap-2 text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconCheck className="bg-green-500 rounded-xl  inset-0 size-4 " />
                  Fetching Data
                </div>
                <div className="flex items-center gap-2  text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconRipple className="size-4" />
                  10s
                </div>
              </TrackerItem>
                
            </Bgborder>
         <Bgborder>
              <TrackerItem>
                <div className="flex items-center gap-2 text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconCheck className="bg-green-500 rounded-xl  inset-0 size-4 " />
                  Processing Data
                </div>
                <div className="flex items-center gap-2  text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconRipple className="size-4" />
                  20s
                </div>
              </TrackerItem>
              </Bgborder>
              <Bgborder>
              <TrackerItem>
                <div className="flex items-center gap-2 text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconCheck className="bg-green-500 rounded-xl  inset-0 size-4 " />
                  Performing Action
                </div>
                <div className="flex items-center gap-2  text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconRipple className="size-4" />
                  30s
                </div>
              </TrackerItem>
              </Bgborder>
              <Bgborder>
              <TrackerItem>
                <div className="flex items-center gap-2 text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconCheck className="bg-green-500 rounded-xl  inset-0 size-4 " />
                  Waiting
                </div>
                <div className="flex items-center gap-2  text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                  <IconRipple className="size-4" />
                  40s
                </div>
              </TrackerItem>
              </Bgborder>
              <Bgborder>
                <TrackerItem>
                  <div className="flex items-center gap-2 text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                    <IconLoader2 className="bg-yellow-500 w-4 h-4 p-0.5 animate-spin rounded-xl  inset-0 size-4 " />
                    Generating Report
                  </div>
                  <div className="flex items-center gap-2  text-neutral-700 font-medium font-manrope tracking-tight text-sm">
                    <IconRipple className="size-4" />
                    50s
                  </div>
                </TrackerItem>
              </Bgborder>
            </Tracker>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Tracker = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col items-center gap-2 ">{children}</div>;
};

export const TrackerItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("flex items-center justify-between w-full p-2", className)}
    >
      {children}
    </div>
  );
};

export const Bgborder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      {children}

      <div className="pointer-events-none absolute left-2 right-2 bottom-0 h-px bg-linear-to-r from-transparent via-neutral-500/40 to-transparent px-2" />
    </div>
  );
};
