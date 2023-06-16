import profileImage from "../../assets/Profilbilde_Øystein.jpg";

interface ICard {
  variant: string;
  topLeftImage?: any;
  topRightTitle?: string;
  topRightText?: string;
  bottomLeftTitle?: string;
  bottomLeftText?: string[];
  bottomLeftColor?: string[];
  bottomRightTitle?: string;
  bottomRightList?: string;
}

export const cardContent: ICard[] = [
  {
    variant: "Profile",
    topLeftImage: profileImage,
    topRightTitle: "Hei, jeg heter Øystein.",
    topRightText:
      "De tre tingene jeg virkelig liker å jobbe med er Typescript, React og design. Koding er ikke bare min jobb, men også min hobby. I tillegg spiller jeg bass og produserer musikk, og jeg kan også ta noen fine bilder",
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
];
