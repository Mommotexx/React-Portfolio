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
            demo: "https://mvj-gericht-restaurant.netlify.app/",
            background: "/images/projects/gericht.jpg",
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
            demo: "https://vg.no",
            background: "/images/projects/alumni.jpg",
        },
    ];
};
