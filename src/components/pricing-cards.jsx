import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Subheading } from '@/components/text'


export const metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Free',
    slug: 'free',
    description: 'Perfect for small stores getting started.',
    priceMonthly: 0,
    href: 'https://apps.shopify.com/try-on-me',
    highlights: [
      { description: '7 days free trial' },
      { description: 'Works with all clothing items' },
      { description: 'Priority support', disabled: true },
    ]
  },
  {
    name: 'Professional',
    slug: 'professional',
    description: 'Ideal for growing fashion stores.',
    priceMonthly: 59.99,
    href: 'https://apps.shopify.com/try-on-me',
    highlights: [
      { description: 'Unlimited try-on generations' },
      { description: 'Works with all clothing items' },
      { description: 'Priority support', disabled: false },
    ]
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'For high-volume stores and agencies.',
    href: '/contact',
    priceMonthly: null,
    highlights: [
      { description: "Unlimited virtual try-ons" },
      { description: "Custom plugin tailored for your store" },
      { description: "Image labeling with your brand logo" },
      { description: "Priority support" },
    ]
  },
]

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            {tier.priceMonthly !== null ? (
              <>
                <div className="text-5xl font-medium text-gray-950">
                  {tier.priceMonthly}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>USD</p>
                  <p>per month</p>
                </div>
              </>
            ) : (
              <div className="text-3xl font-medium text-gray-800">
                Custom pricing
              </div>
            )}

          </div>
          <div className="mt-8">
            {tier.priceMonthly !== null ? (
              <Button href={tier.href}>Start a free trial</Button>
            ) : (
              <Button href={tier.href}>Contact us</Button>
            )}
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export default async function Pricing() {

  return (
    <main className="overflow-hidden" id="pricing">
      <PricingCards />
    </main>
  )
}
