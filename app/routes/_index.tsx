import type { MetaFunction } from "@remix-run/cloudflare";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedList } from "~/components/magicui/animated-list";
import BlurIn from "~/components/magicui/blur-in";
import { BorderBeam } from "~/components/magicui/border-beam";
import RetroGrid from "~/components/magicui/retro-grid";
import ShineBorder from "~/components/magicui/shine-border";
import WordPullUp from "~/components/magicui/word-pull-up";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "build ur wealth" },
    {
      name: "description",
      content: "build ur wealth with a game",
    },
  ];
};

export default function Index() {
  return (
    // <AnimatePresence>
    <div className="relative h-screen w-full rounded-lg p-5">
      <ShineBorder
        className="h-full w-full flex flex-col items-center justify-center overflow-hidden bg-background"
        borderWidth={2}
      >
        <WordPullUp
          className="text-7xl font-bold tracking-[-0.02em] mt-10 text-white"
          words="im building"
        />
        <BlurIn
          word="a game that to help you build wealth"
          className="mt-5 text-white"
        />
        <div className="fixed bottom-10 w-full flex flex-row justify-center items-center">
          <AnimatedList delay={2000} className="-ml-16">
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>

        <RetroGrid className="h-full w-full m-0" />
      </ShineBorder>
    </div>
  );
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "interest in alpha testing?",
    description: "click to join the discord server",
    time: "now",
    icon: "👾",
    color: "#000000",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4 z-[10000] active:scale-100",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu bg-white/30 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
      onClick={() => {
        const link = "https://discord.gg/7n7ygeBDPZ";
        window.open(link, "_blank");
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-4xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
