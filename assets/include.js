<script>
async function inject(id, url){ const el=document.getElementById(id); if(!el) return;
  const res = await fetch(url); el.innerHTML = await res.text(); }
window.addEventListener('DOMContentLoaded', ()=>{
  inject('site-header','/partials/header.html');
  inject('site-footer','/partials/footer.html');
});
</script>
