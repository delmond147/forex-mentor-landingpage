import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LiveDataBar } from "@/components/LiveDataBar";
import { ToolsPreview } from "@/components/ToolsPreview";
import { ServiceTiers } from "@/components/ServiceTiers";
import { SocialConnect } from "@/components/SocialConnect";
import { ContactStrategy } from "@/components/ContactStrategy";
import { TrustFooter } from "@/components/TrustFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-brandDark font-sans selection:bg-brandEmerald/30 selection:text-white">
      <Navigation />

      {/* Sections Wrapper */}
      <div className="flex flex-col w-full">
        <Hero />
        <LiveDataBar />
        <ToolsPreview />
        <ServiceTiers />
        <SocialConnect />
        <ContactStrategy />
        <TrustFooter />
      </div>
    </main>
  );
}
