import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Real Solutions PH",
  description: "Terms of Service for Real Solutions PH. Please read these terms carefully before using our services.",
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

        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: March 15, 2026</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Real Solutions PH (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p>
              Real Solutions PH provides custom software integrations, automation solutions, and technical consulting services for small and medium-sized enterprises (SMEs). Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Integration Audits and Roadmaps.</li>
              <li>Custom technical integration projects between third-party software tools.</li>
              <li>Managed integration operations and maintenance retainers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
            <p>
              Fees for our services are outlined in specific project proposals or service agreements. Payment terms, including deposit requirements and milestone payments, will be specified in the individual agreement for each engagement. All fees are non-refundable unless otherwise stated in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property rights in the deliverables created specifically for you as part of a project will transfer to you upon full payment of the project fees. We retain ownership of any pre-existing tools, libraries, or methodologies used in the delivery of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Real Solutions PH shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of clinical services or third-party integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Batangas, Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us:
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
