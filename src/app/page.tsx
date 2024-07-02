"use client";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import MySkillSet from "@/components/ui/MySkillSet";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Banner/>
        {/* <Hero /> */}
        <Grid />
        {/* <SkillSet/> */}
        <MySkillSet/>
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach/>
        
     
      </div>
    </main>
  );
};

export default Home;
