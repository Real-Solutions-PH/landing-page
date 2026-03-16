import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Real Solutions PH",
  description: "Privacy Policy for Real Solutions PH. Learn how we collect, use, and protect your data.",
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

        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: March 15, 2026</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              At Real Solutions PH, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> includes first name and last name.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To provide you with information or services that you request from us.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To improve our website, products/services, marketing, and customer relationships.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
