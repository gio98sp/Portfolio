import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <Head>
        <title>404 | Giovane</title>
      </Head>
      <h1>404</h1>
      <div>
        <p>Oops, não conseguimos encontrar essa página!</p>
        <p>Clique no botão abaixo para ser redirecionado à Página Inicial</p>
      </div>
      <Link href="/">Ir a página inicial</Link>
    </div>
  );
};

export default NotFound;
