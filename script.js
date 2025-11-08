
const lb = {
  el: document.querySelector('.lightbox'),
  img: document.querySelector('.lightbox img'),
  title: document.querySelector('.lightbox .title'),
  place: document.querySelector('.lightbox .place'),
  open(src,title,place){
    this.img.src = src;
    this.img.alt = title;
    this.title.textContent = title;
    this.place.textContent = place;
    this.el.classList.add('open');
  },
  close(){ this.el.classList.remove('open'); }
};
document.querySelectorAll('[data-open]').forEach(b=>{
  b.addEventListener('click', ()=>{
    lb.open(b.dataset.src, b.dataset.title, b.dataset.place);
  });
});
document.querySelector('[data-close]').addEventListener('click', ()=>lb.close());
document.querySelector('.lightbox')?.addEventListener('click', (e)=>{
  if(e.target.classList.contains('lightbox')) lb.close();
});
document.getElementById('year').textContent = new Date().getFullYear();
