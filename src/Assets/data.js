import photoDog from "./dogs.jpg";
import photoKislev from "./kislev.jpg";
import photoOrca from "./photo-orca.jpg";

export const DATA_PROJECTS = ()=>{
    return[
            {
               name: "Dogs",
               type: "estudos",
               tech: ["react", "sass",],
               shortDescription: "Projeto final do curso de react.js completo da Origamid. Projeto criado para praticar o consumo de APIs e o padrão de projeto MCV. ",
               largeDescription: <div><b>Dogs</b> é uma rede social para cachorros com funcionalidades parecidas com a do instagram. É um excelente projeto de estudos que me introduziu muito do gigantesco mundo do React. 
                <br/><br/>
               Ao fazer o <b>sistema de comentários, integração com api, login de usuário,</b> etc, fui apresentado aos eventos, componentes e propriedades básicos da biblioteca. Podendo colocar em prática o conceito de <b>SPA (single page application)</b> tão usado nos maiores players do mercado de tecnologia. Exemplo: instagram, linkedin, spotify, ifood, etc. 
               <br/><br/>
               O <b>André Rafael</b> acertou em cheio, não só na sua maravilhosa didática no curso de <b>React Completo da Origamid</b>, como também na criação de um projeto atual, diverso em usos da ferramenta e muito bonito. 
               <br/><br/>
               </div>,
               photo: photoDog,
               links: {
                   figma: false,
                   git: "//www.github.com/Rafa-py/dogs",
                   site: "//rafa-py.github.io/dogs/"
               }
            },
            {
                name: "Kislev",
                type: "freelancer",
                tech: ["vanilla", "sass",],
                shortDescription: "Barbearia",
                largeDescription: <div>
                 A <b>Kislev</b> é uma Barbearia na Vila Invernada (zona leste de São Paulo), comandada pelo <b>Matheus Vagner Bellantani.</b> Ele e seu pai atendem com extrema qualidade e carinho desde 2018. 
                 <br/><br/>
                 Conheci o <b>Vagner</b> ainda quando fazíamos ensino médio e foi um prazer inenarrável vê-lo construir o seu sonho: seu próprio negócio. Começando com uma barbearia improvisada na garagem dos pais e chegando a um salão profissional com uma clientela fiel. 
                 <br/><br/>
                 Nesse projeto que marca a inauguração da presença digital da <b>Kislev,</b> atuei como <b>UI Designer e Desenvolvedor Front End.</b> Não ouso dizer que também fui fotógrafo porque infelizmente não tenho formação na área, mas as fotos que estão no site também foram tiradas por mim, com a ajuda e paciência infinita do Vagner para fazer e refazer poses enquanto eu procurava os melhores ângulos e iluminação. O projeto foi feito com o <b>fígma</b> para o design, <b>HTML, SASS e Javascript Vanilla</b> para o front end. 
                 <br/><br/>
                 <p style={{color: "#F37678", fontWeight: "bold"}}>OBS: ainda estamos em processo de adquirir o domínio e a hospedagem. Portanto, o site está no disponível no github pages para testes. Confira a versão inicial! </p>
                </div>,
                photo: photoKislev,
                links: {
                    figma: "//www.figma.com/file/6kw87sdKXTbcHZjnXY0tM6/Kislev-Barbearia?node-id=122%3A331&t=AzNldGlkcaC0siij-1",
                    git: "//www.github.com/Rafa-py/Kislev",
                    site: "//rafa-py.github.io/Kislev/"
                }
             },
            {
                name: "Orca",
                type: "freelancer",
                tech: ["wordpress", "sass",],
                shortDescription: "Reguladora de Sinistro",
                largeDescription: <div><b>A Orca</b> é uma empresa que regula sinistro e tem expertise em todos os ramos de seguros em âmbito nacional. Tem sua cede em São Paulo e mais de 1000 colaboradores pelo Brasil. 
                <br/><br/>
                <b>Eu e o Matheus Felix (Desenvolvedor Front End)</b> tivemos a oportunidade de inaugurar a presença da Orca na Web, com uma landing page moderna e com informações diretas sobre as áreas de atuação da empresa. 
                <br/><br/>
                Nesse projeto atuei apenas como UI Designer. O cliente já tinha uma logo e o laranja (EB7700) já fazia parte da identidade visual. Fiz alguns testes de layout e cheguei a três protótipos que harmonizavam com a logo (os três estão disponíveis no link do fígma). Desses protótipos o cliente optou pelo com o fundo roxo (1B1925), que está bastante presente no header, na seção Nossa Equipe e nos Contatos.</div>,
                photo: photoOrca,
                links: {
                    figma: "//www.figma.com/file/TmMLqB0pp215sk6rkPBBBY/Orca-Reguladora-de-Sinistro?node-id=42%3A372&t=hDM49c8H4TJD9Pjh-1",
                    site: "//orcareguladora.com.br/"
                }
             },
           ]
    }
