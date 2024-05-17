"use client"

import Container from "@/components/Container";
import {BriefcaseIcon, HandThumbUpIcon, MapIcon, StarIcon} from "@heroicons/react/24/outline";
import ServicesTabs from "@/app/components/ServicesTabs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
      <main>
          <span className={`relative pt-[100px] block mb-[90px]`} style={{
                backgroundImage: 'url("/images/brick_wall.jpg")',
                backgroundSize: '10%'
            }}>
                <img src="/images/onyx_bell-box.png" alt="" className={`w-[200px] left-1/2 -ml-[100px] -bottom-24 absolute`}/>
            </span>
          <Hero />
          <ServicesTabs />
      </main>
  )
}
