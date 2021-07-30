import data from './portfolio-data.js';

const myProjects = data.projects;

const navList = document.querySelector('.navList');
const closeMenu = document.querySelector('.navList').childNodes;
const openMenu = document.querySelector('.openMenu');
const portfolioWork = document.querySelector('#portfolio-work');

openMenu.addEventListener('click', () => {
  navList.classList.add('active');
});

for (let i = 0; i < closeMenu.length; i += 1) {
  closeMenu[i].addEventListener('click', () => {
    navList.classList.remove('active');
  });
}

// works
function implementProject() {
  let i = 0;
  myProjects.forEach((project) => {
    const cardId = `card-button-${i + 1}`;
    portfolioWork.innerHTML += `<article class="work-article align-center pad-24 margin-top-6em">
    <div class="cards d-flex flex-column background-white pad-16 border-radius-16 pad-bottom-30">
    <div class="cards-img cards-img-lg img background-no-repeat">
    </div>
    <div class="cards-text">
        <h4 class="cards-text-header bold font-size-32 line-height-44 black pad-t-8 slategray"> ${project.projectName}</h4>
        <ul class="d-flex line-height-16 font-weight-600 font-size-13 pad-top-1em">
            <li class="">${project.companyName}</li>
            <li class="box margin-left-16"></li>
            <li class="margin-left-16 grey">${project.projectPosition}</li>
            <li class="box margin-left-16"></li>
            <li class="margin-left-16 grey">${project.projectDate}</li>
        </ul>
        <p class="text font-weight-400 font-size-16 line-height-24 slateblu pad-top-1em">${project.projectDescription}</p>
        <ul class="d-flex pad-top-12 pad-bottom-2em pad-top-24">
            <li
                class="font-size-13 font-weight-500 background-grey line-height-20 dodgerblue height-20 border-radius-7 width-53 pad-left-13">html</li>
            <li
                    class="font-size-13 font-weight-500 background-grey line-height-20 dodgerblue margin-left-8 height-20 border-radius-7 width-88 pad-left-7">Ruby on rails</li>
            <li
                class="font-size-13 font-weight-500 background-grey line-height-20 dodgerblue margin-left-8 height-20 border-radius-7 width-45 pad-left-12">css
            </li>
            <li
                class="font-size-13 font-weight-500 background-grey line-height-20 dodgerblue margin-left-8 height-20 border-radius-7 width-65 pad-left-7">javascript</li>
        </ul>
        <button data-key="${project.key}" id="${cardId}" type="button"
            class="button see-project blue border height-48 font-weight-500 font-size-18 line-height-24 hover active hover-lg">See
            Project</button>
    </div>
</div>
</article>`;
    i += 1;
  });
}

implementProject();

// Create Modal

function openModal() {
  const allCardButtons = document.querySelectorAll("[id*='card-button']");

  let i = 0;
  myProjects.forEach((project) => {
    allCardButtons[i].addEventListener('click', () => {
      const modalElement = document.createElement('div');

      modalElement.id = 'modal-popup';
      modalElement.setAttribute('class', 'modal d-flex pad-24');
      modalElement.innerHTML = `<div class="modal-content d-flex flex-column background-white pad-16 border-radius-16">
      <div class="cards-text">
          <h4 id="popup-title" class="cards-text-header bold font-size-32 line-height-44 black slategray popup-title">${project.projectName}</h4>
          <span id="close-popup" class="closePopup">&times;
          </span>
          <ul id="popup-ul-subtitle" class="popup-ul-subtitle d-flex line-height-16 font-weight-600 font-size-13">
              <li class="popup-subtitle-first-item">${project.companyName}</li>
              <li class="box margin-left-16"></li>
              <li class="margin-left-16 grey">${project.projectPosition}</li>
              <li class="box margin-left-16"></li>
              <li class="margin-left-16 grey">${project.projectDate}</li>
          </ul>
      <div class="cards-img modal-img-lg img background-no-repeat">
      </div>
      <div class="second-section-modal">
          <p class="popup-text text font-weight-400 font-size-16 line-height-24 slateblu pad-top-1em">${project.projectTextMob}</p>
          <div>
            <ul class="d-flex wrap pad-top-12">
              <li
                  class="popup-tech-item font-size-12 font-weight-500 border-radius-7 margin-right-8 margin-top-12"><h3>html</h3></li>
              <li
                      class="popup-tech-item font-size-12 font-weight-500 margin-right-8 border-radius-7  margin-top-12"><h3>Ruby on rails</h3></li>
              <li
                  class="popup-tech-item font-size-12 font-weight-500 margin-right-8 border-radius-7  margin-top-12">
                  <h3>css</h3>
              </li>
              <li
                  class="popup-tech-item font-size-12 font-weight-500 margin-right-8 border-radius-7 margin-top-12">
                  <h3>javascript</h3>
              </li>
            </ul>
            <div class="popup-horizontal-line pad-top-24"></div>
            <div class="pad-top-24">
                <button type="button" id="popup-tech-button"
                class="popup-button button see-project blue border height-48 font-weight-500 font-size-15 line-height-24 hover active hover-lg"><h3>See
                  Project</h3><img id="popup-icon-live" class="popup-icon" src="./assets/live.svg" alt=""></button>

                <button type="button"
                class="popup-button button see-project blue border height-48 font-weight-500 font-size-15 line-height-24 hover active hover-lg"><h3>See
                  Project</h3><img id="popup-icon-source" class="popup-icon" src="./assets/github.svg" alt=""></button>
            </div>
          </div>
      </div>
      </div>
  </div>`;

      if (window.innerWidth >= 992) {
        modalElement.querySelector('.popup-text').innerHTML = project.projectTextDesk;
      } else {
        modalElement.querySelector('.popup-text').innerHTML = project.projectTextMob;
      }

      portfolioWork.appendChild(modalElement);
      document.querySelector('html').style.overflowY = 'hidden';

      // logic for closing button;

      const closeBtn = document.getElementById('close-popup');

      closeBtn.addEventListener('click', () => {
        const modal = document.getElementById('modal-popup');
        modal.remove();
        document.querySelector('html').style.overflowY = 'auto';
      });
    });

    i += 1;
  });
}

openModal();