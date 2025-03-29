import Image from "next/image"
import Link from "next/link"
import Mockup from "../public/mockup.png"
import Star from "../public/star.png"
import {ChevronRight} from "lucide-react"

export default function HeroSection() {
  return (
    <div className="h-[700px]">
      {/* Left Column */}
      <div className="absolute left-[215px] right-0 top-[212px] w-full md:w-[516px] md:mt-8 lg:mt-[57px] z-20">
        <h1 className="font-urbanist font-bold text-[25px] md:text-[35px] text-white tracking-tight">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h2 className="font-urbanist font-bold text-[25px] md:text-[35px] mb-6 md:mb-8 tracking-tight">
          <span className="text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]">Discover your way to success <br /> with Fametonic:</span>
        </h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {[
            "Start growing your influence right away—no waiting required!",
            "Create viral TikToks and Reels step by step with easy-to-follow lessons",
            "Use a Personal AI Worker to boost your content",
            "Learn from expert-led courses designed for aspiring influencers"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={Star} alt="Star" width={22} height={22} />
              <p className="font-figtree font-semibold text-[16px] text-white">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex flex-col items-center gap-2">
            <Link href="#" className="w-full md:w-[313px]">
              <div className="bg-[#FC004E] hover:bg-[#FC004E]/90 text-white font-figtree font-bold text-[20px] px-8 py-2 rounded-[10px] flex justify-center items-center shadow-[2px_2px_10px_0px_#00E7F9] transition-all hover:shadow-[0_0_20px_rgba(252,0,78,0.8)]">
                GET STARTED
                <ChevronRight className="ml-2" />
              </div>
            </Link>
            <p className="font-figtree font-normal text-[12px] text-white text-center mt-1">
              1-minute quiz for personalized insights
            </p>
          </div>
          <p className="font-figtree font-medium text-[12px] text-[#ABABAB] text-center md:text-left mt-2">
            By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
          </p>
          <p className="font-figtree font-medium text-[10px] text-[#ABABAB]">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right Column with glow effect */}
      <div className="absolute left-[673px] top-[126px] w-full md:w-auto lg:w-auto z-0">
        <div className="w-[390px] h-[426px] md:w-[666px] md:h-[679px]">
          <Image
            src={Mockup}
            alt="Mobile App Preview"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
