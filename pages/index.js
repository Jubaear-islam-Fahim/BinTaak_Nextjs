
import Head from "next/head";


import Banner from "../components/Page_Components/Home/Banner";
import ClientLogo from "../components/Page_Components/Home/ClientLogo";
import Categories from "../components/Page_Components/Home/Categories";
import ChoosePlatform from "../components/Page_Components/Home/ChoosePlatform";
import WorkPlanes from "../components/Page_Components/Home/WorkPlanes";
import Services from "../components/Page_Components/Home/Services";
import ServicesBest from "../components/Page_Components/Home/ServicesBest";
import ServicesLatest from "../components/Page_Components/Home/ServicesLatest";
import Solution from "../components/Page_Components/Home/Solution";
import Team from "../components/Page_Components/Home/Team";
import Testimonials from "../components/Page_Components/Home/Testimonials";
import Count from "../components/Page_Components/Home/Count";
import Guides from "../components/Page_Components/Home/Guides";
import Blog from "../components/Page_Components/Home/Blog";
import NavBar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>BinTaak Home</title>
      </Head>

      <NavBar />

      <Banner />

      <ClientLogo />

      <Categories />

      <ChoosePlatform />

      <WorkPlanes />

      <Services />

      <ServicesBest />

      <ServicesLatest />

      <Solution />

      <Team />

      <Testimonials />

      <Count />

      <Guides />

      <Blog />

      <Footer />

    </>
  )
}

export default index