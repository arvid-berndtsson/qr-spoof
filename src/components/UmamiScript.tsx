export default function UmamiScript() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const baseUrl = process.env.NEXT_PUBLIC_UMAMI_URL;

  if (!websiteId || !baseUrl) {
    console.log("Umami: Missing configuration", { websiteId, baseUrl });
    return null;
  }

  console.log("Umami: Loading script", { websiteId, baseUrl });

  return (
    <script
      defer
      src={`${baseUrl}/script.js`}
      data-website-id={websiteId}
      data-domains="qrspoof.com"
    />
  );
} 