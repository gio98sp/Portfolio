import Image from "next/image"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <header className="text-sm py-3 px-5 items-center">
        <Image src='/favicon.ico' width={125} height={34} alt="Logo do Giovane, escrito GS" />
      </header>
      {children}
    </>
  )
}