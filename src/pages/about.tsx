import BannerSection from "@/component/About/BannerSection";
import Container from "@/component/Container";
import Layout from "@/component/Layout/Layout";
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
    name: "Vivek Singh Rathore",
    role: "Backend Developer",
    image: "/images/dev-2.png",
    icon: "😎",
    description:
      "Experienced in building robust and efficient server-side applications.",
    socialLinks: {
      github: "https://github.com/vivek",
      linkedin: "https://linkedin.com/in/vivek",
    },
  },
];

const about = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/about" }}>
      <Container>
        <BannerSection />

        <Section title="About Us">
          <div className="py-8">
            <p>
              Welcome to our Loan Calculator website! We are a team of finance
              enthusiasts dedicated to helping you make informed financial
              decisions.
            </p>
            <p>
              Our easy-to-use loan calculator tool is designed to assist you in
              estimating your monthly loan payments, interest rates, and loan
              terms. Whether you&apos;re planning to buy a car, a home, or
              simply need a personal loan, our calculator can help you crunch
              the numbers.
            </p>
            <p>
              We understand that financial planning can be complex, and our
              mission is to simplify it for you. Feel free to explore our
              website, use our loan calculator, and reach out to us if you have
              any questions or feedback.
            </p>
            <p>
              Thank you for choosing us as your financial companion. We look
              forward to assisting you on your journey towards a more secure
              financial future.
            </p>

            <div className="mt-8 pt-7">
              <h2 className="text-2xl font-semibold mb-4">
                Meet the Developers
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {developers.map((developer, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md flex max-xl:flex-col overflow-hidden"
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
                      <h3 className="text-lg font-medium dark:text-gray-800">
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
                          className="bg-gray-700 lg:bg-gray-400 hover:bg-gray-700"
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
