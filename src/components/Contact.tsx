import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Navn</label>
      <input type="text" name="navn" />
      <label>Melding</label>
      <textarea name="melding" />
      <label>Tlf</label>
      <input type="tlf" name="tlf" />
      <label>Email</label>
      <input type="email" name="email" />
      <input type="submit" value="Send" />
    </form>
  );
};
