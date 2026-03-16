import Link from "next/link"
import Footer from "./footer"

export default function NotFoundPage() {
  return (
    <>
    <div className="h-[90vh] w-full bg-neutral-950 flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-phonk font-bold text-white">{("Page not found").toUpperCase()}</h1>
      <Link href="/" className="text-white font-anonymouspro italic">back to home</Link>
    </div>
    <Footer/>
    </>
  )
}