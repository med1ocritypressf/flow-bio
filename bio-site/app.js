/* BIO app — black theme */
(function(){
"use strict";
var BIO = window.BIO || {};
var $ = function(id){ return document.getElementById(id); };
function toast(msg){
  var t = $("toast"); if(!t) return;
  t.textContent = msg; t.classList.add("is-visible");
  clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove("is-visible"); }, 2200);
}
/* ---------- ИКОНКИ ---------- */
var ICONS = {
  telegram:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 4.6L2.7 12.1c-.7.3-.7 1.2.1 1.4l4.7 1.5 1.8 5.6c.3.8 1.3.9 1.8.2l2.6-3.1 5 3.7c.6.4 1.4.1 1.6-.6l3.5-14.1c.3-1-.9-1.7-1.9-1.1zM8.5 13.3l9.5-7.2c.2-.2.5.1.3.3l-7.9 8.2-.3 3-1.6-4.3z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 3c.4 2.1 1.8 3.6 4 3.9v3c-1.6 0-3-.5-4-1.3v6.6c0 3.9-2.6 6.3-6 6.3-3.2 0-5.6-2.4-5.6-5.6 0-3.3 2.7-5.7 6.2-5.5v3.1c-1.6-.3-3 .8-3 2.4 0 1.4 1.1 2.5 2.5 2.5 1.5 0 2.7-1.2 2.7-2.9V3h3.2z"/></svg>',
  youtube:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.8 15V8.4l6.2 3.3L9.8 15z"/></svg>',
  discord:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  github:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C16.5 4.9 17.5 5.2 17.5 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2zm-1.1 17.8h1.7L7 3.9H5.2l12.6 15.9z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>',
  twitch:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
  faceit:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23.999 2.705a.167.167 0 00-.312-.1 1141.27 1141.27 0 00-6.053 9.375H.218c-.221 0-.301.282-.11.352 7.227 2.73 17.667 6.836 23.5 9.134.15.06.39-.08.39-.18z"/></svg>',
  steam:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a5 5 0 007.1 0l2-2a5 5 0 00-7.1-7.1l-1 1"/><path d="M14 10a5 5 0 00-7.1 0l-2 2a5 5 0 007.1 7.1l1-1"/></svg>',
  arrow:'<svg class="link__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};
/* ---------- ЗАПОЛНЕНИЕ ---------- */
function initProfile(){
  var name = BIO.name || "flow";
  document.title = name + " — bio";
  $("name").textContent = name;
  $("enterName").textContent = name;
  $("topbarName").textContent = BIO.handle || ("@" + name);
  $("uid").textContent = BIO.uid || "";
  $("bio").textContent = BIO.bio || "";
  $("footer").textContent = BIO.footer || "";
  // Плейлист
  if ($("playlistName")) $("playlistName").textContent = BIO.playlistName || "flow music";
  if ($("playlistMeta")) $("playlistMeta").textContent = BIO.playlistMeta || "";
  var pArt = $("playlistArt");
  if (pArt && BIO.playlistArt){ pArt.src = BIO.playlistArt; }
  var pl = $("playlist");
  if (pl && BIO.playlistUrl){ pl.href = BIO.playlistUrl; }
  var fb = $("avatarFallback");
  fb.textContent = (name[0] || "f").toLowerCase();
  fb.hidden = true;
  $("verified").style.display = BIO.verified === false ? "none" : "";
  var av = $("avatar");
  av.alt = "Аватар " + name;
  av.style.display = "";
  av.onerror = function(){ av.style.display = "none"; fb.hidden = false; };
  av.onload = function(){ fb.hidden = true; };
  if (BIO.avatar){ av.src = BIO.avatar + "?v=" + Date.now(); } else { av.style.display = "none"; fb.hidden = false; }
  var badges = $("badges"); badges.innerHTML = "";
  (BIO.badges || []).forEach(function(b){
    var s = document.createElement("span"); s.className = "badge"; s.textContent = b; badges.appendChild(s);
  });
}
function copyText(text, okMsg){
  function done(){ toast(okMsg || ("Скопировано: " + text)); }
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(function(){ fallback(); });
  } else { fallback(); }
  function fallback(){
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch(e){ toast(text); }
    document.body.removeChild(ta);
  }
}
/* ---------- ССЫЛКИ ---------- */
function initLinks(){
  var box = $("links"); box.innerHTML = "";
  (BIO.links || []).filter(function(l){ return l.enabled !== false; }).forEach(function(l, i){
    var copyOnly = (l.url || "").indexOf("copy:") === 0;
    var copyVal = l.copy || (copyOnly ? (l.url || "").replace(/^copy:/, "") : "");
    var href = copyOnly ? "#" : l.url;
    var a = document.createElement("a");
    a.className = "link"; a.href = href;
    if (!copyOnly){ a.target = "_blank"; a.rel = "noopener"; }
    a.style.setProperty("--accent", l.color || "#fff");
    a.style.setProperty("--delay", (i * 0.06) + "s");
    a.innerHTML =
      '<span class="link__icon" style="background:' + (l.color || "#333") + '">' + (ICONS[l.icon] || ICONS.link) + "</span>" +
      '<span class="link__text"><span class="link__title"></span><span class="link__sub"></span></span>' +
      ICONS.arrow;
    a.querySelector(".link__title").textContent = l.title;
    a.querySelector(".link__sub").textContent = l.subtitle || l.url;
    a.addEventListener("click", function(e){
      if (copyOnly){ e.preventDefault(); copyText(copyVal, "Discord скопирован: " + copyVal); }
      else if (copyVal){ copyText(copyVal, "Discord скопирован: " + copyVal + " • открываю профиль"); }
      else { toast("Открываю: " + l.title); }
    });
    box.appendChild(a);
  });
  var soc = $("socials"); soc.innerHTML = "";
  (BIO.socials || []).forEach(function(s){
    var copyOnly = (s.url || "").indexOf("copy:") === 0;
    var copyVal = s.copy || (copyOnly ? (s.url || "").replace(/^copy:/, "") : "");
    var a = document.createElement("a");
    a.className = "soc"; a.href = copyOnly ? "#" : s.url;
    if (!copyOnly){ a.target = "_blank"; a.rel = "noopener"; }
    a.title = (s.icon === "discord" && copyVal) ? ("Discord: " + copyVal) : s.icon;
    a.innerHTML = ICONS[s.icon] || ICONS.link;
    a.addEventListener("click", function(e){
      if (copyOnly){ e.preventDefault(); copyText(copyVal, "Discord скопирован: " + copyVal); }
      else if (copyVal){ copyText(copyVal, "Discord скопирован: " + copyVal); }
    });
    soc.appendChild(a);
  });
}

/* ---------- ПЕЧАТАЛКА ---------- */
function initTyped(){
  var words = BIO.typed && BIO.typed.length ? BIO.typed : ["bio"];
  var el = $("typed"), wi = 0, ci = 0, del = false;
  (function tick(){
    var w = words[wi];
    el.textContent = w.slice(0, ci);
    if (!del){ ci++; if (ci > w.length){ del = true; return setTimeout(tick, 1600); } }
    else { ci--; if (ci < 0){ del = false; wi = (wi + 1) % words.length; ci = 0; } }
    setTimeout(tick, del ? 28 : 62);
  })();
}
/* ---------- FACEIT LIVE ELO ---------- */
function initFaceit(){
  var eloEl = $("faceitElo"),
      fill = $("faceitFill"),
      nickEl = $("faceitNick"), updEl = $("faceitUpd");
  if (!eloEl) return;
  var nick = BIO.faceitNick || "-flooow";
  if (nickEl) nickEl.textContent = nick;
  var lvlEl = $("faceitLvl"), ring = $("faceitRing"), maxEl = $("faceitMax");
  if (maxEl) maxEl.textContent = BIO.faceitMaxElo || "—";
  function lvlRange(lvl, elo){
    // Границы elo по уровням FACEIT CS2 (приблизительные)
    var floors = {1:100,2:751,3:901,4:1051,5:1201,6:1351,7:1531,8:1751,9:1951,10:2001};
    var ceil = {1:750,2:900,3:1050,4:1200,5:1350,6:1530,7:1750,8:1950,9:2000,10:3000};
    var f = floors[lvl] || 0, c = ceil[lvl] || 3000;
    return Math.min(1, Math.max(0, (elo - f) / Math.max(1, c - f)));
  }
  function animateNum(from, to){
    var t0 = null, dur = 900;
    from = from || 0;
    function step(t){
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      eloEl.textContent = Math.round(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function paint(elo, lvl, silent){
    var prev = parseInt(eloEl.textContent, 10);
    if (isNaN(prev)){ eloEl.textContent = elo; }
    else if (!silent){ animateNum(prev, elo); }
    else { eloEl.textContent = elo; }
    var frac = lvlRange(lvl, elo);
    if (fill) fill.style.width = (frac * 100).toFixed(1) + "%";
    if (lvlEl) lvlEl.textContent = lvl || 10;
    // ring fills in steps of level (1..10), circumference 2π·28
    if (ring) ring.style.strokeDashoffset = (175.9 * (1 - Math.min(10, lvl || 10) / 10)).toFixed(1);
    if (updEl) updEl.textContent = "updated " + new Date().toLocaleTimeString("ru-RU", {hour:"2-digit",minute:"2-digit"});
    try { localStorage.setItem("bio_faceit", JSON.stringify({elo: elo, lvl: lvl})); } catch(e){}
  }
  var cached = null;
  try { cached = JSON.parse(localStorage.getItem("bio_faceit") || "null"); } catch(e){}
  if (cached && cached.elo){ paint(cached.elo, cached.lvl || 10, true); }
  else { paint(2078, 10, true); } // дефолт чтобы не висело «…»
  var url = "https://www.faceit.com/api/users/v1/nicknames/" + encodeURIComponent(nick);
  var proxies = [
    "https://api.allorigins.win/raw?url=" + encodeURIComponent(url),
    "https://api.allorigins.win/get?url=" + encodeURIComponent(url),
    "https://corsproxy.io/?url=" + encodeURIComponent(url)
  ];
  function fetchLive(){
    (function tryFetch(i){
      if (i >= proxies.length) return;
      fetch(proxies[i])
        .then(function(r){ if (!r.ok) throw 0; return r.json(); })
        .then(function(d){
          // allorigins /get оборачивает ответ в {contents: "..."}
          var data = d;
          if (typeof d.contents === "string"){
            try { data = JSON.parse(d.contents); } catch(e){ throw 0; }
          }
          var cs = data && data.payload && data.payload.games && data.payload.games.cs2;
          if (!cs || !cs.faceit_elo) throw 0;
          paint(cs.faceit_elo, cs.skill_level, false);
        })
        .catch(function(){ tryFetch(i + 1); });
    })(0);
  }
  fetchLive();
  setInterval(fetchLive, 5 * 60 * 1000); // обновление каждые 5 минут
}
/* ---------- СЧЁТЧИК УНИКАЛЬНЫХ ПОСЕТИТЕЛЕЙ ---------- */
function initViews(){
  var el = $("views");
  function paint(n){ el.textContent = Number(n || 0).toLocaleString("ru-RU"); }
  // countapi: глобальный счётчик + локальный флаг уникальности
  var NS = "flow-bio", KEY = "visitors";
  var seen = null;
  try { seen = localStorage.getItem("bio_seen"); } catch(e){}
  var url = seen
    ? "https://api.countapi.xyz/get/" + NS + "/" + KEY
    : "https://api.countapi.xyz/hit/" + NS + "/" + KEY;
  fetch(url)
    .then(function(r){ return r.json(); })
    .then(function(d){
      if (d && typeof d.value === "number"){
        paint(d.value);
        try { localStorage.setItem("bio_seen", "1"); } catch(e){}
      } else throw 0;
    })
    .catch(function(){
      // Fallback: локальный счётчик если API недоступен
      var key = "bio_views", v = parseInt(localStorage.getItem(key) || "0", 10);
      if (!v) v = (BIO.baseViews || 1000);
      if (!seen){ v++; try { localStorage.setItem(key, v); localStorage.setItem("bio_seen", "1"); } catch(e){} }
      paint(v);
    });
}
/* ---------- ЗВЁЗДЫ (облегчено для мобильных) ---------- */
function initStars(){
  var c = $("stars"), ctx = c.getContext("2d"), stars = [];
  var isMobile = matchMedia("(pointer:coarse)").matches;
  var COUNT = isMobile ? 50 : 130;
  var dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2);
  function resize(){
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = [];
    for (var i = 0; i < COUNT; i++){
      stars.push({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, r: Math.random()*1.2+.3, s: Math.random()*.3+.05, o: Math.random()*.6+.15, ph: Math.random()*6.28 });
    }
  }
  resize();
  var rT = null;
  addEventListener("resize", function(){ clearTimeout(rT); rT = setTimeout(resize, 200); });
  var running = true;
  document.addEventListener("visibilitychange", function(){ running = !document.hidden; if (running) draw(); });
  var last = 0;
  function draw(now){
    if (!running) return;
    requestAnimationFrame(draw);
    if (now - last < (isMobile ? 66 : 33)) return; // 15fps mobile / 30fps desktop
    last = now;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    var t = now / 900;
    ctx.fillStyle = "#fff";
    for (var i = 0; i < stars.length; i++){
      var s = stars[i];
      s.y -= s.s; if (s.y < 0) s.y = innerHeight;
      ctx.globalAlpha = s.o * (0.7 + 0.3 * Math.sin(t + s.ph));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.3); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  requestAnimationFrame(draw);
}
/* ---------- ВХОД ---------- */
function initEnter(){
  var enter = $("enter"), started = false;
  enter.addEventListener("click", function(){
    enter.classList.add("is-hidden");
    document.body.classList.add("is-entered");
    if (!started){
      started = true;
      toast("Добро пожаловать");
    }
  });
}
/* ---------- ПОДЕЛИТЬСЯ ---------- */
function initShare(){
  $("shareBtn").addEventListener("click", function(){
    var url = location.href, title = document.title;
    if (navigator.share){ navigator.share({title: title, url: url}).catch(function(){}); }
    else if (navigator.clipboard){
      navigator.clipboard.writeText(url).then(function(){ toast("Ссылка скопирована"); });
    } else { toast(url); }
  });
}
/* ---------- 3D НАКЛОН ---------- */
function initTilt(){
  var card = $("card");
  // Отключено: 3D-наклон карточки давал размытие текста (subpixel blur)
  // при наведении на внутренние элементы. Оставляем карточку статичной.
  if (card) card.style.transform = "";
}
/* ---------- ПОДСВЕТКА ПОД КУРСОРОМ ---------- */
function initSpotlight(){
  if (matchMedia("(pointer:coarse)").matches) return;
  var glow = $("cursorGlow"), x = 0, y = 0, raf = 0;
  document.addEventListener("pointermove", function(e){
    x = e.clientX; y = e.clientY;
    if (glow) glow.classList.add("is-on");
    var el = e.target.closest && e.target.closest(".link, .faceit");
    var card = $("card");
    [card, el].forEach(function(n){
      if (!n) return;
      var r = n.getBoundingClientRect();
      n.style.setProperty("--mx", (x - r.left) + "px");
      n.style.setProperty("--my", (y - r.top) + "px");
    });
    if (!raf) raf = requestAnimationFrame(function(){
      raf = 0;
      if (glow) glow.style.transform = "translate(" + x + "px," + y + "px)";
    });
  }, {passive: true});
  document.addEventListener("pointerleave", function(){ if (glow) glow.classList.remove("is-on"); });
}
/* ---------- ПЛЕЙЛИСТ: открыть/скрыть (iframe грузится один раз) ---------- */
function initPlayer(){
  var pl = $("playlist"), frame = $("spotifyFrame"), wrap = $("embedWrap"),
      open = $("icoOpen"), close = $("icoClose"),
      hide = $("embedHide"), ext = $("playlistExt");
  if (ext && BIO.playlistUrl){ ext.href = BIO.playlistUrl; }
  if ($("playlistName")) $("playlistName").textContent = BIO.playlistName || "Мой плейлист";
  if ($("playlistMeta")) $("playlistMeta").textContent = BIO.playlistMeta || "";
  function setOpen(v){
    wrap.hidden = !v;
    if (pl){
      pl.classList.toggle("is-open", v);
      pl.setAttribute("aria-expanded", v ? "true" : "false");
    }
    if (open) open.style.display = v ? "none" : "";
    if (close) close.style.display = v ? "" : "none";
  }
  if (pl && frame && wrap){
    var cleanUrl = (BIO.playlistUrl || pl.href || "").split("?")[0];
    var loaded = false;
    frame.addEventListener("error", function(){
      toast("Плейлист приватный — открой в Spotify по ссылке ниже");
    });
    pl.addEventListener("click", function(e){
      if (wrap.hidden){
        e.preventDefault();
        if (!loaded){
          frame.src = cleanUrl.replace("open.spotify.com/", "open.spotify.com/embed/") + "?utm_source=generator&theme=0";
          loaded = true;
        }
        setOpen(true);
        toast("Плейлист открыт");
      } else {
        e.preventDefault();
        setOpen(false);
        toast("Виджет скрыт — музыка играет");
      }
    });
    pl.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); pl.click(); }
    });
  }
  if (hide){
    hide.addEventListener("click", function(e){
      e.stopPropagation();
      setOpen(false);
      toast("Виджет скрыт — музыка играет");
    });
  }
  // Фоновая музыка assets больше не используется (кнопка sound удалена)
  var bg = $("bgMusic");
  if (bg){ bg.removeAttribute("src"); if (bg.load) bg.load(); }
}
initProfile(); initLinks(); initTyped(); initViews(); initFaceit();
initStars(); initEnter(); initShare(); initTilt(); initPlayer(); initSpotlight();
})();

