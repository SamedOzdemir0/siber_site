/* ===== AYARLAR: sitedeki her şeyi buradan değiştirebilirsin ===== */
const SITE = {
  whatsappCount: 120,                               // WhatsApp grubundaki üye sayısı: sadece bu rakamı değiştir
  whatsappLink: "https://chat.whatsapp.com/BURAYA-LINK",
  formLink: "https://forms.gle/BURAYA-LINK",       // Google Forms linki
  stats: [                                          // "members" yazan satır WhatsApp üye sayısını otomatik alır
    {n:"members", label:"WhatsApp üyesi"},
    {n:12, label:"Düzenlenen etkinlik"},
    {n:350, label:"Toplam katılımcı"},
    {n:5, label:"CTF yarışması"}
  ],
  contacts: [
    {label:"E-posta", value:"siber@comu.edu.tr", href:"mailto:siber@comu.edu.tr"},
    {label:"Instagram", value:"@comusiber", href:"https://instagram.com/"},
    {label:"LinkedIn", value:"ÇOMÜ Siber Güvenlik", href:"https://linkedin.com/"},
    {label:"GitHub", value:"github.com/comusiber", href:"https://github.com/"}
  ],
  announcements: [
    {title:"Yeni dönem kayıtları başladı", date:"2026-10-20", text:"Katılım formunu doldurarak WhatsApp grubumuza katılabilirsin."},
    {title:"İlk toplantı tarihi belli oldu", date:"2026-10-18", text:"Tanışma toplantısında dönem planını anlatacağız."}
  ],
  events: [                                        // date: YYYY-AA-GGTSS:DD  |  img: görsel yolu (boş bırakırsan yer tutucu görünür)
    {title:"Tanışma ve Siber Güvenliğe Giriş", date:"2026-11-05T17:00", place:"Konferans Salonu", text:"Kulüp tanıtımı ve başlangıç yol haritası.", img:"images/foto1.jpg", capacity:80, deadline:"2026-11-04", status:"Geçmiş"},
    {title:"CTF Workshop", date:"2026-11-19T18:00", place:"Bilgisayar Lab.", text:"Web ve kriptografi sorularıyla uygulamalı CTF.", img:"images/foto2.jpg", capacity:40, deadline:"2026-11-18", status:"Başvurular açık"},
    {title:"Ağ Güvenliği Semineri", date:"2026-05-14T16:00", place:"Amfi 2", text:"Wireshark ile paket analizi.", img:"images/foto3.jpg", capacity:100, deadline:"2026-05-13", status:"Geçmiş"},
    {title:"Sızma Testi 101", date:"2026-04-02T17:30", place:"Online", text:"Temel sızma testi aşamaları.", img:"images/foto4.jpg", capacity:60, deadline:"2026-04-01", status:"Geçmiş"}
  ],
  gallery: [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg"
  ],
  posts: [
    {slug:"ctf-baslangic", title:"CTF’e nereden başlanır?", date:"2026-10-10", text:"İlk yarışmanda işine yarayacak araçlar ve kaynaklar.", img:"images/foto5.jpg", category:"CTF Rehberi", author:"ÇOMÜ Siber Ekibi"},
    {slug:"linux-komut-satiri", title:"Linux komut satırı rehberi", date:"2026-09-25", text:"Siber güvenlikte her gün kullanacağın temel komutlar.", img:"images/foto6.jpg", category:"Başlangıç", author:"ÇOMÜ Siber Ekibi"},
    {slug:"ctf-write-up", title:"Bir CTF write-up örneği", date:"2026-09-02", text:"Bir web sorusunu adım adım çözüyoruz.", img:"images/foto2.jpg", category:"Write-up", author:"ÇOMÜ Siber Ekibi"}
  ],
  faq: [
    {q:"Kimler katılabilir?", a:"ÇOMÜ öğrencilerinin hepsi katılabilir. Siber güvenlik bilgisi gerekmiyor."},
    {q:"Üyelik ücretli mi?", a:"Hayır, kulübe katılım ücretsiz."},
    {q:"Nasıl üye olurum?", a:"Katılım formunu doldur, ardından WhatsApp grubuna katıl."},
    {q:"Etkinlikler nerede yapılıyor?", a:"Kampüste ve bazen online. Yer bilgisi duyurularda yazıyor."},
    {q:"Hiç bilgim yok, katılabilir miyim?", a:"Evet. Başlangıç seviyesinden anlatıyoruz."}
  ],
  team: [                                           // img: fotoğraf yolu (boşsa baş harfler görünür). Boş bıraktığın bağlantı gösterilmez.
    {name:"Melike Gümüş", role:"Kulüp Başkanı", bio:"Kulübün genel koordinasyonundan ve dönem planından sorumlu.", img:"./images/Teams/baskan.png", linkedin:"https://linkedin.com/in/", github:"https://github.com/", mail:"ornek@mail.com"},
    {name:"Nehir Kartaloğlu", role:"Başkan Yardımcısı", bio:"Topluluk iletişimi ve ekip çalışmalarını yürütür.", img:"./images/Teams/baskanyardimci.png", linkedin:"https://linkedin.com/in/", github:"https://github.com/", mail:"ornek@mail.com"},
    {name:"Samed Özdemir", role:"Etkinlik Sorumlusu", bio:"Workshop, seminer ve yarışmaların organizasyonunu üstlenir.", img:"./images/Teams/samed.png", linkedin:"https://linkedin.com/in/", github:"https://github.com/", mail:"ornek@mail.com"},
    {name:"Hamza Çakır", role:"Teknik Sorumlu", bio:"Teknik eğitimler ve CTF içerikleri üzerinde çalışır.", img:"./images/Teams/hamza.png", linkedin:"https://linkedin.com/in/", github:"https://github.com/", mail:"ornek@mail.com"}
  ]
};
/* ===== AYARLAR BİTTİ ===== */

const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=(d,t)=>new Date(d).toLocaleDateString("tr-TR",t?{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}:{day:"numeric",month:"long",year:"numeric"});
const pic=(src,label)=>src?`<img src="${esc(src)}" alt="${esc(label)}" loading="lazy">`:`<div class="ph">Fotoğraf alanı</div>`;
const slugify=post=>post.slug||post.title.toLowerCase().replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi,"-").replace(/^-|-$/g,"");
const contactIcon=label=>{
  if(label==="LinkedIn"){
    return '<span class="contact-icon contact-icon-linkedin" aria-hidden="true">in</span>';
  }
  const paths={
    "E-posta":'<path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.35l9 5.63 9-5.63V7H3Zm18 10V9.72l-8.47 5.3a1 1 0 0 1-1.06 0L3 9.72V17h18Z"/>',
    Instagram:'<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.3-3.1a1.05 1.05 0 1 1-1.05 1.05A1.05 1.05 0 0 1 17.3 6.4Z"/>',
    GitHub:'<path d="M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.1.64-1.35-2.21-.25-4.54-1.11-4.54-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5.02 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.73c0 .26.18.57.69.47A10 10 0 0 0 12 2.2Z"/>'
  };
  return `<svg class="contact-icon contact-icon-${label.toLowerCase().replace("ı","i").replace("-","")}" viewBox="0 0 24 24" aria-hidden="true">${paths[label]||paths["E-posta"]}</svg>`;
};

const root=document.documentElement;
const isBlogPage=document.body.dataset.page==="blog";
const pageLoader=$("pageLoader");
let loaderTimer=null;

function buildPostBody(post){
  const base = post.text || "Bu yazıda uygulama ve çalışma mantığını daha net anlatıyoruz.";
  return [
    `${base} Burada güvenlik odaklı yaklaşım, başlangıç noktaları ve pratik adımlar birlikte ele alınır.`,
    "Önce amaca uygun araçları seçmek gerekir. Sonrasında küçük ve ölçülebilir hedeflerle ilerlemek hem öğrenmeyi hem de verimi artırır.",
    "Uygulama sırasında not tutmak, hataları takip etmek ve tekrar deneyimlemek, konuyu kalıcı hale getirmek için çok önemlidir."
  ];
}

function showLoader(delay=220){
  if(!pageLoader){return;}
  pageLoader.classList.add("active");
  clearTimeout(loaderTimer);
  loaderTimer=setTimeout(()=>pageLoader.classList.remove("active"),delay);
}

if(pageLoader){
  showLoader(180);
}

if(!isBlogPage){
  const hero=$("hero");
  if(hero){hero.dataset.bits=Array.from({length:700},(_,i)=>(i*7+i%5)%3?"1":"0").join("");}
  const year=$("yr"); if(year){year.textContent=new Date().getFullYear();}
  ["heroWa","joinWa","stickyWa"].forEach(i=>$(i)&&($(i).href=SITE.whatsappLink));
  ["heroForm","joinForm","stickyForm"].forEach(i=>$(i)&&($(i).href=SITE.formLink));
  const members=$("members"); if(members){members.textContent=SITE.whatsappCount;}

  const stats=$("stats"); if(stats){stats.innerHTML=SITE.stats.map(s=>`<div class="stat"><b data-n="${s.n==="members"?SITE.whatsappCount:s.n}">0</b><span>${esc(s.label)}</span></div>`).join("");}
  const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
  document.querySelectorAll("[data-n]").forEach(el=>{
    const end=+el.dataset.n;
    if(reduce){el.textContent=end;return}
    const t0=performance.now();
    (function step(t){const p=Math.min((t-t0)/1200,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)})(t0);
  });

  const annList=$("annList"); if(annList){annList.innerHTML=SITE.announcements.map(a=>`<div><b>${esc(a.title)}</b><small>${fmt(a.date)}</small><p style="margin:6px 0 0;color:var(--muted)">${esc(a.text)}</p></div>`).join("");}

  const now=Date.now();
  const evs=[...SITE.events].sort((a,b)=>new Date(a.date)-new Date(b.date));
  const up=evs.filter(e=>new Date(e.date)>=now), past=evs.filter(e=>new Date(e.date)<now).reverse();
  const evCard=(e,kind)=>{const index=SITE.events.indexOf(e);const registration=kind==="upcoming"?`<span class="event-meta">${e.capacity?`${e.capacity} kişilik kontenjan`:"Başvuru açık"} · Son başvuru: ${fmt(e.deadline)}</span>`:"";return `<article class="card event-card" data-event-index="${index}" data-event-kind="${kind}" tabindex="0">${pic(e.img,e.title)}<div class="body"><span class="tag">${fmt(e.date,1)} · ${esc(e.place)}</span><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p>${registration}<button type="button" class="btn ghost event-detail" data-event-index="${index}" data-event-kind="${kind}">Detayları gör</button></div></article>`;};
  const renderEvents=query=>{
    const term=(query||"").trim().toLocaleLowerCase("tr-TR");
    const matches=list=>list.filter(e=>`${e.title} ${e.place} ${e.text}`.toLocaleLowerCase("tr-TR").includes(term));
    const filteredUp=matches(up), filteredPast=matches(past);
    const upComing=$("upcoming"); if(upComing){upComing.innerHTML=filteredUp.length?filteredUp.map(e=>evCard(e,"upcoming")).join(""):`<p class="lead">Aramana uygun yaklaşan etkinlik bulunamadı.</p>`;}
    const pastWrap=$("past"); if(pastWrap){pastWrap.innerHTML=filteredPast.length?filteredPast.map(e=>evCard(e,"past")).join(""):`<p class="lead">Aramana uygun geçmiş etkinlik bulunamadı.</p>`;}
  };
  renderEvents("");
  const eventSearch=$("eventSearch"); eventSearch&&eventSearch.addEventListener("input",event=>renderEvents(event.target.value));

  if(up.length){
    const n=$("next"); if(n){n.hidden=false; n.innerHTML=`<div><small>Sıradaki etkinlik</small><h3>${esc(up[0].title)}</h3><p>${fmt(up[0].date,1)} · ${esc(up[0].place)}</p></div><div class="clock" aria-live="off"><div><b id="cd">0</b><small>gün</small></div><div><b id="ch">0</b><small>saat</small></div><div><b id="cm">0</b><small>dakika</small></div></div>`; const tick=()=>{let s=Math.max(0,Math.floor((new Date(up[0].date)-Date.now())/60000));const cd=$("cd"); if(cd){cd.textContent=Math.floor(s/1440);} const ch=$("ch"); if(ch){ch.textContent=Math.floor(s%1440/60);} const cm=$("cm"); if(cm){cm.textContent=s%60;}}; tick();setInterval(tick,30000);}
  }

  const gal=$("gal"); if(gal){
    const slider=$("gallerySlider"), dots=$("galleryDots"), prev=$("galleryPrev"), next=$("galleryNext"), progress=$("galleryProgress"), current=$("galleryCurrent"), total=$("galleryTotal");
    const slides=SITE.gallery.length?SITE.gallery:SITE.gallery.concat([""]);
    let activeSlide=0, slideTimer=null, progressTimer=null;
    gal.innerHTML=slides.map((g,i)=>`<div class="gallery-slide${i===0?" is-active":""}" data-gallery-index="${i}" role="tabpanel" aria-label="Fotoğraf ${i+1}">${g?`<img src="${esc(g)}" alt="Etkinlik fotoğrafı ${i+1}" loading="lazy">`:`<div class="gallery-placeholder"><span>Fotoğraf alanı</span><b>Görsel eklendiğinde burada görünecek</b></div>`}<div class="gallery-slide-shade"></div><span class="gallery-slide-label">${String(i+1).padStart(2,"0")}</span></div>`).join("");
    if(total){total.textContent=String(slides.length).padStart(2,"0");}
    if(dots){dots.innerHTML=slides.map((_,i)=>`<button type="button" class="gallery-dot${i===0?" is-active":""}" data-gallery-index="${i}" role="tab" aria-label="${i+1}. fotoğrafa git" aria-selected="${i===0}"></button>`).join("");}
    const renderSlide=index=>{
      activeSlide=(index+slides.length)%slides.length;
      gal.querySelectorAll(".gallery-slide").forEach((slide,i)=>slide.classList.toggle("is-active",i===activeSlide));
      dots&&dots.querySelectorAll(".gallery-dot").forEach((dot,i)=>{dot.classList.toggle("is-active",i===activeSlide);dot.setAttribute("aria-selected",String(i===activeSlide));});
      if(current){current.textContent=String(activeSlide+1).padStart(2,"0");}
      if(progress){progress.style.animation="none";void progress.offsetWidth;progress.style.animation="galleryProgress 3s linear forwards";}
    };
    const stopAutoplay=()=>{clearInterval(slideTimer);clearTimeout(progressTimer);};
    const startAutoplay=()=>{stopAutoplay();slideTimer=setInterval(()=>renderSlide(activeSlide+1),3000);};
    prev&&prev.addEventListener("click",()=>{renderSlide(activeSlide-1);startAutoplay();});
    next&&next.addEventListener("click",()=>{renderSlide(activeSlide+1);startAutoplay();});
    dots&&dots.addEventListener("click",event=>{const dot=event.target.closest(".gallery-dot");if(!dot){return;}renderSlide(Number(dot.dataset.galleryIndex));startAutoplay();});
    slider&&slider.addEventListener("mouseenter",stopAutoplay);
    slider&&slider.addEventListener("mouseleave",startAutoplay);
    slider&&slider.addEventListener("focusin",stopAutoplay);
    slider&&slider.addEventListener("focusout",event=>{if(!slider.contains(event.relatedTarget)){startAutoplay();}});
    if(matchMedia("(prefers-reduced-motion:reduce)").matches){renderSlide(0);}else{renderSlide(0);startAutoplay();}
    const lightbox=$("galleryLightbox"), lightboxImage=$("galleryLightboxImage"), lightboxCaption=$("galleryLightboxCaption"), lightboxClose=$("galleryLightboxClose"), lightboxPrev=$("galleryLightboxPrev"), lightboxNext=$("galleryLightboxNext");
    let lightboxCloseTimer=null;
    let lightboxIndex=0;
    const updateLightbox=index=>{
      if(!lightboxImage||!slides[index]){return;}
      lightboxIndex=(index+slides.length)%slides.length;
      lightboxImage.classList.remove("is-changing");
      void lightboxImage.offsetWidth;
      lightboxImage.src=slides[lightboxIndex];
      lightboxImage.alt=`Etkinlik fotoğrafı ${lightboxIndex+1}`;
      if(lightboxCaption){lightboxCaption.textContent=`Etkinlik fotoğrafı ${lightboxIndex+1}`;}
      lightboxImage.classList.add("is-changing");
    };
    const openLightbox=index=>{
      const source=slides[index];
      if(!lightbox||!lightboxImage||!source){return;}
      clearTimeout(lightboxCloseTimer);
      lightbox.classList.remove("is-closing");
      updateLightbox(index);
      lightbox.hidden=false;
      requestAnimationFrame(()=>lightbox.classList.add("is-visible"));
      lightbox.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
    };
    const closeLightbox=()=>{
      if(!lightbox){return;}
      lightbox.classList.remove("is-visible");
      lightbox.classList.add("is-closing");
      lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");
      lightboxCloseTimer=setTimeout(()=>{lightbox.hidden=true;lightbox.classList.remove("is-closing");},280);
    };
    const changeLightboxImage=direction=>{
      if(!lightbox||lightbox.hidden){return;}
      updateLightbox(lightboxIndex+direction);
    };
    lightboxPrev&&lightboxPrev.addEventListener("click",()=>changeLightboxImage(-1));
    lightboxNext&&lightboxNext.addEventListener("click",()=>changeLightboxImage(1));
    gal.addEventListener("click",event=>{if(event.target.closest(".gallery-arrow,.gallery-dot")){return;}const slide=event.target.closest(".gallery-slide");if(slide){openLightbox(Number(slide.dataset.galleryIndex));}});
    lightbox&&lightbox.addEventListener("click",event=>{if(event.target.matches("[data-gallery-close='true']")||event.target===lightbox){closeLightbox();}});
    lightboxClose&&lightboxClose.addEventListener("click",closeLightbox);
    document.addEventListener("keydown",event=>{if(!lightbox||lightbox.hidden){return;}if(event.key==="Escape"){closeLightbox();}if(event.key==="ArrowLeft"){changeLightboxImage(-1);}if(event.key==="ArrowRight"){changeLightboxImage(1);}});
  }
  const posts=$("posts"); if(posts){posts.innerHTML=SITE.posts.map((p,index)=>`<article class="card blog-post-card" data-post-index="${index}" tabindex="0">${pic(p.img,p.title)}<div class="body"><span class="tag">${esc(p.category||"Blog")} · ${fmt(p.date)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><a class="btn ghost read-more" href="blog.html?post=${encodeURIComponent(slugify(p))}" data-post-index="${index}">Detayları gör</a></div></article>`).join("");}
  const faq=$("faq"); if(faq){faq.innerHTML=SITE.faq.map((f,index)=>`<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}"><span class="faq-number">${String(index+1).padStart(2,"0")}</span><span class="faq-question-text">${esc(f.q)}</span><span class="faq-icon" aria-hidden="true">+</span></button><div class="faq-answer" id="faq-answer-${index}" role="region"><p>${esc(f.a)}</p></div></article>`).join("");}
  const contact=$("contact"); if(contact){contact.innerHTML=SITE.contacts.map(c=>`<a href="${esc(c.href)}" target="_blank" rel="noopener"><span class="contact-heading">${contactIcon(c.label)}<small>${esc(c.label)}</small></span><b>${esc(c.value)}</b></a>`).join("");}

  if(faq){
    faq.addEventListener("click",event=>{
      const question=event.target.closest(".faq-question");
      if(!question){return;}
      const item=question.parentElement;
      const isOpen=item.classList.contains("is-open");
      faq.querySelectorAll(".faq-item.is-open").forEach(openItem=>{
        openItem.classList.remove("is-open");
        openItem.querySelector(".faq-question").setAttribute("aria-expanded","false");
      });
      if(!isOpen){
        item.classList.add("is-open");
        question.setAttribute("aria-expanded","true");
      }
    });
  }

  const team=$("team"); if(team){team.innerHTML=SITE.team.map((m,i)=>{
    const ini=m.name.split(" ").map(w=>w[0]).join("").slice(0,2);
    const l=[m.linkedin&&`<a href="${esc(m.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,m.github&&`<a href="${esc(m.github)}" target="_blank" rel="noopener">GitHub</a>`,m.mail&&`<a href="mailto:${esc(m.mail)}">E-posta</a>`].filter(Boolean).join("");
    return `<article class="card person" style="--i:${i}">${m.img?`<img src="${esc(m.img)}" alt="${esc(m.name)}" loading="lazy">`:`<div class="avatar">${esc(ini)}</div>`}<div class="body"><span class="person-index">${String(i+1).padStart(2,"0")}</span><h3>${esc(m.name)}</h3><div class="role">${esc(m.role)}</div><p class="person-bio">${esc(m.bio||"")}</p><div class="links">${l}</div></div></article>`;
  }).join("");}

  function route(){
    const teamPage=$("teamPage"); const home=$("home");
    if(!teamPage || !home){return;}
    const t=location.hash==="#ekip";
    teamPage.hidden=!t; home.hidden=t;
    if(t){showLoader(180); scrollTo(0,0);} else if(location.hash.length>1){const el=document.querySelector(location.hash);el&&el.scrollIntoView();}
  }
  addEventListener("hashchange",route); route();
}

if(isBlogPage){
  const blogList=$("blogList");
  const blogDetail=$("blogDetail");
  const blogSearch=$("blogSearch");
  const renderBlogList=query=>{
    const term=(query||"").trim().toLocaleLowerCase("tr-TR");
    const posts=SITE.posts.filter(post=>`${post.title} ${post.text} ${post.category||""}`.toLocaleLowerCase("tr-TR").includes(term));
    if(blogList){blogList.innerHTML=posts.length?posts.map((p,index)=>`<article class="blog-card" style="--i:${index}"><div class="blog-thumb">${pic(p.img,p.title)}</div><div class="blog-body"><span class="tag">${esc(p.category||"Blog")} · ${fmt(p.date)}</span><h2>${esc(p.title)}</h2><p>${esc(p.text)}</p><a href="blog.html?post=${encodeURIComponent(slugify(p))}" class="btn ghost">Daha fazla oku</a></div></article>`).join(""):`<p class="lead search-empty">Aramana uygun blog yazısı bulunamadı.</p>`;}
  };
  const renderBlogDetail=()=>{
    const slug=new URLSearchParams(location.search).get("post");
    const post=SITE.posts.find(item=>slugify(item)===slug);
    if(!blogDetail||!post){return false;}
    blogList.hidden=true;
    if(blogSearch){blogSearch.closest(".search-box").hidden=true;}
    blogDetail.hidden=false;
    document.title=`${post.title} | ÇOMÜ Siber Güvenlik Kulübü`;
    const description=document.querySelector('meta[name="description"]'); if(description){description.content=post.text;}
    blogDetail.innerHTML=`<a class="back" href="blog.html">← Tüm yazılara dön</a><span class="tag">${esc(post.category||"Blog")} · ${fmt(post.date)}</span><h2>${esc(post.title)}</h2><p class="blog-detail__intro">${esc(post.text)}</p><div class="blog-detail__image">${post.img?`<img src="${esc(post.img)}" alt="${esc(post.title)}">`:""}</div><div class="blog-detail__content">${buildPostBody(post).map(paragraph=>`<p>${esc(paragraph)}</p>`).join("")}</div><div class="blog-detail__meta">Yazar: ${esc(post.author||"ÇOMÜ Siber Ekibi")}</div>`;
    return true;
  };
  if(!renderBlogDetail()){renderBlogList("");blogSearch&&blogSearch.addEventListener("input",event=>renderBlogList(event.target.value));}
}

const blogModal=$("blogModal");
const blogModalClose=$("blogModalClose");
const blogModalTitle=$("blogModalTitle");
const blogModalDate=$("blogModalDate");
const blogModalBody=$("blogModalBody");
const eventModal=$("eventModal");
const eventModalClose=$("eventModalClose");
const eventModalTitle=$("eventModalTitle");
const eventModalDate=$("eventModalDate");
const eventModalBody=$("eventModalBody");

function openBlogModal(index){
  if(!blogModal || !blogModalTitle || !blogModalBody || !SITE.posts[index]){return;}
  const post=SITE.posts[index];
  blogModalTitle.textContent=post.title;
  blogModalDate.textContent=fmt(post.date);
  blogModalBody.innerHTML=`<p>${esc(post.text)}</p>${buildPostBody(post).map(paragraph=>`<p>${esc(paragraph)}</p>`).join("")}<div class="blog-modal__cta"><a class="btn" href="blog.html?post=${encodeURIComponent(slugify(post))}">Yazının tamamı</a><button type="button" class="btn ghost" data-close="true">Kapat</button></div>`;
  blogModal.hidden=false;
  blogModal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeBlogModal(){
  if(!blogModal){return;}
  blogModal.hidden=true;
  blogModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

function openEventModal(kind,index){
  if(!eventModal || !eventModalTitle || !eventModalBody || !SITE.events[index]){return;}
  const event=SITE.events[index];
  eventModalTitle.textContent=event.title;
  eventModalDate.textContent=fmt(event.date,1);
  const eventImage=event.img
    ? `<img class="event-modal-image" src="${esc(event.img)}" alt="${esc(event.title)}" loading="lazy">`
    : `<div class="event-modal-image event-modal-placeholder">Etkinlik görseli</div>`;
  const applyAction=kind==="upcoming"
    ? `<a class="btn" href="${esc(event.applyLink || SITE.formLink)}" target="_blank" rel="noopener">Başvur</a>`
    : "";
  const detailText=kind==="upcoming"
    ? "Etkinliğe katılım için hazırlık yapabilir, etkinlik öncesi notlarını kontrol edebilir ve başvuruyu tamamlayabilirsin."
    : "Bu etkinlikte yaşananları ve öne çıkan detayları buradan inceleyebilirsin.";
  const registrationInfo=kind==="upcoming"?`<div class="event-registration"><span><b>${event.capacity||"—"}</b> kontenjan</span><span><b>${event.deadline?fmt(event.deadline):"Yakında"}</b> son başvuru</span><span><b>${esc(event.status||"Başvurular açık")}</b></span></div>`:"";
  eventModalBody.innerHTML=`${eventImage}<p class="event-detail-place">${esc(event.place)}</p><p>${esc(event.text)}</p>${registrationInfo}<p>${detailText}</p><div class="event-modal__cta">${applyAction}<button type="button" class="btn ghost" data-close="event">Kapat</button></div>`;
  eventModal.hidden=false;
  eventModal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeEventModal(){
  if(!eventModal){return;}
  eventModal.hidden=true;
  eventModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

if(blogModal){
  blogModal.addEventListener("click",event=>{
    if(event.target.matches("[data-close='true']") || event.target===blogModal){closeBlogModal();}
  });
  if(blogModalClose){blogModalClose.addEventListener("click",closeBlogModal);}
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape" && blogModal.hidden===false){closeBlogModal();}
  });
}

if(eventModal){
  eventModal.addEventListener("click",event=>{
    if(event.target.matches("[data-close='event']") || event.target===eventModal){closeEventModal();}
  });
  if(eventModalClose){eventModalClose.addEventListener("click",closeEventModal);}
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape" && eventModal.hidden===false){closeEventModal();}
  });
}

document.addEventListener("click",event=>{
  const blogButton=event.target.closest("[data-post-index]");
  if(blogButton && (blogButton.matches(".read-more") || blogButton.matches(".blog-post-card") || blogButton.matches(".blog-card"))){
    const index=Number(blogButton.dataset.postIndex);
    if(Number.isFinite(index)){openBlogModal(index);}
  }

  const eventButton=event.target.closest("[data-event-index]");
  if(eventButton && (eventButton.matches(".event-detail") || eventButton.matches(".event-card"))){
    const index=Number(eventButton.dataset.eventIndex);
    const kind=eventButton.dataset.eventKind || "upcoming";
    if(Number.isFinite(index)){openEventModal(kind,index);}
  }
});

const themeButton=$("themeButton");
const navToggle=$("navToggle");
const navMenu=$("nav");
let saved=null;
try{saved=localStorage.getItem("theme")}catch(e){}
const currentTheme=saved||"dark";
root.dataset.theme=currentTheme;
if(themeButton){
  const syncTheme=()=>{
    const isLight=root.dataset.theme==="light";
    themeButton.setAttribute("aria-pressed",String(isLight));
    themeButton.classList.toggle("is-light",isLight);
  };

  themeButton.addEventListener("click",(event)=>{
    event.preventDefault();
    event.stopPropagation();
    const nextTheme=root.dataset.theme==="light"?"dark":"light";
    root.dataset.theme=nextTheme;
    try{localStorage.setItem("theme",nextTheme)}catch(e){}
    syncTheme();
  });

  syncTheme();
}

if(navToggle && navMenu){
  navToggle.addEventListener("click",()=>{
    const isOpen=navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded",String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded","false");
  }));
}

const navigationLinks=document.querySelectorAll("#nav a");
const setActiveNavigation=target=>{
  navigationLinks.forEach(link=>link.classList.toggle("is-active",link===target));
};
if(navigationLinks.length){
  const blogNavigation=[...navigationLinks].find(link=>link.getAttribute("href")==="blog.html");
  if(isBlogPage){
    setActiveNavigation(blogNavigation);
  }else{
    const sectionLinks=[...navigationLinks].filter(link=>link.getAttribute("href")?.startsWith("#"));
    const sections=sectionLinks.map(link=>({link,section:document.querySelector(link.getAttribute("href"))})).filter(item=>item.section);
    const teamLink=sectionLinks.find(link=>link.getAttribute("href")==="#ekip");
    const updateFromHash=()=>{
      if(location.hash==="#ekip"){setActiveNavigation(teamLink);return;}
      const current=sections.find(item=>item.section.getBoundingClientRect().top<=100&&item.section.getBoundingClientRect().bottom>100);
      setActiveNavigation(current?current.link:null);
    };
    sectionLinks.forEach(link=>link.addEventListener("click",()=>setActiveNavigation(link)));
    if("IntersectionObserver" in window){
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(visible){
          const match=sections.find(item=>item.section===visible.target);
          if(match){setActiveNavigation(match.link);}
        }
      },{rootMargin:"-18% 0px -62% 0px",threshold:[0,.2,.5]});
      sections.forEach(item=>observer.observe(item.section));
    }
    addEventListener("scroll",updateFromHash,{passive:true});
    addEventListener("hashchange",updateFromHash);
    updateFromHash();
  }
}
