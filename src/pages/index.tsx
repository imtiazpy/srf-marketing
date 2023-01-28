import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './page'
import Layout from '@/components/Layout/Layout'


const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <div className='text-3xl'>
      I'm from home
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
