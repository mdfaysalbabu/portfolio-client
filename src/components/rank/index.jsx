import { userData } from "@/data/user-data";
import Image from "next/image";
import SectionTitle from "../../halper/section-title";
import GlowCard from "../../halper/glow-card";

function Rank() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Streak & Rank" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <GlowCard identifier="streak">
          <Image
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${userData.githubUser}&theme=algolia&hide_border=true`}
            width={1080}
            height={520}
            alt="github streak"
            className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
          />
        </GlowCard>
        <GlowCard identifier="productive-time">
          <Image
            src={`https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${userData.githubUser}&theme=algolia&utcOffset=${userData.timezone}`}
            width={1080}
            height={560}
            alt="github productive-time"
            className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
          />
        </GlowCard>
      </div>
    </div>
  );
};

export default Rank;
