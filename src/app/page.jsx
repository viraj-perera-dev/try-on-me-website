import { BeforeAfterSlider } from '@/components/before-after'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCluster } from '@/components/logo-cluster'
import { LottieAnimation } from '@/components/lottie-animation'
import { Navbar } from '@/components/navbar'
import Pricing from '@/components/pricing-cards'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/ai-powered-virtual-try-on-reduces-returns-by-40-percent"
              className="flex items-center gap-1 rounded-full bg-white px-3 py-0.5 text-sm/6 font-medium text-black data-hover:bg-blue-200"
            >
              🎉 New: AI-powered virtual try-on reduces returns by 40%
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Try before you buy.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Let your customers virtually try on clothes with AI. Boost sales,
            reduce returns, and transform shopping into an interactive
            experience.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://apps.shopify.com/try-on-me">
              Install on Shopify
            </Button>
            <Button variant="secondary" href="#demo">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden" id="demo">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Watch your customers try on clothes in seconds.
        </Heading>
        <p className="mt-6 max-w-2xl text-xl/7 text-gray-600">
          See how easy it is for shoppers to upload their photo and instantly
          visualize how any item looks on them. No apps to download, no account
          required.
        </p>

        {/* Video Container */}
        <div className="relative mt-16">
          <div className="relative mx-auto max-w-7xl">
            <video
              className="h-auto w-full rounded-2xl shadow-2xl ring-5 ring-gray-900/10"
              poster="/video/try-on-demo-poster.png"
              preload="metadata"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/video/try-on-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Features</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Transform your fashion store with AI-powered virtual try-ons.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Experience"
          title="See yourself in every outfit"
          description="Customers upload their photo and instantly see how any clothing item looks on them with realistic AI-powered virtual try-on technology."
          graphic={
            <div className="flex size-full items-center justify-center p-8">
              <BeforeAfterSlider
                beforeImage="/images/before-tryon.png"
                afterImage="/images/after-tryon.png"
                beforeAlt="Customer without the outfit"
                afterAlt="Customer wearing the virtual outfit"
              />
            </div>
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analytics"
          title="Track your success"
          available={false}
          description="Monitor try-on usage, conversion rates, and return reduction with detailed analytics dashboard. See how virtual try-ons boost your sales."
          graphic={
            <div className="flex size-full items-center justify-center p-8">
              <LottieAnimation
                src="/lottie/Marketing Tools.json"
                style={{ width: '145%', height: '145%' }}
              />
            </div>
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Integration"
          title="Install in minutes"
          description="One-click Shopify installation with no coding required. Works seamlessly with any theme and integrates directly into product pages."
          graphic={
            <div className="flex size-full items-center justify-center p-8">
              <LottieAnimation
                src="/lottie/Rocket.json"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Compatibility"
          title="Works with any store"
          description="Compatible with all fashion categories including clothing, accessories, and footwear. Supports multiple product variants and sizes."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Performance"
          title="Lightning fast results"
          description="AI processing completes in 15-30 seconds with high-quality, realistic try-on images that customers can download and share."
          graphic={
            <div className="flex size-full items-center justify-center p-8">
              <LottieAnimation
                src="/lottie/Wardrobe.json"
                style={{ width: '140%', height: '140%' }}
              />
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main id="demo">
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
      </main>
      <Container className="mt-20">
        <div>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
