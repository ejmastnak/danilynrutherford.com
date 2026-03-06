import { useRef, useState, useEffect  } from "react"
import type { FormEvent } from "react"
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import TextInput from "@tina/components/TextInput.tsx"
import TextArea from "@tina/components/TextArea.tsx"
import RadioInput from "@tina/components/RadioInput.tsx"
import InputError from "@tina/components/InputError.tsx"
import InputLabel from "@tina/components/InputLabel.tsx"
import PrimaryButton from "@tina/components/PrimaryButton.tsx"

import type { MyContactPageQuery, MyContactPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyContactPageQueryVariables;
  data: MyContactPageQuery;
  query: string;
};

export default function ContactPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const contactPage = data.contactPage;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const FEEDBACK_MESSAGE = "The form is currently disabled from sending messages, and nothing happens when you submit the form besides this message appearing."
  const FEEDBACK_TIMEOUT_MS = 10000
  const [feedbackMessage, setFeedbackMessage] = useState(null)
  const timeoutRef = useRef(null)

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setFeedbackMessage(FEEDBACK_MESSAGE)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setFeedbackMessage(null);
      timeoutRef.current = null;
    }, FEEDBACK_TIMEOUT_MS);

  }

  // Clean up timeoutRef
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(contactPage, "h1")} className="text-5xl">{contactPage.h1}</h1>

      {/* Intro message */}
      <div data-tina-field={tinaField(contactPage, "intro")} className="mt-8 prose text-gray-700 max-w-2xl">
        <TinaMarkdown content={contactPage.intro} />
      </div>

      {/* Contact form */}
      <div className="mt-5 relative rounded-xl bg-gray-50 p-5 border border-gray-200 -m-5 overflow-hidden">

        <h2 data-tina-field={tinaField(contactPage, "contactFormHeading")}className="text-3xl">{contactPage.contactFormHeading}</h2>

        <form data-tina-field={tinaField(contactPage, "contactForm")} className="mt-4" onSubmit={submitForm}>

          <div className="w-full max-w-xl">
            <InputLabel htmlFor="name" value={contactPage.contactForm.contactFormNameLabel} />
            <TextInput
              id="name"
              type="text"
              className="inline-block w-72"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contactPage.contactForm.contactFormNamePlaceholder}
              required
            />
          </div>

          <div className="mt-5 w-full max-w-xl">
            <InputLabel htmlFor="message" value={contactPage.contactForm.contactFormMessageLabel} />
            <TextArea
              id="message"
              className="block w-full h-48 text-sm max-w-xl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contactPage.contactForm.contactFormMessagePlaceholder}
              required
            />
          </div>

          {/* Email */}
          <div className="mt-5 w-full max-w-xl">
            <InputLabel htmlFor="email" value={contactPage.contactForm.contactFormEmailLabel} />
            <TextInput
              id="email"
              type="email"
              className="inline-block w-72"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={contactPage.contactForm.contactFormEmailPlaceholder}
              required
            />
          </div>

          <PrimaryButton className="mt-8" type="submit" >
            {contactPage.contactForm.contactFormSubmitButtonText}
          </PrimaryButton>

          {feedbackMessage &&
            <p className="mt-1 max-w-md text-yellow-800 font-medium">
              {feedbackMessage}
            </p>
          }

        </form>

      </div>

      {/* Direct contact data */}
      <div className="mt-16">
        <h2 data-tina-field={tinaField(contactPage, "contactDirectlyHeading")} className="text-3xl" id="contact-directly">{contactPage.contactDirectlyHeading}</h2>
        <div className="mt-4">
          <div  data-tina-field={tinaField(contactPage, "contactDirectlyText")} className="prose">
            <TinaMarkdown content={contactPage.contactDirectlyText} />
          </div>
          <ul className="mt-4 ml-5 list-disc prose">
            <li data-tina-field={tinaField(contactPage, "emailText")}>{contactPage.emailText} <a className="hover:text-blue-600" href={`mailto:${contactPage.email}`}>{contactPage.email}</a></li>
            <li data-tina-field={tinaField(contactPage, "phoneText")}>{contactPage.phoneText} <a className="hover:text-blue-600" href={`tel:${contactPage.phoneMachineReadable}`}>{contactPage.phone}</a> </li>
          </ul>
        </div>
      </div>

    </PageWrapper>
  );
}
