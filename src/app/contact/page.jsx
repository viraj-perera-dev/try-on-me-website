import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Contact Us - Vestime',
  description:
    'Get in touch with the Vestime team. We\'re here to help with setup, support, and any questions about our virtual try-on app.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Get in touch</Heading>
      <Lead className="mt-6 max-w-3xl">
        Have questions about Vestime? Need help with setup or want to discuss custom solutions? 
        We're here to help you transform your Shopify store with virtual try-on technology.
      </Lead>
    </Container>
  )
}

function ContactInfo() {
  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Subheading>Contact Information</Subheading>
          <Heading as="h2" className="mt-2">
            Let's talk about your store
          </Heading>
          
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-gray-600">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Response Time</h3>
                <p className="mt-2 text-gray-600">
                  We typically respond within 24 hours during business days. 
                  For urgent technical support, mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button href="mailto:viraj.perera.dev@gmail.com" className="w-full sm:w-auto">
              Send us an email
            </Button>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="rounded-2xl bg-gray-50 p-8">
            <Subheading>What can we help with?</Subheading>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900">Technical Support</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Installation help, troubleshooting, theme integration, or any technical issues.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Sales & Pricing</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Questions about plans, custom pricing for high-volume stores, or enterprise features.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Product Feedback</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Feature requests, suggestions, or feedback to help us improve Vestime.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Partnerships</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Agency partnerships, referral programs, or custom integrations for your clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FAQ() {
  return (
    <Container className="mt-32">
      <div className="text-center">
        <Subheading>Before you reach out</Subheading>
        <Heading as="h2" className="mt-2">
          Check our FAQ
        </Heading>
        <Lead className="mt-6 mx-auto max-w-2xl">
          Many common questions are already answered in our comprehensive FAQ section.
        </Lead>
        
        <div className="mt-8">
          <Button href="/faq" variant="outline">
            View FAQ
          </Button>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 mx-auto">
            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="mt-4 font-medium text-gray-900">Installation</h3>
          <p className="mt-2 text-sm text-gray-600">
            Step-by-step guides for setting up Vestime on your Shopify store.
          </p>
        </div>

        <div className="text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 mx-auto">
            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 font-medium text-gray-900">Pricing</h3>
          <p className="mt-2 text-sm text-gray-600">
            Detailed information about our plans, billing, and upgrade options.
          </p>
        </div>

        <div className="text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 mx-auto">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3 className="mt-4 font-medium text-gray-900">Privacy</h3>
          <p className="mt-2 text-sm text-gray-600">
            How we handle data, customer photos, and privacy compliance.
          </p>
        </div>
      </div>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="my-32">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
        <Heading as="h2" className="text-3xl">
          Ready to get started?
        </Heading>
        <Lead className="mt-6 mx-auto max-w-2xl">
          Install Vestime on your Shopify store today and start giving your customers 
          the confidence to buy with virtual try-on technology.
        </Lead>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="https://admin.shopify.com/?organization_id=181883178&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D22009a5fdc898eb6daa2a853325a0594">
            Install on Shopify
          </Button>
          <Button variant="outline" href="mailto:viraj.perera.dev@gmail.com">
            Ask a Question First
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <ContactInfo />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}