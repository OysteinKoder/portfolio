import profileImage from "../../assets/Profilbilde_Øystein.jpg";

interface ICard {
  variant: string;
  topLeftImage?: string;
  topRightTitle?: string;
  topRightText?: string;
  bottomLeftTitle?: string;
  bottomLeftText?: string[];
  bottomLeftColor?: string[];
  bottomRightTitle?: string;
  bottomRightList?: string;
}

export const cardContent: ICard = {
  variant: "Profile",
  topLeftImage: profileImage,
  topRightTitle: "Hei, jeg heter Øystein.",
  topRightText:
    "De tre tingene jeg virkelig liker å jobbe med er Typescript, React og design. Denne nettsiden er laget med nettopp en blanding av disse tre elementene! For meg er ikke koding bare en jobb, det er også en hobby. I tillegg spiller jeg bass og produserer musikk.",
  bottomLeftTitle: "Ferdigheter",
  bottomLeftText: [
    "TypeScript ❤️",
    "JavaScript",
    "React ❤️",
    "Next.js",
    "Git",
    "Css",
    "Html",
  ],
  bottomLeftColor: ["#9aebff", "#a4f4c4", "#faf4a4", "#f78db3", "#9aebff"],
  bottomRightTitle: "Utforsker",
  bottomRightList: "Vue.js, C#, DotNet Core, Tailwind, Larvel",
};
