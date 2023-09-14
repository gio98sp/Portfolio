import Image from 'next/image';

import { CopyIcon } from '@/icons/CopyIcon';
import { LinkedIn } from '@/icons/LinkedIn';
import { GitHub } from '@/icons/GitHub';
import { Facebook } from '@/icons/Facebook';
import { Email } from '@/icons/Email';
import { Instagram } from '@/icons/Instagram';
import { Download } from '@/icons/Download';

import { Project } from './Project';

export const AboutMe = () => {
  return (
    <>
      <article className="flex flex-wrap-reverse justify-center gap-10 max-w-screen-xl m-auto text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
        <div className="flex flex-col items-center xl:items-start gap-10 w-full xl:w-120 mb-5">
          <h1 className="text-4xl sm:text-5xl xl:leading-[5rem]">
            Prazer, sou
            <strong className="text-gio-300">
              <span className="animate-blink">_</span>Giovane
            </strong>
          </h1>

          <h2>
            Sou um desenvolvedor Front-end, sempre buscando melhorar minhas habilidades de
            programação todos os dias. Atualmente, estou focado em aprender React, Next.js,
            TypeScript e outras tecnologias relacionadas.
          </h2>

          <span className="w-fit text-lg rounded-lg text-gio-300">Converse Comigo!</span>

          <ul className="flex flex-wrap justify-center items-center gap-3 text-md xl:grid xl:grid-cols-[1fr_1fr] xl-w-full">
            <li className="w-fit py-2 rounded-md flex justify-start place-items-center gap-2">
              <LinkedIn />
              <a target="_blank" href="https://www.linkedin.com/in/giovane98sp/">
                LinkedIn
              </a>
            </li>

            <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
              <GitHub />
              <a target="_blank" href="https://github.com/gio98sp">
                GitHub
              </a>
            </li>

            <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
              <Facebook />
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100040316592013">
                Facebook
              </a>
            </li>

            <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
              <Instagram />
              <a target="_blank" href="https://www.instagram.com/giovane98sp/">
                Instagram
              </a>
            </li>

            <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
              <Email />
              <a href="mailto:giovane98sp@gmail.com">giovane98sp@gmail.com</a>
              <CopyIcon textToCopy="giovane98sp@gmail.com" />
            </li>

            <li className="flex justify-start items-center w-fit p-2 rounded-md bg-gray-800 ">
              <a
                href={'curriculo.pdf'}
                download="curriculo-giovane.pdf"
                className="flex flex-wrap items-center gap-1"
              >
                Currículo
                <Download />
              </a>
            </li>
          </ul>

          <div className="space-y-3">
            <p>Tecnologias</p>

            <ul className="flex flex-wrap justify-center items-center gap-3">
              <li className="px-2 py-1 bg-javascript text-black">javascript</li>
              <li className="px-2 py-1 bg-react text-black">react</li>
              <li className="px-2 py-1 border border-white bg-next">next</li>
              <li className="px-2 py-1 bg-typescript">typescript</li>
            </ul>
          </div>
        </div>

        <div className="relative h-fit w-80 md:w-96 xl:w-120">
          <Image
            src="https://avatars.githubusercontent.com/u/100538460?v=4"
            alt="Foto de perfil. Homem branco com sorriso no rosto"
            width={500}
            height={500}
            unoptimized
            priority
            className="rounded-full border-8 border-gray-800"
          />

          <p className="p-1 md:p-4 w-fit text-base leading-tight bg-gray-800 rounded-xl absolute bottom-3">
            <strong className="text-2xl md:text-4xl text-gio-300">+1</strong>
            <br />
            ano estudando programação
          </p>
        </div>
      </article>

      <article>
        <h2 className="text-3xl md:text-4xl text-center">Projetos Recentes</h2>

        <div className="flex flex-wrap items-center justify-center gap-20 my-10">
          <Project
            name="Top Films"
            linkImage="/top-films.png"
            linkRepo="https://github.com/gio98sp/top_films"
            linkProject="https://top-films-gio98sp.vercel.app/"
          />
          <Project
            name="ChatGPT-Clone"
            linkImage="/chatgpt-clone.png"
            linkRepo="https://github.com/gio98sp/chatgpt-clone"
            linkProject="https://chatgpt-clone-gio98sp.vercel.app/"
          />
          <Project
            name="TabNews Blog"
            linkImage="/tabnews-blog.png"
            linkRepo="https://github.com/gio98sp/tabnews-blog"
            linkProject="https://tabnews-blog-gio98sp.vercel.app/"
          />
          <Project
            name="GitHub-Finder"
            linkImage="/github-finder.png"
            linkRepo="https://github.com/gio98sp/github_finder_react_typescript"
            linkProject="https://github-finder-react-typescript-gio98sp.vercel.app/"
          />
        </div>
      </article>
    </>
  );
};
