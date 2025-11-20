import Footer from "~/components/footer";
import Header from "../components/navbar";
import NewsCard from "../components/news/newcard";
export default function Home() {
  return (
    <div>
      <Header />
      <NewsCard />
      <Footer />
    </div>
  );
}
