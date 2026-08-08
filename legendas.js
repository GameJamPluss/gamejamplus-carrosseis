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

   ATENÇÃO: O01, O04, O07, O10, O13, O16 e O05 ainda têm placeholder nos
   slides (nome das sedes e pontuação do ranking). As legendas usam só os
   números confirmados: meta de 90 sedes e 66 na edição passada. Quando a
   lista fechar, vale reescrever citando as sedes. */
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

"gj-j02": {
  "titulo": "J02 · You do not need to know how to code",
  "p": [
    "Half the score at GameJamPlus is the pitch, not the code. Only 15% of participants call themselves professional or senior, and 26% had never done a game jam before. You deliver the game plus the business plan, so art, sound, narrative, production and business weigh as much as programming.",
    "Swipe to see every role a team needs, then tell us in the comments which one you would bring: code, art, sound or business. The 11th edition is open, sign up at the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #GameDevelopment #IndieDev #IndieGameDev #IndieGames #GameDesign #GameArt #GameAudio #GameWriting #GameDevCommunity"
},

"gj-j03": {
  "titulo": "J03 · Your first game jam, start to finish",
  "p": [
    "A whole weekend, hour by hour. Friday at 7pm the opening reveals the themes, which nobody knows beforehand, so everyone starts from zero at the same minute all over the world. At 8pm you form or join a team, and if you came on your own the venue runs a team formation activity. Saturday is production from end to end: small scope, a game running early, testing from hour one. Sunday at 11:59pm the build is due, and the pitch has until Tuesday. Deliver both and you are in Incubation. Swipe to see it hour by hour.",
    "Tell us in the comments whether this will be your first jam or you have been through one before. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j04": {
  "titulo": "J04 · It is not 48 hours. It is 7 months",
  "p": [
    "Every game jam ends on Sunday. Ours starts there. The 48 hours are just the first of 5 stages: then comes incubation, a track focused on improving the game build, the semifinals, where each country runs its own ceremony to present the qualifiers, the acceleration stage, a track focused on the pitch, with monetization and distribution, and the live Global Final, with investors and publishers in the audience. That is 7 months turning a prototype into a business. Swipe to see it stage by stage.",
    "Tell us in the comments which stage you think would be the hardest for your team. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #GameDesign #GameDevelopment"
},

"gj-j05": {
  "titulo": "J05 · Games that came through GJ+",
  "p": [
    "All of these started as a weekend prototype. Hellbrella, a roguelite about a kitten with an umbrella, sold 3,000 copies in under 3 weeks through GoGo Games. Mix It!, from Costa Rica, won Best Sound Design in 21/22 and was selected by Fondo El Fauno in 2025. Super Mombo Quest passed 1 million players on PlayStation. And As Aventuras de Nhimawa, from ArkHalo Games in Angola, reached the GJ+ 24/25 finalist list. That adds up to more than 2,500 games created inside the ecosystem, across 50 countries. Swipe to see each one.",
    "Tell us in the comments which one you would play today and we will tag the studios there. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #IndieGames #GameDev #GameJam #IndieDev #GameDevelopment"
},

"gj-j06": {
  "titulo": "J06 · Half the score is the pitch",
  "p": [
    "Half of your score is the pitch, at every stage, and it is what almost every team gets wrong. It needs to be 3 to 5 minutes with English subtitles, because a judge from another country cannot evaluate what they cannot understand. Inside it: real gameplay on video instead of a screenshot, what makes the game unique and who it is for, your competitors, a budget in 3 scenarios, and who the team is. If you already have wishlists, Discord members or playtest numbers, show them. And never end without contact and a QR code, because there are investors and publishers watching. Swipe for the full checklist.",
    "Tell us in the comments: what scares you more, recording the pitch or finishing the build? Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevelopment"
},

"gj-j07": {
  "titulo": "J07 · She made a game with no electricity",
  "p": [
    "Marina Gatto entered GJ+ 23/24 from the Inhã-Bã village, in Amazonas, with no outlet, no stable internet and no studio. So she went physical instead of digital, which GJ+ allows: board games count, as long as they can be evaluated digitally through print and play, Tabletopia or another format. She took first place in the North region. The following year she was champion of the SBT Category with Brincadeira de Herói, a board game from Sítio do Picapau Amarelo. Quality games have always existed far from the big hubs. Swipe to see how it happened.",
    "Tell us in the comments where you are from. We want to see how many corners of the world this story reaches. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j08": {
  "titulo": "J08 · Myth vs Truth about game jams",
  "p": [
    "What stops you from signing up is almost never true. You do not need to already work in games: 26% of participants are first timers and only 15% describe themselves as professional or senior. You do not need to code, because half the score is the pitch, and marketing, business, art, sound and writing decide the outcome. You do not need a team, since venues run team formation at the opening. There is no engine or language restriction, and board games count. And the first stage eliminates nobody. Swipe to see each one.",
    "Tell us in the comments which of these five has made you put it off. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j09": {
  "titulo": "J09 · Game jam survival kit",
  "p": [
    "What to bring so Saturday night does not hurt. The gear list is a laptop with everything already installed, headphones, mouse, chargers, an extension cord and a power bank. The comfort list is a jacket, because the air conditioning will get you, a water bottle, quick snacks and a neck pillow if you are pulling an all-nighter. Before leaving home, create your itch.io account, join the venue Discord and back everything up. And the item nobody mentions: a business card or a portfolio link, because networking is a deliverable too. Swipe to see the full kit.",
    "Tell us in the comments the one item you always forget to pack. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j10": {
  "titulo": "J10 · The ideal team is 3 to 6 people",
  "p": [
    "Three to six people is the size that finishes a game. A big team with no direction does not. The six roles you will miss are programming, art, game design, music and sound, production and marketing, and the golden rule is to assign them before the first line of code. Not defining roles is one of the most common mistakes in the official handbook: it costs ten minutes and saves the weekend. If you show up alone, the venue handles it with talent boards, skill pitches and matchmaking on Discord. Going solo is fine too. Swipe to see each role.",
    "Tag who you want on your team for the 11th edition. Sign up through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDesign"
},

"gj-j11": {
  "titulo": "J11 · What happens after the jam",
  "p": [
    "A roguelite about a kitten with an umbrella sold 3,000 copies in three weeks. Hellbrella started as a prototype at GJ+ 24/25 and was published by GoGo Games, the publisher inside the same ecosystem. That is what exists after Sunday: Incubation with a class track, Semifinals with an international jury, Acceleration focused on business and pitch, and an in-person Global Final with investors in the room. More than 200 studios have come through, along with over 24,000 professionals reached and more than 40 investors in the network. Swipe to see the whole path.",
    "Tell us in the comments how far you want to take the game you have not started yet. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j12": {
  "titulo": "J12 · 5 mistakes that sink a team at a jam",
  "p": [
    "Five mistakes that sink a team at a jam, from people who have been there. Trying to make a huge game, when scope is the rarest skill in the room. Not assigning roles, so three people do the same thing and nobody does the audio. Leaving testing for the end, because a bug found on Sunday night does not get fixed. Testing only on your own machine, when the build has to run on the judge's computer. And missing the deadline: build by Sunday 11:59pm, pitch by Tuesday, backup from Friday on. Swipe to see each one.",
    "Tell us in the comments which of these five has already sunk a team of yours. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDesign"
},

"gj-j13": {
  "titulo": "J13 · The Gatekeeper",
  "p": [
    "There has always been someone at the door deciding who gets in. We call them the Gatekeeper, and it is not one person, it is the set of people who control access to the industry and sit on the information that would make a difference to you. The Gatekeeper says only big studios get shelf space, that game jams are a student hobby, that you cannot make a living from games and that nothing relevant comes out of the periphery. Then a girl with no electricity wins her region. Swipe to see the rest.",
    "Tell us in the comments which of those lines has been thrown at you. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j14": {
  "titulo": "J14 · What you take home",
  "p": [
    "Nobody leaves a jam empty-handed, even without winning. Every participant leaves with a certificate, a finished game in the portfolio, real experience working in a team, presentation and pitching practice and a network of contacts in their own city. For students it is the easiest line to justify on a CV: a project delivered on deadline, in a multidisciplinary team, presented to a panel. And you join a network across more than 50 countries, with a global Discord, mentors and judges from international studios. Swipe to see the full list.",
    "Tell us in the comments what you took home from your first jam. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

"gj-j15": {
  "titulo": "J15 · How to take part, step by step",
  "p": [
    "From zero to signed up in five steps. Create your account on the official platform, pick your venue between in person, hybrid and online, form or join a team, choose the categories you want to compete in, then build it, upload the build and record the pitch. Two details that save time: the login has no password, you get an access link by email, so bookmark it. The build goes on itch.io and the pitch on YouTube, unlisted is fine, and only one team representative submits. Swipe to see it step by step.",
    "Tell us in the comments which step you got stuck on and we will answer. Sign up for the 11th edition through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieGames #IndieDev #GameDevelopment"
},

/* ---------------------------------------------- GJ+ · O (sedes e Fellows) */

"gj-o01": {
  "titulo": "O01 · Confirmed venues, week 1",
  "p": [
    "The venue list of the 11th edition opens here, and it grows every Monday. Each week we publish who has confirmed and who came in during the last seven days, until the map is closed. The target for this edition is 90 venues, against the 66 that ran the last one, so there are 24 cities that do not exist on the map yet. Any of them can be yours, because there is no minimum number of teams and no territorial exclusivity. Swipe to see who is already in.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o02": {
  "titulo": "O02 · What you get as a Fellow",
  "p": [
    "If you have ever run a venue, you already are a Fellow. The program pays in points for every action inside the edition, and those points go into a global organizer ranking. A Fellow also gets a spot in the global WhatsApp group, direct access to the GJ+ team and visibility for the venue on the official channels. The top ranked get travel and lodging to the in-person Global Final, with studios from 5 continents, investors and publishers in the room. Running the venue, bringing jammers and referring new venues all score. Swipe to see how it works.",
    "Tell us in the comments what city you are from. We want to see where a venue is still missing. Become an organizer through the link in bio."
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

"gj-o04": {
  "titulo": "O04 · Confirmed venues, week 2",
  "p": [
    "Week two of the 11th edition venue list, and the map keeps filling in every Monday. The target is 90 venues, against the 66 that ran the last edition, which means 24 cities still missing. Opening one is lighter than it sounds: the official rule sets no minimum number of teams, a venue with two teams is a venue, and there can be more than one in the same city, as long as the name has a distinguishing term. Swipe to see who confirmed this week.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o05": {
  "titulo": "O05 · The Fellows ranking",
  "p": [
    "The Fellows ranking is live, and every action inside the edition counts. You score by running your venue, by every jammer you bring in, by every new venue you refer, by the extra meetups your community runs and by staying involved through the later stages. What the top of the table gets is travel and lodging to the in-person Global Final, plus public recognition and direct access to the global organizer network. It is the same ranking for organizers, sponsors and ambassadors. Swipe to see where the table stands.",
    "Tell us in the comments the city you want to see at the top of this ranking. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o06": {
  "titulo": "O06 · 100% of what your venue raises is yours",
  "p": [
    "If your venue charges for registration or tickets, the money is entirely the venue's. There is no revenue share, you only need to inform the global team. Local sponsorship works the same way: you negotiate directly, with no global approval, review happens case by case and most pass without restriction. The Toolbox even includes a ready-made sponsorship deck, so you can put the GJ+ brand in the proposal and close local support in your city. What the global organization does not do is send money. Swipe to see the whole arrangement.",
    "Tell us in the comments what is still holding you back from opening your city's venue. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o07": {
  "titulo": "O07 · Confirmed venues, week 3",
  "p": [
    "Third Monday of the 11th edition venue list. What a venue actually asks of you is one weekend: promoting it in your city, hosting the jammers, making sure everyone registers on the platform and documenting the event in photo and video. Ceremonies, local jury, mentors and catering are optional, and Incubation, Semifinals and the Final belong to the global team. The target this edition is 90 venues, against the 66 that ran the last one. Swipe to see who is in so far.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
  ],
  "tags": "#GameJamPlus #GameJam #GameDev #IndieDev #IndieGames #GameDevCommunity"
},

"gj-o08": {
  "titulo": "O08 · There is no such thing as a venue too small",
  "p": [
    "The official rule sets no minimum number of teams. It is written in the Local Organizer Guide: every venue counts, regardless of size. A venue with two teams is a venue, it shows up on the global map, goes into the official communications and scores in the Fellows Program like any other. There can also be more than one venue in the same city, all it takes is a distinguishing term in the name, because GJ+ does not work with territorial exclusivity. Every local scene started with a handful of people. Swipe to see why size is not the point.",
    "Tell us in the comments how many people make games in your city. We bet it is more than you think. Become an organizer through the link in bio."
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

"gj-o10": {
  "titulo": "O10 · Confirmed venues, week 4",
  "p": [
    "Fourth week of the 11th edition venue list. A venue does not need a physical space to exist: it can run entirely on a Discord server, and an online venue lets you recruit volunteers and mentors from other cities and countries. It can also run on its own date inside the official window, which is what venues did in the 10th edition when the global weekend clashed with the university calendar. The target is 90 venues. Swipe to see this week's list.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
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

"gj-o12": {
  "titulo": "O12 · In person, online or hybrid",
  "p": [
    "Not having a physical space does not stop you from hosting. In person means a room with desks, outlets, restrooms and internet, in a university, coworking, innovation hub or cultural centre, and sleeping over is allowed. Online means the whole venue runs on a Discord server, which lets you recruit volunteers and mentors from other cities and countries. Hybrid mixes the two, with everyone in the same Discord and one person dedicated purely to the people online. Your venue can even run on its own date inside the official window. Swipe to see the three.",
    "Tell us in the comments which format makes sense for your city. Become an organizer through the link in bio."
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

"gj-o14": {
  "titulo": "O14 · Your city still has no venue",
  "p": [
    "66 venues ran the last edition and the target for the 11th is 90, which means 24 cities that do not exist on the map yet. One of them can be yours. The people who usually open a venue are a student group or academic league, a games course lecturer, a local dev collective, a coworking space or a cultural centre. What you need is the will to bring your city's people together, a space or a Discord server, one weekend and two or three people to help. GJ+ delivers the rest. Swipe to see what that means.",
    "Drop your city's name in the comments. We want to see how many are still missing from the map. Become an organizer through the link in bio."
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

"gj-o16": {
  "titulo": "O16 · Confirmed venues, month wrap-up",
  "p": [
    "The month closes with the 11th edition venue list, which grew every Monday since week one. The target is 90 venues, against the 66 that ran the last edition, and every one of them shows up on the global map, goes into the official communications and scores in the Fellows Program, regardless of size. GJ+ has been the official game jam of the IGDA since 2024, and that brand is what opens the door of the university, the coworking space and the local sponsor. Swipe to see the month.",
    "Tag the venue you want to see in your city below. Become an organizer through the link in bio."
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
    "Nobody picks their Minecraft base by accident, and everybody swears their spot is the sensible one. A dirt shack you promised to upgrade on day two, a village house you never paid for, an island nobody else was invited to, a hole in the ground with fourteen chests, or a castle nobody will ever finish. Five places to live, five kinds of player.",
    "Swipe to find yours, then tell us in the comments which one you are. If you want to finally finish a build, the 11th edition sign-up is in the bio."
  ],
  "tags": "#GameJamPlus #Minecraft #GameDev #IndieGames #Gamers"
}

};
