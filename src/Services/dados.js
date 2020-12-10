const filmes = [
    {
        id: 1,
        nome: "Um amor para recordar",
        genero: "Drama e romance",
        capa: "https://m.media-amazon.com/images/M/MV5BMDdiNjVmODYtNzRlMS00ZWI0LWEzYTQtNGQ2ZWQ1OWRkZmU0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
        descricao: "Em plenos anos 90, Landon Carter (Shane West) é punido por ter feito uma brincadeira de mal gosto em sua escola. Como punição ele é encarregado de participar de uma peça teatral, que está sendo montada na escola. É quando ele conhece Jamie Sullivan (Mandy Moore), uma jovem estudante de uma escola pobre."
    },
    {
        id: 2,
        nome: "Dark",
        genero: "Série e ficção",
        capa: "https://i.pinimg.com/736x/fb/82/3d/fb823d7900bb62c2df31c694c9277ddf.jpg",
        descricao: "Adelle (Maria Bello) faz a viagem de Nova York ao País de Gales com sua filha, Sarah (Sophie Stuckey). Lá, Adelle tenta consertar as coisas com o pai de Sarah, James (Sean Bean). A visita se torna trágica quando Sarah desaparece no oceano. Mas então aparece uma jovem chamada Ebril (Abigail Stone) que, estranhamente, parece ter morrido em um suicídio em massa meio século antes. Ebril afirma que a filha de Adelle foi levada para o submundo galês."
    },
    {
        id: 3,
        nome: "Sempre a seu lado",
        genero: "Drama e romance",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/97/20028681.jpg",
        descricao: "O jovem Ronnie revela a seus colegas que seu herói pessoal é um cachorro chamado Hachi. Reforçado por seus colegas alunos, Ronnie continua contando a notável história da amizade de seu avô com o cachorro."
    },
    {
        id: 4,
        nome: "Marley e eu",
        genero: "Drama e romance",
        capa: "https://www.cecierj.edu.br/wp-content/uploads/2014/12/marley26eu-1.jpg",
        descricao: "Os recém-casados John e Jenny Grogan (Owen Wilson, Jennifer Aniston) deixam para trás o nevado Michigan e se mudam para a Flórida, onde compram sua primeira casa e encontram empregos em jornais concorrentes. Logo depois, os Grogans adotam Marley, um adorável filhote de Labrador amarelo. Mas Marley logo cresce e se torna um punhado travesso. Ainda assim, mesmo enquanto ele está destruindo os móveis e falhando na escola de obediência, ele sempre consegue trazer o melhor em John, Jenny e sua crescente família."
    },
    {
        id: 5,
        nome: "Pássaros Feridos",
        genero: "Série romance",
        capa: "https://i.pinimg.com/originals/4b/84/8b/4b848b8873288cb810d7bcdcc09f6510.jpg",
        descricao: "Pássaros feridos é um clássico da escritora australiana Colleen McCullough que narra a história da vida de Meggie Cleary e sua família. Meggie é apenas uma criança quando sua família se muda para Drogheda, onde mora a irmã de seu pai Paddy, Mary, que está velha e se sente perto da morte."
    },
    {
        id: 6,
        nome: "Minha vida em outra vida",
        genero: "Espiritualista",
        capa: "https://br.web.img3.acsta.net/pictures/14/12/16/16/27/556711.jpg",
        descricao: "Depois que a futura mãe Jenny Cole (Jane Seymour) começa a ter sonhos estranhos com uma época e um lugar distantes, ela descobre que desenhou um cenário semelhante quando criança. Ela finalmente percebe que as visões são de uma pequena cidade irlandesa durante os anos 1930, e começa a se perguntar se ela é a alma renascida de uma mulher chamada Mary Sutton, que morreu ao dar à luz ali. Jenny leva seu marido (Clancy Brown) e filho (Kyle Howard) para a Irlanda, onde ela tenta entrar em contato com parentes de Mary."
    },
    {
        id: 7,
        nome: "Em algum lugar do passado",
        genero: "Espiritualista",
        capa: "https://media.fstatic.com/71WLvpxopltFjKCNW9XOFoUZ-5A=/640x480/smart/media/movies/covers/2018/02/005165.jpg",
        descricao: "Em 1972, o dramaturgo Richard Collier (Christopher Reeve) fica fascinado por uma foto de Elise McKenna (Jane Seymour), uma atriz da virada do século, enquanto se hospedava no Grand Hotel em Mackinac Island, Michigan. Conforme a obsessão de Richard cresce, ele aprende com um amigo que a viagem no tempo pode realmente ser possível por meio da hipnose. Richard viaja a tempo para encontrar Elise, e os dois parecem destinados a ficar juntos. No entanto, o gerente ciumento de Elise (Christopher Plummer) tenta mantê-los separados."
    },
    {
        id: 8,
        nome: "Crepúsculo",
        genero: "Série e romance",
        capa: "https://1.bp.blogspot.com/-GYRL91GZYNs/UJmbs11PojI/AAAAAAAACs0/6W2TmVarx88/s1600/01-caparepusculofilme.jpg",
        descricao: "A estudante Bella Swan (Kristen Stewart), sempre um pouco desajustada, não espera que a vida mude muito quando ela se mudar do ensolarado Arizona para o chuvoso estado de Washington. Então ela conhece Edward Cullen (Robert Pattinson), um adolescente bonito, mas misterioso, cujos olhos parecem olhar diretamente em sua alma. Edward é um vampiro cuja família não bebe sangue, e Bella, longe de estar assustada, entra em um romance perigoso com sua alma gêmea imortal."
    },
    {
        id: 9,
        nome: "Amanhecer",
        genero: "Série e romance",
        capa: "https://i.pinimg.com/originals/75/89/d8/7589d87811c5285baa31bd78410706a6.jpg",
        descricao: "Finalmente, Bella (Kristen Stewart) e Edward (Robert Pattinson) vão se casar. Quando Jacob (Taylor Lautner) descobre que Bella quer passar sua lua de mel como humana, ele fica horrorizado - pois a paixão de Edward pode acidentalmente matá-la. Bella realmente sobrevive à lua de mel, mas uma nova complicação surge quando ela descobre que está grávida - e a criança está crescendo em um ritmo alarmante. A gravidez coloca os lobos contra Bella e Edward, mas Jacob jura proteger seu amigo."
    },
    {
        id: 10,
        nome: "O Diabo veste Prada",
        genero: "Drama e romance",
        capa: "https://i.pinimg.com/originals/6e/48/cb/6e48cbd3fe280ea453507c1f41a25ebc.jpg",
        descricao: "Andy (Anne Hathaway) é uma recém-formada na faculdade com grandes sonhos. Ao conseguir um emprego na prestigiosa revista Runway, ela se torna assistente da diabólica editora Miranda Priestly (Meryl Streep). Andy questiona sua capacidade de sobreviver a sua turnê sombria como a garota chicoteada de Miranda sem ser queimada."
    },
    {
        id: 11,
        nome: "A Cabana",
        genero: 'Suspense',
        capa: "https://miro.medium.com/max/1600/1*J0wGz4WgU5zQlitqGKAGGg.jpeg",
        descricao: "Depois de sofrer uma tragédia familiar, Mack Phillips entra em profunda depressão que o faz questionar suas crenças mais profundas. Enfrentando uma crise de fé, ele recebe uma carta misteriosa instando-o a ir para uma cabana abandonada no deserto do Oregon. Apesar de suas dúvidas, Mack vai até a cabana e encontra um trio enigmático de estranhos liderados por uma mulher chamada Papa. Por meio desse encontro, Mack descobre verdades importantes que transformarão sua compreensão de sua tragédia e mudarão sua vida para sempre."
    },
    {
        id: 12,
        nome: "A Bela e a Fera",
        genero: "Romance",
        capa: "https://miro.medium.com/max/1024/1*xUzTIS2EXYSBmpd479vUbA.jpeg",
        descricao: "Um príncipe arrogante é amaldiçoado a viver como uma besta terrível até encontrar o amor verdadeiro. Estranhamente, sua chance surge quando ele captura um relojoeiro incauto, cujo lugar é então ocupado por sua bela e ousada filha Belle. Ajudada pelos servos igualmente encantados da Besta, incluindo um relógio, um bule e um candelabro, Belle começa a ver a alma sensível por trás da fachada temível. Mas, à medida que o tempo se esgota, logo se torna óbvio que o pretendente arrogante de Belle, Gaston, é a verdadeira fera da peça."
    },
    {
        id: 13,
        nome: "Dança comigo?",
        genero: "Romance",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/94/98/27/20370797.jpg",
        descricao: "Apesar de ter uma ótima carreira e uma família amorosa, o advogado John Clark (Richard Gere) está perdendo algo em sua vida enquanto vagueia apaticamente dia após dia. Em seu trajeto de volta para casa uma noite, Clark vê uma mulher deslumbrante (Jennifer Lopez) em um estúdio de dança e decide por um capricho entrar em uma aula de dança de salão. Enquanto Clark encontra uma nova centelha em sua vida, sua esposa, Beverly (Susan Sarandon), começa a suspeitar de suas ausências frequentes, já que ele decide manter sua dança em segredo."
    },
    {
        id: 14,
        nome: "Uma linda mulher",
        genero: "Drama e romance",
        capa: "https://juliarolim.files.wordpress.com/2017/07/pretty_woman_movie-uma-linda-mulher-filme-90s-2017-blog-loucuras-de-julia-feededigno.jpg",
        descricao: "O filme conta a história de uma linda prostituta chamada Vivian Ward (Julia Roberts) que conhece o empresário rico Edward Lewis (Richard Gere). Lewis contrata a prostituta para ser sua acompanhante em compromissos sociais por uma semana, mas acaba se apaixonando por ela."
    },
    {
        id: 15,
        nome: "Tudo por amor",
        genero: "Drama e romance",
        capa: "https://br.web.img3.acsta.net/pictures/14/07/23/18/26/473791.jpg",
        descricao: "Respondendo a um anúncio de uma 'mulher atraente' para cuidar de um jovem doente, Hilary (Julia Roberts) se torna a cuidadora do inteligente e bem-educado Victor (Campbell Scott), que está lutando contra a leucemia. O relacionamento comercial deles lentamente se transforma em um romance e, à medida que Victor ensina Hilary sobre as coisas boas da vida, ela o ensina a amar e confiar em outra pessoa. A saúde de Victor continua piorando, mas o casal está determinado a enfrentar juntos seu prognóstico terminal."
    },
    {
        id: 16,
        nome: "Dirty Dancing",
        genero: "Música e Romance",
        capa: "https://www.cineteka.com/img/filmes/001072_big.jpg",
        descricao: "Baby (Jennifer Gray) está a um verão apático do Peace Corps. Na esperança de aproveitar sua juventude enquanto ela dura, ela fica desapontada quando seus planos de verão a colocam em um resort sonolento em Catskills com seus pais. Sua sorte muda, entretanto, quando o instrutor de dança do resort, Johnny (Patrick Swayze), convoca Baby como sua nova parceira, e os dois se apaixonam. O pai de Baby a proíbe de ver Johnny, mas ela está determinada a ajudá-lo a realizar a última grande dança do verão."
    }
]

export default filmes