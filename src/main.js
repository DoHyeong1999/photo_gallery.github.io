// HOME 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
// KAWAGUCHI 아래로 스크롤시 투명하게 처리
// const kawaguchi = document.querySelector('.kawaguchi__container');
// const kawaguchiHeight = kawaguchi.offsetHeight;
// document.addEventListener('scroll', ()=> {
//   console.log(1 - window.scrollY / kawaguchiHeight);
//   kawaguchi.style.opacity = 1 - window.scrollY / kawaguchiHeight;
// });