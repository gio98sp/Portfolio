import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>404 | Giovane</title>
      </Head>
      <div className='flex flex-col items-center text-center mt-12 md:mt-24 gap-8  px-6 md:px-32'>
        <h1 className='text-7xl font-bold text-gio-300'>404</h1>
          <p className='flex flex-col gap-8 md:gap-4 md:text-xl'>
            <span>Oops, não conseguimos encontrar essa página!</span>
            <span>Clique no botão abaixo para ser redirecionado á Página Inicial</span>
          </p>
        <Link href="/" className='p-4 text-gio-300 bg-gray-500 hover:bg-opacity-90 rounded-xl font-bold mt-5 md:text-xl md:md-12 w-fit'>Ir a página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
