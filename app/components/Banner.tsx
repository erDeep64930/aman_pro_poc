import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const BannerSite = ({ backgroundImage, title, subtitle, peopleJoined }: BannerProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl border border-blue-900 bg-pink-200`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
       
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        {/* <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span> */}
        {/* <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p> */}
      </div>
     </div>
    </div>
  )
}

const Banner = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <BannerSite 
          backgroundImage="bg-img1.jpg"
          title="MAINS"
          subtitle="GS-1 to GS -4"
          peopleJoined="50+ Joined"
        />
        <BannerSite 
          backgroundImage="bg-img2.jpg"
          title="PRELIMS"
          subtitle="General Studies"
          peopleJoined="50+ Joined"
        />
      </div>

     
    </section>
  )
}

export default Banner