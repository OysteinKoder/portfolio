import { useRef, FC, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledForm,
  StyledInput,
  StyledInputSend,
  StyledTextArea,
} from "./contactSection/formStyles";
import { SubTitle } from "./profileSection/cardStyles";
import { Wrapper, Spacer, StyledSection } from "./uiHelpers/uiHelpers";
import { useState } from "react";
import { GoCheck } from "react-icons/go";

type Props = {
  reference: any;
};

export const ContactSection: FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null!);

  const [emailState, setEmailState] = useState(Boolean);
  const sendEmail = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p0ljkrp",
        "template_qkwyts4",
        form.current,
        "0Rzuq1f3gP89msAKv"
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
          setEmailState(true);
        },
        (error: { text: string }) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    [props.reference]
  );

  useEffect(() => {
    observer.observe(props.reference.current);
    console.log(typeof props.reference.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Spacer size="large" />
      <StyledSection
        ref={props.reference}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <SubTitle>Ta Kontakt</SubTitle>
        <Spacer size="medium" />
        <Wrapper leftOnMobile={false} direction="column" margin="auto">
          <StyledForm ref={form} onSubmit={sendEmail}>
            <StyledInput
              required
              type="text"
              name="navn"
              placeholder="Navn..."
            />
            <StyledTextArea required name="melding" placeholder="Melding..." />
            <StyledInput
              type="tel"
              pattern="[0-9]{8}"
              required
              name="tlf"
              placeholder="Tlf..."
            />
            <StyledInput
              required
              type="email"
              name="email"
              placeholder="Email"
            />
            <Wrapper direction="row">
              <StyledInputSend type="submit" value="Send" onSubmit={() => {}} />
              {emailState ? <GoCheck size={"1.5rem"} /> : <></>}
            </Wrapper>
          </StyledForm>
        </Wrapper>
      </StyledSection>
    </>
  );
};
