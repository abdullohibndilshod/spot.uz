import Footer from "~/components/footer";
import Header from "../components/navbar";
import CategoryBar from "~/components/home/topnewsgrid";
import FeaturedSection from "~/components/home/featuredsection";
import HeroAndSidebar from "../components/home/heroandsidebar";
export default function Home() {
  return (
    <div>
      <Header />
      <CategoryBar />
      <FeaturedSection />
      <HeroAndSidebar />
      <Footer />
    </div>
  );
}
