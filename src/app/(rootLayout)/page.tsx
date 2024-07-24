import Banner from "@/components/Banner";
import Cta from "@/components/Cta";
import ExtraSect from "@/components/ExtraSect";
import Series from "@/components/Series";
import { TopRated } from "@/components/TopRated";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <>
      <Banner/>
      <Upcoming/>
      <ExtraSect/>
      <TopRated/>
      <Cta/>
    </>
  );
}
