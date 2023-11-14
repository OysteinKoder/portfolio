import { TextBox } from "./experianceSection/styles";
import { Spacer, StyledSection } from "./uiHelpers/uiHelpers";
import { useEffect, useMemo, useState } from "react";

type Props = {
  reference: any;
};

const ExperienceSection = ({ reference }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    [reference]
  );

  useEffect(() => {
    observer.observe(reference.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StyledSection
        ref={reference}
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
            I Kodehode trener vi opp lovende tallenter i webutvikling over en
            periode på ett år. I de første seks månedene lærer deltagerne
            frontend faget og noe av det siste de går igjennom er react.js. I de
            resterende månedene får de praksis hos våre samarbeidspartnere.
            <br />
            <br />I Jobloop leies jeg også ut som teknisk annsvarlig i et app
            utviklings prosjekt for fontenehuset. Arbeidsoppgavene mine der går
            ut på å sikre framdrift av utviklingen og opptrening av nye
            utviklere i git og scrum metodikken.
          </p>
          <i>Verktøy</i>
          <ul>
            <li>Css, Html, JavaScript, TypeScript</li>
            <li>React.js</li>
            <li>Styled-components</li>
            <li>Google Classroom</li>
            <li>Git, github</li>
            <li>Scrum</li>
          </ul>
        </TextBox>
        <Spacer size="medium" />
        <TextBox>
          <h3>Turnuskandidat</h3>
          <i>Dnb Liv og Pensjon</i>
          <br />
          <i>Oktober 2021 - mars 2022</i>
          <br />
          <p>
            Hos DNB arbeidet jeg som juniorutvikler på deres nye bedriftsportal.
            Oppgaven jeg fikk var å utvikle en underside som informerer og
            videresender brukeren til diverse moduler i deres
            kommunikasjonspakke for bedrifter. Det modulene har til felles er at
            de handler om pensjon og at de informerer om DNB sine forskjellige
            læringsverktøy angående dette.
          </p>
          <i>Verktøy</i>
          <ul>
            <li>Css, Html, JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Eufemia, Dnb's komponentbibliotek</li>
            <li>Git, Bitbucket</li>
            <li>Jira</li>
          </ul>
        </TextBox>
      </StyledSection>
    </>
  );
};

export default ExperienceSection;
