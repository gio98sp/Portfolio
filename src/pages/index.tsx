import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

import { AboutMe } from '@/components/Home/AbouteMe';

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={jetBrains_Mono.className}>
      <Head>
        <title>Sobre mim | Giovane</title>
        <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por tecnologias" />
      </Head>
      <div className='py-6 lg:py-12 px-6 lg:px-32 space-y-10 lg:space-y-28'>
        <AboutMe />
      </div>
    </div>
  );
}
