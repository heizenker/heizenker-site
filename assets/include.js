/* ========= Слайдер (автопрокрутка + стрелки) ========= */
(function(){
  let idx = 0, timer;

  function slides(){
    return document.querySelectorAll('.slide');
  }
  function show(n){
    const list = slides();
    if (!list.length) return;
    list.forEach(s => s.classList.remove('active'));
    idx = (n + list.length) % list.length;
    list[idx].classList.add('active');
    reset();
  }
  function reset(){
    clearInterval(timer);
    timer = setInterval(()=>show(idx+1), 4500);
  }

  document.addEventListener('click', e=>{
    if (e.target.closest('.prev')) { e.preventDefault(); show(idx-1); }
    if (e.target.closest('.next')) { e.preventDefault(); show(idx+1); }
  });

  // старт после готовности DOM
  document.addEventListener('DOMContentLoaded', ()=> show(0));
})();
// ====== MOBILE MENU TOGGLE ======
(function(){
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.mobile-overlay');
  const panel   = document.querySelector('.mobile-panel');
  const closeBtn = document.querySelector('.mp-close');

  function openMenu(){
    document.body.classList.add('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(){
    document.body.classList.remove('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger){
    burger.addEventListener('click', openMenu);
  }
  if (overlay){
    overlay.addEventListener('click', closeMenu);
  }
  if (closeBtn){
    closeBtn.addEventListener('click', closeMenu);
  }

  // Закрываем ESC
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeMenu();
  });
})();
