import { NextSeo } from "next-seo";

export interface ISeoProps {
  title: string;
  description?: string | null;
  pathname: string;
  hideExtraTitle?: boolean;
}

const INDEXING_ENABLED = process.env.NEXT_PUBLIC_INDEXING_ENABLED;
let IndexTags = { noindex: true, nofollow: true };
console.log("value=", INDEXING_ENABLED);

if (INDEXING_ENABLED === "false") {
  IndexTags = { noindex: false, nofollow: false };
}

function Seo({ title, description, pathname, hideExtraTitle }: ISeoProps) {
  const url = `https://emininja.com${pathname}`;
  const mainTitle = hideExtraTitle
    ? title
    : `${title} | EmiNinja.com - Your Financial Calculators Hub | Comprehensive Suite of Financial Calculators`;
  return (
    <>
      <NextSeo
        title={mainTitle}
        description={
          description ||
          "Welcome to EmiNinja.com - Unlock Your Financial Potential with our Comprehensive Suite of Financial Calculators"
        }
        canonical={url}
        {...IndexTags}
        openGraph={{
          url: url,
          title: `${title} | EmiNinja`,
          description:
            description ||
            "Welcome to EmiNinja.com - Unlock Your Financial Potential with our Comprehensive Suite of Financial Calculators",
          site_name: "EmiNinja.com",
          type: "website",
          // images: [
          //   {
          //     alt: "Website Image",
          //     width: 284,
          //     height: 177,
          //     url: "https://www.emininja.com/calculator_blurred.jpg",
          //     type: "image/jpeg",
          //   },
          // ],
        }}
      />
    </>
  );
}

export default Seo;
