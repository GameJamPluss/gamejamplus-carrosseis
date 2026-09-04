/* Legendas de Instagram dos carrosséis — abas GJ+, Jogos GJ+ e Memes GJ+.
   (Informativos GJ+ fica de fora de propósito.)

   Escritas pela skill carousel-caption a partir do conteúdo real dos slides
   (decks/*.js e pautas/<slug>/spec.en.json). Idioma EN nas três abas, que é
   o padrão das séries.

   Moldes:
   - GJ+ série J: 85-100 palavras narrando os slides na ordem, fecha em
     "Swipe to see...", CTA do último slide + "Sign up for the 11th edition
     through the link in bio.", 6 hashtags.
   - GJ+ série O (sedes e Fellows): mesma estrutura, CTA fecha em
     "Become an organizer through the link in bio."
   - Jogos GJ+: 55-70 palavras ancoradas no dado, "Swipe for..." + follow
     @gamejamplus, 5 hashtags.

   RENUMERAÇÃO (13/ago/2026): a série O passou a seguir a ordem real de
   postagem. Em relação à numeração original, o de/para ficou assim:
   O01→O02, O02→O01, O04→O05, O05→O06, O06→O04, O07→O08, O08→O07.
   As chaves acompanham o número novo; o conteúdo continua colado no
   carrossel certo.

   ATENÇÃO: O08, O10, O13, O16 (sedes) e O06 (ranking) ainda têm
   placeholder nos slides. As legendas usam só os números confirmados:
   meta de 90 sedes e 66 na edição passada. Quando a lista fechar, vale
   reescrever citando as sedes. O O02 e o O05 (sedes semanas 1 e 2) já
   saíram do placeholder — levam a lista real aplicada em 13/ago. A
   legenda do O05 ainda é a genérica, dá pra citar os países novos
   igual a do O02 faz. */
window.LEGENDAS = {

/* ---------------------------------------------------------------- GJ+ · J */

"gj-j01": {
  "titulo": "J01 · Nobody is eliminated in the first stage",
  "p": [
    "Nobody gets eliminated in the first stage of GameJamPlus. Not one person. The first stage is not competitive at a global level, it exists to put your game out in the world, and you move on to Incubation with three deliverables: a working build, a pitch of 3 to 5 minutes, and a signal that you want to continue. There is no cut-off score and no mandatory jury. Last edition 554 projects were delivered across 31 countries and 68 active venues, and all of them moved on. Swipe to see it stage by stage.",
    "Tell us in the comments what holds you back more, the fear of not finishing or the fear of being cut. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j01-pt": {
  "titulo": "J01 · Ninguém é eliminado",
  "p": [
    "Ninguém é eliminado na primeira etapa da GameJamPlus. Nenhuma pessoa. A primeira etapa não é competitiva em nível global, ela existe pra colocar o seu jogo no mundo, e você passa pra Incubação com três entregas: uma build rodando, um pitch de 3 a 5 minutos e um sinal de que quer continuar. Não tem nota de corte nem júri obrigatório. Na edição passada foram 554 projetos entregues em 31 países e 68 sedes ativas, e todos passaram.",
    "Comenta aqui o que te trava mais, o medo de não terminar ou o medo de ser cortado. E se for o segundo, ele não existe aqui: a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j02": {
  "titulo": "J02 · You do not need to know how to code",
  "p": [
    "Half the score at GameJamPlus is the pitch, not the code. Only 15% of participants call themselves professional or senior, and 26% had never done a game jam before. You deliver the game plus the business plan, so art, sound, narrative, production and business weigh as much as programming.",
    "Swipe to see every role a team needs, then tell us in the comments which one you would bring: code, art, sound or business. The 11th edition is open, sign up at the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #GameDevelopment #IndieDev #IndieGameDev #IndieGames #GameDesign #GameArt #GameAudio #GameWriting #GameDevCommunity"
},

"gj-j02-pt": {
  "titulo": "J02 · Você não precisa saber programar",
  "p": [
    "Metade da nota da GameJamPlus é o pitch, não o código. Só 15% dos participantes se descrevem como profissional ou sênior, e 26% nunca tinham feito uma game jam. Você entrega o jogo mais o plano de negócio, então arte, som, narrativa, produção e business pesam tanto quanto programação.",
    "Comenta aqui qual função você levaria pro time: código, arte, som ou business. E se a sua é uma das quatro, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j03": {
  "titulo": "J03 · Your first game jam, start to finish",
  "p": [
    "A whole weekend, hour by hour. Friday at 7pm the opening reveals the themes, which nobody knows beforehand, so everyone starts from zero at the same minute all over the world. At 8pm you form or join a team, and if you came on your own the venue runs a team formation activity. Saturday is production from end to end: small scope, a game running early, testing from hour one. Sunday at 11:59pm the build is due, and the pitch has until Tuesday. Deliver both and you are in Incubation. Swipe to see it hour by hour.",
    "Tell us in the comments whether this will be your first jam or you have been through one before. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j03-pt": {
  "titulo": "J03 · Sua primeira game jam",
  "p": [
    "Um fim de semana inteiro, hora por hora. Sexta às 19h a abertura revela os temas, que ninguém sabe antes, então o mundo todo começa do zero no mesmo minuto. Às 20h você monta ou entra num time, e se você veio sozinho a sede tem uma atividade de formação de equipe. Sábado é produção de ponta a ponta: escopo pequeno, jogo rodando cedo, teste desde a primeira hora. Domingo às 23h59 a build vence, e o pitch tem até terça. Entregou os dois, você está na Incubação.",
    "Comenta aqui se essa vai ser a sua primeira jam ou se você já passou por uma. E se for a primeira, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j04": {
  "titulo": "J04 · It is not 48 hours. It is 7 months",
  "p": [
    "Every game jam ends on Sunday. Ours starts there. The 48 hours are just the first of 5 stages: then comes incubation, a track focused on improving the game build, the semifinals, where each country runs its own ceremony to present the qualifiers, the acceleration stage, a track focused on the pitch, with monetization and distribution, and the live Global Final, with investors and publishers in the audience. That is 7 months turning a prototype into a business. Swipe to see it stage by stage.",
    "Tell us in the comments which stage you think would be the hardest for your team. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #GameDesign #GameDevelopment"
},

"gj-j04-pt": {
  "titulo": "J04 · Não são 48h, são 7 meses",
  "p": [
    "Toda game jam termina no domingo. A nossa começa ali. As 48 horas são só a primeira de 5 etapas: depois vem a incubação, uma trilha focada em melhorar a build do jogo, as semifinais, em que cada país faz a própria cerimônia pra apresentar os classificados, a aceleração, uma trilha focada no pitch, com monetização e distribuição, e a Final Global ao vivo, com investidores e publishers na plateia. São 7 meses transformando um protótipo em negócio.",
    "Comenta aqui qual dessas etapas seria a mais difícil pro seu time. E se você quer descobrir na prática, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j05": {
  "titulo": "J05 · Games that came through GJ+",
  "p": [
    "All of these started as a weekend prototype. Hellbrella, a roguelite about a kitten with an umbrella, sold 3,000 copies in under 3 weeks through GoGo Games. Mix It!, from Costa Rica, won Best Sound Design in 21/22 and was selected by Fondo El Fauno in 2025. Super Mombo Quest passed 1 million players on PlayStation. And As Aventuras de Nhimawa, from ArkHalo Games in Angola, reached the GJ+ 24/25 finalist list. That adds up to more than 2,500 games created inside the ecosystem, across 50 countries. Swipe to see each one.",
    "Tell us in the comments which one you would play today and we will tag the studios there. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #IndieGames #GameDev #GameJam #IndieDev #GameDevelopment"
},

"gj-j05-pt": {
  "titulo": "J05 · Jogos que passaram pela GJ+",
  "p": [
    "Todos esses começaram como protótipo de fim de semana. Hellbrella, um roguelite sobre um gatinho com guarda-chuva, vendeu 3 mil cópias em menos de 3 semanas pela GoGo Games. Mix It!, da Costa Rica, ganhou Melhor Design de Som em 21/22 e foi selecionado pelo Fondo El Fauno em 2025. Super Mombo Quest passou de 1 milhão de jogadores no PlayStation. E As Aventuras de Nhimawa, da ArkHalo Games em Angola, chegou à lista de finalistas da GJ+ 24/25. Somando, são mais de 2.500 jogos criados dentro do ecossistema, em 50 países.",
    "Comenta aqui qual deles você jogaria hoje, que a gente marca os estúdios ali. E se você quer o seu nessa lista, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j06": {
  "titulo": "J06 · Half the score is the pitch",
  "p": [
    "Half of your score is the pitch, at every stage, and it is what almost every team gets wrong. It needs to be 3 to 5 minutes with English subtitles, because a judge from another country cannot evaluate what they cannot understand. Inside it: real gameplay on video instead of a screenshot, what makes the game unique and who it is for, your competitors, a budget in 3 scenarios, and who the team is. If you already have wishlists, Discord members or playtest numbers, show them. And never end without contact and a QR code, because there are investors and publishers watching. Swipe for the full checklist.",
    "Tell us in the comments: what scares you more, recording the pitch or finishing the build? Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevelopment"
},

"gj-j06-pt": {
  "titulo": "J06 · Metade da nota é o pitch",
  "p": [
    "Metade da sua nota é o pitch, em todas as etapas, e é o que quase todo time erra. Ele precisa ter de 3 a 5 minutos com legenda em inglês, porque um jurado de outro país não avalia o que não entende. Dentro dele: gameplay real em vídeo no lugar de print, o que faz o jogo ser único e pra quem ele é, seus concorrentes, um orçamento em 3 cenários e quem é o time. Se você já tem wishlist, gente no Discord ou número de playtest, mostra. E nunca termine sem contato e QR code, porque tem investidor e publisher assistindo.",
    "Comenta aqui o que dá mais medo: gravar o pitch ou fechar a build. E se a resposta é os dois, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j07": {
  "titulo": "J07 · She made a game with no electricity",
  "p": [
    "Marina Gatto entered GJ+ 23/24 from the Inhã-Bã village, in Amazonas, with no outlet, no stable internet and no studio. So she went physical instead of digital, which GJ+ allows: board games count, as long as they can be evaluated digitally through print and play, Tabletopia or another format. She took first place in the North region. The following year she was champion of the SBT Category with Brincadeira de Herói, a board game from Sítio do Picapau Amarelo. Quality games have always existed far from the big hubs. Swipe to see how it happened.",
    "Tell us in the comments where you are from. We want to see how many corners of the world this story reaches. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j07-pt": {
  "titulo": "J07 · Jogo sem energia elétrica",
  "p": [
    "Marina Gatto entrou na GJ+ 23/24 desde a aldeia Inhã-Bã, no Amazonas, sem tomada, sem internet estável e sem estúdio. Então ela foi de físico em vez de digital, o que a GJ+ permite: jogo de tabuleiro conta, desde que dê pra avaliar digitalmente por print and play, Tabletopia ou outro formato. Ela ficou em primeiro lugar na região Norte. No ano seguinte foi campeã da Categoria SBT com Brincadeira de Herói, um jogo de tabuleiro do Sítio do Picapau Amarelo. Jogo bom sempre existiu longe dos grandes centros.",
    "Comenta aqui de onde você é, que a gente quer ver até onde essa história chega. E se aí ainda não tem ninguém fazendo jogo, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j08": {
  "titulo": "J08 · Myth vs Truth about game jams",
  "p": [
    "What stops you from signing up is almost never true. You do not need to already work in games: 26% of participants are first timers and only 15% describe themselves as professional or senior. You do not need to code, because half the score is the pitch, and marketing, business, art, sound and writing decide the outcome. You do not need a team, since venues run team formation at the opening. There is no engine or language restriction, and board games count. And the first stage eliminates nobody. Swipe to see each one.",
    "Tell us in the comments which of these five has made you put it off. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j08-pt": {
  "titulo": "J08 · Mito vs Verdade",
  "p": [
    "O que te impede de se inscrever quase nunca é verdade. Você não precisa já trabalhar com jogos: 26% dos participantes são de primeira viagem e só 15% se descrevem como profissional ou sênior. Não precisa programar, porque metade da nota é o pitch, e marketing, negócio, arte, som e escrita decidem o resultado. Não precisa de time, já que as sedes fazem formação de equipe na abertura. Não tem restrição de engine nem de linguagem, e jogo de tabuleiro conta. E a primeira etapa não elimina ninguém.",
    "Comenta aqui qual desses cinco já te fez deixar pra depois. E se nenhum deles te para mais, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j09": {
  "titulo": "J09 · Game jam survival kit",
  "p": [
    "What to bring so Saturday night does not hurt. The gear list is a laptop with everything already installed, headphones, mouse, chargers, an extension cord and a power bank. The comfort list is a jacket, because the air conditioning will get you, a water bottle, quick snacks and a neck pillow if you are pulling an all-nighter. Before leaving home, create your itch.io account, join the venue Discord and back everything up. And the item nobody mentions: a business card or a portfolio link, because networking is a deliverable too. Swipe to see the full kit.",
    "Tell us in the comments the one item you always forget to pack. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j09-pt": {
  "titulo": "J09 · Kit de sobrevivência",
  "p": [
    "O que levar pra sábado à noite não doer. Na lista de equipamento: notebook com tudo já instalado, fone, mouse, carregadores, extensão e power bank. Na lista de conforto: um agasalho, porque o ar-condicionado te pega, garrafa de água, lanche rápido e travesseiro de pescoço se você vai virar a noite. Antes de sair de casa, cria sua conta no itch.io, entra no Discord da sede e faz backup de tudo. E o item que ninguém cita: cartão ou link de portfólio, porque networking também é entrega.",
    "Comenta aqui o item que você sempre esquece de colocar na mochila. E se você ainda não tem onde usar essa lista, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j10": {
  "titulo": "J10 · The ideal team is 3 to 6 people",
  "p": [
    "Three to six people is the size that finishes a game. A big team with no direction does not. The six roles you will miss are programming, art, game design, music and sound, production and marketing, and the golden rule is to assign them before the first line of code. Not defining roles is one of the most common mistakes in the official handbook: it costs ten minutes and saves the weekend. If you show up alone, the venue handles it with talent boards, skill pitches and matchmaking on Discord. Going solo is fine too. Swipe to see each role.",
    "Tag who you want on your team for the 11th edition. Sign up through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDesign"
},

"gj-j10-pt": {
  "titulo": "J10 · Time ideal",
  "p": [
    "De três a seis pessoas é o tamanho que termina um jogo. Time grande sem direção não termina. As seis funções que você vai sentir falta são programação, arte, game design, música e som, produção e marketing, e a regra de ouro é distribuir isso antes da primeira linha de código. Não definir função é um dos erros mais comuns do manual oficial: custa dez minutos e salva o fim de semana. Se você aparecer sozinho, a sede resolve com mural de talentos, pitch de habilidade e matchmaking no Discord. Ir solo também vale.",
    "Marca quem você quer no seu time na 11ª edição. A inscrição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j11": {
  "titulo": "J11 · What happens after the jam",
  "p": [
    "A roguelite about a kitten with an umbrella sold 3,000 copies in three weeks. Hellbrella started as a prototype at GJ+ 24/25 and was published by GoGo Games, the publisher inside the same ecosystem. That is what exists after Sunday: Incubation with a class track, Semifinals with an international jury, Acceleration focused on business and pitch, and an in-person Global Final with investors in the room. More than 200 studios have come through, along with over 24,000 professionals reached and more than 40 investors in the network. Swipe to see the whole path.",
    "Tell us in the comments how far you want to take the game you have not started yet. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j11-pt": {
  "titulo": "J11 · Depois da jam",
  "p": [
    "Um roguelite sobre um gatinho com guarda-chuva vendeu 3 mil cópias em três semanas. O Hellbrella começou como protótipo na GJ+ 24/25 e foi publicado pela GoGo Games, a publisher de dentro do mesmo ecossistema. É isso que existe depois do domingo: Incubação com trilha de aulas, Semifinais com júri internacional, Aceleração focada em negócio e pitch, e uma Final Global presencial com investidor na sala. Já passaram mais de 200 estúdios, mais de 24 mil profissionais alcançados e mais de 40 investidores na rede.",
    "Comenta aqui até onde você quer levar o jogo que ainda não começou. E o começo dele é a inscrição pra 11ª edição, no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j12": {
  "titulo": "J12 · 5 mistakes that sink a team at a jam",
  "p": [
    "Five mistakes that sink a team at a jam, from people who have been there. Trying to make a huge game, when scope is the rarest skill in the room. Not assigning roles, so three people do the same thing and nobody does the audio. Leaving testing for the end, because a bug found on Sunday night does not get fixed. Testing only on your own machine, when the build has to run on the judge's computer. And missing the deadline: build by Sunday 11:59pm, pitch by Tuesday, backup from Friday on. Swipe to see each one.",
    "Tell us in the comments which of these five has already sunk a team of yours. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDesign"
},

"gj-j12-pt": {
  "titulo": "J12 · 5 erros que derrubam um time",
  "p": [
    "Cinco erros que derrubam um time numa jam, de quem já passou por eles. Querer fazer um jogo enorme, quando escopo é a habilidade mais rara da sala. Não distribuir função, então três pessoas fazem a mesma coisa e ninguém faz o áudio. Deixar o teste pro fim, porque bug encontrado domingo à noite não é corrigido. Testar só na sua máquina, quando a build tem que rodar no computador do jurado. E perder o prazo: build até domingo 23h59, pitch até terça, backup desde sexta.",
    "Comenta aqui qual desses cinco já derrubou um time seu. E se você quer acertar todos na próxima, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j13": {
  "titulo": "J13 · The Gatekeeper",
  "p": [
    "There has always been someone at the door deciding who gets in. We call them the Gatekeeper, and it is not one person, it is the set of people who control access to the industry and sit on the information that would make a difference to you. The Gatekeeper says only big studios get shelf space, that game jams are a student hobby, that you cannot make a living from games and that nothing relevant comes out of the periphery. Then a girl with no electricity wins her region. Swipe to see the rest.",
    "Tell us in the comments which of those lines has been thrown at you. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j13-pt": {
  "titulo": "J13 · O Porteiro",
  "p": [
    "Sempre teve alguém na porta decidindo quem entra. A gente chama de Porteiro, e não é uma pessoa, é o conjunto de gente que controla o acesso à indústria e senta em cima da informação que faria diferença pra você. O Porteiro diz que só estúdio grande tem espaço na prateleira, que game jam é hobby de estudante, que não dá pra viver de jogo e que da periferia não sai nada relevante. Aí uma menina sem energia elétrica ganha a região dela.",
    "Comenta aqui qual dessas frases já jogaram em você. E se você quer passar por cima do Porteiro, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j14": {
  "titulo": "J14 · What you take home",
  "p": [
    "Nobody leaves a jam empty-handed, even without winning. Every participant leaves with a certificate, a finished game in the portfolio, real experience working in a team, presentation and pitching practice and a network of contacts in their own city. For students it is the easiest line to justify on a CV: a project delivered on deadline, in a multidisciplinary team, presented to a panel. And you join a network across more than 50 countries, with a global Discord, mentors and judges from international studios. Swipe to see the full list.",
    "Tell us in the comments what you took home from your first jam. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j14-pt": {
  "titulo": "J14 · O que você leva pra casa",
  "p": [
    "Ninguém sai de uma jam de mão vazia, mesmo sem ganhar. Todo participante sai com certificado, um jogo terminado no portfólio, experiência real de trabalho em time, prática de apresentação e pitch e uma rede de contatos na própria cidade. Pra estudante é a linha mais fácil de justificar no currículo: projeto entregue no prazo, em equipe multidisciplinar, apresentado pra uma banca. E você entra numa rede de mais de 50 países, com Discord global, mentores e jurados de estúdios internacionais.",
    "Comenta aqui o que você levou pra casa da sua primeira jam. E se ainda não teve uma, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j15": {
  "titulo": "J15 · How to take part, step by step",
  "p": [
    "From zero to signed up in five steps. Create your account on the official platform, pick your venue between in person, hybrid and online, form or join a team, choose the categories you want to compete in, then build it, upload the build and record the pitch. Two details that save time: the login has no password, you get an access link by email, so bookmark it. The build goes on itch.io and the pitch on YouTube, unlisted is fine, and only one team representative submits. Swipe to see it step by step.",
    "Tell us in the comments which step you got stuck on and we will answer. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j15-pt": {
  "titulo": "J15 · Como participar passo a passo",
  "p": [
    "Do zero até inscrito em cinco passos. Cria sua conta na plataforma oficial, escolhe sua sede entre presencial, híbrida e online, monta ou entra num time, escolhe as categorias em que quer competir, e aí faz o jogo, sobe a build e grava o pitch. Dois detalhes que economizam tempo: o login não tem senha, você recebe um link de acesso por e-mail, então salva ele nos favoritos. A build vai pro itch.io e o pitch pro YouTube, não listado serve, e só um representante do time submete.",
    "Comenta aqui em qual passo você travou, que a gente responde. E se nenhum deles te trava, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

/* ---------------------------------------------- GJ+ · O (sedes e Fellows) */

"gj-o01": {
  "titulo": "O01 · What you get as a Fellow",
  "p": [
    "If you have ever run a venue, you already are a Fellow. The program pays in points for every action inside the edition, and those points go into a global organizer ranking. A Fellow also gets a spot in the global WhatsApp group, direct access to the GJ+ team and visibility for the venue on the official channels. The top ranked get travel and lodging to the in-person Global Final, with studios from 5 continents, investors and publishers in the room. Running the venue, bringing jammers and referring new venues all score. Swipe to see how it works.",
    "Tell us in the comments what city you are from. We want to see where a venue is still missing. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o01-pt": {
  "titulo": "O01 · O que você ganha sendo Fellow",
  "p": [
    "Se você já organizou uma sede, você já é um Fellow. O programa paga em pontos por cada ação dentro da edição, e esses pontos entram num ranking global de organizadores. Um Fellow também ganha lugar no grupo global de WhatsApp, acesso direto ao time da GJ+ e visibilidade pra sede nos canais oficiais. Quem fica no topo ganha viagem e hospedagem pra Final Global presencial, com estúdios de 5 continentes, investidores e publishers na sala. Organizar a sede, trazer jammers e indicar sedes novas, tudo pontua.",
    "Comenta aqui de que cidade você é, que a gente quer ver onde ainda falta sede. E se a sua é uma delas, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o02": {
  "titulo": "O02 · Confirmed venues, week 1",
  "p": [
    "The venue list of the 11th edition opens here, and it grows every week. Angola, South Africa, Slovakia, Bangladesh, Bolivia and Brazil are already in, and Argentina, Singapore and Indonesia came in this week. They are universities, studios and tech hubs, which is what a venue can be. Swipe to see who is on the map.",
    "Tell us in the comments which city still needs a venue. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o02-pt": {
  "titulo": "O02 · Sedes confirmadas semana 1",
  "p": [
    "A lista de sedes da 11ª edição abre aqui, e ela cresce toda semana. Angola, África do Sul, Eslováquia, Bangladesh, Bolívia e Brasil já estão dentro, e Argentina, Singapura e Indonésia entraram nesta semana. São universidades, estúdios e hubs de tecnologia, que é o que uma sede pode ser.",
    "Comenta aqui qual cidade ainda precisa de sede. E se for a sua, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o03": {
  "titulo": "O03 · The 3 types of Fellow",
  "p": [
    "The Fellows Program used to have one type of member. Now it has three. The Organizer runs a local venue, brings jammers in and refers new venues, which is the type that already existed. The Sponsor is a brand or a person funding the edition, scoring by contribution, renewal and referral, with a supporter ranking of their own. And the Supporter, or Ambassador, is whoever helps without organizing: volunteer, creator, mentor, judge, former jammer, scoring through promotion, content and jammer referrals. Everyone lands in the same ranking. Swipe to see each one.",
    "Tell us in the comments which of these three sounds like you. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o03-pt": {
  "titulo": "O03 · Os 3 tipos de Fellow",
  "p": [
    "O Programa de Fellows tinha um tipo de membro. Agora tem três. O Organizador cuida de uma sede local, traz jammers e indica sedes novas, que é o tipo que já existia. O Patrocinador é marca ou pessoa que financia a edição, pontuando por contribuição, renovação e indicação, com um ranking de apoiadores próprio. E o Apoiador, ou Embaixador, é quem ajuda sem organizar: voluntário, criador de conteúdo, mentor, jurado, ex-jammer, pontuando por divulgação, conteúdo e indicação de jammers. Todos caem no mesmo ranking.",
    "Comenta aqui com qual desses três você se parece. E se for o primeiro, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o04": {
  "titulo": "O04 · 100% of what your venue raises is yours",
  "p": [
    "If your venue charges for registration or tickets, the money is entirely the venue's. There is no revenue share, you only need to inform the global team. Local sponsorship works the same way: you negotiate directly, with no global approval, review happens case by case and most pass without restriction. The Toolbox even includes a ready-made sponsorship deck, so you can put the GJ+ brand in the proposal and close local support in your city. What the global organization does not do is send money. Swipe to see the whole arrangement.",
    "Tell us in the comments what is still holding you back from opening your city's venue. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o04-pt": {
  "titulo": "O04 · 100% da receita é sua",
  "p": [
    "Se a sua sede cobra inscrição ou ingresso, o dinheiro é inteiro da sede. Não tem divisão de receita, você só precisa informar o time global. Patrocínio local funciona igual: você negocia direto, sem aprovação global, a análise é caso a caso e a maioria passa sem restrição. A Toolbox tem até uma apresentação comercial pronta, então você coloca a marca da GJ+ na proposta e fecha apoio local na sua cidade. O que a organização global não faz é mandar dinheiro.",
    "Comenta aqui o que ainda te segura pra abrir a sede da sua cidade. E se for só a falta do primeiro passo, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o05": {
  "titulo": "O05 · Confirmed venues, week 2",
  "p": [
    "Week two of the venue list, and it keeps growing every week. Zambia, Portugal, Chile, Peru, Mexico and Brazil are on the map, and Argentina came in with Buenos Aires. From Lusaka to Boa Vista, these are universities, schools and studios that decided to host. Swipe to see who confirmed.",
    "Tell us in the comments where the next one should open. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o05-pt": {
  "titulo": "O05 · Sedes confirmadas semana 2",
  "p": [
    "Semana dois da lista de sedes, e ela segue crescendo toda semana. Zâmbia, Portugal, Chile, Peru, México e Brasil estão no mapa, e a Argentina entrou com Buenos Aires. De Lusaka a Boa Vista, são universidades, escolas e estúdios que decidiram receber.",
    "Comenta aqui onde a próxima deveria abrir. E se for na sua cidade, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o06": {
  "titulo": "O06 · There is no such thing as a venue too small",
  "p": [
    "The official rule sets no minimum number of teams. It is written in the Local Organizer Guide: every venue counts, regardless of size. A venue with two teams is a venue, it shows up on the global map, goes into the official communications and scores in the Fellows Program like any other. There can also be more than one venue in the same city, all it takes is a distinguishing term in the name, because GJ+ does not work with territorial exclusivity. Every local scene started with a handful of people. Swipe to see why size is not the point.",
    "Tell us in the comments how many people make games in your city. We bet it is more than you think. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o06-pt": {
  "titulo": "O06 · Não existe sede pequena demais",
  "p": [
    "A regra oficial não define número mínimo de times. Está escrito no Guia do Organizador Local: toda sede conta, do tamanho que for. Uma sede com dois times é uma sede, aparece no mapa global, entra nas comunicações oficiais e pontua no Programa de Fellows como qualquer outra. Também pode ter mais de uma sede na mesma cidade, basta um termo que diferencie no nome, porque a GJ+ não trabalha com exclusividade territorial. Toda cena local começou com um punhado de gente.",
    "Comenta aqui quanta gente faz jogo na sua cidade, que a gente aposta que é mais do que você imagina. E se der pra juntar dois times, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o07": {
  "titulo": "O07 · In person, online or hybrid",
  "p": [
    "Not having a physical space does not stop you from hosting. In person means a room with desks, outlets, restrooms and internet, in a university, coworking, innovation hub or cultural centre, and sleeping over is allowed. Online means the whole venue runs on a Discord server, which lets you recruit volunteers and mentors from other cities and countries. Hybrid mixes the two, with everyone in the same Discord and one person dedicated purely to the people online. Your venue can even run on its own date inside the official window. Swipe to see the three.",
    "Tell us in the comments which format makes sense for your city. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o07-pt": {
  "titulo": "O07 · Presencial, online ou híbrida",
  "p": [
    "Não ter espaço físico não te impede de receber. Presencial é uma sala com mesa, tomada, banheiro e internet, numa universidade, coworking, hub de inovação ou centro cultural, e dormir no local é permitido. Online é a sede inteira rodando num servidor de Discord, o que te deixa recrutar voluntário e mentor de outras cidades e países. Híbrida mistura as duas, com todo mundo no mesmo Discord e uma pessoa dedicada só a quem está online. A sua sede pode até rodar em data própria dentro da janela oficial.",
    "Comenta aqui qual formato faz sentido pra sua cidade. E se for algum dos três, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o08": {
  "titulo": "O08 · Confirmed venues, week 3",
  "p": [
    "Week three of the venue list, and it keeps growing every week. Mexico, Colombia, Venezuela, Ecuador and Argentina are on the map alongside Brazil, and Campo Grande and Niterói came in over the last few days. From Puerto Vallarta to Belém, the jam keeps finding a new room. Swipe to see who confirmed.",
    "Tell us in the comments which city you want on this list. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o08-pt": {
  "titulo": "O08 · Sedes confirmadas semana 3",
  "p": [
    "Semana três da lista de sedes, e ela segue crescendo toda semana. México, Colômbia, Venezuela, Equador e Argentina estão no mapa junto do Brasil, e Campo Grande e Niterói entraram nos últimos dias. De Puerto Vallarta a Belém, a jam segue encontrando sala nova.",
    "Comenta aqui qual cidade você quer nessa lista. E se for a sua, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o09": {
  "titulo": "O09 · Your responsibility is only the weekend",
  "p": [
    "Straight from the Local Organizer Guide: a local organizer is only responsible for running the Game Jam itself. What is yours is promoting the venue in your city, hosting the jammers over the weekend, making sure everyone registers on the platform and documenting the event in photo and video. Ceremonies, local jury and awards, mentors, workshops and catering are all optional. Incubation, Semifinals and the Final belong to the global team, and taking part in them climbs your Fellows ranking without being an obligation. Swipe to see what is yours and what is not.",
    "Tell us in the comments whether you would take on one weekend for your city. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o09-pt": {
  "titulo": "O09 · Só o fim de semana",
  "p": [
    "Direto do Guia do Organizador Local: o organizador local só responde por realizar a Game Jam. O que é seu é divulgar a sede na sua cidade, receber os jammers no fim de semana, garantir que todo mundo se inscreveu na plataforma e registrar o evento em foto e vídeo. Cerimônia, júri local e premiação, mentoria, workshop e comida são opcionais. Incubação, Semifinais e Final são do time global, e participar delas sobe o seu ranking de Fellows sem ser obrigação.",
    "Comenta aqui se você encararia um fim de semana pela sua cidade. E se a resposta é sim, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o10": {
  "titulo": "O10 · Confirmed venues, week 4",
  "p": [
    "Week four of the venue list, and it keeps growing every week. Praia in Cabo Verde and Cagliari in Italy sit on the same list as Rio Branco, Goiânia, Recife and São Paulo, and Ribeirão Preto, Campina Grande, Vila Velha, Itajubá, Fortaleza and Barra do Garças came in over the last few weeks. A venue does not need a physical space to exist: it can run entirely on a Discord server, which is how an organizer brings in volunteers and mentors from other cities. Swipe to see who confirmed.",
    "Tell us in the comments which city should be next on this list. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o10-pt": {
  "titulo": "O10 · Sedes confirmadas semana 4",
  "p": [
    "Semana quatro da lista de sedes, e ela segue crescendo toda semana. Praia, em Cabo Verde, e Cagliari, na Itália, estão na mesma lista que Rio Branco, Goiânia, Recife e São Paulo, e Ribeirão Preto, Campina Grande, Vila Velha, Itajubá, Fortaleza e Barra do Garças entraram nas últimas semanas. Sede não precisa de espaço físico pra existir: ela roda inteira num servidor de Discord, e é assim que um organizador traz voluntário e mentor de outras cidades.",
    "Comenta aqui qual cidade deveria ser a próxima nessa lista. E se for a sua, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o11": {
  "titulo": "O11 · What GJ+ delivers to your venue",
  "p": [
    "You are not doing it alone. A venue comes with the official registration and submission platform, a Toolbox of editable promo artwork, a sponsorship deck template, the opening keynote with themes and categories, the Jammer Handbook to hand out and support by email, Discord and the organizer group. The strongest asset is the brand of a jam running in more than 50 countries, which is what opens the door of the university, the coworking space and the local sponsor. GJ+ has been the official IGDA game jam since 2024. Swipe to see the full list.",
    "Tell us in the comments which of these you did not know came with it. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o11-pt": {
  "titulo": "O11 · O que a GJ+ entrega pra sua sede",
  "p": [
    "Você não faz sozinho. Com a sede vem a plataforma oficial de inscrição e submissão, uma Toolbox de artes editáveis pra divulgação, um modelo de apresentação comercial pra captar patrocínio, o keynote de abertura com temas e categorias, o Manual do Jammer pra distribuir e suporte por e-mail, Discord e grupo de organizadores. O ativo mais forte é a marca de uma jam que roda em mais de 50 países, e é isso que abre a porta da faculdade, do coworking e do patrocinador local na sua cidade. A GJ+ é a game jam oficial da IGDA desde 2024.",
    "Comenta aqui qual desses itens você não sabia que vinha junto. E se a sua cidade ainda não tem sede, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},
"gj-o12": {
  "titulo": "O12 · The Fellows ranking",
  "p": [
    "The Fellows ranking is live, and every action inside the edition counts. You score by running your venue, by every jammer you bring in, by every new venue you refer, by the extra meetups your community runs and by staying involved through the later stages. What the top of the table gets is travel and lodging to the in-person Global Final, plus public recognition and direct access to the global organizer network. It is the same ranking for organizers, sponsors and ambassadors. Swipe to see where the table stands.",
    "Tell us in the comments the city you want to see at the top of this ranking. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o12-pt": {
  "titulo": "O12 · Ranking dos Fellows",
  "p": [
    "O ranking dos Fellows está no ar, e toda ação dentro da edição conta. Você pontua por organizar a sua sede, por cada jammer que traz, por cada sede nova que indica, pelos encontros extras que a sua comunidade faz e por continuar envolvido nas etapas seguintes. O que o topo da tabela ganha é viagem e hospedagem pra Final Global presencial, mais reconhecimento público e acesso direto à rede global de organizadores. É o mesmo ranking pra organizador, patrocinador e embaixador.",
    "Comenta aqui a cidade que você quer ver no topo desse ranking. E se você quer colocar ela lá, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o13": {
  "titulo": "O13 · Confirmed venues, week 5",
  "p": [
    "Fifth Monday of the 11th edition venue list. What comes with a venue is the platform for registration and submission, a Toolbox with editable promo artwork, a sponsorship deck template, the opening keynote with themes and categories, the Jammer Handbook and direct support by email and Discord. What does not come is funding, and in exchange the venue keeps 100% of everything it raises. The target this edition is 90, against 66 last time. Swipe to see who is in.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o13-pt": {
  "titulo": "O13 · Sedes confirmadas semana 5",
  "p": [
    "Semana cinco da lista de sedes da 11ª edição. O que vem junto com a sede é a plataforma de inscrição e submissão, uma Toolbox com artes editáveis pra divulgação, um modelo de apresentação comercial, o keynote de abertura com temas e categorias, o Manual do Jammer e suporte direto por e-mail e Discord. O que não vem é dinheiro, e em troca a sede fica com 100% de tudo que arrecada.",
    "Comenta aqui qual sede você quer ver na sua cidade. E se ninguém abriu a sua ainda, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o14": {
  "titulo": "O14 · Your city still has no venue",
  "p": [
    "66 venues ran the last edition and the target for the 11th is 90, which means 24 cities that do not exist on the map yet. One of them can be yours. The people who usually open a venue are a student group or academic league, a games course lecturer, a local dev collective, a coworking space or a cultural centre. What you need is the will to bring your city's people together, a space or a Discord server, one weekend and two or three people to help. GJ+ delivers the rest. Swipe to see what that means.",
    "Drop your city's name in the comments. We want to see how many are still missing from the map. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o14-pt": {
  "titulo": "O14 · Sua cidade ainda não tem sede",
  "p": [
    "Não ter sede na sua cidade é um convite, não uma reclamação. Quem costuma abrir uma é um núcleo ou liga acadêmica, um professor de curso de jogos, um coletivo local de devs, um coworking, um centro cultural ou alguém que já organiza outro evento por lá. O que você precisa ter é vontade de reunir a galera da sua cidade, um espaço ou um servidor de Discord, um fim de semana e duas ou três pessoas pra ajudar. O resto a GJ+ entrega: marca, plataforma, material de divulgação, modelo de proposta comercial, manual e suporte direto.",
    "Comenta aqui o nome da sua cidade, que a gente quer ver quantas ainda faltam no mapa. E se você for a pessoa que junta essa galera, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},
"gj-o15": {
  "titulo": "O15 · Checklist to set up your venue",
  "p": [
    "The checklist comes straight from the Local Organizer Guide. On facilities: desks, chairs, outlets and restrooms, stable internet both wired and Wi-Fi, a rest area even if it is just a corner, ventilation and some water and snacks. On the local crew: someone on reception, someone for emergencies, someone for technical questions and someone shooting photo and video. On materials: badges, a whiteboard, the Wi-Fi password on display and QR codes for the Discord and the platform. The item everyone forgets is documenting the event. Swipe to see the full checklist.",
    "Tell us in the comments the item this list is missing. Anyone who has organized one knows. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o15-pt": {
  "titulo": "O15 · Checklist pra montar sua sede",
  "p": [
    "A lista vem direto do Guia do Organizador Local. Na estrutura: mesas, cadeiras, tomadas, internet estável cabeada e Wi-Fi, uma área de descanso nem que seja um canto, água e algum lanche. Na equipe: alguém na recepção, alguém pra emergência, alguém pra dúvida técnica e alguém registrando foto e vídeo. E se você não tem espaço nenhum, existe sede online: um servidor de Discord organizado em canais, com boas-vindas, avisos fixados, suporte técnico e salas de voz pros times. Os jammers participam de casa e concorrem exatamente como todo mundo.",
    "Comenta aqui o item que faltou nessa lista, que quem já organizou sabe. E se a sua cidade ainda não tem sede, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o16": {
  "titulo": "O16 · Confirmed venues, month wrap-up",
  "p": [
    "The month closes with the 11th edition venue list, which grew every Monday since week one. The target is 90 venues, against the 66 that ran the last edition, and every one of them shows up on the global map, goes into the official communications and scores in the Fellows Program, regardless of size. GJ+ has been the official game jam of the IGDA since 2024, and that brand is what opens the door of the university, the coworking space and the local sponsor. Swipe to see the month.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o16-pt": {
  "titulo": "O16 · Sedes confirmadas fechamento",
  "p": [
    "O mês fecha com a lista de sedes da 11ª edição, que cresceu toda semana desde a primeira. Cada uma delas aparece no mapa global, entra nas comunicações oficiais e pontua no Programa de Fellows, do tamanho que for. A GJ+ é a game jam oficial da IGDA desde 2024, e é essa marca que abre a porta da faculdade, do coworking e do patrocinador local na sua cidade.",
    "Comenta aqui qual sede você quer ver na sua cidade. E se a sua ficou fora desse mês, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

/* ------------------------------------------------------------- Jogos GJ+ */

"jogos-01": {
  "titulo": "01 · What 28 launches teach together",
  "p": [
    "Balatro expected to sell about 10 copies and did 5 million. WEBFISHING thought 100 people would play and 25k showed up at once. We dissected 28 launches and not one got its own forecast right, while half the games of 2026 did not clear US$ 290.",
    "Swipe for the five patterns behind them, including the one nobody talks about: none of these was a first game. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-02": {
  "titulo": "02 · WEBFISHING · he thought 100 people would play",
  "p": [
    "The developer said he thought maybe 100 people would play his game someday. On launch day more than 24,000 were playing at once, and a month later it was still near 25,000. WEBFISHING is a multiplayer fishing game at R$16.99 in Brazil, released in October 2024, and its own creator called it a silly project while thanking players.",
    "Swipe for why fishing was never the point: the game sells a place to be together, not an objective. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-03": {
  "titulo": "03 · Liar's Bar · four people, one table, 113k playing",
  "p": [
    "A bar, a table, a deck of cards and a gun. That is the whole game, and it peaked at 113,700 people playing at the same time in October 2024, at R$23.50 in Brazil and still in Early Access. Curve Animation, the Turkish studio behind it, used to make animated films, and the game won the 2024 Steam Award for most innovative gameplay.",
    "Swipe for why social deduction is so efficient: the content is the lying between players, so the game never needs another level to last longer. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-04": {
  "titulo": "04 · Supermarket Simulator · the dullest fantasy that ever sold millions",
  "p": [
    "Restocking shelves, setting prices and working the till. Described out loud it sounds like the opposite of fun, and SteamSpy still puts Supermarket Simulator between 2 and 5 million owners. The range is wide because it is a sampling estimate, but even the floor is a huge result for a small Turkish studio charging R$59.99 in Brazil since June 2025.",
    "Swipe for why the mundane simulator works: the fantasy explains itself with no tutorial and no trailer. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-05": {
  "titulo": "05 · PEAK · two studios, ten million copies",
  "p": [
    "Two independent studios developed and published PEAK together, as Team PEAK. Not a publisher deal with a revenue cut, a co-production between peers. It sold more than 10 million copies at R$23.99 in Brazil, released in June 2025. Aggro Crab brought one audience, Landfall brought the house that already made Content Warning and Totally Accurate Battle Simulator.",
    "Swipe for why a partner your own size beats a publisher: you split the risk without handing over 30% to 50% of the revenue. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-06": {
  "titulo": "06 · Turkey turned into an indie hit factory",
  "p": [
    "Four hits in a row came out of the same country. Liar's Bar, from Curve Animation, peaked at 113,700 concurrent players. Supermarket Simulator, from Nokta Games, sits between 2 and 5 million owners on SteamSpy. BOMBANANA!, from Lefto Studio, was the most played demo of the June 2026 Next Fest. And Kebab Chefs! belongs to the same wave. None of those studios came from the games industry.",
    "Swipe for the structural read behind it: a low development cost buys more attempts, and more attempts is what lands one. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-07": {
  "titulo": "07 · BOMBANANA! · the demo became the product",
  "p": [
    "A free demo went up on 15 June 2026 and within a week it was the most played of the entire Steam Next Fest. BOMBANANA!, from Lefto Studio in Turkey, pulled more than 675,000 demo players, peaked above 30,000 concurrent and left 230,000 wishlists behind. The game itself only ships in August. The demo sold nothing and built the whole queue.",
    "Swipe for the four decisions behind it, none of them marketing. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-08": {
  "titulo": "08 · The back catalogue is eating new releases",
  "p": [
    "Steam had its biggest half-year ever, an estimated US$ 11.1 billion between January and June 2026, and only 21% of that came from games released in 2026. Three years ago the slice was 29%. The back catalogue went from 71% to 79% in the same period. Your debut is not competing with this month's releases, it is competing with Stardew Valley at R$24.99, ten years on.",
    "Swipe for what the Alinea numbers say about where the money actually goes. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-09": {
  "titulo": "09 · Subnautica 2 · the real wishlist conversion",
  "p": [
    "One of the biggest wishlist stockpiles on Steam converted just over one in ten. Subnautica 2 went into Early Access on 14 May 2026 with 5.6 million wishlists, and Alinea estimates the cumulative conversion at 12%, for US$ 133.6 million at R$119.99 in Brazil. Twelve per cent of a giant base is still a lot of money. The rate was never the problem, the forecast on top of it was.",
    "Swipe for the same 10,000 wishlists run at 50% and at 12%, side by side. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-10": {
  "titulo": "10 · Balatro · 48 wishlists became 208k",
  "p": [
    "Balatro ended May 2023 with 48 wishlists. One streamer, Dan Gheesling, multiplied that by fifty in four weeks, and Northernlion arrived in July. By launch day, in February 2024, the stockpile was 208,401. It sold 50,000 copies and US$ 600,000 in the first two hours, and 119,000 copies on Steam alone in 24 hours. LocalThunk says he had no commercial ambition at all.",
    "Swipe for the eight months in between, month by month, straight from the dev's own blog. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-11": {
  "titulo": "11 · Lethal Company · 10 million with zero press",
  "p": [
    "Zero reviews on Metacritic and around 10 million copies sold. Lethal Company went into Early Access in October 2023 at R$32.99 in Brazil, made by one person, with no publisher and no campaign, and Push to Talk puts the gross revenue at an estimated US$ 113.9 million. The first month alone did about 642,000 copies and peaked at 57,000 concurrent. Zeekerss had been making games nobody played since 2012.",
    "Swipe for the four design decisions that did the distributing for him. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-12": {
  "titulo": "12 · Vampire Survivors · the game that flopped on itch.io",
  "p": [
    "Luca Galante was out of work in 2020 when he built the prototype in Phaser and bought a Castlevania-style sprite pack to go with it. He put it on itch.io aiming for a hundred players and never got there. The same game, in the same state, went to Steam in late 2021 at R$10.39 and passed a million copies in two to three months. Today poncle is a publisher.",
    "Swipe for the distinction that explains it: a distribution failure looks exactly like a product failure, and the cure is a different one. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-13": {
  "titulo": "13 · Manor Lords · he was expecting 14k wishlists",
  "p": [
    "Greg Styczeń said his girlfriend expected 7,000 wishlists from the announcement trailer and that he, being optimistic, said 14,000 would be amazing. Manor Lords reached 3 million wishlists four days before launch, 500,000 of them in the final week alone. It then sold about a million copies in roughly 30 hours at R$51.99 in Brazil, and hit 3 million by February 2025.",
    "Swipe for the detail everyone skips: four years between the trailer and the sale, with nothing to buy in between. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-14": {
  "titulo": "14 · Schedule I · US$ 151 million, one person",
  "p": [
    "414,000 people playing at the same time on the first weekend, and one developer behind all of it. Schedule I went into Early Access in March 2025 at R$59.99 in Brazil, and market estimates put its Steam revenue at US$ 151 million in 2025. It was not cheap and it did not need to be. The fantasy of running a business end to end explains itself in a thirty-second clip.",
    "Swipe for what it shares with the other solo hits in this series. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-15": {
  "titulo": "15 · Buckshot Roulette · started free, sold 8 million",
  "p": [
    "Mike Klubnika put Buckshot Roulette out for free on itch.io first. Only after the traction was obvious did the paid Steam version arrive, in April 2024, at R$9.99 in Brazil with Critical Reflex. It passed 8 million copies by December 2025, double the 4 million of the year before. One room, one table, one gun, and the game doubled in its second year.",
    "Swipe for why free first is not losing the sale, it is buying the most expensive information there is. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-16": {
  "titulo": "16 · The Steam median is US$ 290",
  "p": [
    "Half the games released on Steam in 2026 made less than US$ 290. The games-stats survey looked at 6,169 launches between January and 22 April, 5,121 of them paid, where the median rises to about US$ 350. Steam Direct charges US$ 100 per game, so half of those developers did not cover the fee. Take the top 50 out and the average falls from US$ 120,000 to US$ 1,500.",
    "Swipe for where the money actually went: three games took more than 40% of everything the window generated. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-17": {
  "titulo": "17 · Meccha Chameleon · 15 million with zero marketing",
  "p": [
    "Meccha Chameleon came out on 9 June 2026 and nine days later 244,731 people were playing it at the same time, which put it in the top 100 most played in Steam history. It sold more than 15 million copies in a month at US$ 5.99, an estimated US$ 71.3 million, with no publisher and nothing spent on marketing. The dev had been shipping games with no traction since 2024.",
    "Swipe for what makes the game produce clips on its own, which is what TikTok distributed for him. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-18": {
  "titulo": "18 · R.E.P.O. · second place behind only Counter-Strike",
  "p": [
    "In the week of 11 to 18 March 2025, R.E.P.O. was the top grossing paid game on Steam and second in overall revenue, behind only Counter-Strike 2. It came from Semiwork, a small Swedish studio, went into Early Access in February at R$29.99 in Brazil and peaked at 230,000 concurrent on its first weekend. Cheap horror co-op with proximity voice was already a proven pattern.",
    "Swipe for what it shares with Lethal Company and Content Warning, and why copying a structure is reading the market. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-19": {
  "titulo": "19 · A review bomb is not rejection",
  "p": [
    "Slay the Spire 2 went from 97% positive to Mostly Negative in about thirty days, on roughly 75,000 negative reviews in Simplified Chinese. Three things pulled the trigger: a regional price read as high in China, a boss rework in the beta that killed the infinite combos, and news of a consultant hired by the studio. IndieBI checked the sales and found no significant impact.",
    "Swipe for the distinction that matters on the dashboard: an orchestrated attack takes down the score, genuine feedback takes down the revenue. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-20": {
  "titulo": "20 · Early Access · the pattern behind the biggest of 2026",
  "p": [
    "Six of the biggest indie results on Steam share one thing: all of them sold before they were finished. Slay the Spire 2 made an estimated US$ 141.7 million on 7.1 million copies in four months of Early Access. Schedule I did US$ 151 million in 2025, Subnautica 2 US$ 133.6 million since May, Lethal Company around 10 million copies, and Manor Lords a million in about 30 hours.",
    "Swipe for what Early Access charges back, because the bill arrives as expectation. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-21": {
  "titulo": "21 · Next Fest · who won June 2026",
  "p": [
    "GameDiscoverCo ranked the June 2026 Next Fest by unique demo players and BOMBANANA! took it, peaking at around 40,000 concurrent on a free demo. Behind it came Iron Nest, Echoes Of Aincrad, Mistfall Hunter and Over The Hill. Four of those five are cooperative, which is not a coincidence: a co-op demo turns every player into a recruiter before they even finish it.",
    "Swipe for the other ranking, the one for wishlist gain, because most played and most wanted are different lists. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-22": {
  "titulo": "22 · Regional pricing · Steam's default is brutal for Brazil",
  "p": [
    "Steam suggests your Brazilian price by converting the dollar, and nobody at Valve looked at what your audience can spend. This is the shelf they compare you against: Buckshot Roulette at R$9.99, Vampire Survivors at R$10.39, Stardew Valley at R$24.99 and Balatro at R$44.99. If an unknown game asks for more than that, the difference has to be justified in the capsule, not in the description.",
    "Swipe for where to change it by hand in Steamworks, which is one field and five minutes. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-23": {
  "titulo": "23 · Papers, Please · 5 million in ten years",
  "p": [
    "Papers, Please sold half a million copies in its first months, 1.8 million by year three and only reached 5 million at the ten year mark, a number Lucas Pope announced himself. He did design, code, art, music and sound practically alone, on a game about stamping passports in a fictional country. Thirteen years later it is still on the shelf at R$32.99 with a Metacritic of 85.",
    "Swipe for the curve nobody shows, because most of those five million arrived years after launch. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-24": {
  "titulo": "24 · Content Warning · gave away 6.6 million then sold 2.2",
  "p": [
    "Content Warning launched free for one day only, on 1 April 2024, and more than 6.6 million people claimed it. The peak hit 204,439 concurrent. After that window it became a paid product at R$11.99 in Brazil and sold over 2.2 million copies in two months. Giving it away did not replace the sale, it built the network that generated the sale.",
    "Swipe for the condition that makes this work, because in a single player game it is just six million lost sales. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-25": {
  "titulo": "25 · ANIMAL WELL · custom engine, Metacritic 90, one person",
  "p": [
    "Billy Basso used neither Unity nor Godot. He wrote his own engine, which is the most discouraged advice in the industry, and it was exactly what allowed the secrets and visual tricks that made the game travel. ANIMAL WELL came out in May 2024 through Bigmode at R$74.99 in Brazil, took a Metacritic of 90 and has passed 300,000 copies on Steam alone.",
    "Swipe for why the rule still holds even here, and what has to be true before you break it. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-26": {
  "titulo": "26 · Brotato · 10 million at US$ 5",
  "p": [
    "Brotato launched at five dollars and had 2 million copies at its 1.0 in June 2023. By 2025 it had passed 10 million, so the game quintupled after it was finished. Thomas Gervraud built it alone in France, under the name Blobfish. Above twenty dollars a player researches and thinks. At five, they click, and volume makes up for margin when the game retains.",
    "Swipe for the choice behind the price, because margin and volume are two different models. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-27": {
  "titulo": "27 · Palworld · 8 million in 6 days",
  "p": [
    "Palworld sold around 8 million copies in six days and peaked at 1.2 million concurrent on Steam, from a studio nobody knew. In 34 days it added up to 25 million, which is 15 million Steam sales plus 10 million Xbox players, and those are not the same thing, because players include Game Pass. Pokémon with guns is five words that nobody had to explain.",
    "Swipe for what you can actually copy here, which is the clarity and not the controversy. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-28": {
  "titulo": "28 · Pizza Tower · US$ 3 million in the first month",
  "p": [
    "Pizza Tower did about 100,000 copies and US$ 3 million in its first month, which is an excellent launch and a long way from the headlines. Three years on, SteamSpy puts it between 1 and 2 million owners. It spent years in the open before charging anything, with playable builds circulating and a community watching the game be born.",
    "Swipe for why looking strange beat looking polished in a store with 38 releases a day. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"jogos-29": {
  "titulo": "29 · DREDGE · the game that fits in one sentence",
  "p": [
    "The Steam page sums DREDGE up as a fishing adventure with a sinister undercurrent, and that is the whole pitch. Fishing is calm and readable in one second. Horror enters as a break, not as the theme. Black Salt Games released it in March 2023 through Team17 at R$89.99 in Brazil, a small studio charging big studio money and holding it.",
    "Swipe for the test behind it: if you cannot say your game in two words, the problem is the concept and not the marketing. Follow @gamejamplus to keep getting launches dissected with a traceable number."
  ],
  "tags": "#GameJamPlus #IndieDev #IndieGameDev #IndieGames #Steam"
},

"meme-m02": {
  "titulo": "M02 · Where you hide in Meccha Chameleon",
  "p": [
    "Everybody hides the same way every match, and everybody thinks their spot is the clever one. Behind the most obvious object, standing still in the open, switching hiding places every three seconds, up on the roof, blended into the scenery, or wedged into that corner nobody else knows. Six ways to play Meccha Chameleon, six kinds of player.",
    "Swipe to find yours, then tag the friend who is definitely the rooftop strategist. Follow @gamejamplus for more."
  ],
  "tags": "#GameJamPlus #MecchaChameleon #GameDev #IndieGames #Gamers"
},

"meme-m03": {
  "titulo": "M03 · Where you build your base in Minecraft",
  "p": [
    "Day one you built a dirt box and swore it was temporary. It is day 83 and you have a full storage system in there. Some of you moved into a village and called it integration. Some of you dug a hole and never came back up. One of you is still building a castle that nobody, including you, will ever see finished.",
    "Swipe to find yours, then tell us in the comments which one you are. If you want to finally finish a build, the 11th edition sign-up is in the bio."
  ],
  "tags": "#GameJamPlus #Minecraft #GameDev #IndieGames #Gamers"
},

"meme-m04": {
  "titulo": "M04 · The way you play Fortnite",
  "p": [
    "You marked the busiest spot on the map, landed with no weapon, and were back in the lobby in forty seconds. Some of you spent the whole match opening chests and died with a perfect inventory. Some of you heard one gunshot and built a mansion you could not get out of. One of you is a bush.",
    "Swipe to find yourself, then tell us in the comments which one you are. If you would rather build something that outlives the match, the 11th edition sign-up is in the bio."
  ],
  "tags": "#GameJamPlus #Fortnite #GameDev #IndieGames #Gamers"
},

"gj-e01": {
  "titulo": "E01 · The 5 regions of GJ+",
  "p": [
    "Your venue does not compete against the whole world. It competes inside one of 5 regions, and the semifinal is not country against country: each region runs its own ceremony to announce the qualifiers.",
    "Tell us in the comments which region you are in. And if your city is not on that map yet, the sign-up to organize the 11th edition is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e01-pt": {
  "titulo": "E01 · As 5 regiões da GJ+",
  "p": [
    "A sua sede não disputa contra o mundo inteiro. Ela disputa dentro de uma das 5 regiões, e a semifinal não é país contra país: cada região faz a própria cerimônia pra anunciar os classificados.",
    "Comenta aqui de qual região você é. E se a sua cidade ainda não está nesse mapa, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o17": {
  "titulo": "O17 · Refer a venue",
  "p": [
    "You do not have to open a venue to climb the Fellows ranking. Referring someone who organizes scores on the same table, and the people worth nominating are already around you, like the neighbouring town that always sends jammers or the teacher who brought the whole class. Venue sign-ups close on September 15.",
    "Tag the person you would nominate to open your city's venue. If they say yes the points are yours, and becoming an organizer yourself is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o17-pt": {
  "titulo": "O17 · Indique uma sede",
  "p": [
    "Você não precisa abrir uma sede pra subir no ranking dos Fellows. Indicar quem organiza pontua na mesma tabela, e quem vale indicar já está perto de você, como a cidade vizinha que sempre manda gente ou o professor que levou a turma inteira. A captação de sedes fecha em 15 de setembro.",
    "Marca aqui quem você indicaria pra abrir a sede da sua cidade. Se essa pessoa topar o ponto é seu, e a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c01": {
  "titulo": "C01 · Meet the GJ+ mascots",
  "p": [
    "The six GJ+ mascots have jobs. Byte engineers the software, Taman Duarte draws, Mico Jackson does the sound, Tuco writes, Capitch tests at 3 a.m. and Felícia produces. Put them together and you have a whole studio, which is roughly the team a jam asks you to build over a weekend.",
    "Tag your team and sort out who is who. And if that team does not exist yet, the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c01-pt": {
  "titulo": "C01 · Quem são as mascotes da GJ+",
  "p": [
    "As seis mascotes da GJ+ têm profissão. A Byte é engenheira de software, o Taman Duarte desenha, o Mico Jackson faz o som, o Tuco escreve, o Capitch testa às três da manhã e a Felícia produz. Juntas, elas são um estúdio inteiro, que é mais ou menos o time que uma jam te pede pra montar num fim de semana.",
    "Marca o seu time aqui e diz quem é quem. E se esse time ainda não existe, a inscrição pra 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o18": {
  "titulo": "O18 · How teams come together at your venue",
  "p": [
    "Not everyone shows up with a team, and sorting that out is the venue's job. A 1-minute pitch, a talent board or 5-minute speed dating across disciplines all work, and online it comes down to three Discord channels. What the manual underlines is that a small aligned team beats a big group with no direction.",
    "Tell us in the comments how you met your team. And if you are the one who would run these formats in your city, becoming an organizer is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o18-pt": {
  "titulo": "O18 · Como se forma um time na sua sede",
  "p": [
    "Nem todo mundo chega com time formado, e resolver isso é tarefa da sede. Pitch de 1 minuto, painel de talentos ou speed dating de 5 minutos entre áreas, qualquer uma dessas funciona, e no online são três canais no Discord. O que o manual grifa é que time pequeno e alinhado rende mais que grupo grande sem direção.",
    "Comenta aqui como você conheceu o seu time. E se você é quem ia rodar essas dinâmicas na sua cidade, a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e02": {
  "titulo": "E02 · 19 categories",
  "p": [
    "Last edition ran 19 categories, and four of them need no sign-up. Art, audio, game design and narrative judge every game by default. Two more depend on a single click when you submit, telling the platform which build type you are sending. Skip that and your game is out of the running.",
    "Drop the category you would go for with the game already in your head. The 11th edition opens in September, and the sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e02-pt": {
  "titulo": "E02 · 19 categorias",
  "p": [
    "Na edição passada foram 19 categorias, e em quatro delas você entra sem se inscrever. Arte, áudio, game design e narrativa avaliam todo jogo por padrão. Outras duas dependem de um clique na hora da submissão, marcando na plataforma que tipo de build você está enviando. Sem isso o jogo não concorre.",
    "Comenta aqui a categoria que você disputaria com o jogo que tem na cabeça agora. A 11ª edição abre em setembro, e a inscrição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o19": {
  "titulo": "O19 · How to fill your venue",
  "p": [
    "Promoting the venue is on you, and it is what decides how big it gets. The manual points at universities and technical schools, local dev collectives, a regional influencer who does not need to be big, and the WhatsApp and Discord groups that already exist. The trick that works is holding a meetup before the jam.",
    "Tell us in the comments which of those channels works in your city. And if your city has no venue yet, sign-ups close on September 15, in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o19-pt": {
  "titulo": "O19 · Como encher a sua sede",
  "p": [
    "A divulgação da sede é sua, e é o que mais decide o tamanho dela. O manual manda bater em universidade e escola técnica, coletivo de desenvolvedores, influencer da sua região que não precisa ser grande, e nos grupos de WhatsApp e Discord que já existem. O truque que funciona é fazer um encontro antes da jam.",
    "Comenta aqui qual desses canais funciona na sua cidade. E se ela ainda não tem sede, a inscrição fecha em 15 de setembro, no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e03": {
  "titulo": "E03 · How the themes work",
  "p": [
    "Every game has to pick at least one theme, and the reason is less obvious than it looks. The theme is the proof that nobody started before the weekend. It only appears at the opening, which puts everyone on the same starting line. And nobody reveals it early, not even the venue.",
    "Tell us which theme would fit the game already in your head. The 11th edition themes only drop at the opening in October, and the sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e03-pt": {
  "titulo": "E03 · Como funcionam os temas",
  "p": [
    "Todo jogo precisa escolher pelo menos um tema, e o motivo é menos óbvio do que parece. O tema é a prova de que ninguém começou antes do fim de semana. Ele só aparece na abertura, o que coloca todo mundo no mesmo ponto de partida. E ninguém conta antes da hora, nem a sede.",
    "Comenta aqui o tema que combinaria com o jogo que você já tem na cabeça. Os da 11ª edição só saem na abertura, em outubro, e a inscrição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e04": {
  "titulo": "E04 · GJ+ now speaks 3 languages",
  "p": [
    "GameJamPlus now speaks three languages. @gamejamplus stays the home of the Portuguese content, @gamejamplus_en is for everyone who follows the jam outside Brazil and Latin America, and @gamejamplus_es speaks to all of Latin America. Same dates, same process and the same 11th edition in all three.",
    "Tell us in the comments which language you play in. If you follow GJ+ from outside Brazil, the account in your language is already live, and the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e04-pt": {
  "titulo": "E04 · A GJ+ agora fala 3 idiomas",
  "p": [
    "A GameJamPlus agora fala três idiomas. O @gamejamplus continua sendo a casa do conteúdo em português, o @gamejamplus_en é pra quem acompanha a jam fora do Brasil e da América Latina, e o @gamejamplus_es fala com a Latam inteira. As datas, o processo e a 11ª edição são os mesmos nos três.",
    "Comenta em que idioma você joga. E se você tem gente do time que faz jogo em inglês ou espanhol, o perfil dela já está no ar, e a inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o21": {
  "titulo": "O21 · The platform does half the work",
  "p": [
    "You will not be running a venue on a spreadsheet. The venue page, the jammer and team list, your local staff and the submissions all come ready-made, and you can import jammers by CSV. If your venue charges a fee, keep it closed and add people as they pay, because payments are not integrated yet.",
    "Tell us in the comments what you thought you would have to do by hand. Venue sign-ups close on September 15, in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o21-pt": {
  "titulo": "O21 · A plataforma faz metade do trabalho",
  "p": [
    "Você não vai controlar sede em planilha. A página da sede, a lista de jammers e times, a sua equipe local e as submissões já vêm prontas, e dá pra importar jammer em CSV. Se a sua sede cobra inscrição, mantenha ela fechada e vá adicionando conforme as pessoas pagam, porque pagamento ainda não é integrado.",
    "Comenta aqui o que você achava que ia ter que fazer na mão. A inscrição de sede fecha em 15 de setembro, no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c02": {
  "titulo": "C02 · Wildlife and CrazyGames",
  "p": [
    "Two companies looked at GJ+ games last edition, and both could publish yours. Wildlife wants mobile free-to-play, hybrid casual or midcore, and pays US$ 1,000 plus up to US$ 5,000 in marketing. CrazyGames wants a browser game and pays US$ 500 plus publication on the portal. In both, the IP stays yours.",
    "Drop which of the two your game would go for. The 11th edition opens in September, and the sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c02-pt": {
  "titulo": "C02 · Wildlife e CrazyGames",
  "p": [
    "Duas empresas olharam os jogos da GJ+ na edição passada, e as duas podiam publicar o seu. A Wildlife quer mobile free-to-play, hybrid casual ou midcore, e paga US$ 1.000 mais até US$ 5.000 em marketing. A CrazyGames quer jogo de navegador e paga US$ 500 mais publicação no portal. Nas duas, a propriedade intelectual continua sua.",
    "Comenta aqui pra qual das duas o seu jogo iria. A 11ª edição abre em setembro, e a inscrição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o22": {
  "titulo": "O22 · Where to ask for help",
  "p": [
    "When something breaks at your venue, four channels answer, and each one is for a different thing. The organizers' WhatsApp group is the fastest, the GJ+ Discord takes tech questions, the support email is for what needs a record, and the complaint form takes reports without identification. Harassment and abusive conduct are not settled by word of mouth.",
    "Tell us in the comments what scares you most about opening a venue. Whatever it is, it already happened to someone in that group, and becoming an organizer is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o22-pt": {
  "titulo": "O22 · Onde pedir socorro",
  "p": [
    "Quando der problema na sua sede, quatro canais atendem, e cada um serve pra uma coisa. O grupo de WhatsApp dos organizadores é o mais rápido, o Discord da GJ+ pega dúvida técnica, o e-mail de suporte é pro que precisa ficar registrado, e o formulário de reclamação aceita denúncia sem identificação. Assédio e conduta abusiva não se resolvem no boca a boca.",
    "Comenta aqui o que mais te dá medo na hora de abrir uma sede. Seja o que for, já aconteceu com alguém naquele grupo, e a inscrição pra organizar a 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
}
};
