import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './page'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import CompanyPhilosophy from '@/components/CompanyPhilosophy/CompanyPhilosophy'
import AboutUs from '@/components/About/AboutUs'
import OurClient from '@/components/OurClient/OurClient'
import OurTeam from '@/components/OurTeam/OurTeam'
import OurServices from '@/components/OurServices/OurServices'
import OurWorks from '@/components/OurWorks/OurWorks'
import Speciality from '@/components/Speciality/Speciality'


const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <CompanyPhilosophy />
      <AboutUs />
      <OurClient />
      <OurTeam />
      <OurServices />
      <OurWorks />
      <Speciality />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
