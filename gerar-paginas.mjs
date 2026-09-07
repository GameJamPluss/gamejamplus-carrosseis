#!/usr/bin/env node
/**
 * Gera uma página própria por carrossel da galeria GJ+, em p/<slug>/index.html.
 *
 *   node gerar-paginas.mjs
 *
 * O index.html continua sendo a fonte de verdade: este script lê os
 * <article class="c">, monta um slug curto por post (j01-pt, jogos-03-en,
 * meme-m02-es, info-05-pt) e escreve uma página autocontida com Open Graph,
 * visualizador com setas/teclado/swipe e a legenda pronta pra copiar.
 *
 * Rode de novo sempre que entrar post novo no index.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://gamejamplus-carrosseis.vercel.app';

const html = readFileSync(resolve(AQUI, 'index.html'), 'utf8');

/* legendas.js define window.LEGENDAS */
const legJs = readFileSync(resolve(AQUI, 'legendas.js'), 'utf8');
const LEG = {};
new Function('window', legJs)({ get LEGENDAS() { return LEG; }, set LEGENDAS(v) { Object.assign(LEG, v); } });

const CATS = {
  '01-conteudos-gj': { rotulo: 'GJ+', prefixo: '', re: /^([a-z]\d{2})/, chave: m => 'gj-' + m },
  '02-conteudos-jogos-gj': { rotulo: 'Jogos GJ+', prefixo: 'jogos-', re: /^(\d{2})/, chave: m => 'jogos-' + m },
  '03-conteudos-informativos-gj': { rotulo: 'Informativos GJ+', prefixo: 'info-', re: /^(\d{2})/, chave: () => null },
  '04-conteudos-memes-gj': { rotulo: 'Memes GJ+', prefixo: '', re: /^(m\d{2})/, chave: m => 'meme-' + m },
};

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const semTags = s => String(s ?? '').replace(/<[^>]*>/g, '').trim();

/* ---------------------------------------------------------------- parse */
const posts = [];
const usados = new Set();
const reArt = /<article class="c"([^>]*)>([\s\S]*?)<\/article>/g;

for (const m of html.matchAll(reArt)) {
  const attrs = m[1], corpo = m[2];
  const at = n => (attrs.match(new RegExp(`${n}="([^"]*)"`)) || [])[1] || '';
  const cat = at('data-cat'), lang = at('data-lang'), busca = at('data-busca'), id = at('id');
  const titulo = semTags((corpo.match(/<h2>([\s\S]*?)<\/h2>/) || [])[1]);
  const imgs = [...corpo.matchAll(/<img src="(img\/[^"]+)"/g)].map(x => x[1]);
  if (!imgs.length) continue;

  const cfg = CATS[cat] || CATS['01-conteudos-gj'];
  const mm = busca.match(cfg.re);
  const lg = lang.toLowerCase();
  let slug = mm ? `${cfg.prefixo}${mm[1]}-${lg}` : imgs[0].split('/')[1];
  while (usados.has(slug)) slug += '-b';
  usados.add(slug);

  /* mesma regra do index: chave com idioma quando existe, senao a base (EN) */
  const base = mm ? cfg.chave(mm[1]) : null;
  const comIdioma = base && LEG[`${base}-${lg}`];
  const leg = comIdioma || (base ? LEG[base] : null) || null;
  const legLang = comIdioma ? lang.toUpperCase() : 'EN';

  posts.push({ slug, id, cat, rotulo: cfg.rotulo, lang, titulo, imgs, leg, legLang });
}

/* ---------------------------------------------------------------- página */
const CSS = `
:root{--grad:linear-gradient(100deg,#F7941D 0%,#E05A28 32%,#8B3F9E 68%,#4B6CB7 100%);
 --o:#F7941D;--bg:#0a0810;--card:#120e1c;--line:#241d33;--ink:#fff;--ink2:#9a92ab;--ink3:#6c6480}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font-family:Barlow,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.wrap{max-width:660px;margin:0 auto;padding:20px 18px 60px}
header.top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.marca{font-weight:900;letter-spacing:-.4px;font-size:17px}
.marca span{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
header.top a{color:var(--ink2);text-decoration:none;font-size:13px;font-weight:700;border:1px solid var(--line);
 padding:7px 13px;border-radius:999px;white-space:nowrap}
header.top a:hover{color:var(--ink);border-color:var(--o)}
.tagcat{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--o)}
.taglang{font-size:10px;font-weight:800;letter-spacing:.08em;border:1px solid var(--line);border-radius:5px;
 padding:2px 6px;color:var(--ink3);margin-left:8px}
.taglang.EN{color:#7FB3FF;border-color:#2b3a55}.taglang.ES{color:#FFC46B;border-color:#5a4423}
h1{font-size:23px;font-weight:800;letter-spacing:-.5px;margin:8px 0 4px;line-height:1.2}
.sub{color:var(--ink3);font-size:13px;font-weight:600;margin-bottom:16px}
.palco{position:relative;border-radius:12px;overflow:hidden;background:#181228;border:1px solid var(--line)}
.palco img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover}
.seta{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;
 border:1px solid #2c2440;background:rgba(18,14,28,.9);color:#fff;font-size:19px;cursor:pointer;display:grid;place-items:center}
.seta:hover{border-color:var(--o)}.seta.e{left:9px}.seta.d{right:9px}
.cont{position:absolute;right:10px;bottom:10px;background:rgba(6,4,12,.8);border-radius:999px;
 padding:3px 10px;font-size:12px;font-weight:700;color:var(--ink2)}
.dots{display:flex;gap:6px;justify-content:center;margin-top:12px;flex-wrap:wrap}
.dots i{width:7px;height:7px;border-radius:50%;background:#2f2745;cursor:pointer;transition:.2s}
.dots i.on{background:var(--o);width:20px;border-radius:999px}
.acoes{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
.acoes button{flex:1 1 auto;min-width:150px;border:1px solid var(--line);background:var(--card);color:var(--ink);
 padding:10px 14px;border-radius:10px;font:inherit;font-size:14px;font-weight:700;cursor:pointer}
.acoes button:hover{border-color:var(--o)}
.acoes button.ok{border-color:#5BD08A;color:#5BD08A}
.leg{margin-top:22px;border:1px solid var(--line);border-radius:12px;background:var(--card);padding:16px 18px}
.leg h2{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--o);margin-bottom:10px}
.leg p{margin-bottom:11px;font-size:15px;color:#e8e4ef}
.leg .tags{color:var(--ink3);font-size:13px;font-weight:600;word-break:break-word}
.rod{margin-top:28px;text-align:center;color:var(--ink3);font-size:12px;font-weight:600}
@media(max-width:520px){.wrap{padding:16px 12px 46px}h1{font-size:20px}}
`;

function pagina(p) {
  const capa = `${BASE}/${p.imgs[0]}`;
  const slides = p.imgs.map(s => '../../' + s);
  const url = `${BASE}/p/${p.slug}/`;
  const desc = p.leg?.p?.[0]
    ? (p.leg.p[0].length > 155 ? p.leg.p[0].slice(0, 152).trimEnd() + '...' : p.leg.p[0])
    : `${p.rotulo} · ${p.titulo} · ${p.imgs.length} slides.`;

  const blocoLeg = p.leg ? `
  <section class="leg">
    <h2>Legenda do Instagram · ${p.legLang}</h2>
    ${p.leg.p.map(t => `<p>${esc(t)}</p>`).join('\n    ')}
    <div class="tags">${esc(p.leg.tags)}</div>
    <div class="acoes"><button type="button" id="copiaLeg">Copiar legenda</button></div>
  </section>` : '';

  return `<!doctype html>
<html lang="${p.lang.toLowerCase() === 'en' ? 'en' : p.lang.toLowerCase() === 'es' ? 'es' : 'pt-BR'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.titulo)} · GameJamPlus</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="noindex">
<meta property="og:type" content="article">
<meta property="og:site_name" content="GameJamPlus · carrosséis">
<meta property="og:title" content="${esc(p.titulo)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${capa}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <span class="marca">GameJam<span>+</span></span>
    <a href="../../">Ver todos os carrosséis</a>
  </header>
  <div><span class="tagcat">${esc(p.rotulo)}</span><span class="taglang ${esc(p.lang)}">${esc(p.lang)}</span></div>
  <h1>${esc(p.titulo)}</h1>
  <p class="sub">${p.imgs.length} slides</p>

  <div class="palco">
    <img id="sl" src="${slides[0]}" alt="${esc(p.titulo)} 1">
    ${slides.length > 1 ? `<button class="seta e" type="button" aria-label="Anterior">←</button>
    <button class="seta d" type="button" aria-label="Próximo">→</button>
    <span class="cont"><b id="n">1</b>/${slides.length}</span>` : ''}
  </div>
  ${slides.length > 1 ? '<div class="dots" id="dots"></div>' : ''}

  <div class="acoes"><button type="button" id="link">Copiar link deste post</button></div>
${blocoLeg}
  <p class="rod">Uso interno, para revisão.</p>
</div>
<script>
const S=${JSON.stringify(slides)};
const LEGTXT=${JSON.stringify(p.leg ? p.leg.p.join('\n\n') + '\n\n' + p.leg.tags : null)};
let i=0;
const img=document.getElementById('sl'),nn=document.getElementById('n'),dots=document.getElementById('dots');
if(dots){S.forEach((_,k)=>{const d=document.createElement('i');d.onclick=()=>ir(k);dots.append(d)});}
function ir(k){i=(k+S.length)%S.length;img.src=S[i];if(nn)nn.textContent=i+1;
 if(dots)[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));}
ir(0);
S.slice(1).forEach(s=>{const im=new Image();im.src=s});
document.querySelector('.seta.e')?.addEventListener('click',()=>ir(i-1));
document.querySelector('.seta.d')?.addEventListener('click',()=>ir(i+1));
addEventListener('keydown',e=>{if(e.key==='ArrowLeft')ir(i-1);if(e.key==='ArrowRight')ir(i+1)});
let x0=null;
img.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
img.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;
 if(Math.abs(dx)>40)ir(i+(dx<0?1:-1));x0=null},{passive:true});
async function copia(txt,b){
 try{await navigator.clipboard.writeText(txt)}
 catch(_){const t=document.createElement('textarea');t.value=txt;document.body.append(t);t.select();document.execCommand('copy');t.remove()}
 const antes=b.textContent;b.textContent='Copiado';b.classList.add('ok');
 setTimeout(()=>{b.textContent=antes;b.classList.remove('ok')},1600);}
document.getElementById('link').addEventListener('click',e=>copia(location.href.split('#')[0],e.currentTarget));
document.getElementById('copiaLeg')?.addEventListener('click',e=>copia(LEGTXT,e.currentTarget));
</script>
</body>
</html>`;
}

const dirP = resolve(AQUI, 'p');
if (existsSync(dirP)) rmSync(dirP, { recursive: true });
mkdirSync(dirP);

for (const p of posts) {
  const d = resolve(dirP, p.slug);
  mkdirSync(d, { recursive: true });
  writeFileSync(resolve(d, 'index.html'), pagina(p), 'utf8');
}

/* mapa slug -> id do artigo, pro index saber montar o botão de link */
writeFileSync(resolve(AQUI, 'links.js'),
  'window.LINKS = ' + JSON.stringify(Object.fromEntries(posts.map(p => [p.id, p.slug]))) + ';\n', 'utf8');

writeFileSync(resolve(dirP, 'links.txt'),
  posts.map(p => `${p.rotulo} ${p.lang} · ${p.titulo}\n${BASE}/p/${p.slug}/`).join('\n\n') + '\n', 'utf8');

console.log(`${posts.length} páginas em p/`);
console.log(`com legenda: ${posts.filter(p => p.leg).length}`);
console.log(`exemplo: ${BASE}/p/${posts[0].slug}/`);
