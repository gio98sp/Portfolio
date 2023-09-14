import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <header className="py-3 px-12">
        <Link href='/'>
          <Image src='/favicon.ico' width={125} height={34} alt="Logo do Giovane, escrito GS" />
        </Link>
      </header>
      {children}
    </>
  )
}