import Image from "next/image"
import Link from "next/link"
import Mockup from "../public/mockup.png"
import Star from "../public/star.png"
import {ChevronRight} from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-[700px] overflow-hidden px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
      {/* Container for better mobile layout */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-[350px] md:w-[516px] z-20 md:pr-4 lg:pr-8 mb-12 md:mb-0">
          <h1 className="font-urbanist font-bold text-[25px] md:text-[35px] text-center md:text-left text-white tracking-tight">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="font-urbanist font-bold text-[25px] md:text-[35px] text-center md:text-left mb-6 md:mb-8 tracking-tight">
            <span className="text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]">Discover your way to success 
              <span className="hidden sm:inline"><br /></span> with Fametonic:</span>
          </h2>
          
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
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

          <div className="flex flex-col items-center md:items-start gap-2">
            {/* Mobile layout: Terms first, then Copyright, then Button */}
            {/* Desktop layout: Button first, then Terms and Copyright */}
            
            {/* Button and quiz text - first on desktop, third on mobile */}
            <div className="flex flex-col items-center gap-2 w-full md:w-auto order-3 md:order-1 mb-0 md:mb-6">
              <Link href="#" className="w-full sm:w-auto">
                <div className="bg-[#FC004E] hover:bg-[#FC004E]/90 text-white font-figtree font-bold text-[18px] md:text-[20px] px-6 md:px-8 py-2 rounded-[10px] flex justify-center items-center shadow-[2px_2px_10px_0px_#00E7F9] transition-all hover:shadow-[0_0_20px_rgba(252,0,78,0.8)] w-full sm:w-[313px]">
                  GET STARTED
                  <ChevronRight className="ml-2" />
                </div>
              </Link>
              <p className="font-figtree font-normal text-[12px] text-white text-center mt-1">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Terms & Conditions text - first on mobile, second on desktop */}
            <p className="font-figtree font-medium text-[12px] text-[#ABABAB] text-center md:text-left mt-2 max-w-[400px] order-1 md:order-2">
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>

            {/* Copyright notice - second on mobile, third on desktop */}
            <p className="font-figtree font-medium text-[10px] text-[#ABABAB] mt-2 mb-6 md:mt-1 md:mb-0 order-2 md:order-3">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Right Column with glow effect */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-end">
          <div className="relative w-[320px] h-[350px] sm:w-[390px] sm:h-[426px] md:w-[500px] md:h-[550px] lg:w-[666px] lg:h-[679px]">
            {/* Glow effect */}
            <div className="absolute w-full h-full rounded-full bg-[#00E7F9]/20 blur-[60px] md:blur-[80px] -z-10"></div>
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
      </div>
    </div>
  )
}
