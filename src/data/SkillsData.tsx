import ISkills from "@/interfaces/ISkills"
import { Icons } from "@/components/misc/icons"

const SkillsData: ISkills[] = [
    {
        id: 1,
        title: "Web Technologies",
        icons: [
            {
                name: "HTML5",
                logo: <Icons icons="HTML5" />
            },
            {
                name: "CSS3",
                logo: <Icons icons="CSS3" />
            },
        ],
    },
    {
        id: 2,
        title: "Back-End Technologies",
        icons: [
            {
                name: "JavaScript",
                logo: <Icons icons="JS" />
            },
            {
                name: "TypeScript",
                logo: <Icons icons="TS" />
            },
        ],
    },
]

export default SkillsData