import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Frequently Asked Questions - Vestime',
  description:
    'Find answers to common questions about Vestime virtual try-on app for Shopify stores.',
}

function FAQItem({ question, children, id }) {
  return (
    <div className="border-b border-gray-200 pb-8 mb-8" id={id}>
      <h3 className="text-lg font-medium text-gray-950 mb-4">{question}</h3>
      <div className="text-sm/6 text-gray-600 space-y-4">
        {children}
      </div>
    </div>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Frequently Asked Questions</Heading>
      <Lead className="mt-6 max-w-3xl">
        Everything you need to know about Vestime virtual try-on app for your Shopify store.
        Can't find what you're looking for? Contact our support team.
      </Lead>
      <div className="mt-8">
        <Button href="mailto:viraj.perera.dev@gmail.com" variant="outline">
          Contact Support
        </Button>
      </div>
    </Container>
  )
}

function GettingStarted() {
  return (
    <Container className="mt-32">
      <Subheading>Getting Started</Subheading>
      <Heading as="h2" className="mt-2">
        Installation and Setup
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="How do I install Vestime on my Shopify store?"
          id="installation"
        >
          <p>
            Installing Vestime is simple and takes just a few minutes:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Visit the Shopify App Store and search for "Vestime"</li>
            <li>Click "Install app" and authorize the required permissions</li>
            <li>The app will automatically integrate with your product pages</li>
            <li>Customize the button appearance in the app settings</li>
            <li>Test the functionality with a sample product</li>
          </ol>
          <p>
            No coding skills required! The installation is completely automated.
          </p>
        </FAQItem>

        <FAQItem 
          question="Does Vestime work with all Shopify themes?"
          id="theme-compatibility"
        >
          <p>
            Yes! Vestime is designed to work seamlessly with all Shopify themes, including:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Free Shopify themes (Dawn, Craft, Colorblock, etc.)</li>
            <li>Premium themes from the Theme Store</li>
            <li>Custom-developed themes</li>
            <li>Headless/custom storefronts</li>
          </ul>
          <p>
            Our app automatically detects your theme and integrates appropriately. If you experience any display issues, our support team can help optimize the integration.
          </p>
        </FAQItem>

        <FAQItem 
          question="What products work best with virtual try-on?"
          id="product-compatibility"
        >
          <p>
            Vestime works exceptionally well with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Clothing:</strong> Shirts, dresses, jackets, sweaters, pants</li>
            <li><strong>Accessories:</strong> Jewelry, watches, hats, scarves</li>
            <li><strong>Eyewear:</strong> Glasses, sunglasses</li>
            <li><strong>Beauty:</strong> Makeup looks, hair colors</li>
          </ul>
          <p>
            The AI works best with products that have clear product images against neutral backgrounds. Items with complex patterns or transparent elements may have varying results.
          </p>
        </FAQItem>
      </div>
    </Container>
  )
}

function HowItWorks() {
  return (
    <Container className="mt-32">
      <Subheading>How It Works</Subheading>
      <Heading as="h2" className="mt-2">
        Understanding the Technology
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="How does the virtual try-on technology work?"
          id="how-it-works"
        >
          <p>
            Our AI-powered virtual try-on uses advanced computer vision and machine learning:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Photo Analysis:</strong> The customer uploads their photo</li>
            <li><strong>Body Detection:</strong> Our AI identifies body proportions and pose</li>
            <li><strong>Product Mapping:</strong> The system maps the product onto the customer</li>
            <li><strong>Realistic Rendering:</strong> Creates a photorealistic try-on image</li>
            <li><strong>Quick Delivery:</strong> Results delivered in 15-30 seconds</li>
          </ol>
          <p>
            The entire process is automated and requires no manual intervention.
          </p>
        </FAQItem>

        <FAQItem 
          question="How accurate are the virtual try-on results?"
          id="accuracy"
        >
          <p>
            Our AI technology provides highly realistic results with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>95% accuracy in size and fit representation</li>
            <li>Natural lighting and shadow effects</li>
            <li>Proper draping and fabric behavior</li>
            <li>Realistic color matching</li>
          </ul>
          <p>
            While virtual try-on provides an excellent preview, we always recommend checking your store's size guide for the best fit. The technology works best with high-quality product images and clear customer photos.
          </p>
        </FAQItem>

        <FAQItem 
          question="What photo requirements work best for customers?"
          id="photo-requirements"
        >
          <p>
            For optimal results, customers should upload photos with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Good lighting:</strong> Natural light or bright indoor lighting</li>
            <li><strong>Clear visibility:</strong> Full body or upper body clearly visible</li>
            <li><strong>Neutral background:</strong> Plain or simple backgrounds work best</li>
            <li><strong>Straight pose:</strong> Facing the camera directly</li>
            <li><strong>High resolution:</strong> At least 512x512 pixels</li>
          </ul>
          <p>
            Supported formats: JPG, PNG. Maximum file size: 10MB.
          </p>
        </FAQItem>
      </div>
    </Container>
  )
}

function PricingSupport() {
  return (
    <Container className="mt-32">
      <Subheading>Pricing & Plans</Subheading>
      <Heading as="h2" className="mt-2">
        Subscription and Billing
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="What are your pricing plans?"
          id="pricing-plans"
        >
          <p>
            We offer three flexible plans to suit stores of all sizes:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <div className="space-y-4">
              <div>
                <strong>Free Plan:</strong> €0/month
                <ul className="list-disc ml-6 mt-2">
                  <li>10 try-on generations per month</li>
                  <li>Basic virtual try-on technology</li>
                  <li>Email support</li>
                </ul>
              </div>
              <div>
                <strong>Professional Plan:</strong> €29.99/month
                <ul className="list-disc ml-6 mt-2">
                  <li>100 try-on generations per month</li>
                  <li>Advanced analytics dashboard</li>
                  <li>Custom button styling</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div>
                <strong>Enterprise Plan:</strong> €59.99/month
                <ul className="list-disc ml-6 mt-2">
                  <li>Unlimited try-on generations</li>
                  <li>Advanced reporting</li>
                  <li>White-label options</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
            </div>
          </div>
        </FAQItem>

        <FAQItem 
          question="Is there a free trial available?"
          id="free-trial"
        >
          <p>
            Yes! We offer a completely free plan with 10 try-on generations per month - no credit card required. This allows you to test the technology and see how it works with your products before upgrading.
          </p>
          <p>
            You can also start with our Professional plan which includes a 7-day free trial to experience all premium features.
          </p>
        </FAQItem>

        <FAQItem 
          question="What happens if I exceed my monthly limit?"
          id="usage-limits"
        >
          <p>
            If you reach your monthly generation limit:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>The try-on button will display an upgrade message</li>
            <li>Existing customers can still view previously generated images</li>
            <li>You can upgrade your plan anytime to restore functionality</li>
            <li>Unused generations don't roll over to the next month</li>
          </ul>
          <p>
            We'll send you email notifications at 80% and 100% of your usage limit.
          </p>
        </FAQItem>

        <FAQItem 
          question="Can I cancel my subscription anytime?"
          id="cancellation"
        >
          <p>
            Absolutely! You can cancel your subscription at any time:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>No cancellation fees or penalties</li>
            <li>Continue using paid features until your billing period ends</li>
            <li>Automatically downgrade to the free plan</li>
            <li>Reactivate anytime with one click</li>
          </ul>
          <p>
            Cancel through the Shopify admin panel under Apps &gt; Vestime &gt; Settings &gt; Billing.
          </p>
        </FAQItem>
      </div>
    </Container>
  )
}

function TechnicalPrivacy() {
  return (
    <Container className="mt-32">
      <Subheading>Privacy & Security</Subheading>
      <Heading as="h2" className="mt-2">
        Data Protection and Privacy
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="How do you handle customer photos and data?"
          id="data-handling"
        >
          <p>
            We take data privacy extremely seriously:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Automatic Deletion:</strong> Customer photos are automatically deleted from our servers within 24 hours</li>
            <li><strong>Secure Processing:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>No Training Data:</strong> We never use customer photos to train our AI models</li>
            <li><strong>GDPR & CCPA Compliant:</strong> Full compliance with international privacy laws</li>
            <li><strong>Limited Access:</strong> Only authorized AI processing systems access the photos</li>
          </ul>
          <p>
            Customers own their generated try-on images and can download them anytime.
          </p>
        </FAQItem>

        <FAQItem 
          question="Is the app GDPR and CCPA compliant?"
          id="compliance"
        >
          <p>
            Yes, Vestime is fully compliant with major privacy regulations:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>GDPR:</strong> European Union data protection compliance</li>
            <li><strong>CCPA/CPRA:</strong> California consumer privacy compliance</li>
            <li><strong>Data Rights:</strong> Users can access, delete, or modify their data</li>
            <li><strong>Consent:</strong> Clear consent mechanisms for data processing</li>
            <li><strong>Transparency:</strong> Detailed privacy policy and data usage disclosure</li>
          </ul>
          <p>
            We provide all necessary tools for merchants to handle customer data requests.
          </p>
        </FAQItem>

        <FAQItem 
          question="Where is customer data processed and stored?"
          id="data-location"
        >
          <p>
            Data processing and storage locations:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Processing:</strong> Secure cloud infrastructure in EU and US</li>
            <li><strong>Storage:</strong> Temporary storage during processing only</li>
            <li><strong>Transfer Safeguards:</strong> Standard Contractual Clauses for EU transfers</li>
            <li><strong>Certification:</strong> SOC 2 and ISO 27001 certified infrastructure</li>
          </ul>
          <p>
            All data transfers comply with international data protection requirements.
          </p>
        </FAQItem>
      </div>
    </Container>
  )
}

function Performance() {
  return (
    <Container className="mt-32">
      <Subheading>Performance & Results</Subheading>
      <Heading as="h2" className="mt-2">
        Impact on Your Store
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="What results can I expect from using Vestime?"
          id="expected-results"
        >
          <p>
            Based on data from thousands of stores using Vestime:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-600">Reduction in returns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3x</div>
                <div className="text-sm text-gray-600">Higher conversion rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-gray-600">Increase in AOV</div>
              </div>
            </div>
          </div>
          <p className="mt-4">
            Results may vary depending on your product type, customer base, and implementation. Fashion retailers typically see the strongest impact.
          </p>
        </FAQItem>

        <FAQItem 
          question="Will the app slow down my store?"
          id="performance-impact"
        >
          <p>
            Vestime is optimized for performance and won't slow down your store:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Lightweight:</strong> Less than 50KB added to page load</li>
            <li><strong>Lazy Loading:</strong> Resources load only when needed</li>
            <li><strong>CDN Delivery:</strong> Global content delivery network</li>
            <li><strong>No Dependencies:</strong> Doesn't conflict with other apps</li>
            <li><strong>Mobile Optimized:</strong> Fast loading on all devices</li>
          </ul>
          <p>
            The virtual try-on processing happens on our servers, not your store, so it doesn't affect your site speed.
          </p>
        </FAQItem>

        <FAQItem 
          question="How do I track the app's performance?"
          id="analytics"
        >
          <p>
            Currently, you can track basic usage through your Shopify admin:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Generation Count:</strong> View monthly usage in the app dashboard</li>
            <li><strong>Plan Status:</strong> Monitor your subscription and billing</li>
            <li><strong>Customer Feedback:</strong> Gather feedback through your store's existing systems</li>
          </ul>
          <p>
            <strong>Coming Soon:</strong> We're developing comprehensive analytics including conversion tracking, customer insights, ROI reports, and usage patterns. These advanced features will be available in future updates for Professional and Enterprise plans.
          </p>
          <p>
            For now, you can measure success through your existing Shopify analytics by monitoring overall conversion rates and return rates after implementing Vestime.
          </p>
        </FAQItem>
      </div>
    </Container>
  )
}

function Support() {
  return (
    <Container className="mt-32 mb-32">
      <Subheading>Support</Subheading>
      <Heading as="h2" className="mt-2">
        Getting Help
      </Heading>
      
      <div className="mt-12">
        <FAQItem 
          question="How do I get support if I have issues?"
          id="getting-support"
        >
          <p>
            We provide multiple support channels:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Email Support:</strong> viraj.perera.dev@gmail.com (all plans)</li>
            <li><strong>Live Chat:</strong> Available in the app dashboard (Professional+)</li>
            <li><strong>Knowledge Base:</strong> Comprehensive help articles and tutorials</li>
            <li><strong>Video Guides:</strong> Step-by-step setup and optimization videos</li>
            <li><strong>Dedicated Manager:</strong> Personal support contact (Enterprise)</li>
          </ul>
          <p>
            Response times: Free plan (48 hours), Professional (24 hours), Enterprise (4 hours).
          </p>
        </FAQItem>

        <FAQItem 
          question="What if the virtual try-on results don't look right?"
          id="troubleshooting"
        >
          <p>
            If you're not satisfied with the try-on quality, try these steps:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Check Product Images:</strong> Use high-resolution images with neutral backgrounds</li>
            <li><strong>Optimize Photo Guidelines:</strong> Provide clear instructions to customers</li>
            <li><strong>Product Categories:</strong> Ensure products are properly categorized</li>
            <li><strong>Contact Support:</strong> We can fine-tune the AI for your specific products</li>
          </ol>
          <p>
            Our support team can analyze your specific use case and provide optimization recommendations.
          </p>
        </FAQItem>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <div className="text-center">
            <Heading as="h3" className="text-xl">Still have questions?</Heading>
            <p className="mt-4 text-gray-600">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:viraj.perera.dev@gmail.com">
                Email Support
              </Button>
              <Button variant="outline" href="/contact">
                Visit Help Center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function FAQ() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <GettingStarted />
      <HowItWorks />
      <PricingSupport />
      <TechnicalPrivacy />
      <Performance />
      <Support />
      <Footer />
    </main>
  )
}