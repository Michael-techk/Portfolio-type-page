const bannerH = document.querySelector('.container').offsetHeight - 100;
const btn = document.querySelector('.to-top-icon');

document.addEventListener('scroll', () => {
    if(window.scrollY < bannerH) btn.classList.remove('active');
    else if(window.scrollY > bannerH) btn.classList.add('active');
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})