import { AboutMe } from '@/components/Home/AbouteMe';
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={jetBrains_Mono.className}>
      <Head>
        <title>Sobre mim | Giovane</title>
        <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por tecnologias" />
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>
        <AboutMe />
      </div>
    </div>
  );
}
