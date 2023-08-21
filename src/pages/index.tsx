import { AboutMe } from '@/components/Home/AbouteMe';
import { Projects } from '@/components/Home/Projects';
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
      <div className='py-6 md:py-12 px-6 lg:px-32 space-y-10 md:space-y-28'>
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}
