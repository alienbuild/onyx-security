import dynamic from "next/dynamic";

import '@/styles/aliens.scss'

import PrimaryHeader from "@/components/PrimaryHeader";
import PrimaryFooter from "@/components/PrimaryFooter";
import Providers from "@/providers/Providers";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), {
    ssr: false,
})

export const metadata = {
  title: 'Onyx Security',
  description: 'Onyx security',
}

export default function RootLayout({ children }) {
  return (
      <>
          <html lang="en" className={`h-full`}>
              <body className="flex flex-col h-full">
                  <Providers>
                      <PrimaryHeader/>
                      <div className="flex-1">{children}</div>
                      <CallToAction />
                      <Testimonials />
                      <PrimaryFooter/>
                      <GoogleAnalytics/>
                  </Providers>
              </body>
          </html>
      </>
  )
}
