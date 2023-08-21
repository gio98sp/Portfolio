import Image from 'next/image';

export const Projects = () => {
  return (
    <article className="space-y-16 pb-32 flex flex-col items-center text-left">
      <h2 className="text-3xl md:text-4xl">Projetos Recentes</h2>
      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        <li className="text-md relative">
          <a href="">
            <Image
              src={'/favicon.ico'}
              width={300}
              height={300}
              alt="imagem"
              className="object-cover rounded-2xl h-[18.75rem] mb-4"
            />
          </a>
          <div className='flex justify-between'>
            <span>name</span>
            <a href="">Repositório</a>
          </div>
          <div className="bg-gray-800 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
            <span>1</span>
          </div>
        </li>
        <li className="text-md relative">
          <a href="">
            <Image
              src={'/favicon.ico'}
              width={300}
              height={300}
              alt="imagem"
              className="object-cover rounded-2xl h-[18.75rem] mb-4"
            />
          </a>
          <div className='flex justify-between'>
            <span>name</span>
            <a href="">Repositório</a>
          </div>
          <div className="bg-gray-800 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
            <span>2</span>
          </div>
        </li>
        <li className="text-md relative">
          <a href="">
            <Image
              src={'/favicon.ico'}
              width={300}
              height={300}
              alt="imagem"
              className="object-cover rounded-2xl h-[18.75rem] mb-4"
            />
          </a>
          <div className='flex justify-between'>
            <span>name</span>
            <a href="">Repositório</a>
          </div>
          <div className="bg-gray-800 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
            <span>3</span>
          </div>
        </li>
        <li className="text-md relative">
          <a href="">
            <Image
              src={'/favicon.ico'}
              width={300}
              height={300}
              alt="imagem"
              className="object-cover rounded-2xl h-[18.75rem] mb-4"
            />
          </a>
          <div className='flex justify-between'>
            <span>name</span>
            <a href="">Repositório</a>
          </div>
          <div className="bg-gray-800 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
            <span>4</span>
          </div>
        </li>
      </ul>
    </article>
  );
};
