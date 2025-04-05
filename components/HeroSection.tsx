import Image from "next/image"
import Link from "next/link"
import Mockup from "../public/mockup.png"
import Star from "../public/star.png"
import { ChevronRight } from "lucide-react"
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <div className="relative min-h-[700px] overflow-hidden px-5 sm:px-6 md:px-8 lg:px-12 py-4 md:py-8">
      {/* Main container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Mobile mockup */}
        <div className="md:hidden absolute top-[-135px] sm:top-[-105px] left-0 right-0 z-10 flex justify-center pointer-events-none overflow-visible">
          <div className="relative w-[340px] h-[550px] sm:w-[420px] sm:h-[580px]">
            <Image
              src={Mockup}
              alt="Mobile App Preview"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col md:flex-row md:justify-end">
          {/* Left Column */}
          <div className="w-[350px] md:w-[530px] z-30 mb-12 md:mb-0 pt-[300px] sm:pt-[420px] md:pt-0 mr-0 md:mr-[15%] lg:mr-[49%] px-2 md:px-0"> 
            <h1 className={`${urbanist.className} font-bold text-[25px] md:text-[35px] text-center md:text-left text-white tracking-tight leading-10`}>
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2 className={`${urbanist.className} font-bold text-[25px] md:text-[35px] text-center md:text-left mb-2 md:mb-4 tracking-tight`}>
              <span className="text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">Discover your way to success
                <span className="hidden sm:inline"><br /></span> with Fametonic:</span>
            </h2>

            {/* Features */}
            <div className="space-y-3 md:space-y-[13px] mb-6 md:mb-[30px]">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers"
              ].map((feature, index) => (
                <div key={index} className="flex items-start sm:items-center gap-2">
                  <Image src={Star} alt="Star" width={22} height={22} className="mt-1 sm:mt-0 flex-shrink-0" />
                  <p className="font-figtree font-medium md:font-semibold text-[16px] text-white">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Button and quiz text   */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex flex-col items-center gap-2 w-full md:w-auto order-3 md:order-1 mb-0 md:mb-6">
                <Link href="#" className="w-full sm:w-auto">
                  <div className="bg-[#FC004E] hover:bg-[#FC004E]/90 text-white font-figtree font-bold text-[18px] md:text-[20px] px-6 md:px-8 py-2 rounded-[10px] flex justify-center items-center shadow-[2px_2px_10px_0px_#00E7F9] transition-all hover:shadow-[0_0_20px_rgba(252,0,78,0.8)] w-full sm:w-[313px]">
                    GET STARTED
                    <ChevronRight className="ml-1" />
                  </div>
                </Link>
                <p className="font-figtree font-normal text-[12px] text-white text-center mt-1">
                  1-minute quiz for personalized insights
                </p>
              </div>

              {/* Terms & Conditions text */}
              <p className="font-figtree font-medium text-[12px] text-[#ABABAB] text-center md:text-left mt-2 max-w-[400px] order-1 md:order-2">
                By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </p>

              {/* Copyright notice  */}
              <p className="font-figtree font-medium text-[10px] text-[#ABABAB] mt-2 mb-6 md:mt-1 md:mb-0 order-2 md:order-3">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Column with mockup image - desktop */}
          <div className="hidden md:block md:absolute md:top-[-70px] md:right-[-40px] lg:right-[0px] z-10">
            <div className="relative w-[390px] h-[426px] md:w-[660px] md:h-[679px] lg:w-[700px] lg:h-[720px]">
              <Image
                src={Mockup}
                alt="Mobile App Preview"
                fill
                className="object-cover mask-l-from-80% mask-y-from-80% mask-radial-from-70% mask-radial-to-85%"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
