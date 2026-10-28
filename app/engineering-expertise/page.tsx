import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import EngineeringExpertiseExperience from "@/components/engineering-expertise/EngineeringExpertiseExperience";

export const metadata: Metadata = {
  title: "Our Engineering Expertise | SupplyChainz",
  description:
    "Explore the seven engineering layers that bring connected devices, platforms, data, and digital experiences together.",
};

export default function EngineeringExpertisePage() {
  return (
    <>
      <Header />
      <EngineeringExpertiseExperience />
    </>
  );
}
