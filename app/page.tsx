import { ParallaxScrollDemo } from "@/components/core/Parallax";
import { SparklesPreview } from "@/components/core/Sparkle";
import { HeroScrollDemo } from "@/components/core/containerScrool";
import NewButton from "@/components/core/newButton";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { SparklesCore } from "@/components/ui/sparkle";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-screen ">
       <div className="absolute top-1/2 -translate-y-1/2 right-20 z-20">
    <NewButton/>
   </div>
      <div className="p-12 h-">
      <BackgroundGradientAnimation className="">
   <div className="text-white/70 z-[999] text-5xl font-extrabold absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2">
   <span className="text-xl font-bold text-white/80">Welcome to</span><br />
    Proto-Animation
   </div>
  
   <div className="absolute bottom-24 h-16 w-[50%] bg-white left-1/2 -translate-x-1/2 rounded-2xl z-10 overflow-hidden">
    <button className="tbutton h-full w-full overflow-hidden">click me</button>
   </div>
<SparklesPreview />      

   </BackgroundGradientAnimation>
      </div>
     
      <main className="h-screen w-full   ">
        <HeroScrollDemo />
      {/* <ParallaxScrollDemo /> */}
    <div className="text-2xl font-bold text-black py-12 w-fit mx-auto">The End</div>
    </main>

    </main>
  );
}
