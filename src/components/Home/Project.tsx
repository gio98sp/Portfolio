import Image from 'next/image';

interface Props {
  name: string, 
  linkImage: string, 
  linkRepo: string,
  linkProject: string
}

export const Project = ({name, linkImage, linkRepo, linkProject}: Props) => {
  return (
    <div className="text-md w-[20rem] h-[12rem]">
      <a href={linkProject} target='_blank'>
        <Image
          src={linkImage}
          width={500}
          height={500}
          priority
          unoptimized
          alt="imagem"
          className="rounded-t-2xl w-full h-full"
        />
      </a>
      <div className="flex justify-evenly bg-gray-800 rounded-b-xl p-2">
        <a href={linkProject} target='_blank' className='hover:opacity-70'>{name}</a>
        <a href={linkRepo} target='_blank' className='hover:opacity-70'>Repositório🔗</a>
      </div>
    </div>
  );
};
