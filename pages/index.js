
import Head from "next/head";

import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import ClientLogo from "../components/ClientLogo"; 
import Categories from "../components/Categories";
import ChoosePlatform from "../components/ChoosePlatform";
import WorkPlanes from "../components/WorkPlanes";
import Services from "../components/Services";
import ServicesBest from "../components/ServicesBest";
import ServicesLatest from "../components/ServicesLatest";
import Solution from "../components/Solution";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const index = () => { 
  return (
    <>
      <Head>
        <title>BinTaak Home</title>
      </Head>

      <Navbar />

      <Banner />

      <ClientLogo/>

      <Categories/>

      <ChoosePlatform />

      <WorkPlanes/>

      <Services/>

      <ServicesBest/>
 
      <ServicesLatest/>

      <Solution/>

      <Team/>

      <Testimonials/>

    </>
  )
}

export default index