// header에 페이지 아래로 스크롤시 스타일링 적용
const header = document.querySelector('.header')

// 요소의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight)
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.screenY / homeHeight
})

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1
    } else{
        arrowUp.style.opacity = 0
    }
})

// Navbar 토글버튼 클릭 처리
const NavbarMenu = document.querySelector('.header__menu')
const NavbarToggle = document.querySelector('.header__toggle')
NavbarToggle.addEventListener('click', () => {
    NavbarMenu.classList.toggle('open')
})

// Navbar 메뉴 클릭스 메뉴를 자동으로 닫아줌
NavbarMenu.addEventListener('click', () =>{
    NavbarMenu.classList.remove('open')
})