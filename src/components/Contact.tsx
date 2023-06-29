import { useRef, FC } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledForm,
  StyledInput,
  StyledInputSend,
  StyledTextArea,
} from "./formStyles";
import { SubTitle } from "./cardProfile/cardStyles";
import { Wrapper, Spacer } from "./uiHelpers/uiHelpers";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

export const Contact: FC<Props> = (props) => {
  const form: any = useRef();
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
        },
        (error: { text: string }) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Spacer size="large" />
      <section ref={props.reference}>
        <SubTitle>Ta Kontakt</SubTitle>
        <Spacer size="medium" />
        <Wrapper
          leftOnMobile={false}
          direction="column"
          width="medium"
          margin="auto"
        >
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
            <StyledInputSend type="submit" value="Send" />
          </StyledForm>
        </Wrapper>
      </section>
    </>
  );
};