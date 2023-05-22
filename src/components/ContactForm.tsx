import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledInputSend,
  StyledTextArea,
} from "./formStyles";
import { SubTitle } from "./cardProfile/cardStyles";
import { FlexWrapper, MarginSpacer } from "./uiHelpers/uiHelpers";
import { AiOutlineMail } from "react-icons/ai";
export const Contact = () => {
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
      <SubTitle>Ta Kontakt</SubTitle>
      <MarginSpacer size="medium" />
      <FlexWrapper direction="row" width="medium" margin="auto">
        <AiOutlineMail size="65%" />
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledInput type="text" name="navn" placeholder="Navn..." />

          <StyledTextArea name="melding" placeholder="Melding..." />

          <StyledInput type="tlf" name="tlf" placeholder="Tlf..." />

          <StyledInput type="email" name="email" placeholder="Email" />
          <StyledInputSend type="submit" value="Send" />
        </StyledForm>
      </FlexWrapper>
    </>
  );
};
