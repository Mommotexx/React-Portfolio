import technologies from "./technologies";
export const projectitem = () => {
    return [
        {
            title: "Gericht Restaurant",
            shortDescription:
                "A frontend website made from a figma design. Using BEM CSS model. ",
            technologies: [
                technologies.react,
                technologies.javascript,
                technologies.css,
            ],
            demo: "https://gericht.marcusjohansen.com/",
            background: "/images/projects/gericht-resized.jpg",
        },
        {
            title: "Alumni Network",
            shortDescription:
                "A fullstack social media platform coded in Javascript (React) and Java Spring",
            technologies: [
                technologies.java,
                technologies.spring,
                technologies.react,
                technologies.javascript,
            ],
            demo: "https://alumni.marcusjohansen.com/",
            background: "/images/projects/alumni-resized.jpg",
        },
    ];
};
