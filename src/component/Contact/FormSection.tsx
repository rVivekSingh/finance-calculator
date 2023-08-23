import Image from "next/image";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../Button";
import { Card, CardBody } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";
import Textarea from "../Textarea";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleMessageChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  return (
    <Section>
      <p className="text-3xl dark:text-white font-medium leading-[46px] mb-14">
        Have a question? <br /> Let&apos;s get in touch
      </p>
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="lg:pr-10">
          <form target="_blank" action="https://formsubmit.co/vrathoud8@gmail.com" autoComplete="off" method="POST" >
            <div>
              <FormInput
                placeholder="Name"
                label="Full Name"
                name="fullname"
                className="bg-gray-200 dark:bg-slate-600"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <FormInput
                placeholder="Email"
                name="email"
                label="Email"
                className="bg-gray-200 dark:bg-slate-600"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div>
              <Textarea
                placeholder="Message"
                label="Message"
                name="message"
                className="bg-gray-200 dark:bg-slate-600"
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            <div className="mt-6 text-right">
              <Button type="submit" icon={<FaPaperPlane />}>Send Message</Button>
            </div>
          </form>
        </div>

        <div className="max-md:hidden">
          <div className="relative md:w-96 md:h-96 mx-auto">
            <Image
              src="/images/Work-removebg-preview.png"
              fill
              className="object-contain"
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FormSection;
