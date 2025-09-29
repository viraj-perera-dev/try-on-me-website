import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Subheading } from '@/components/text'

export const metadata = {
  title: 'Pricing',
  description:
    'Transform your fashion store with AI-powered virtual try-on. Choose the perfect plan for your business.',
}

const tiers = [
  {
    name: 'Free',
    slug: 'free',
    description: 'Try Before You Buy',
    priceMonthly: 0,
    priceLabel: 'Free',
    billingCycle: null,
    generationsLimit: 10,
    costPerImage: null,
    featured: false,
    href: 'https://admin.shopify.com/?organization_id=181883178&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D22009a5fdc898eb6daa2a853325a0594',
    highlights: [
      { description: '10 AI generated try-on images for Free' },
      { description: 'Real-time usage counter' },
      { description: 'Only successful try-ons use your credits' },
      { description: 'No credit card required' },
    ],
  },
  {
    name: 'Standard',
    slug: 'standard',
    description: 'Perfect for Growing Stores',
    priceMonthly: 24,
    priceLabel: '$24',
    billingCycle: '/ 30 days',
    generationsLimit: 100,
    featured: false,
    href: 'https://admin.shopify.com/?organization_id=181883178&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D22009a5fdc898eb6daa2a853325a0594',
    highlights: [
      { description: '100 AI generated try-on images' },
      { description: 'High-quality virtual fitting results' },
      { description: 'Real-time usage counter' },
      { description: 'Only successful try-ons use your credits' },
      { description: 'Standard Support' },
    ],
  },
  {
    name: 'Professional',
    slug: 'professional',
    description: 'Most Popular',
    priceMonthly: 95,
    priceLabel: '$95',
    billingCycle: '/ 30 days',
    generationsLimit: 500,
    savings: 'Save 21%',
    featured: true,
    badge: '🔥 Most Popular',
    href: 'https://admin.shopify.com/?organization_id=181883178&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D22009a5fdc898eb6daa2a853325a0594',
    highlights: [
      { description: '500 AI generated try-on images' },
      { description: 'High-quality virtual fitting results' },
      { description: 'Real-time usage counter' },
      { description: 'Only successful try-ons use your credits' },
      { description: 'Standard Support' },
    ],
  },
  {
    name: 'Premium',
    slug: 'premium',
    description: 'Best Value',
    priceMonthly: 140,
    priceLabel: '$140',
    billingCycle: '/ 30 days',
    generationsLimit: 1000,
    costPerImage: 0.14,
    savings: 'Save 42%',
    featured: false,
    badge: '',
    href: 'https://admin.shopify.com/?organization_id=181883178&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D22009a5fdc898eb6daa2a853325a0594',
    highlights: [
      { description: '1000 AI generated try-on images' },
      { description: 'High-quality virtual fitting results' },
      { description: 'Real-time usage counter' },
      { description: 'Only successful try-ons use your credits' },
      { description: 'Pro Support - 24/h response time' },
    ],
  },
]

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>


        <LogoCloud className="mt-24 max-w-7xl mx-auto" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div
      className={`-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 max-lg:mx-auto max-lg:w-full max-lg:max-w-md ${tier.featured
        ? 'ring-blue-600 ring-2 relative'
        : 'ring-black/5'
        }`}
    >
      {/* Featured Badge */}
      {tier.badge && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            {tier.badge}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className={`relative rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ${tier.featured ? 'ring-blue-100' : 'ring-black/5'
          }`}>
          {/* Header */}
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>

          {/* Savings Badge */}
          {tier.savings && (
            <div className="mt-2 absolute top-5 right-5">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {tier.savings}
              </span>
            </div>
          )}

          {/* Price */}
          <div className="mt-8 relative flex items-baseline gap-2">
            <div className="text-5xl font-bold text-gray-950">
              {tier.priceMonthly === 0 ? 'Free' : `$${tier.priceMonthly}`}
            </div>
            {tier.billingCycle && (
              <div className="text-sm/5 text-gray-950/75">
                {tier.billingCycle}
              </div>
            )}
          </div>


          {/* CTA Button */}
          <div className="mt-8">
            <Button
              href={tier.href}
              className={tier.featured ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {tier.priceMonthly === 0 ? 'Start Free Trial' : 'Get Started'}
            </Button>
          </div>

          {/* Features List */}
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              What's included:
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
      className="flex items-start gap-3 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon className="size-5 shrink-0 fill-green-500" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
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