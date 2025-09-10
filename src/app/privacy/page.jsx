import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Privacy Policy - Try On Me',
  description: 'Privacy Policy for Try On Me virtual try-on app for Shopify stores.',
}

function PolicySection({ title, children }) {
  return (
    <section className="mt-12">
      <Subheading as="h2">{title}</Subheading>
      <div className="mt-6 space-y-6 text-sm/6 text-gray-600">
        {children}
      </div>
    </section>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Privacy Policy</Heading>
      <Lead className="mt-6 max-w-3xl">
        Your privacy is important to us. This Privacy Policy explains how Try On Me collects, uses, and protects your information when you use our virtual try-on application.
      </Lead>
      <div className="mt-8 text-sm text-gray-500">
        <p><strong>Last updated:</strong> September 10, 2025</p>
        <p><strong>Effective date:</strong> September 10, 2025</p>
      </div>
    </Container>
  )
}

function PrivacyContent() {
  return (
    <Container className="my-20">
      <div className="max-w-4xl">
        <PolicySection title="1. Who We Are">
          <p>
            Try On Me is a virtual try-on application for Shopify stores, developed by Viraj Perera. 
            We enable customers to virtually try on clothing and accessories using AI-powered technology.
          </p>
          <p>
            <strong>Contact Information:</strong><br />
            Email: viraj.perera.dev@gmail.com<br />
            Address: Verona, Italy<br />
            Data Protection Officer: viraj.perera.dev@gmail.com
          </p>
        </PolicySection>

        <PolicySection title="2. Information We Collect">
          <p><strong>2.1 Personal Information You Provide:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Photos:</strong> Images you upload to use our virtual try-on feature</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our app</li>
            <li><strong>Device Information:</strong> Browser type, device type, operating system</li>
          </ul>

          <p><strong>2.2 Information We Receive from Shopify:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Store information (store name, domain)</li>
            <li>Product information (for virtual try-on functionality)</li>
            <li>Basic user interaction data</li>
          </ul>

          <p><strong>2.3 Automatically Collected Information:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li>IP address and geolocation data</li>
            <li>Session data and analytics</li>
            <li>Error logs and performance data</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. How We Use Your Information">
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Virtual Try-On Processing:</strong> Your photos are processed using AI to generate virtual try-on images</li>
            <li><strong>Service Delivery:</strong> To provide and improve our virtual try-on functionality</li>
            <li><strong>Analytics:</strong> To understand usage patterns and improve our service</li>
            <li><strong>Support:</strong> To respond to your questions and provide customer support</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
          </ul>
        </PolicySection>

        <PolicySection title="4. AI and Automated Processing">
          <p>
            <strong>4.1 AI-Powered Virtual Try-On:</strong> We use artificial intelligence to process your photos 
            and generate virtual try-on images. This processing is automated and typically takes 15-30 seconds.
          </p>
          <p>
            <strong>4.2 Data Used for AI:</strong> Your uploaded photos are temporarily processed by our AI systems 
            to create virtual try-on images. We do not use your photos to train our AI models.
          </p>
          <p>
            <strong>4.3 Your Rights Regarding Automated Processing:</strong> You have the right to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Know when automated processing is being used</li>
            <li>Request human review of automated decisions (where applicable)</li>
            <li>Object to automated processing of your data</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. Data Sharing and Third Parties">
          <p>We share your information only in the following circumstances:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>AI Processing Service:</strong> Your photos are securely transmitted to our AI processing partner for virtual try-on generation</li>
            <li><strong>Shopify Platform:</strong> Basic usage analytics to comply with Shopify's requirements</li>
            <li><strong>Service Providers:</strong> Trusted third parties who help us operate our service (hosting, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
          <p>
            <strong>We do not sell your personal information.</strong> We do not share your photos with any third parties 
            except for the AI processing necessary to provide the virtual try-on service.
          </p>
        </PolicySection>

        <PolicySection title="6. Data Security">
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Encryption in transit (HTTPS/TLS)</li>
            <li>Secure data processing with authorized AI partners</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Secure data deletion procedures</li>
          </ul>
        </PolicySection>

        <PolicySection title="7. Data Retention">
          <p><strong>Photos:</strong> Your uploaded photos are automatically deleted from our servers within 24 hours of processing.</p>
          <p><strong>Generated Images:</strong> Virtual try-on results are stored temporarily and deleted within 30 days unless you download them.</p>
          <p><strong>Usage Data:</strong> Analytics and usage data is retained for up to 2 years for service improvement.</p>
          <p><strong>Account Data:</strong> Store and merchant data is retained as long as our app is installed on your store.</p>
        </PolicySection>

        <PolicySection title="8. Your Rights">
          <p><strong>8.1 For EU Residents (GDPR):</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Restriction:</strong> Request limitation of processing</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
          </ul>

          <p><strong>8.2 For California Residents (CCPA/CPRA):</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Know:</strong> Know what personal information we collect and how it's used</li>
            <li><strong>Access:</strong> Access your personal information</li>
            <li><strong>Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-Out:</strong> Opt out of the sale or sharing of personal information</li>
            <li><strong>Correct:</strong> Request correction of inaccurate information</li>
            <li><strong>Non-Discrimination:</strong> Not receive discriminatory treatment for exercising these rights</li>
          </ul>

          <p><strong>To Exercise Your Rights:</strong> Contact us at privacy@tryonme.app with your request.</p>
        </PolicySection>

        <PolicySection title="9. International Data Transfers">
          <p>
            Your data may be processed in countries other than your own. We ensure appropriate safeguards are in place:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Standard Contractual Clauses (SCCs) for EU transfers</li>
            <li>Adequacy decisions where available</li>
            <li>Data Processing Agreements with all processors</li>
            <li>Regular assessments of transfer mechanisms</li>
          </ul>
        </PolicySection>

        <PolicySection title="10. Cookies and Tracking">
          <p>We use essential cookies and similar technologies to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Enable core functionality of our app</li>
            <li>Remember your preferences</li>
            <li>Analyze usage patterns (with consent)</li>
            <li>Improve our service</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling cookies may affect 
            the functionality of our app.
          </p>
        </PolicySection>

        <PolicySection title="11. Children's Privacy">
          <p>
            Our service is not intended for children under 13 (or 16 in the EU). We do not knowingly collect 
            personal information from children. If you believe we have collected information from a child, 
            please contact us immediately.
          </p>
        </PolicySection>

        <PolicySection title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Posting the updated policy on our website</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending notification through the Shopify app (for significant changes)</li>
          </ul>
        </PolicySection>

        <PolicySection title="13. Contact Us">
          <p>If you have questions about this Privacy Policy or our data practices, contact us:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Email:</strong> viraj.perera.dev@gmail.com</p>
            <p><strong>Address:</strong> Verona, Italy</p>
            <p><strong>Phone:</strong> +39 331 8403209</p>
            <p><strong>Data Protection Officer:</strong> viraj.perera.dev@gmail.com</p>
          </div>
        </PolicySection>

        <PolicySection title="14. Shopify-Specific Information">
          <p><strong>For Shopify Merchants:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li>We comply with Shopify's mandatory compliance webhooks</li>
            <li>We respond to data subject requests within 30 days</li>
            <li>We support Shopify's customer data request and deletion processes</li>
            <li>Our app integrates with Shopify's privacy settings</li>
          </ul>

          <p><strong>For Store Customers:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Your interaction with our app is governed by this policy</li>
            <li>The merchant's privacy policy also applies to their store</li>
            <li>You can contact us directly regarding our app's data processing</li>
          </ul>
        </PolicySection>
      </div>
    </Container>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  )
}