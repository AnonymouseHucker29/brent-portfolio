export default interface ISkills {
  id: number;
  title: string;
  icons: {
    name: string;
    logo: JSX.Element;
    description: string;
  }[];
}
