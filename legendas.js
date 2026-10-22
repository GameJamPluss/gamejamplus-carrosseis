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
    "GameJamPlus now speaks three languages. @gamejamplus carries the Portuguese content for the community in Brazil, where the jam started, and @gamejamplus_es speaks to all of Latin America, from Mexico to Argentina. The dates, the process and the 11th edition are the same in all three profiles.",
    "Tell us in the comments which language your team plays in. If someone on your team follows along better in Portuguese or Spanish, that profile is already live, and the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e04-pt": {
  "titulo": "E04 · A GJ+ agora fala 3 idiomas",
  "p": [
    "A GameJamPlus agora fala três idiomas. O @gamejamplus_en leva o conteúdo em inglês pra quem acompanha a jam fora do Brasil e da América Latina, e o @gamejamplus_es fala com a Latam inteira, do México à Argentina. Aqui nada muda, e as datas e a 11ª edição são as mesmas nos três perfis.",
    "Comenta em que idioma seu time joga. E se tem gente no seu time que acompanha melhor em inglês ou espanhol, o perfil já está no ar, com a inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e04-es": {
  "titulo": "E04 · GJ+ ahora habla 3 idiomas",
  "p": [
    "GameJamPlus ahora habla tres idiomas. @gamejamplus lleva el contenido en portugués para la comunidad de Brasil, donde nació la jam, y @gamejamplus_en habla con quien sigue la GJ+ fuera de Brasil y América Latina. Las fechas, el proceso y la 11ª edición son los mismos en los tres perfiles.",
    "Cuenta en los comentarios en qué idioma juega tu equipo. Y si alguien de tu equipo sigue mejor en portugués o en inglés, ese perfil ya está activo, con la inscripción a la 11ª edición en el link de la bio."
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
    "Two companies looked at GJ+ games last edition, and both could have published yours. Wildlife wanted mobile free-to-play, hybrid casual or midcore, and paid US$ 1,000 plus up to US$ 5,000 in marketing. CrazyGames wanted a browser game and paid US$ 500 plus publication on the portal. In both, the IP stayed yours.",
    "Drop which of the two your game would go for. The 11th edition opens in September, and the sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c02-pt": {
  "titulo": "C02 · Wildlife e CrazyGames",
  "p": [
    "Duas empresas olharam os jogos da GJ+ na edição passada, e as duas podiam publicar o seu. A Wildlife queria mobile free-to-play, hybrid casual ou midcore, e pagava US$ 1.000 mais até US$ 5.000 em marketing. A CrazyGames queria jogo de navegador e pagava US$ 500 mais publicação no portal. Nas duas, a propriedade intelectual continuava sua.",
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
},

"gj-e01-es": {
  "titulo": "E01 · Los 5 bloques de la GJ+",
  "p": [
    "Tu sede no compite contra el mundo entero. Compite dentro de una de 5 regiones, y la semifinal tampoco es país contra país, porque cada región hace su propia ceremonia para anunciar a quien clasifica.",
    "Cuenta en los comentarios en qué región estás. Y si tu ciudad todavía no aparece en ese mapa, la inscripción para organizar la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j04-es": {
  "titulo": "J04 · No son 48 horas. Son 7 meses",
  "p": [
    "Toda game jam termina el domingo. La nuestra empieza ahí. Las 48 horas son apenas la primera de 5 etapas. Después viene la incubación, un track enfocado en mejorar la build del juego, las semifinales, donde cada país hace su propia ceremonia para presentar a quien clasifica, la aceleración, un track enfocado en el pitch, con monetización y distribución, y la Final Mundial en vivo, con inversores y publishers en la platea. Son 7 meses convirtiendo un prototipo en un negocio. Desliza para verlo etapa por etapa.",
    "Cuenta en los comentarios qué etapa te parece la más difícil para tu equipo. Inscríbete en la 11ª edición por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #GameDesign #GameDevelopment"
},

"gj-o14-es": {
  "titulo": "O14 · Tu ciudad todavía no tiene sede",
  "p": [
    "66 sedes hicieron la edición pasada y la meta de la 11ª es 90, o sea 24 ciudades que todavía no existen en el mapa. Una de ellas puede ser la tuya. Quien suele abrir una sede es un grupo de estudiantes o liga académica, alguien que da clases en un curso de juegos, un colectivo local de desarrollo, un coworking o un centro cultural. Lo que hace falta son las ganas de juntar a la gente de tu ciudad, un espacio o un servidor de Discord, un fin de semana y dos o tres personas que ayuden. El resto lo pone la GJ+. Desliza para ver qué significa eso.",
    "Escribe el nombre de tu ciudad en los comentarios. Queremos ver cuántas faltan todavía en el mapa. Organiza tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j15-es": {
  "titulo": "J15 · Cómo participar, paso a paso",
  "p": [
    "De cero a inscripción lista en cinco pasos. Crea tu cuenta en la plataforma oficial, elige tu sede entre presencial, híbrida y online, arma un equipo o entra en uno, elige las categorías en las que quieres competir, y después desarrolla, sube la build y graba el pitch. Dos detalles que ahorran tiempo. El login no tiene contraseña, llega un link de acceso por correo, así que vale la pena dejarlo guardado en favoritos. La build va en itch.io y el pitch en YouTube, no listado sirve, y solo una persona del equipo hace el envío. Desliza para verlo paso a paso.",
    "Cuenta en los comentarios en qué paso te trabaste y respondemos. Inscríbete en la 11ª edición por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j01-es": {
  "titulo": "J01 · Nadie queda eliminado en la primera etapa",
  "p": [
    "Nadie queda eliminado en la primera etapa de la GameJamPlus. Ni una persona. La primera etapa no es competitiva a nivel global, existe para poner tu juego en el mundo, y pasas a Incubación con tres entregas, una build funcional, un pitch de 3 a 5 minutos y la señal de que quieres continuar. No hay nota de corte ni jurado obligatorio. La edición pasada se entregaron 554 proyectos en 31 países y 68 sedes activas, y todos pasaron. Desliza para verlo etapa por etapa.",
    "Cuenta en los comentarios qué te frena más, el miedo a no terminar o el miedo a que te corten. Inscríbete en la 11ª edición por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-o04-es": {
  "titulo": "O04 · El 100% de lo que recauda tu sede es tuyo",
  "p": [
    "Si tu sede cobra inscripción o entradas, el dinero es entero de la sede. No hay reparto de ingresos, solo hace falta avisar al equipo global. El patrocinio local funciona igual, negocias directo, sin aprobación global, la revisión es caso por caso y la mayoría pasa sin restricción. El Toolbox incluso trae un deck de patrocinio listo, así puedes poner la marca GJ+ en la propuesta y cerrar apoyo local en tu ciudad. Lo que la organización global no hace es mandar dinero. Desliza para ver el acuerdo completo.",
    "Cuenta en los comentarios qué te sigue frenando para abrir la sede de tu ciudad. Organiza tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o06-es": {
  "titulo": "O06 · No existe sede demasiado pequeña",
  "p": [
    "La regla oficial no fija un número mínimo de equipos. Está escrito en la Guía de Organización Local, cada sede cuenta, sin importar el tamaño. Una sede con dos equipos es una sede, aparece en el mapa global, entra en la comunicación oficial y puntúa en el Programa Fellows como cualquier otra. También puede haber más de una sede en la misma ciudad, basta con un término que las distinga en el nombre, porque la GJ+ no trabaja con exclusividad territorial. Toda escena local empezó con un puñado de gente. Desliza para ver por qué el tamaño no es el punto.",
    "Cuenta en los comentarios cuánta gente hace juegos en tu ciudad. Apostamos a que es más de lo que crees. Organiza tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o15-es": {
  "titulo": "O15 · Checklist para montar tu sede",
  "p": [
    "El checklist sale directo de la Guía de Organización Local. En instalaciones, mesas, sillas, enchufes y baños, internet estable por cable y Wi-Fi, un área de descanso aunque sea un rincón, ventilación y algo de agua y snacks. En el equipo local, alguien en recepción, alguien para emergencias, alguien para dudas técnicas y alguien grabando foto y video. En materiales, credenciales, una pizarra, la contraseña del Wi-Fi a la vista y códigos QR del Discord y de la plataforma. El ítem que todo el mundo olvida es documentar el evento. Desliza para ver el checklist completo.",
    "Cuenta en los comentarios el ítem que le falta a esta lista. Quien ya organizó una lo sabe. Organiza tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e12": {
  "titulo": "E12 · The movement in numbers",
  "p": [
    "GameJamPlus is running in 73 venues across 28 countries this 11th edition, from Brazil to Zambia, with Sweden and Bangladesh in between. Every one of those venues was opened by someone local, and nobody was hired to do it. Last edition the same structure delivered 554 games out of 68 active venues, and adding up every edition the ecosystem has produced more than 2,500 games.",
    "Drop the country you follow GJ+ from, I want to watch that map grow in the comments. The 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e12-pt": {
  "titulo": "E12 · O movimento em números",
  "p": [
    "A GameJamPlus está em 73 sedes espalhadas por 28 países nesta 11ª edição, do Brasil à Zâmbia, passando por Suécia e Bangladesh. Cada uma dessas sedes foi aberta por alguém da própria cidade, e ninguém foi contratado pra isso. Na edição passada essa mesma estrutura entregou 554 jogos a partir de 68 sedes ativas, e somando todas as edições o ecossistema já passou de 2.500 jogos.",
    "Comenta de que país você acompanha a GJ+, quero ver esse mapa crescer nos comentários. A inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e12-es": {
  "titulo": "E12 · El movimiento en números",
  "p": [
    "GameJamPlus está en 73 sedes repartidas por 28 países en esta 11ª edición, de Brasil a Zambia, pasando por Suecia y Bangladés. Cada una de esas sedes fue abierta por alguien de la propia ciudad, y nadie fue contratado para eso. La edición pasada esa misma estructura entregó 554 juegos desde 68 sedes activas, y sumando todas las ediciones el ecosistema ya pasó de 2.500 juegos.",
    "Cuenta desde qué país sigues la GJ+, quiero ver ese mapa crecer en los comentarios. La inscripción de la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e13": {
  "titulo": "E13 · What the jam changes in the game",
  "p": [
    "The 48 hours are the first of five stages. After the jam the game goes into Incubation, where the track covers polish, game design, balancing and narrative, and the target is the build. Then each country announces its qualifiers in its own ceremony, and Acceleration moves the target to the pitch, with negotiation, monetisation, funding and distribution. In both reviews the score is half build and half pitch.",
    "Drop which stage your game would stall at. The 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e13-pt": {
  "titulo": "E13 · O que a jam transforma no jogo",
  "p": [
    "As 48 horas são a primeira de cinco etapas. Depois da jam o jogo entra na Incubação, com trilha de polimento, game design, balanceamento e narrativa, e ali o alvo é a build. Em seguida cada país anuncia os classificados na própria cerimônia, e a Aceleração muda o alvo pro pitch, com negociação, monetização, financiamento e distribuição. Nas duas avaliações a nota é metade build e metade pitch.",
    "Comenta em que etapa o seu jogo travaria. A inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e13-es": {
  "titulo": "E13 · Lo que la jam cambia en el juego",
  "p": [
    "Las 48 horas son la primera de cinco etapas. Después de la jam el juego entra en Incubación, con una ruta de pulido, game design, balanceo y narrativa, y ahí el foco es la build. Luego cada país anuncia a quien clasifica en su propia ceremonia, y la Aceleración mueve el foco al pitch, con negociación, monetización, financiamiento y distribución. En las dos evaluaciones la nota es mitad build y mitad pitch.",
    "Cuenta en qué etapa se trabaría tu juego. La inscripción de la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c03": {
  "titulo": "C03 · Famous games born in a game jam",
  "p": [
    "Surgeon Simulator came out of a 48 hour Global Game Jam in 2013, and the clumsy controls were a time constraint that turned into the joke of the game. Superhot started as a browser prototype at 7DFPS that same year. Keep Talking and Nobody Explodes, Celeste and Baba Is You all began the same way, in a few days of jam, and two of them went on to win big awards in the indie scene.",
    "Drop which of the five you have played. Hellbrella came out of GJ+ 24/25 by the same route, and the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c03-pt": {
  "titulo": "C03 · Jogos famosos que nasceram numa game jam",
  "p": [
    "O Surgeon Simulator saiu de uma Global Game Jam de 48 horas em 2013, e o controle desengonçado era limitação de tempo que virou a piada do jogo. O Superhot começou como protótipo de navegador na 7DFPS no mesmo ano. Keep Talking and Nobody Explodes, Celeste e Baba Is You nasceram do mesmo jeito, em poucos dias de jam, e dois deles levaram prêmio grande da cena indie.",
    "Comenta qual desses cinco você jogou. A Hellbrella saiu da GJ+ 24/25 pelo mesmo caminho, e a inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c03-es": {
  "titulo": "C03 · Juegos famosos que nacieron en una game jam",
  "p": [
    "Surgeon Simulator salió de una Global Game Jam de 48 horas en 2013, y el control torpe era una limitación de tiempo que se volvió el chiste del juego. Superhot empezó como prototipo de navegador en la 7DFPS ese mismo año. Keep Talking and Nobody Explodes, Celeste y Baba Is You nacieron igual, en pocos días de jam, y dos de ellos se llevaron premios grandes de la escena indie.",
    "Cuenta cuál de los cinco jugaste. Hellbrella salió de la GJ+ 24/25 por el mismo camino, y la inscripción de la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o25": {
  "titulo": "O25 · You do not start from scratch",
  "p": [
    "Jammer sign-up is open and the path is already built. It is free, and it starts on the official GameJamPlus site, where clicking to sign up as a jammer takes you to Hero Hub, the platform of this edition. There you create your login with email and password, and it is inside the platform that you sign up for a venue, between on site, hybrid and online. There is a handbook explaining what to hand in and how each stage works, teams are 3 to 6 people, and most of them meet at the venue on the day. If your city has no venue yet, the online one takes you through Discord. And organizers use the same platform for venue sign-up and submission, with a toolbox, a translated marketing kit and direct support.",
    "Jammer sign-up for the 11th edition is open. It is free, you do it through the link in bio, and you pick your venue right there."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o25-pt": {
  "titulo": "O25 · Você não começa do zero",
  "p": [
    "A inscrição de jammer abriu e o caminho já está montado. Ela é grátis, e começa no site oficial da GameJamPlus, onde clicar em se inscrever como jammer leva você pro Hero Hub, que é a plataforma da edição. Lá você cria o login com e-mail e senha, e é dentro da plataforma que você se inscreve numa sede, entre presencial, híbrida e online. Tem manual explicando o que entregar e como funciona cada etapa, o time é de 3 a 6 pessoas e a maioria se encontra na sede no dia. Se a sua cidade ainda não tem sede, a online recebe você pelo Discord. E quem organiza usa a mesma plataforma pra inscrição e submissão da sede, com toolbox, kit de marketing traduzido e suporte direto.",
    "A inscrição de jammer da 11ª edição está aberta. É grátis, você faz pelo link da bio e escolhe a sua sede na hora."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o25-es": {
  "titulo": "O25 · No empiezas de cero",
  "p": [
    "La inscripción de jammer abrió y el camino ya está armado. Es gratis, y empieza en el sitio oficial de GameJamPlus, donde hacer clic en inscribirse como jammer te lleva a Hero Hub, que es la plataforma de la edición. Ahí creas tu login con correo y contraseña, y es dentro de la plataforma que te inscribes en una sede, entre presencial, híbrida y online. Hay manual que explica qué entregar y cómo funciona cada etapa, el equipo es de 3 a 6 personas y la mayoría se conoce en la sede el mismo día. Si tu ciudad todavía no tiene sede, la online te recibe por Discord. Y quien organiza usa la misma plataforma para la inscripción y la entrega de la sede, con toolbox, kit de marketing traducido y soporte directo.",
    "La inscripción de jammer de la 11ª edición está abierta. Es gratis, la haces por el link de la bio y eliges tu sede ahí mismo."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c04": {
  "titulo": "C04 · From 80 people in a room to 50 countries",
  "p": [
    "In 2017 GameJamPlus was 80 people in a room in Rio de Janeiro. Nine years later it runs in more than 50 countries and over 100 cities, with 17,500+ people who have played the jam and 2,500+ games made inside the ecosystem. Along the way it became the official IGDA game jam worldwide and walked off Shark Tank Brazil with a deal signed by all five investors.",
    "Drop the city where you would open that door. The 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c04-pt": {
  "titulo": "C04 · De 80 pessoas numa sala a 50 países",
  "p": [
    "Em 2017 a GameJamPlus era 80 pessoas numa sala no Rio de Janeiro. Nove anos depois roda em mais de 50 países e mais de 100 cidades, com 17.500+ pessoas que já jogaram a jam e 2.500+ jogos criados dentro do ecossistema. No caminho virou a game jam oficial da IGDA no mundo e saiu do Shark Tank Brasil com acordo fechado com todos os cinco investidores.",
    "Comenta em que cidade você abriria essa porta. A inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c04-es": {
  "titulo": "C04 · De 80 personas a 50 países",
  "p": [
    "En 2017 GameJamPlus eran 80 personas en una sala de Río de Janeiro. Nueve años después corre en más de 50 países y más de 100 ciudades, con 17.500+ personas que ya jugaron la jam y 2.500+ juegos creados dentro del ecosistema. En el camino se volvió la game jam oficial de la IGDA en el mundo y salió de Shark Tank Brasil con acuerdo cerrado con los cinco inversores.",
    "Cuenta en qué ciudad abrirías esa puerta. La inscripción de la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o28": {
  "titulo": "O28 · If you have a community, you have a venue",
  "p": [
    "A GJ+ venue does not require an events company. Universities and technical schools send students home with portfolio work, pitch practice and a certificate. Coworkings and innovation spaces fill up for a weekend and get local press. NGOs, collectives and communities do not even need a physical space, since a fully online venue runs on a Discord server.",
    "Drop which of those three is your case, and if none of them is, describe yours and we answer. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o28-pt": {
  "titulo": "O28 · Se você tem uma comunidade, você tem uma sede",
  "p": [
    "Sede da GJ+ não exige produtora de evento. Universidade e escola técnica mandam a galera pra casa com portfólio, treino de pitch e certificado. Coworking e espaço de inovação enchem por um fim de semana e ainda atraem imprensa local. ONG, coletivo e comunidade nem precisam de espaço físico, porque sede 100% online roda num servidor de Discord.",
    "Comenta qual desses três é o seu caso, e se nenhum for, descreve o seu que a gente responde. Abra a sua sede pelo link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o28-es": {
  "titulo": "O28 · Si tienes una comunidad, tienes una sede",
  "p": [
    "Una sede de la GJ+ no exige productora de eventos. Universidades y escuelas técnicas mandan a la gente a casa con portafolio, práctica de pitch y certificado. Coworkings y espacios de innovación se llenan por un fin de semana y atraen prensa local. ONG, colectivo y comunidad ni siquiera necesitan espacio físico, porque una sede 100% online funciona en un servidor de Discord.",
    "Cuenta cuál de esos tres es tu caso, y si no es ninguno, describe el tuyo y te respondemos. Abre tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e14": {
  "titulo": "E14 · The dates of the 11th edition",
  "p": [
    "October 16, 17 and 18, 2026. The 11th edition of GameJamPlus opens worldwide on the same weekend, at local venues in more than 50 countries. Friday starts with the global keynote revealing themes and categories to everyone at once, and by Sunday each team delivers a build and a pitch. After that the jam keeps going through incubation, semifinals, acceleration and an in-person Global Final.",
    "Drop the city you will be taking part from. Signing up is free and the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e14-pt": {
  "titulo": "E14 · As datas da 11ª edição",
  "p": [
    "16, 17 e 18 de outubro de 2026. A 11ª edição da GameJamPlus abre no mundo inteiro no mesmo fim de semana, em sede local, em mais de 50 países. Sexta começa com a keynote global revelando temas e categorias pra todo mundo ao mesmo tempo, e no domingo cada time entrega build e pitch. Depois disso a jam segue por incubação, semifinais, aceleração e uma Final Global presencial.",
    "Comenta de que cidade você vai participar. A inscrição é gratuita e está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e14-es": {
  "titulo": "E14 · Las fechas de la 11ª edición",
  "p": [
    "16, 17 y 18 de octubre de 2026. La 11ª edición de GameJamPlus abre en todo el mundo el mismo fin de semana, en sede local, en más de 50 países. El viernes empieza con la keynote global que revela temas y categorías a todos a la vez, y el domingo cada equipo entrega build y pitch. Después de eso la jam sigue por incubación, semifinales, aceleración y una Final Global presencial.",
    "Cuenta desde qué ciudad vas a participar. La inscripción es gratis y está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o24": {
  "titulo": "O24 · You can charge, and 100% stays with you",
  "p": [
    "Money talk, straight. Your venue can charge sign-up fees and tickets, and every cent stays with your venue. You prospect, negotiate and close local sponsors yourself, with no global approval. In exchange, full transparency, global does not send money and every venue manages its own resources. What still comes at no cost is the platform, the toolbox, a ten year old brand with the IGDA seal and the organizer network.",
    "Drop the doubt that still holds you back from hosting. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o24-pt": {
  "titulo": "O24 · Sede paga, e 100% fica com você",
  "p": [
    "Conversa de dinheiro, sem rodeio. A sua sede pode cobrar inscrição e ingresso, e cada centavo fica com a sua sede. Você prospecta, negocia e fecha o patrocinador local sozinho, sem aprovação global. Em troca vem a transparência, a global não manda dinheiro e cada sede administra os próprios recursos. O que continua entrando sem custo é a plataforma, o toolbox, uma marca de dez anos com selo da IGDA e a rede de organizadores.",
    "Comenta a dúvida que ainda te trava pra abrir uma sede. Abra a sua sede pelo link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o24-es": {
  "titulo": "O24 · Puedes cobrar, y el 100% es tuyo",
  "p": [
    "Charla de plata, sin rodeos. Tu sede puede cobrar inscripción y entrada, y cada centavo queda con tu sede. Tú prospectas, negocias y cierras el patrocinio local solo, sin aprobación global. A cambio viene la transparencia, la global no manda dinero y cada sede administra sus propios recursos. Lo que sigue entrando sin costo es la plataforma, el toolbox, una marca de diez años con sello de la IGDA y la red de organizadores.",
    "Cuenta la duda que todavía te frena para abrir una sede. Abre tu sede por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
}
,

"gj-c05": {
  "titulo": "C05 · A jam theme has been everything",
  "p": [
    "In 2012 the Global Game Jam theme was an Ouroboros image, with not a single word written. In 2009 it was a whole sentence, in 2014 an Anaïs Nin quote and in 2024 an order, Make Me Laugh.",
    "At GJ+ the theme drops in the Friday keynote, for the whole world at once. Drop the theme you wish would come up. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c05-pt": {
  "titulo": "C05 · O tema de jam já foi de tudo",
  "p": [
    "Em 2012 o tema da Global Game Jam foi uma imagem de Ouroboros, sem uma palavra escrita. Em 2009 foi uma frase inteira, em 2014 uma citação de Anaïs Nin e em 2024 uma ordem, Make Me Laugh.",
    "Na GJ+ o tema cai na keynote de sexta, pro mundo inteiro ao mesmo tempo. Comenta que tema você queria que caísse. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c05-es": {
  "titulo": "C05 · El tema de una jam ya fue de todo",
  "p": [
    "En 2012 el tema de la Global Game Jam fue una imagen de Ouroboros, sin una sola palabra escrita. En 2009 fue una frase entera, en 2014 una cita de Anaïs Nin y en 2024 una orden, Make Me Laugh.",
    "En la GJ+ el tema cae en la keynote del viernes, para todo el mundo al mismo tiempo. Comenta qué tema te gustaría que saliera. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e15": {
  "titulo": "E15 · Most of you are not students",
  "p": [
    "We went and read our own profile numbers. 48.7% of the people who follow GJ+ are 25 to 34 and 24% are 35 to 44. The 18 to 24 bracket is only 17%.",
    "And Manaus is the third city on the list, ahead of Porto Alegre and Curitiba. Drop the bracket you are in. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e15-pt": {
  "titulo": "E15 · A maioria de vocês não é estudante",
  "p": [
    "Fomos ver os números do próprio perfil. 48,7% de quem acompanha a GJ+ tem de 25 a 34 anos e 24% tem de 35 a 44. A faixa de 18 a 24 é só 17%.",
    "E Manaus é a terceira cidade da lista, na frente de Porto Alegre e Curitiba. Comenta em que faixa você está. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e15-es": {
  "titulo": "E15 · La mayoría de ustedes no es estudiante",
  "p": [
    "Fuimos a ver los números del propio perfil. 48,7% de quienes siguen la GJ+ tiene de 25 a 34 años y 24% de 35 a 44. La franja de 18 a 24 es solo 17%.",
    "Y Manaus es la tercera ciudad de la lista, por delante de Porto Alegre y Curitiba. Comenta en qué franja estás. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e16": {
  "titulo": "E16 · Making games after work",
  "p": [
    "You can make games with a full time job. A loose project competes with Monday every single week and loses, while a jam is locked in months ahead. Three days, October 16, 17 and 18, opening Friday with the global keynote and closing Sunday with a build and a pitch. Teams are 3 to 6 people, and half the score is the pitch, so art, sound and production count as much as code.",
    "Nobody is cut in the first stage. Every team that delivers moves on to Incubation, and the five stages that follow run over six months, between one work week and the next. Drop how many hours a week you manage to carve out for making games. If the calendar was what was stopping you, the 11th edition sign-up is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e16-pt": {
  "titulo": "E16 · Fazer jogo depois do trabalho",
  "p": [
    "Dá pra fazer jogo com um emprego de oito horas. Projeto solto concorre com a segunda-feira todas as semanas, e perde, enquanto a jam tem data marcada meses antes. São três dias, 16, 17 e 18 de outubro, que abrem na sexta com o keynote global e fecham no domingo com build e pitch. O time tem de 3 a 6 pessoas, e metade da nota é o pitch, então arte, som e produção contam tanto quanto código.",
    "Ninguém é cortado na primeira etapa. Todo time que entrega segue pra Incubação, e as cinco etapas até a Final Global correm em seis meses, entre uma semana de trabalho e outra. Comenta quantas horas por semana você consegue tirar pra fazer jogo hoje. Se o que te segurava era a agenda, a inscrição da 11ª edição está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e16-es": {
  "titulo": "E16 · Hacer juegos después del trabajo",
  "p": [
    "Se puede hacer juego con un trabajo de ocho horas. Un proyecto suelto compite con el lunes todas las semanas, y pierde, mientras que una jam tiene fecha fijada con meses de anticipación. Son tres días, 16, 17 y 18 de octubre, que abren el viernes con la keynote global y cierran el domingo con build y pitch. El equipo es de 3 a 6 personas, y la mitad del puntaje es el pitch, así que arte, sonido y producción cuentan tanto como el código.",
    "Nadie queda fuera en la primera etapa. Todo equipo que entrega sigue a Incubación, y las cinco etapas hasta la Final Global corren en seis meses, entre una semana de trabajo y la otra. Comenta cuántas horas por semana logras sacar para hacer juegos hoy. Si lo que te frenaba era la agenda, la inscripción de la 11ª edición está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c06": {
  "titulo": "C06 · From 1,650 people to 35 thousand a year",
  "p": [
    "The first Global Game Jam, in 2009, had 1,650 people across 53 sites. In 2020 it hit 48,753 in 118 countries, fell to 28 thousand in 2021 and has settled above 35 thousand since.",
    "GJ+ is in 64 sites and 24 countries in the 11th edition, and has been the official IGDA game jam worldwide since July 2024. Drop the country you follow from. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c06-pt": {
  "titulo": "C06 · De 1.650 pessoas a 35 mil por ano",
  "p": [
    "A primeira Global Game Jam, em 2009, teve 1.650 pessoas em 53 sedes. Em 2020 chegou a 48.753 em 118 países, caiu pra 28 mil em 2021 e hoje se firmou acima dos 35 mil.",
    "A GJ+ está em 64 sedes e 24 países na 11ª edição, e é a jam oficial da IGDA no mundo desde julho de 2024. Comenta de que país você acompanha. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c06-es": {
  "titulo": "C06 · De 1.650 personas a 35 mil por año",
  "p": [
    "La primera Global Game Jam, en 2009, tuvo 1.650 personas en 53 sedes. En 2020 llegó a 48.753 en 118 países, cayó a 28 mil en 2021 y hoy se afirmó arriba de los 35 mil.",
    "La GJ+ está en 64 sedes y 24 países en la 11ª edición, y es la jam oficial de la IGDA en el mundo desde julio de 2024. Comenta desde qué país nos sigues. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j16": {
  "titulo": "J16 · Nobody shows up ready",
  "p": [
    "Half the score is the pitch, so you can join without writing a line of code. Teams are 3 to 6 people and most of them meet at the venue on the day. And the weekend cuts nobody.",
    "Every game delivered is judged on art, audio, game design and narrative with nobody having to apply. Drop what you would bring to a team. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j16-pt": {
  "titulo": "J16 · Ninguém chega pronto",
  "p": [
    "Metade da nota é o pitch, então dá pra entrar sem escrever uma linha de código. O time é de 3 a 6 pessoas e a maioria se encontra na sede no dia. E o fim de semana não elimina ninguém.",
    "Todo jogo entregue é avaliado em arte, áudio, game design e narrativa sem ninguém precisar se candidatar. Comenta o que você levaria pro time. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j16-es": {
  "titulo": "J16 · Nadie llega listo",
  "p": [
    "La mitad del puntaje es el pitch, así que se puede entrar sin escribir una línea de código. El equipo es de 3 a 6 personas y la mayoría se conoce en la sede ese día. Y el fin de semana no elimina a nadie.",
    "Todo juego entregado se evalúa en arte, audio, game design y narrativa sin que nadie tenga que postularse. Comenta qué llevarías al equipo. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e17": {
  "titulo": "E17 · The door was the missing part",
  "p": [
    "Good games exist far from the big city hubs, and they always did. Ten GJ+ editions produced 2,500 games across 100 host cities, most of which nobody would call a games hub, with 17,500 people in 50 countries since 2017.",
    "Talent was already there. What the jam adds is a fixed date, a deadline and an audience at the end, on October 16, 17 and 18. Drop the city you are reading from. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e17-pt": {
  "titulo": "E17 · Só faltava a porta",
  "p": [
    "Existe jogo bom longe dos grandes centros, e sempre existiu. Dez edições da GJ+ deram 2.500 jogos em 100 cidades anfitriãs, a maioria delas que ninguém chamaria de polo de games, com 17.500 pessoas em 50 países desde 2017.",
    "Talento já estava lá. O que a jam põe em cima é data marcada, prazo e plateia no fim, em 16, 17 e 18 de outubro. Comenta de que cidade você está lendo. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e17-es": {
  "titulo": "E17 · Solo faltaba la puerta",
  "p": [
    "Hay juegos buenos lejos de los grandes centros, y siempre los hubo. Diez ediciones de la GJ+ dieron 2.500 juegos en 100 ciudades anfitrionas, la mayoría de las cuales nadie llamaría polo de games, con 17.500 personas en 50 países desde 2017.",
    "El talento ya estaba. Lo que la jam pone encima es fecha fijada, plazo y público al final, el 16, 17 y 18 de octubre. Comenta desde qué ciudad estás leyendo. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j17": {
  "titulo": "J17 · You can join without making a game",
  "p": [
    "There are two doors open in the 11th edition and only one asks for a game. As a jammer you build one from scratch in 48 hours, in a team of 3 to 6 people, and from beginner to senior everyone fits. As a volunteer you join the global staff, in communication, judging, tech support and operations, without writing a line of code.",
    "Drop which of the two you would take. Jammer sign-up for the 11th edition is open, it is free, and you do it through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j17-pt": {
  "titulo": "J17 · Dá pra entrar sem fazer um jogo",
  "p": [
    "São duas portas abertas na 11ª edição e só uma pede um jogo. Como jammer você cria um do zero em 48 horas, em time de 3 a 6 pessoas, e de iniciante a sênior todos cabem. Como voluntário você entra na staff global, em comunicação, jurados, apoio técnico e operações, sem escrever uma linha de código.",
    "Comenta por qual das duas você entraria. A inscrição de jammer da 11ª edição está aberta, é grátis e você faz pelo link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j17-es": {
  "titulo": "J17 · Puedes entrar sin hacer un juego",
  "p": [
    "Son dos puertas abiertas en la 11ª edición y solo una pide un juego. Como jammer creas uno desde cero en 48 horas, en equipo de 3 a 6 personas, y de principiante a sénior entran todos. Como voluntario entras en la staff global, en comunicación, jurados, soporte técnico y operaciones, sin escribir una línea de código.",
    "Cuenta por cuál de las dos entrarías. La inscripción de jammer de la 11ª edición está abierta, es gratis y la haces por el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j18": {
  "titulo": "J18 · What you hand in on Sunday",
  "p": [
    "Two things, and neither is a finished game. A build that runs start to finish, however short, and a 3 to 5 minute pitch. Half the score sits in the pitch.",
    "Every game delivered is judged on art, audio, game design and narrative without anyone applying, and Best PC and Mobile Game need one tick at submission. Drop which of the two scares you more. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j18-pt": {
  "titulo": "J18 · O que você entrega no domingo",
  "p": [
    "Duas coisas, e nenhuma delas é jogo terminado. Uma build que roda do começo ao fim, mesmo que curta, e um pitch de 3 a 5 minutos. Metade da nota está no pitch.",
    "Todo jogo entregue é avaliado em arte, áudio, game design e narrativa sem ninguém se candidatar, e Melhor Jogo PC e Mobile pedem um clique na submissão. Comenta qual das duas te dá mais frio na barriga. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-j18-es": {
  "titulo": "J18 · Lo que entregas el domingo",
  "p": [
    "Dos cosas, y ninguna es un juego terminado. Una build que funciona de principio a fin, aunque sea corta, y un pitch de 3 a 5 minutos. La mitad del puntaje está en el pitch.",
    "Todo juego entregado se evalúa en arte, audio, game design y narrativa sin que nadie se postule, y Mejor Juego PC y Mobile piden un clic al enviar. Comenta cuál de las dos te pone más nervioso. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e18": {
  "titulo": "E18 · What is on the table",
  "p": [
    "US$ 100 thousand in prizes have already gone out of GJ+, and sign-up is still free. The Global Final hands out 15 prizes across three days in person, with contracts and international networking in the same room.",
    "Before that come four continental semifinals and a month of business bootcamp with investor connections. Drop which stage you most want to see up close. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e18-pt": {
  "titulo": "E18 · O que está em jogo",
  "p": [
    "Já saíram da GJ+ US$ 100 mil em prêmios, e a inscrição continua sendo grátis. A Final Global entrega 15 prêmios em três dias presenciais, com contratos e networking internacional na mesma sala.",
    "Antes dela vêm quatro semifinais continentais e um mês de bootcamp de negócios com conexão de investidor. Comenta qual etapa você mais quer ver de perto. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e18-es": {
  "titulo": "E18 · Lo que está en juego",
  "p": [
    "Ya salieron de la GJ+ US$ 100 mil en premios, y la inscripción sigue siendo gratis. La Final Global entrega 15 premios en tres días presenciales, con contratos y networking internacional en la misma sala.",
    "Antes vienen cuatro semifinales continentales y un mes de bootcamp de negocios con conexión de inversores. Comenta qué etapa quieres ver más de cerca. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c07": {
  "titulo": "C07 · Three GJ+ games on sale right now",
  "p": [
    "The Chef's Shift came out of GameJamPlus Indonesia 2022 and sits at 97% of 1,923 reviews on Steam. Hellbrella came out of GJ+ 24/25 and sold 3 thousand copies in under 3 weeks through GoGo Games. Mix It! landed public funding from Fondo El Fauno in Costa Rica.",
    "None of the three existed on a Friday night. They became a prototype in 48 hours at a local venue, and what came after is the six month journey the jam opens for every team that delivers. Drop whether you have played any of them. Jammer sign-up for the 11th edition is free and it is in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c07-pt": {
  "titulo": "C07 · Três jogos da GJ+ que estão à venda agora",
  "p": [
    "The Chef's Shift saiu da GameJamPlus Indonésia 2022 e está com 97% de 1.923 avaliações na Steam. A Hellbrella saiu da GJ+ 24/25 e vendeu 3 mil cópias em menos de 3 semanas pela GoGo Games. O Mix It! foi aprovado no Fondo El Fauno, na Costa Rica.",
    "Nenhum dos três existia numa sexta à noite. Viraram protótipo em 48 horas numa sede local, e o que veio depois é a jornada de seis meses que a jam abre pra todo time que entrega. Comenta se você já jogou algum deles. A inscrição de jammer da 11ª edição é grátis e está no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-c07-es": {
  "titulo": "C07 · Tres juegos de la GJ+ a la venta ahora",
  "p": [
    "The Chef's Shift salió de GameJamPlus Indonesia 2022 y está con 97% de 1.923 reseñas en Steam. Hellbrella salió de la GJ+ 24/25 y vendió 3 mil copias en menos de 3 semanas por GoGo Games. Mix It! consiguió fondos del Fondo El Fauno, en Costa Rica.",
    "Ninguno de los tres existía un viernes por la noche. Se volvieron prototipo en 48 horas en una sede local, y lo que vino después es el recorrido de seis meses que la jam abre para todo equipo que entrega. Comenta si jugaste alguno. La inscripción de jammer de la 11ª edición es gratis y está en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e19": {
  "titulo": "E19 · A cause wins a trophy",
  "p": [
    "At GJ+ a cause is a line in the rulebook. Eduplay asks the game to actually teach something, Green Play covers climate and conscious consumption, and Diverse by Design asks 40% of the team to come from under-represented groups.",
    "Those optional categories cost US$ 250 each, while jam sign-up and the four main categories are free. Drop the cause you would put inside a 48 hour game. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e19-pt": {
  "titulo": "E19 · ODS vale troféu",
  "p": [
    "Na GJ+ a causa é linha do regulamento. Eduplay pede que o jogo ensine algo de verdade, Green Play cobre clima e consumo consciente, e Diverse by Design pede 40% da equipe de grupos sub-representados.",
    "Essas categorias opcionais custam US$ 250 cada, enquanto a inscrição da jam e as quatro principais são grátis. Comenta que causa você colocaria num jogo de 48 horas. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e19-es": {
  "titulo": "E19 · La causa gana trofeo",
  "p": [
    "En la GJ+ la causa es línea del reglamento. Eduplay pide que el juego enseñe algo de verdad, Green Play cubre clima y consumo consciente, y Diverse by Design pide 40% del equipo de grupos sub-representados.",
    "Esas categorías opcionales cuestan US$ 250 cada una, mientras que la inscripción de la jam y las cuatro principales son gratis. Comenta qué causa pondrías en un juego de 48 horas. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e20": {
  "titulo": "E20 · Who judges your game",
  "p": [
    "Art, audio, game design and narrative are judged on the file you delivered, with no conversation. Best Pitch looks at public speaking, English, presentation and your business plan. Game of the Year is the average of both scores.",
    "Whoever reaches the Global Final presents to people who sign contracts. Drop what scares you more, showing the game or talking about it. 11th edition sign-up in the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e20-pt": {
  "titulo": "E20 · Quem julga o seu jogo",
  "p": [
    "Arte, áudio, game design e narrativa são julgados no arquivo que você entregou, sem conversa. Melhor Pitch olha oratória, inglês, apresentação e plano de negócios. Jogo do Ano é a média das duas notas.",
    "Quem chega na Final Global apresenta pra quem assina contrato. Comenta o que te dá mais medo, mostrar o jogo ou falar dele. Inscrição da 11ª edição no link da bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e23-pt": {
  "titulo": "E23 · Pitch vale metade da nota",
  "p": [
    "Na GameJamPlus a nota é metade build, metade pitch. A build mostra o jogo. O pitch mostra por que ele merece continuar.",
    "O guia oficial pede de 3 a 5 minutos, pelo menos legenda em inglês e gameplay rodando na tela. O júri procura quatro respostas: o que torna o jogo único, pra quem ele é, quem são os concorrentes e quem é o time. Orçamento em três cenários e contato no último slide fecham o vídeo.",
    "O prazo é amanhã, terça, 20/10, às 23h59 no horário local. Salva este post e manda no grupo do time antes de gravar."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e23": {
  "titulo": "E23 · Pitch is half the score",
  "p": [
    "At GameJamPlus the score is half build, half pitch. The build shows the game. The pitch shows why it deserves to keep going.",
    "The official guide asks for 3 to 5 minutes, at least English subtitles and real gameplay on screen. The jury looks for four answers: what makes the game unique, who it's for, who the competitors are and who's on the team. A budget in three scenarios and your contacts on the last slide close the video.",
    "The deadline is tomorrow, Tuesday, Oct 20, at 11:59 p.m. local time. Save this post and drop it in your team chat before you hit record."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e23-es": {
  "titulo": "E23 · El pitch es la mitad de la nota",
  "p": [
    "En GameJamPlus la nota es mitad build, mitad pitch. La build muestra el juego. El pitch muestra por qué merece seguir.",
    "La guía oficial pide de 3 a 5 minutos, al menos subtítulos en inglés y gameplay real en pantalla. El jurado busca cuatro respuestas: qué hace único al juego, para quién es, quiénes son los competidores y quién forma el equipo. Un presupuesto en tres escenarios y el contacto en la última diapositiva cierran el video.",
    "El plazo es mañana, martes 20/10, a las 23:59 hora local. Guarda este post y mándalo al grupo de tu equipo antes de grabar."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e24-pt": {
  "titulo": "E24 · Último dia do pitch",
  "p": [
    "Hoje é o último dia pra entregar o pitch, até 23h59 no horário local da sua sede. Algumas sedes pedem antes, então confere com quem organiza a sua.",
    "Antes de subir: vídeo de 3 a 5 minutos, legenda em inglês, gameplay de verdade e contato no último slide. No YouTube ele vai como não listado, com o título GJ+ 26/27 - Game Jam Submission - Nome do Jogo - Nome do Time. No Hero Hub entram o link da build, o link do pitch, as categorias e a confirmação de que o time segue pra Incubação.",
    "Entregou? Comenta \"enviado\" aqui embaixo e diz de qual sede é o seu time."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e24": {
  "titulo": "E24 · Last day for the pitch",
  "p": [
    "Today is the last day to submit your pitch, until 11:59 p.m. local time at your venue. Some venues ask for it earlier, so check with whoever runs yours.",
    "Before uploading: a 3 to 5 minute video, English subtitles, real gameplay and contacts on the last slide. It goes on YouTube as unlisted, titled GJ+ 26/27 - Game Jam Submission - Game Name - Team Name. On Hero Hub you add the build link, the pitch link, the categories and the confirmation that your team moves on to Incubation.",
    "Done? Comment \"sent\" below and tell us which venue your team is from."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e24-es": {
  "titulo": "E24 · Último día del pitch",
  "p": [
    "Hoy es el último día para entregar el pitch, hasta las 23:59 hora local de tu sede. Algunas sedes lo piden antes, así que confirma con quien organiza la tuya.",
    "Antes de subir: video de 3 a 5 minutos, subtítulos en inglés, gameplay real y contacto en la última diapositiva. En YouTube va como no listado, con el título GJ+ 26/27 - Game Jam Submission - Nombre del Juego - Nombre del Equipo. En el Hero Hub van el link de la build, el link del pitch, las categorías y la confirmación de que el equipo sigue a la Incubación.",
    "¿Ya entregaste? Comenta \"enviado\" aquí abajo y cuéntanos de qué sede es tu equipo."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e25-pt": {
  "titulo": "E25 · Amanhã começa o Playtest Spcine",
  "p": [
    "Amanhã abre o Playtest Spcine. De 21/10 a 02/11, os jogos feitos na jam ficam na mão de quem joga, e quem fez recebe feedback de verdade antes de começar a melhorar o jogo.",
    "Nas sextas 23 e 30 tem live no YouTube jogando os jogos da galera. E os destaques do Playtest entram na premiação da Incubação, com vencedores anunciados nas Semifinais Continentais.",
    "Já coloca na agenda: quarta abre, sexta tem live, segunda, 02/11, fecha. Chama o time e separa um tempo pra jogar."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e25": {
  "titulo": "E25 · Playtest Spcine starts tomorrow",
  "p": [
    "Playtest Spcine opens tomorrow. From Oct 21 to Nov 2, the games made at the jam are in players' hands, and the people who made them get real feedback before they start improving the game.",
    "On Fridays, Oct 23 and 30, there's a YouTube live playing the community's games. And the Playtest standouts are part of the Incubation awards, with winners announced at the Continental Semifinals.",
    "Put it in your calendar: it opens Wednesday, there's a live on Friday and it closes Monday, Nov 2. Get your team together and save some time to play."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e25-es": {
  "titulo": "E25 · Mañana empieza el Playtest Spcine",
  "p": [
    "Mañana abre el Playtest Spcine. Del 21/10 al 02/11, los juegos hechos en la jam quedan en manos de quien juega, y quien los hizo recibe feedback real antes de empezar a mejorar el juego.",
    "Los viernes 23 y 30 hay live en YouTube jugando los juegos de la comunidad. Y los destacados del Playtest forman parte de los premios de la Incubación, con ganadores anunciados en las Semifinales Continentales.",
    "Anótalo en la agenda: abre el miércoles, el viernes hay live y cierra el lunes 02/11. Junta a tu equipo y aparta un tiempo para jugar."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e26-pt": {
  "titulo": "E26 · O Playtest começou",
  "p": [
    "Começou o Playtest Spcine. São 13 dias, até segunda, 02/11, pra jogar, avaliar e ouvir o que falaram do seu jogo.",
    "A jam rodou em sedes de vários países no mesmo fim de semana, e jogar o jogo de quem você não conhece é o jeito mais rápido de ver o que dá pra fazer em 48 horas. Sexta, 23/10, a gente joga ao vivo no YouTube e o seu jogo pode aparecer.",
    "Conta nos comentários de qual sede é o primeiro jogo que você vai abrir."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e26": {
  "titulo": "E26 · Playtest is live",
  "p": [
    "Playtest Spcine is live. 13 days, until Monday, Nov 2, to play, rate and hear what people think of your game.",
    "The jam ran at venues in several countries on the same weekend, and playing a game by people you don't know is the fastest way to see what can be done in 48 hours. On Friday, Oct 23, we play live on YouTube and your game could show up.",
    "Tell us in the comments which venue the first game you'll open comes from."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e26-es": {
  "titulo": "E26 · Empezó el Playtest",
  "p": [
    "Empezó el Playtest Spcine. Son 13 días, hasta el lunes 02/11, para jugar, evaluar y escuchar lo que dicen de tu juego.",
    "La jam se hizo en sedes de varios países el mismo fin de semana, y jugar el juego de alguien que no conoces es la forma más rápida de ver lo que se puede hacer en 48 horas. El viernes 23/10 jugamos en vivo en YouTube y tu juego puede aparecer.",
    "Cuéntanos en los comentarios de qué sede es el primer juego que vas a abrir."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e27-pt": {
  "titulo": "E27 · Feedback bom tem método",
  "p": [
    "\"Achei chato\" não ajuda ninguém. \"No nível 2 não achei a saída e desisti\" ajuda o time inteiro.",
    "Quatro regras antes de comentar: fala do que você sentiu, aponta o momento exato, separa bug de opinião e termina com uma coisa que funcionou. E quando o feedback é sobre o seu jogo, lê tudo e responde depois. Três pessoas travando no mesmo lugar é sinal, uma só é opinião.",
    "Faltam 9 dias de Playtest Spcine. Salva as quatro regras e usa no próximo jogo que você avaliar."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e27": {
  "titulo": "E27 · Good feedback has a method",
  "p": [
    "\"It was boring\" helps no one. \"On level 2 I couldn't find the exit and gave up\" helps the whole team.",
    "Four rules before you comment: say what you felt, point to the exact moment, separate bugs from opinions and end with something that worked. And when the feedback is about your game, read it all and reply later. Three people stuck in the same spot is a signal, one is an opinion.",
    "9 days of Playtest Spcine left. Save these four rules and use them on the next game you rate."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e27-es": {
  "titulo": "E27 · El buen feedback tiene método",
  "p": [
    "\"Me aburrió\" no ayuda a nadie. \"En el nivel 2 no encontré la salida y lo dejé\" ayuda a todo el equipo.",
    "Cuatro reglas antes de comentar: di lo que sentiste, señala el momento exacto, separa bug de opinión y termina con algo que funcionó. Y cuando el feedback es sobre tu juego, lee todo y responde después. Tres personas trabadas en el mismo lugar es una señal, una sola es una opinión.",
    "Faltan 9 días de Playtest Spcine. Guarda estas cuatro reglas y úsalas en el próximo juego que evalúes."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e28-pt": {
  "titulo": "E28 · Olha o jogador, não o jogo",
  "p": [
    "Esse é pra quem fez o jogo. No playtest, o que importa é o que a pessoa faz, não o que você queria que ela fizesse.",
    "Anota onde ela parou de jogar, o que tentou e o jogo não deixou, quanto tempo levou pra entender o objetivo e onde riu ou xingou. Se precisou explicar, o jogo não explicou. Depois junta tudo numa lista, ordena pelo que mais aparece e leva pra próxima fase da Incubação.",
    "Sexta, 30/10, tem live de novo e o Playtest vai até segunda, 02/11. Manda este post pra quem cuida do game design no seu time."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e28": {
  "titulo": "E28 · Watch the player, not the game",
  "p": [
    "This one is for the people who made the game. In a playtest, what matters is what the player does, not what you wanted them to do.",
    "Note where they stopped playing, what they tried and the game didn't allow, how long it took to get the goal and where they laughed or swore. If you had to explain it, the game didn't. Then put it all in a list, sort it by what shows up most and take it to the next phase of Incubation.",
    "Another live this Friday, Oct 30, and the Playtest runs until Monday, Nov 2. Send this post to whoever handles game design on your team."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e28-es": {
  "titulo": "E28 · Mira al jugador, no al juego",
  "p": [
    "Este es para quien hizo el juego. En un playtest, lo que importa es lo que la persona hace, no lo que tú querías que hiciera.",
    "Anota dónde dejó de jugar, qué intentó y el juego no le dejó, cuánto tardó en entender el objetivo y dónde se rió o se enojó. Si tuviste que explicar, el juego no explicó. Después junta todo en una lista, ordénala por lo que más aparece y llévala a la próxima fase de la Incubación.",
    "El viernes 30/10 hay live otra vez y el Playtest va hasta el lunes 02/11. Manda este post a quien se encarga del game design en tu equipo."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e29-pt": {
  "titulo": "E29 · Reta final, faltam 3 dias",
  "p": [
    "Faltam 3 dias de Playtest Spcine, e os destaques entram na premiação da Incubação, com vencedores anunciados nas Semifinais Continentais.",
    "Pra fechar bem o fim de semana: joga o que ficou pra depois, responde quem jogou o seu e chama quem ainda não jogou, do seu time e da sua sede. Fecha segunda, 02/11.",
    "Posta o seu jogo com #beourplusone, que a gente quer ver o que saiu de cada sede."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e29": {
  "titulo": "E29 · Final stretch, 3 days left",
  "p": [
    "3 days of Playtest Spcine left, and the standouts are part of the Incubation awards, with winners announced at the Continental Semifinals.",
    "To close the weekend well: play the games you left for later, reply to the people who played yours and call those who haven't played yet, from your team and your venue. Closes Monday, Nov 2.",
    "Post your game with #beourplusone, we want to see what came out of every venue."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e29-es": {
  "titulo": "E29 · Recta final, faltan 3 días",
  "p": [
    "Faltan 3 días de Playtest Spcine, y los destacados forman parte de los premios de la Incubación, con ganadores anunciados en las Semifinales Continentales.",
    "Para cerrar bien el fin de semana: juega lo que dejaste para después, responde a quien jugó el tuyo y llama a quien todavía no jugó, de tu equipo y de tu sede. Cierra el lunes 02/11.",
    "Publica tu juego con #beourplusone, queremos ver lo que salió de cada sede."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e30-pt": {
  "titulo": "E30 · Acaba amanhã",
  "p": [
    "Último domingo do Playtest Spcine. Amanhã, segunda, 02/11, fecha.",
    "Checklist antes de fechar: jogou pelo menos um jogo de outra sede? Deixou feedback em cada jogo que jogou? Leu tudo que falaram do seu? Anotou o que muda no jogo? Se faltou algum, hoje ainda dá tempo.",
    "E conta aqui: qual feedback mais mudou o jeito que você vê o seu jogo?"
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e30": {
  "titulo": "E30 · Ends tomorrow",
  "p": [
    "Last Sunday of Playtest Spcine. It closes tomorrow, Monday, Nov 2.",
    "Checklist before it closes: played at least one game from another venue? Left feedback on every game you played? Read everything people said about yours? Wrote down what changes in your game? If one is missing, there's still time today.",
    "And tell us: which piece of feedback changed the way you see your game the most?"
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e30-es": {
  "titulo": "E30 · Termina mañana",
  "p": [
    "Último domingo del Playtest Spcine. Mañana, lunes 02/11, cierra.",
    "Checklist antes del cierre: ¿jugaste al menos un juego de otra sede? ¿Dejaste feedback en cada juego que jugaste? ¿Leíste todo lo que dijeron del tuyo? ¿Anotaste lo que cambia en tu juego? Si falta alguno, hoy todavía hay tiempo.",
    "Y cuéntanos: ¿qué feedback cambió más la forma en que ves tu juego?"
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e31-pt": {
  "titulo": "E31 · Último dia do Playtest",
  "p": [
    "Hoje é o último dia do Playtest Spcine. Cada feedback deixado nesses 13 dias ajuda um time a fazer um jogo melhor.",
    "Na quinta, 05/11, começa o acompanhamento técnico da Incubação, que vai até 17/12. É ali que o feedback vira jogo. Depois vêm as Semifinais Continentais e a Final em São Paulo, em 20 de abril de 2027.",
    "Valeu a quem jogou e avaliou, e obrigado à Spcine por fazer o Playtest acontecer. A próxima parada é a Incubação, acompanha cada etapa com a gente."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e31": {
  "titulo": "E31 · Last day of the Playtest",
  "p": [
    "Today is the last day of Playtest Spcine. Every piece of feedback left in these 13 days helps a team make a better game.",
    "On Thursday, Nov 5, technical guidance starts in Incubation, which runs until Dec 17. That's where the feedback turns into the game. Then come the Continental Semifinals and the Final in São Paulo, on April 20, 2027.",
    "Thanks to everyone who played and rated, and thank you, Spcine, for making the Playtest happen. Next stop is Incubation, follow every step with us."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e31-es": {
  "titulo": "E31 · Último día del Playtest",
  "p": [
    "Hoy es el último día del Playtest Spcine. Cada feedback que se dejó en estos 13 días ayuda a un equipo a hacer un juego mejor.",
    "El jueves 05/11 empieza el acompañamiento técnico de la Incubación, que va hasta el 17/12. Ahí el feedback se convierte en juego. Después vienen las Semifinales Continentales y la Final en São Paulo, el 20 de abril de 2027.",
    "Gracias a quien jugó y evaluó, y gracias, Spcine, por hacer posible el Playtest. La próxima parada es la Incubación, sigue cada etapa con nosotros."
  ],
  "tags": "#GameJamPlus #PlaytestSpcine #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e21": {
  "titulo": "E21 · The jam is on",
  "p": [
    "The three themes and this edition's categories are in our Keynote. Opening happens today at your venue, the build goes on itch.io by Sunday at 11:59 p.m. and the pitch goes on YouTube by Tuesday, local time. Any engine and any asset with a license are allowed, the game is made from scratch and the intellectual property stays with whoever made it. Teams that deliver both and mark that they want to keep going move on to Incubation, which starts Wednesday the 21st.",
    "Tell us in the comments which venue you're joining, and show your team's weekend with #beourplusone, from the rough draft to the build. Have a great jam, everyone."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e21-es": {
  "titulo": "E21 · La jam empezó",
  "p": [
    "Los tres temas y las categorías de esta edición están en nuestro Keynote. La apertura es hoy en tu sede, la build va a itch.io hasta el domingo a las 23:59 y el pitch va a YouTube hasta el martes, en hora local. Vale cualquier engine y cualquier asset con licencia, el juego nace desde cero y la propiedad intelectual es de quien lo hizo. Quien entregue los dos y marque que quiere seguir pasa a la Incubación, que empieza el miércoles 21.",
    "Cuéntanos en los comentarios en qué sede participas y muestra el fin de semana de tu equipo con #beourplusone, del borrador a la build. Buena jam para todo el mundo."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e21-pt": {
  "titulo": "E21 · A jam começou",
  "p": [
    "Os três temas e as categorias desta edição estão no nosso Keynote. A abertura acontece hoje na sua sede, a build vai pro itch.io até domingo às 23h59 e o pitch vai pro YouTube até terça, no horário local. Vale qualquer engine e qualquer asset com licença, o jogo nasce do zero e a propriedade intelectual fica com quem fez. Quem entregar os dois e marcar que quer continuar segue pra Incubação, que começa na quarta, 21.",
    "Comenta de qual sede você está participando e mostra o fim de semana do seu time com #beourplusone, do rascunho à build. Boa jam pra todo mundo."
  ],
  "tags": "#GameJamPlus #BeOurPlusOne #GameJam #GameDev #IndieDev #IndieGames"
},

"gj-e20-es": {
  "titulo": "E20 · Quién juzga tu juego",
  "p": [
    "Arte, audio, game design y narrativa se juzgan en el archivo que entregaste, sin conversación. Mejor Pitch mira oratoria, inglés, presentación y plan de negocios. Juego del Año es el promedio de las dos notas.",
    "Quien llega a la Final Global presenta ante quien firma contratos. Comenta qué te da más miedo, mostrar el juego o hablar de él. Inscripción de la 11ª edición en el link de la bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-e32-pt": {
  "titulo": "E32 · Xsolla é parceira da GJ+",
  "p": [
    "A Xsolla é patrocinadora da 11ª edição da GameJamPlus. Há mais de 20 anos a empresa cria ferramentas e serviços só para a indústria de jogos, e opera em mais de 200 países e regiões, com mais de 1.000 formas de pagamento e 130 moedas.",
    "Na jornada da GJ+, a Aceleração é a etapa em que o jogo vira negócio, com monetização, financiamento e distribuição na mesa. É nesse terreno que a Xsolla trabalha todo dia, da loja própria do jogo à rede de criadores que ajuda a divulgar.",
    "Manda esse post pra quem cuida da parte de negócio no seu time."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e32": {
  "titulo": "E32 · Xsolla is now a GJ+ partner",
  "p": [
    "Xsolla is a sponsor of the 11th edition of GameJamPlus. For over 20 years the company has built tools and services only for the games industry, and it operates in 200+ countries and regions with 1,000+ payment methods and 130+ currencies.",
    "In the GJ+ journey, Acceleration is the stage where the game becomes a business, with monetization, funding and distribution on the table. That is the ground Xsolla works on every day, from a game's own web shop to the creators who help spread it.",
    "Send this post to whoever handles the business side of your team."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e32-es": {
  "titulo": "E32 · Xsolla ahora es aliada de GJ+",
  "p": [
    "Xsolla es patrocinadora de la 11ª edición de GameJamPlus. Hace más de 20 años la empresa crea herramientas y servicios solo para la industria de los videojuegos, y opera en más de 200 países y regiones, con más de 1.000 métodos de pago y 130 monedas.",
    "En el camino de GJ+, la Aceleración es la etapa en que el juego se vuelve negocio, con monetización, financiamiento y distribución sobre la mesa. Es el terreno en el que Xsolla trabaja todos los días, desde la tienda propia del juego hasta los creadores que lo difunden.",
    "Manda este post a quien se encarga del negocio en tu equipo."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e33-pt": {
  "titulo": "E33 · Nogap Experts entrou no jogo",
  "p": [
    "A Nogap Experts é patrocinadora da 11ª edição da GameJamPlus. É uma contabilidade especializada na indústria de games, com sede em São Paulo, filiais em Santos e Orlando e mais de 200 empresas e profissionais atendidos.",
    "Ela cuida da parte que ninguém ensina na jam, como a Steam podendo reter até 30% das vendas feitas nos EUA, royalties de fora, tributação de DLC e prestação de contas de edital. Na Aceleração da GJ+, quando o jogo vira negócio, é esse assunto que entra na conversa.",
    "Conta nos comentários qual desses chefões o seu time já enfrentou."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e33": {
  "titulo": "E33 · Nogap Experts joins the game",
  "p": [
    "Nogap Experts is a sponsor of the 11th edition of GameJamPlus. It is an accounting firm specialized in the games industry, based in São Paulo with offices in Santos and Orlando, and it has served more than 200 companies and professionals.",
    "They handle the part nobody teaches at a jam, like Steam withholding up to 30% of US sales, foreign royalties, DLC taxes and grant reporting. In GJ+ Acceleration, when the game becomes a business, this is what joins the conversation.",
    "Tell us in the comments which of these bosses your team has already faced."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e33-es": {
  "titulo": "E33 · Nogap Experts entró al juego",
  "p": [
    "Nogap Experts es patrocinadora de la 11ª edición de GameJamPlus. Es una contabilidad especializada en la industria de los videojuegos, con sede en São Paulo, oficinas en Santos y Orlando y más de 200 empresas y profesionales atendidos.",
    "Se encarga de la parte que nadie enseña en la jam, como Steam reteniendo hasta un 30% de las ventas en EE. UU., royalties de afuera, impuestos de DLC y rendición de cuentas de fondos públicos. En la Aceleración de GJ+, cuando el juego se vuelve negocio, este tema entra en la conversación.",
    "Cuéntanos en los comentarios cuál de estos jefes ya enfrentó tu equipo."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e34-pt": {
  "titulo": "E34 · Nossa nova parceira, a Xsolla",
  "p": [
    "A Xsolla é patrocinadora da 11ª edição da GameJamPlus. A empresa trabalha há mais de 20 anos só com a indústria de games e cuida do caminho entre o jogo e quem joga, com pagamentos, lojas próprias e distribuição em mais de 200 países e regiões.",
    "Na prática, é a estrutura que permite a um estúdio vender direto ao jogador, receber no método de pagamento de cada país, em mais de 130 moedas, e chegar a criadores de conteúdo que divulgam o jogo. Muito projeto que nasce numa sede da GJ+ segue até a Aceleração, a etapa em que o jogo vira negócio, e é nesse momento que esse tipo de conhecimento passa a fazer diferença.",
    "Conta nos comentários em qual país você gostaria de ver o seu jogo sendo jogado."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e34": {
  "titulo": "E34 · Our newest partner, Xsolla",
  "p": [
    "Xsolla is a sponsor of the 11th edition of GameJamPlus. For more than 20 years the company has worked only with the games industry, handling the path between a game and the people who play it, with payments, web stores and distribution in more than 200 countries and regions.",
    "In practice, it is the structure that lets a studio sell straight to players, get paid through each country's payment methods, in more than 130 currencies, and reach content creators who spread the game. Many projects born at a GJ+ venue go on to Acceleration, the stage where the game becomes a business, and that is when this kind of knowledge starts to make a difference.",
    "Tell us in the comments which country you would love to see your game played in."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e34-es": {
  "titulo": "E34 · Nuestra nueva aliada, Xsolla",
  "p": [
    "Xsolla es patrocinadora de la 11ª edición de GameJamPlus. La empresa trabaja hace más de 20 años solo con la industria de los videojuegos y se encarga del camino entre el juego y quien lo juega, con pagos, tiendas propias y distribución en más de 200 países y regiones.",
    "En la práctica, es la estructura que permite a un estudio vender directo al jugador, cobrar con los métodos de pago de cada país, en más de 130 monedas, y llegar a creadores de contenido que difunden el juego. Muchos proyectos que nacen en una sede de GJ+ siguen hasta la Aceleración, la etapa en la que el juego se vuelve negocio, y es en ese momento que este tipo de conocimiento empieza a marcar la diferencia.",
    "Cuéntanos en los comentarios en qué país te gustaría ver tu juego."
  ],
  "tags": "#GameJamPlus #Xsolla #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e35-pt": {
  "titulo": "E35 · Nogap Experts, nova parceira da GJ+",
  "p": [
    "A Nogap Experts é patrocinadora da 11ª edição da GameJamPlus. É um escritório de contabilidade especializado no mercado de games, com sede em São Paulo e filiais em Santos e Orlando, que atende estúdios, publishers e profissionais criativos.",
    "O trabalho dela é cuidar da parte que nenhuma jam treina, como a tributação de royalties, DLCs e microtransações, a conciliação das vendas na Steam, na Epic e na PS Store, a estrutura da empresa e a prestação de contas de editais e leis de incentivo. É o tipo de assunto que aparece quando o projeto começa a virar estúdio, e que pouca gente aprende antes de precisar.",
    "Comenta qual dessas partes mais trava o seu time hoje."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e35": {
  "titulo": "E35 · Nogap Experts, new GJ+ partner",
  "p": [
    "Nogap Experts is a sponsor of the 11th edition of GameJamPlus. It is an accounting firm specialized in the games market, based in São Paulo with offices in Santos and Orlando, serving studios, publishers and creative professionals.",
    "Its work covers the part no jam trains you for, like taxes on royalties, DLCs and microtransactions, reconciling sales on Steam, Epic and PS Store, company structure and reporting for grants and incentive laws. It is the kind of subject that shows up when a project starts turning into a studio, and that few people learn before they need it.",
    "Tell us in the comments which of these parts slows your team down the most today."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
},

"gj-e35-es": {
  "titulo": "E35 · Nogap Experts, nueva aliada de GJ+",
  "p": [
    "Nogap Experts es patrocinadora de la 11ª edición de GameJamPlus. Es un estudio contable especializado en el mercado de los videojuegos, con sede en São Paulo y oficinas en Santos y Orlando, que atiende a estudios, publishers y profesionales creativos.",
    "Su trabajo cubre la parte que ninguna jam entrena, como los impuestos sobre royalties, DLCs y microtransacciones, la conciliación de ventas en Steam, Epic y PS Store, la estructura de la empresa y la rendición de cuentas de fondos públicos y leyes de incentivo. Es el tipo de tema que aparece cuando el proyecto empieza a convertirse en estudio, y que poca gente aprende antes de necesitarlo.",
    "Cuéntanos en los comentarios cuál de estas partes frena más a tu equipo hoy."
  ],
  "tags": "#GameJamPlus #NogapExperts #BeOurPlusOne #GameDev #IndieDev #IndieGames"
}
};
