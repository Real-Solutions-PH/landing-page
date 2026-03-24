import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founders of Real Solutions PH — engineers who build tailored business software for Philippine SMEs. Learn about our mission, team, and approach.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Real Solutions PH",
    description:
      "Engineers who bridge technical solutions with business needs. Meet Ervin and Kairus, the founders of Real Solutions PH.",
    url: "https://www.realsolutionsph.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Solutions PH Team",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
