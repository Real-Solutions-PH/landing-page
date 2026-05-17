import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of Real Solutions PH custom software development, system integration, and managed services in the Philippines and internationally.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service",
    description:
      "Terms governing use of Real Solutions PH custom software development, system integration, and managed services in the Philippines and internationally.",
    url: "https://www.realsolutionsph.com/terms-of-service",
    siteName: "Real Solutions PH",
    locale: "en_PH",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service",
    description:
      "Terms governing use of Real Solutions PH custom software development, system integration, and managed services in the Philippines and internationally.",
    images: ["/og-image.png"],
  },
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-12">
          Last Updated: March 15, 2026
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services provided by Real Solutions PH
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Description of Service
            </h2>
            <p>
              Real Solutions PH provides custom software integrations,
              automation solutions, and technical consulting services for small
              and medium-sized enterprises (SMEs). Our services include but are
              not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Integration Audits and Roadmaps.</li>
              <li>
                Custom technical integration projects between third-party
                software tools.
              </li>
              <li>Managed integration operations and maintenance retainers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Payment Terms
            </h2>
            <p>
              Fees for our services are outlined in specific project proposals
              or service agreements. Payment terms, including deposit
              requirements and milestone payments, will be specified in the
              individual agreement for each engagement. All fees are
              non-refundable unless otherwise stated in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property
              rights in the deliverables created specifically for you as part of
              a project will transfer to you upon full payment of the project
              fees. We retain ownership of any pre-existing tools, libraries, or
              methodologies used in the delivery of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4a. Warranties and Disclaimers
            </h2>
            <p>
              We warrant that the services will be performed in a professional
              and workmanlike manner, consistent with generally accepted
              industry standards. Except as expressly stated in these terms,
              all services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, either
              express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4b. Client Responsibilities
            </h2>
            <p>
              You agree to provide timely access to information, systems,
              credentials, and personnel reasonably required for us to perform
              the services. You are responsible for the accuracy and legality
              of all data, content, and materials you provide. You will
              maintain appropriate backups of any data we may access or
              process. Delays caused by client unresponsiveness may result in
              extended project timelines and additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4c. Confidentiality
            </h2>
            <p>
              Each party agrees to maintain the confidentiality of any
              proprietary or non-public information disclosed by the other
              party during the course of the engagement. Confidential
              information will not be disclosed to third parties without prior
              written consent, except as required by law. This obligation
              survives termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Real Solutions PH shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, resulting from
              your use of our services or third-party integrations. Our
              aggregate liability for any claim arising under these terms shall
              not exceed the fees paid by you for the specific service giving
              rise to the claim during the three (3) months preceding the
              event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5a. Termination
            </h2>
            <p>
              Either party may terminate an engagement with written notice
              under the conditions described in the applicable service
              agreement. Upon termination, you will pay for all work performed
              up to the termination date. Sections of these terms that by
              their nature should survive termination — including intellectual
              property, confidentiality, and limitation of liability — will
              continue to apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the Republic of the Philippines. Any
              disputes arising under or in connection with these terms shall be
              subject to the exclusive jurisdiction of the courts located in
              Batangas, Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms of Service, please contact
              us:
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
