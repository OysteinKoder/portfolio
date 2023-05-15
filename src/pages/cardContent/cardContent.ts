import profileImage from "../../assets/Profilbilde_Øystein.jpg";
import learnCode from "../../assets/learnCode.jpg";
interface ICard {
  topLeftImage: any;
  topRightTitle: string;
  topRightText: string;
  bottomLeftTitle: string;
  bottomLeftText: string[];
  bottomLeftColor: string[];
  bottomRightTitle: string;
  bottomRightList: string;
}

export const cardContent: ICard[] = [
  {
    topLeftImage: profileImage,
    topRightTitle: "Hei, jeg heter Øystein.",
    topRightText:
      "De tre tingene jeg virkelig liker å jobbe med er Typescript, React og design. Koding er ikke bare min jobb, men også min lidenskap. I tillegg spiller jeg bass og produserer musikk, og jeg kan også ta noen fine bilder",
    bottomLeftTitle: "Ferdigheter",
    bottomLeftText: [
      "TypeScript ❤️",
      "JavaScript",
      "React ❤️",
      "Git",
      "Css",
      "Html",
    ],
    bottomLeftColor: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3"],
    bottomRightTitle: "Utforsker",
    bottomRightList: "Vue.js, C#, DotNet Core, Tailwind, Larvel",
  },
  //   {
  //     topLeftImage: learnCode,
  //     topRightTitle: "React Læringsprosjekt",
  //     topRightText:
  //       "Dette er et prosjekt man kan laste ned fra github for å lære seg React. Det er åpent for alle og har flere stjerner / anbefalinger. Prosjektet går igjennom de viktigste prinsippene i React og krever at man har litt kjennskap til javascript html og css.",
  //     bottomLeftTitle: "Ferdigheter man lærer",
  //     bottomLeftText: [
  //       "Styled-Components",
  //       "JavaScript",
  //       "React",
  //       "Git",
  //       "Css",
  //       "Html",
  //     ],
  //     bottomLeftColor: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3"],
  //     bottomRightTitle: "Forkunnskaper",
  //     bottomRightList: "Html, Javascript React",
  //   },
];
