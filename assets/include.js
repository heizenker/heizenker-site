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
