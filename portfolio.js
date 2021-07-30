import data from './portfolio-data.js';

const myProjects = data.projects;
console.log(myProjects)


const navList = document.querySelector('.navList');
const closeMenu = document.querySelector('.navList').childNodes;
const openMenu = document.querySelector('.openMenu');
const portfolioWork = document.querySelector("#portfolio-work")


openMenu.addEventListener('click', () => {
  navList.classList.add('active');
});

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener('click', () => {
    navList.classList.remove('active');
  });
}

function implementProject() {
  let i = 0;
  myProjects.forEach((project) => {
    portfolioWork.innerHTML += `<article class="work-article pad-24 margin-top-6em">
    <div class="cards cards d-flex flex-column align-center background-white pad-16 border-radius-16 pad-bottom-30">
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
        <button data-key="${project.key}" id="${i}" type="button"
            class="button see-project blue border height-48 font-weight-500 font-size-18 line-height-24 hover active hover-lg">See
            Project</button>
    </div>
</div>
</article>`;
i++;
  })
  
};

implementProject();
