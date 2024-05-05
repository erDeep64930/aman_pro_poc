import React from 'react'
import { FEATURES } from '@/constants'
import Image from 'next/image'
const MainsCategory = () => {
  return (
    <div>
          <h2 className="text-xl text-black">Mains Categories</h2>
       <ul className="mt-10 flex gap-8 ">
            {FEATURES.map(({title,icon,description}) => (
              <FeatureItem 
                key={title}
                title={title} 
                icon={icon}
                description={description}
              />
            ))}
          </ul>
    </div>
      )
    }
type FeatureItem = {
  title?: string;
  icon?: string;
  description?: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
<section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
  <div className="hide-scrollbar flex  w-full items-start justify-start gap-8 overflow-x-auto ">
  <li className="flex w-full flex-1 flex-col items-start border border-red-400 p-10">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 ">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="text-xl lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  </div>


</section>

   
  )
}
export default MainsCategory