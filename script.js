document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
      swiper.slidePrev()
    } else if (e.key === 'ArrowRight') {
      swiper.slideNext()
    }
  })
  const input = document.querySelector('#search')
  input.addEventListener('keypress', function(e) { 
    if (e.key === 'Enter') {
      let game = input.value.trim().toUpperCase()
      switch(game) {
        case 'MARIO':
          swiper.slideTo(0)
          break
        case 'POKEMON':
          swiper.slideTo(1)
          break
        case 'ZELDA':
          swiper.slideTo(2)
          break
        default:
          alert('Game not found')
          break
      }
      input.value = ''
    }
  })
})

function submitForm(e) {
  e.preventDefault()
}