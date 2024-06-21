import CallToAction from "@/sections/call-to-action";
import Hero from "@/sections/hero";
import MadeForYou from "@/sections/made-for-you";
import StaffPicks from "@/sections/staff-picks";
import UpTo5 from "@/sections/up-to-5";

export default function Home() {
  return (
    <main>
      {/* Hidden title */}
      <h1 style={{ display: "none" }}>Gumroad Discover Page</h1>

      {/* Sections */}
      <Hero />
      <MadeForYou />
      <StaffPicks />
      <UpTo5 />
      <CallToAction />
    </main>
  );
}
