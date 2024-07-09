import { NextSeo } from "next-seo";
import SocialShare from "../components/social-share";

export default function Home() {
  const pageUrl = "http://yourwebsite.com";
  const pageTitle = "End QR Codes";
  const pageDescription =
    "QR codes are a security liability and enable poor customer experience. Let’s get rid of them.";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        openGraph={{
          url: pageUrl,
          title: pageTitle,
          description: pageDescription,
          site_name: "End QR Codes",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Say No to QR Codes</h1>
        <p className="text-lg text-gray-700 mb-6">
          QR codes are a security liability and enable poor customer experience.
          You got here by scanning a QR code at a restaurant, or on a poster.
          You could just as well had been taken to a website designed to look
          like the real deal, but that was designed to take your money. Let’s
          get rid of the QR codes once and for all. Print this QR code and
          replace the codes you see in public places with this one.
        </p>
        <SocialShare
          url={pageUrl}
          title={pageTitle}
          description={pageDescription}
        />
        <footer className="bg-gray-200 text-center py-4 w-full mt-8">
          <p className="text-gray-600">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
