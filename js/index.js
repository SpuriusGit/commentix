const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});

// Swiper

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween:0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// filter dropdown

const filterElement = document.querySelectorAll('.filtered-list-item');

for(let i of filterElement) {
  i.addEventListener('click', () => {
    i.classList.toggle("active");
  });
}

