import { NextSeo } from "next-seo";

export interface ISeoProps {
  title: string;
  description?: string | null;
  pathname: string;
  hideExtraTitle?: boolean;
}

const INDEXING_ENABLED = process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true";
let IndexTags = { noindex: true, nofollow: true };
if (INDEXING_ENABLED) {
  IndexTags = { noindex: false, nofollow: false };
}

function Seo({ title, description, pathname, hideExtraTitle }: ISeoProps) {
  const url = `https://www.schooldetails.org${pathname}`;
  const mainTitle = hideExtraTitle
    ? title
    : `${title} | List of government and private schools in India, organized by state district block & cluster`;
  return (
    <>
      <NextSeo
        title={mainTitle}
        description={
          description ||
          "Find comprehensive information about schools in India, including contact details, organized by state. Our directory includes both government and private schools."
        }
        canonical={url}
        {...IndexTags}
        openGraph={{
          url: url,
          title: `${title} | schooldetails`,
          description:
            description ||
            "Find comprehensive information about schools in India, including contact details, organized by state. Our directory includes both government and private schools.",
          site_name: "schooldetails",
          type: "website",
          images: [
            {
              alt: "School Image",
              width: 284,
              height: 177,
              url: "https://www.schooldetails.org/school_blurred.jpg",
              type: "image/jpeg",
            },
          ],
        }}
      />
    </>
  );
}

export default Seo;
