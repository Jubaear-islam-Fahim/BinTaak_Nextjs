
import Head from "next/head";

import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import ClientLogo from "../components/ClientLogo"; 
import Categories from "../components/Categories";
import ChoosePlatform from "../components/ChoosePlatform";


const index = () => { 
  return (
    <>
      <Head>
        <title>BinTaak</title>
      </Head>

      <Navbar />

      <Banner />

      <ClientLogo/>

      <Categories/>

      <ChoosePlatform />
 

    </>
  )
}

export default index