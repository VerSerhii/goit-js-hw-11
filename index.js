import{a as f,S as d,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="51513687-083115f87febea1a11bb9e180",p="https://pixabay.com/api/";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a");function h(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("visible")}function w(){l.classList.remove("visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({message:"Please enter a search query!"});return}L(),b();try{const r=await y(o);if(!r.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}catch{n.error({message:"Something went wrong. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
