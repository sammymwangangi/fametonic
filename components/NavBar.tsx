import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"

const navLinks = [
  { href: "#", label: "About us" },
  { href: "#", label: "Contact" },
]

export default function NavBar() {
  return (
    <div className="absolute left-0 right-0 top-[81px] flex items-start justify-between px-[211px] z-20">
      <Image src={Logo} alt="Logo" width={173} height={74} priority />
      <div className="flex items-center gap-8 mr-[100px] z-20">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="text-[#A9A9A9] text-lg font-figtree font-semibold hover:text-[#00E7F9] transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}