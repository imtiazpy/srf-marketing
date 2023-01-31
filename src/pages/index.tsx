import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './page'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import CompanyPhilosophy from '@/components/CompanyPhilosophy/CompanyPhilosophy'
import AboutUs from '@/components/About/AboutUs'


const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <CompanyPhilosophy />
      <AboutUs />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
