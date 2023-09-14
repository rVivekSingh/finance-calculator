import { BannerImage } from "@/component/BannerImage";
import Container from "@/component/Container";
import Layout from "@/component/Layout";
import Section from "@/component/Section";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const developers = [
  {
    name: "Divesh Gole",
    role: "Frontend Developer",
    image: "/images/dev-1.png",
    icon: "🤓",
    description:
      "Passionate about creating user-friendly and visually appealing web interfaces.",
    socialLinks: {
      github: "https://github.com/goledivesh",
      linkedin: "https://linkedin.com/in/diveshgole/",
    },
  },
  {
    name: "Vivek Singh Rathor",
    role: "Engineer by Accident",
    image: "/images/dev-2.png",
    icon: "😎",
    description:
      "Experienced in building robust and efficient server-side applications.",
    socialLinks: {
      github: "https://github.com/rVivekSingh",
      linkedin: "https://www.linkedin.com/in/rviveksingh/",
    },
  },
];

const about = () => {
  return (
    <Layout seo={{ title: "About | EmiNinja | Emi Calculators", pathname: "/about" }}>
      <Container>
        <BannerImage className="mt-8 lg:mt-12" imageUrl="/images/banner-1.png" />

        <Section title="About Us">
          <div>
            <p>
              We are a team of highly motivated professionals, driven by the
              enthusiasm to help you in making wise financial decisions.
              We&apos;re a team of super motivated folks, fueled by our passion
              to help you make smart financial choices.
            </p>
            <p>
              Our user-friendly loan calculator instrument has been crafted to
              aid you in approximating your monthly loan payments, interest
              rates, and loan provisions. Whether you are contemplating
              purchasing a car, a house, or simply necessitate a personal loan,
              our calculator is adept at facilitating you to scrutinize the
              figures.
            </p>
            <p>
              At the core of our beliefs lies the recognition that financial
              planning can be a labyrinthine journey, fraught with intricacies
              and complexities that can leave even the most seasoned of
              individuals feeling overwhelmed and lost. Our mission, therefore,
              is to act as your guide through these murky waters, simplifying
              the process and illuminating the way forward. We invite you to
              peruse our website at your leisure, utilizing our invaluable loan
              calculator, and should you require any further assistance or wish
              to impart feedback, please do not hesitate to contact us.
            </p>
            <p>
              Thank you for selecting us as your trusted financial comrade. We
              eagerly anticipate rendering our aid as you voyage towards a
              fortified and stable financial horizon.
            </p>

            <div className="mt-8 pt-7">
              <h2 className="text-2xl font-medium mb-4">
                Meet the Developers
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {developers.map((developer, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-2 border flex max-lg:flex-col overflow-hidden"
                  >
                    <div className="dev-image-clip">
                      <Image
                        src={developer.image}
                        className="object-cover"
                        fill
                        alt=""
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg m-0 font-medium dark:text-gray-800">
                        {developer.name} {developer.icon}
                      </h3>
                      <p className="text-sm dark:text-gray-400">
                        {developer.role}
                      </p>
                      <p className="dark:text-gray-700 mb-6">
                        {developer.description}
                      </p>
                      <div className="mt-4 social-links flex items-center gap-3">
                        <a
                          href={developer.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 lg:bg-gray-500 hover:bg-gray-700"
                        >
                          <FaGithub /> <span>Github</span>
                        </a>
                        <a
                          href={developer.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-800 lg:bg-blue-500 hover:bg-blue-800"
                        >
                          <FaLinkedinIn /> <span>Linkedin</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </Layout>
  );
};

export default about;
