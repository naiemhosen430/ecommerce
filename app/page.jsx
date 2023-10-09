import Hero from "./components/Home/Hero";
import NewInStore from "./components/Home/NewInStore";
import Banner from "./components/ReUseableComponents/Banner";
import CetagorySection from "./components/Home/CetagorySection";
import TrandingProduct from "./components/Home/TrandingProduct";
import OfferBanner from "./components/Home/OfferBanner";
import ShopByCetagory from "./components/Home/ShopByCetagory";
import ProductBanner from "./components/Home/ProductBanner";
import ThreeBoxSection from "./components/Home/ThreeBoxSection";
import NewsAndEvent from "./components/Home/NewsAndEvent";
import BrandSection from "./components/Home/BrandSection";
import InstaFeedSection from "./components/ReUseableComponents/InstaFeedSection";

export default function Home() {
  return (
    <>
      {/* herro start */}
      <Hero />
      {/* herro end */}
      {/* populer course start */}
      <NewInStore />
      {/* populer course end */}
      {/* all course start */}
      <NewInStore />
      {/* all course end */}
      <Banner />
      <CetagorySection />
      <TrandingProduct />
      <OfferBanner />
      <ShopByCetagory />
      <ProductBanner />
      <ThreeBoxSection />
      <NewsAndEvent />
      <BrandSection />
      <InstaFeedSection />
    </>
  );
}
