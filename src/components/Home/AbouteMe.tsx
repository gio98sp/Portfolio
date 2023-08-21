import { CopyIcon } from '@/icons/CopyIcon';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse max-w-screen-xl m-auto justify-center items-center gap-10 md:gap-32 md:py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem] ">
          Prazer, sou&nbsp;<strong className="text-gio-300">Giovane</strong>
        </h1>
        <div className="mb-6">
          <h2 className="mb-6">
            Sou um desenvolvedor Front-end, aprendendo a como codar melhor todos os dias!
            Atualmente estou estudando React, Next, Typescript e entre outras tecnologias.
          </h2>
          <span className="w-fit text-lg rounded-lg text-gio-300">Converse Comigo!</span>
        </div>
        <ul className="flex flex-wrap mb-6 justify-center xl:grid xl:grid-cols-2 xl-w-fit gap-3 text-md">
          <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.983" cy="5.009" r="2.188"></circle>
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
            <a target="_blank" href="https://www.linkedin.com/in/giovane98sp/">
              LinkedIn
            </a>
          </li>
          <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 480 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
            </svg>
            <a target="_blank" href="https://github.com/gio98sp">
              GitHub
            </a>
          </li>
          <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 450 512"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100040316592013">
              Facebook
            </a>
          </li>
          <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
            </svg>
            <a target="_blank" href="https://www.instagram.com/giovane98sp/">
              Instagram
            </a>
          </li>
          <li className="w-fit py-2 rounded-md flex justify-start items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <a href="mailto:giovane98sp@gmail.com">giovane98sp@gmail.com</a>
            <CopyIcon textToCopy='giovane98sp@gmail.com' />
          </li>
        </ul>
        <div>
          <ul className='flex flex-wrap gap-3'>
            <li className="px-2 py-1 bg-javascript text-black">javascript</li>
            <li className="px-2 py-1 bg-react text-black">react</li>
            <li className="px-2 py-1 border-2 border-white bg-next">next</li>
            <li className="px-2 py-1 bg-typescript">typescript</li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/100538460?v=4"
          alt="Foto de perfil. Homem branco com sorriso no rosto"
          width={500}
          height={500}
          unoptimized
          className="rounded-full border-8 border-gray-800"
        />
        <p className="p-1 md:p-4 w-fit text-base leading-tight bg-gray-800 rounded-xl absolute -bottom-[0.75rem] sm:bottom-3">
          <strong className="text-2xl md:text-4xl text-gio-300">1+</strong>
          <br />
          ano estudando programação
        </p>
      </div>
    </main>
  );
};
