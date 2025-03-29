import { Button } from "@/components/ui/button"
import Link from "next/link"
import Rocket from "../public/rocket.png"
import Image from "next/image"

export default function TopBar() {
  return (
    <Button asChild className="bg-gradient-to-r from-[#FC004E] to-[#10CBE0] min-h-[76px] md:h-[46px] w-full rounded-none mb-4 sm:mb-6 md:mb-[25px] py-2 md:py-0">
      <Link href="#" className="flex flex-col md:flex-row items-center justify-center md:gap-2 text-[14px] sm:text-[16px] md:text-[22px] font-figtree px-4">
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <span>
            <Image src={Rocket} alt="Rocket" width={20} height={20} className="mb-0" />
          </span>
          <span className="text-[#00e7f9] font-extrabold whitespace-nowrap">FRESH BEGINNINGS SALE:</span>
          <span className="text-white font-extrabold whitespace-nowrap">Extra 25% OFF,</span>
        </div>
        <span className="text-white font-semibold text-center mt-1 md:mt-0">Limited Spots - start your journey today!</span>
      </Link>
    </Button>
  )
}
