import{a as d,S as f,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="51513687-083115f87febea1a11bb9e180",y="https://pixabay.com/api/";async function p(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:s})).data}const l=document.querySelector(".gallery");document.querySelector(".loader");const g=new f(".gallery a");function h(o){const s=o.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" />
      </a>
      <div class="info">
        <p class="info-descr">  <b>Likes:</b> ${r.likes}</p>
        <p class="info-descr"> <b>Views:</b> ${r.views}</p>
        <p class="info-descr">  <b>Comments:</b> ${r.comments}</p>
        <p class="info-descr"> <b>Downloads:</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){l.innerHTML=""}const u=document.querySelector(".form"),L=u.elements["search-text"],c=document.querySelector("#loader");u.addEventListener("submit",async o=>{o.preventDefault();const s=L.value.trim();if(!s){n.warning({message:"Please enter a search query!"});return}c.classList.remove("hidden"),b();try{const r=await p(s);if(!r.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}catch{n.error({message:"Something went wrong. Please try again later."})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
