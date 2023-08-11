import { TextBox } from "./experiance_section/styles";
import { Spacer, StyledSection } from "./uiHelpers/uiHelpers";
import { FC, useEffect, useMemo, useState } from "react";

interface Props {
  reference: any;
}

const ExperianceSection: FC<Props> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    [props.reference]
  );

  useEffect(() => {
    observer.observe(props.reference.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StyledSection
        ref={props.reference}
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <Spacer size="medium" />
        <h2>Erfaring</h2>
        <Spacer size="medium" />

        <TextBox>
          <h3>Faglig Veileder</h3>
          <i>Jobloop as - Kodehode</i>
          <br />
          <i>Mars 2022 - Nåværende</i>
          <br />
          <p>
            I Kodehode trener vi opp lovende tallenter i frontend utvikling over
            en periode på et år. I de første seks månedene lærer deltagerne
            frontend faget, og i de resterende månedene får de praksis hos
            diverse bedrifter.
          </p>
        </TextBox>
        <Spacer size="medium" />
        <TextBox>
          <h3>Turnuskandidat</h3>
          <i>Dnb Liv og Pensjon</i>
          <br />
          <i>Oktober 2021 - mars 2022</i>
          <br />
          <p>
            Hos Dnb arbeidet jeg som junior-utvikler på deres nye
            bedriftsportal. Oppgaven jeg fikk var å utvikle en underside som
            informerer og videresender brukeren til diverse moduler i deres
            kommunikasjonspakke for bedrifter.
          </p>
        </TextBox>
      </StyledSection>
    </>
  );
};

export default ExperianceSection;
