import { Button } from "@/components/ui/button"
import Link from "next/link"
import Rocket from "../public/rocket.png"
import Image from "next/image"

export default function TopBar() {
  return (
    <Button asChild className="bg-linear-to-r from-[#FC004E] to-[#10CBE0] h-[76px] md:h-[46px] w-full rounded-none mb-9 py-4">
      <Link href="#" className="flex flex-col md:flex-row items-center md:gap-2 text-[16px] md:text-[22px] font-figtree">
        <Image src={Rocket} alt="Rocket" width={20} height={20} />
        <span className="text-[#00e7f9] font-extrabold"> FRESH BEGINNINGS SALE:</span>
        <span className="text-white font-extrabold"> Extra 25% OFF,</span>
        <span className="text-white font-semibold"> Limited Spots - start your journey today!</span>
      </Link>
    </Button>
  )
}
