const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  const currentMode = document.querySelector(tab.dataset.tabTarget);
  if (currentMode.className === 'active') {
    document.body.classList.add((tab.dataset.tabTarget).slice(1));
  }

  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    document.body.className = '';
    document.body.classList.add((tab.dataset.tabTarget).slice(1));

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
const filterIcon = document.querySelector('.filter-icon');
const filterPanel = document.querySelector('.filter-panel');

for(let i of filterElement) {
  i.addEventListener('click', () => {
    i.classList.toggle("active");
  });
}

filterIcon.addEventListener('click', () => {
  if (window.innerWidth < 1200) {
    filterPanel.classList.toggle("active");
  }
});


// modal 
const modalOpen = document.querySelectorAll('.modal-open');

for(let i of modalOpen) {
  i.addEventListener('click', () => {
    document.querySelector('.modal-window').classList.add('active');
  });
}

document.querySelector('.modal-background').addEventListener('click', () => {
  document.querySelector('.modal-window').classList.remove('active');
});
document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.modal-window').classList.remove('active');
});

// form options

const options = document.querySelectorAll('.proposal-option');

for (let i of options) {
  i.addEventListener('click', () => {
    for(let j of options) {
      j.classList.remove('active');
    }
    i.classList.add('active');
  });
}