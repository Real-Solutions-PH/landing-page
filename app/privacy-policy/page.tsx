import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Real Solutions PH collects, uses, and protects your personal data when you use our custom software development and integration services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How Real Solutions PH collects, uses, and protects your personal data when you use our custom software development and integration services.",
    url: "https://www.realsolutionsph.com/privacy-policy",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "How Real Solutions PH collects, uses, and protects your personal data when you use our custom software development and integration services.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-24 px-4 md:px-6">
      <div className="w-full max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">
          Last Updated: March 15, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p>
              At Real Solutions PH, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy will inform you
              about how we look after your personal data when you visit our
              website (regardless of where you visit it from) and tell you about
              your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. The Data We Collect
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Identity Data:</strong> includes first name and last
                name.
              </li>
              <li>
                <strong>Contact Data:</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data:</strong> includes information about how you
                use our website, products, and services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. How We Use Your Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                To provide you with information or services that you request
                from us.
              </li>
              <li>
                To manage our relationship with you, including notifying you
                about changes to our terms or privacy policy.
              </li>
              <li>
                To improve our website, products/services, marketing, and
                customer relationships.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions and they are subject to a duty of confidentiality.
            </p>
            <p className="mt-4">
              We have procedures in place to deal with any suspected personal
              data breach and will notify you and any applicable regulator of a
              breach where we are legally required to do so. All data is stored
              on encrypted servers with access controls, audit logging, and
              regular backups. Payment information is processed by PCI-compliant
              third-party processors and is never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Data Retention
            </h2>
            <p>
              We will only retain your personal data for as long as reasonably
              necessary to fulfil the purposes we collected it for, including
              for the purposes of satisfying any legal, regulatory, tax,
              accounting, or reporting requirements. To determine the
              appropriate retention period for personal data, we consider the
              amount, nature, and sensitivity of the personal data, the
              potential risk of harm from unauthorized use or disclosure, the
              purposes for which we process your personal data, and applicable
              legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Your Legal Rights
            </h2>
            <p>
              Under applicable data protection laws, including the Philippines
              Data Privacy Act of 2012 (Republic Act No. 10173), you have the
              right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p className="mt-4">
              You will not have to pay a fee to access your personal data or to
              exercise any of the other rights. We may need to request specific
              information from you to help us confirm your identity and ensure
              your right to access your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to
              improve user experience, analyze site usage, and deliver relevant
              content. We use Vercel Analytics and Vercel Speed Insights to
              measure performance and traffic patterns. You can set your browser
              to refuse all or some browser cookies, or to alert you when
              websites set or access cookies. If you disable or refuse cookies,
              please note that some parts of this website may become
              inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Third-Party Services
            </h2>
            <p>
              We may use third-party services to support our operations,
              including cloud hosting providers, analytics platforms, email
              service providers, and payment processors. These third parties
              have access to your personal data only to perform specific tasks
              on our behalf and are obligated not to disclose or use it for any
              other purpose. Where you click on links to third-party websites,
              those websites have their own privacy policies and we do not
              accept any responsibility or liability for them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              we make will be posted on this page with an updated revision date.
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we are protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-black/5 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <p className="font-semibold">Real Solutions PH</p>
              <p>Batangas, Philippines</p>
              <p>Email: executives.realsolutions.ph@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
