import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/OurTeam.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function App({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
