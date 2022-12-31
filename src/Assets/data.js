import photoDog from "./dogs.jpg";
import photoKislev from "./kislev.jpg";

export const DATA_PROJECTS = ()=>{
    return[
            {
               name: "Dogs",
               type: "estudos",
               tech: ["react", "sass",],
               shortDescription: "Projeto final do curso de react.js completo da Origamid. Projeto criado para praticar o consumo de APIs e o padrão de projeto MCV. ",
               largeDescription: "Ainda vou fazer",
               photo: photoDog,
               links: {
                   figma: false,
                   git: "//www.github.com/Rafa-py/dogs",
                   site: false
               }
            },
             {
               name: "Kislev",
               type: "freelancer",
               tech: ["vanilla", "sass",],
               shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
               largeDescription: "Ainda vou fazer",
               photo: photoKislev,
               links: {
                   figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                   git: "//www.github.com/Rafa-py/Kislev",
                   site: "//rafa-py.github.io/Kislev/"
               }
            },
            {
               name: "Teste 1",
               type: "freelancer",
               tech: ["bootstrap", "sass",],
               shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
               largeDescription: "Ainda vou fazer",
               photo: photoKislev,
               links: {
                   figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                   git: "//github.com/Rafa-py/Kislev",
                   site: "//rafa-py.github.io/Kislev/"
               }
            },
            {
               name: "Teste 2",
               type: "freelancer",
               tech: ["tailwind", "sass",],
               shortDescription: "Landing Page feita para marcar a presencial virtual da Barbearia Kislev",
               largeDescription: "Ainda vou fazer",
               photo: photoKislev,
               links: {
                   figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                   git: "//github.com/Rafa-py/Kislev",
                   site: "//rafa-py.github.io/Kislev/"
               }
            }
           ]
    }
