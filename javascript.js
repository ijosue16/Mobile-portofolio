const navItem = document.querySelectorAll('.nav-item');
const horizontalBar = document.querySelector('.horizontal_bar');
const topNavigationBar = document.querySelector('.top-navigation-bar');
const headerWelcome = document.querySelector('.header-welcome');
const desktopNavigationBar = document.querySelector('.desktop-nav-container');
const menuIcon = document.querySelector('.menu-icon');
const main = document.querySelector('main');
const mobileMenuFooter = document.querySelector('.mobile_menu_footer');
const navItemArray = Array.from(navItem);
function restoredefaults() {
  menuIcon.classList.remove('active');
  headerWelcome.classList.remove('active');
  topNavigationBar.classList.remove('active');
  desktopNavigationBar.classList.remove('active');
  horizontalBar.classList.remove('active');
  mobileMenuFooter.classList.remove('active');
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.remove('active');
  }
}
function mobilemenu() {
  menuIcon.classList.toggle('active');
  desktopNavigationBar.classList.toggle('active');
  headerWelcome.classList.toggle('active');
  topNavigationBar.classList.toggle('active');
  horizontalBar.classList.toggle('active');
  mobileMenuFooter.classList.toggle('active');
  const navItemArray = Array.from(navItem);
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.toggle('active');
  }
}
main.addEventListener('click', restoredefaults);
document.onclick = (e) => {
  if (e.target === topNavigationBar) {
    restoredefaults();
  }
};
navItemArray.forEach((navMenu) => {
  navMenu.addEventListener('click', restoredefaults);
  navMenu.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      restoredefaults();
    }
  });
});

menuIcon.addEventListener('click', mobilemenu);
menuIcon.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    mobilemenu();
  }
});

const projectInfo = [
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
    closeMobileBtn: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
    closeBtnMobile: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
  closeMobileBtncloseBtnMobile: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
    closeMobileBtn: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
    closeMobileBtn: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
  {
    cardHeader: 'Multi-Post Stories\n Gain + Glory',
    language: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    button: 'See Project',
    popupImageMobile: './tools/popup/mobile/popup-image-mobile.svg',
    popupImageDesktop: './tools/popup/desktop/popup-image-desktop.svg',
    closeMobileBtn: './tools/popup/mobile/close-btn-mobile.svg',
    closeDesktopBtn: './tools/popup/desktop/close-btn-desktop.svg',
    popupCardHeader: 'Keeping track of hundreds of components',
    popupMobileLanguage: ['Ruby on rails', 'css', 'JavaScript'],
    popupDesktopLanguage: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupCardParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
      + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
      + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
      + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
      + 'type and scrambled it 1960s with the relea',
    popupCardButtons: ['See Live', 'See Source'],
    importantLinks: ['https://ijosue16.github.io/', 'https://github.com/ijosue16/ijosue16.github.io'],
    popupCardButtonsIcon: ['./tools/popup/icons/see-live-icon.svg', './tools/popup/icons/see-source-icon.svg'],
  },
];

const projectContainer = document.querySelector('.projects-container');

for (let numb = 0; numb < projectInfo.length; numb += 1) {
  const projectHolder = document.createElement('article');
  projectHolder.classList.add('project-holder');
  projectHolder.tabIndex = 0;
  const imageHolder = document.createElement('div');
  imageHolder.classList.add('image-holder');
  imageHolder.tabIndex = 0;
  const cardHeader = document.createElement('h3');
  cardHeader.classList.add('multi-post');
  cardHeader.innerHTML = projectInfo[numb].cardHeader;
  const languageContainer = document.createElement('ul');
  languageContainer.classList.add('language-section');
  languageContainer.tabIndex = 0;

  const list1 = document.createElement('li');
  list1.classList.add('tech-lang');
  list1.tabIndex = 0;
  list1.innerHTML = [projectInfo[numb].language[0]];
  const list2 = document.createElement('li');
  list2.classList.add('tech-lang');
  list2.tabIndex = 0;
  list2.innerHTML = [projectInfo[numb].language[1]];
  const list3 = document.createElement('li');
  list3.classList.add('tech-lang');
  list3.tabIndex = 0;
  list3.innerHTML = [projectInfo[numb].language[2]];
  const list4 = document.createElement('li');
  list4.classList.add('tech-lang');
  list4.tabIndex = 0;
  list4.innerHTML = [projectInfo[numb].language[3]];
  const button = document.createElement('button');
  button.classList.add('see-project');
  button.type = 'button';
  button.innerHTML = projectInfo[numb].button;

  languageContainer.appendChild(list1);
  languageContainer.appendChild(list2);
  languageContainer.appendChild(list3);
  languageContainer.appendChild(list4);

  imageHolder.append(
    cardHeader,
    languageContainer,
    button,
  );
  projectHolder.appendChild(imageHolder);
  projectContainer.appendChild(projectHolder);
}

for (let i = 1; i < 2; i += 1) {
  const popupBackgrounds = document.querySelector('.popup-backgrounds');
  const popupWindow = document.querySelector('.popup');

  const closeBtns = document.createElement('div');
  closeBtns.classList.add('close-buttons');

  const popupMobileClose = document.createElement('img');
  popupMobileClose.src = projectInfo[i].closeMobileBtn;
  popupMobileClose.classList.add('close-mobile');

  const popupDesktopClose = document.createElement('img');
  popupDesktopClose.src = projectInfo[i].closeDesktopBtn;
  popupDesktopClose.classList.add('close-desktop');

  closeBtns.append(
    popupMobileClose,
    popupDesktopClose,
  );

  const popupImg = document.createElement('div');
  popupImg.classList.add('popup-images');

  const popupMobileImage = document.createElement('img');
  popupMobileImage.src = projectInfo[i].popupImageMobile;
  popupMobileImage.classList.add('mobilepopup-image');

  const popupDesktopImage = document.createElement('img');
  popupDesktopImage.src = projectInfo[i].popupImageDesktop;
  popupDesktopImage.classList.add('desktoppopup-image');

  popupImg.append(
    popupMobileImage,
    popupDesktopImage,
  );

  const containerForHeaderAndPopupButtons = document.createElement('div');
  containerForHeaderAndPopupButtons.classList.add('container-for-header-and-popupbuttons');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header_container');

  const popupHeader = document.createElement('h3');
  popupHeader.classList.add('popup_header');
  popupHeader.innerHTML = projectInfo[i].popupCardHeader;

  headerContainer.appendChild(
    popupHeader,
  );

  const popupDesktopButtons = document.createElement('div');
  popupDesktopButtons.classList.add('popup_buttons_desktop');

  const seeSourceBtn = document.createElement('button');
  seeSourceBtn.type = 'button';
  seeSourceBtn.classList.add('see-project');

  const seeSourceMobileLink = document.createElement('a');
  seeSourceMobileLink.style.color = 'white';
  seeSourceMobileLink.style.textDecoration = 'none';
  seeSourceMobileLink.href = [projectInfo[i].importantLinks[1]];
  seeSourceMobileLink.innerHTML = `
        See Source
          <span><img src="tools/popup/icons/see-source-icon.svg"></span>
    `;

  seeSourceBtn.appendChild(
    seeSourceMobileLink,
  );

  const seeLiveBtn = document.createElement('button');
  seeLiveBtn.type = 'button';
  seeLiveBtn.classList.add('see-project');

  const seeLiveMobileLink = document.createElement('a');
  seeLiveMobileLink.style.color = 'white';
  seeLiveMobileLink.style.textDecoration = 'none';
  seeLiveMobileLink.href = [projectInfo[i].importantLinks[0]];
  seeLiveMobileLink.innerHTML = `
        See Live
          <span><img src="tools/popup/icons/see-live-icon.svg"></span>
    `;

  seeLiveBtn.appendChild(
    seeLiveMobileLink,
  );

  const seeLiveDesktopBtn = document.createElement('button');
  seeLiveDesktopBtn.type = 'button';
  seeLiveDesktopBtn.classList.add('see-project');

  const seeLiveDesktopLink = document.createElement('a');
  seeLiveDesktopLink.style.color = 'white';
  seeLiveDesktopLink.style.textDecoration = 'none';
  seeLiveDesktopLink.href = [projectInfo[i].importantLinks[0]];
  seeLiveDesktopLink.innerHTML = `
        See Live
          <span><img src="tools/popup/icons/see-live-icon.svg"></span>
    `;

  // Appending link into btn
  seeLiveDesktopBtn.appendChild(
    seeLiveDesktopLink,
  );

  const seeSourceDesktopBtn = document.createElement('button');
  seeSourceDesktopBtn.type = 'button';
  seeSourceDesktopBtn.classList.add('see-project');

  const seeSourceDesktopLink = document.createElement('a');
  seeSourceDesktopLink.style.color = 'white';
  seeSourceDesktopLink.style.textDecoration = 'none';
  seeSourceDesktopLink.href = [projectInfo[i].importantLinks[1]];
  seeSourceDesktopLink.innerHTML = `
        See Source
          <span><img src="tools/popup/icons/see-source-icon.svg"></span>
    `;
  // Appending link into btn
  seeSourceDesktopBtn.appendChild(
    seeSourceDesktopLink,
  );

  popupDesktopButtons.append(
    seeLiveDesktopBtn,
    seeSourceDesktopBtn,
  );

  containerForHeaderAndPopupButtons.append(
    headerContainer,
    popupDesktopButtons,
  );

  const mobileLanguage = document.createElement('div');
  mobileLanguage.classList.add('mobile_language_section');

  const languageMobileContainer = document.createElement('ul');
  languageMobileContainer.classList.add('language-section');

  const popupLanguageMobile1 = document.createElement('li');
  popupLanguageMobile1.innerHTML = [projectInfo[i].popupMobileLanguage[0]];
  popupLanguageMobile1.classList.add('tech-lang');

  // popup mobile language item2
  const popupLanguageMobile2 = document.createElement('li');
  popupLanguageMobile2.innerHTML = [projectInfo[i].popupMobileLanguage[1]];
  popupLanguageMobile2.classList.add('tech-lang');

  // popup mobile language item3
  const popupLanguageMobile3 = document.createElement('li');
  popupLanguageMobile3.innerHTML = [projectInfo[i].popupMobileLanguage[2]];
  popupLanguageMobile3.classList.add('tech-lang');

  languageMobileContainer.append(
    popupLanguageMobile1,
    popupLanguageMobile2,
    popupLanguageMobile3,
  );

  mobileLanguage.appendChild(
    languageMobileContainer,
  );

  const desktopLanguage = document.createElement('div');
  desktopLanguage.classList.add('desktop_language_section');

  const languageDesktopContainer = document.createElement('ul');
  languageDesktopContainer.classList.add('language-section');

  const popupLanguageDesktop1 = document.createElement('li');
  popupLanguageDesktop1.classList.add('tech-lang');
  popupLanguageDesktop1.innerHTML = [projectInfo[i].popupDesktopLanguage[0]];

  // popup language desktop list 2
  const popupLanguageDesktop2 = document.createElement('li');
  popupLanguageDesktop2.classList.add('tech-lang');
  popupLanguageDesktop2.innerHTML = [projectInfo[i].popupDesktopLanguage[1]];

  // popup language desktop list 3
  const popupLanguageDesktop3 = document.createElement('li');
  popupLanguageDesktop3.classList.add('tech-lang');
  popupLanguageDesktop3.innerHTML = [projectInfo[i].popupDesktopLanguage[2]];

  // popup language desktop list 4
  const popupLanguageDesktop4 = document.createElement('li');
  popupLanguageDesktop4.classList.add('tech-lang');
  popupLanguageDesktop4.innerHTML = [projectInfo[i].popupDesktopLanguage[3]];

  // popup language desktop list 5
  const popupLanguageDesktop5 = document.createElement('li');
  popupLanguageDesktop5.classList.add('tech-lang');
  popupLanguageDesktop5.innerHTML = [projectInfo[i].popupDesktopLanguage[4]];

  // popup language desktop list 6
  const popupLanguageDesktop6 = document.createElement('li');
  popupLanguageDesktop6.classList.add('tech-lang');
  popupLanguageDesktop6.innerHTML = [projectInfo[i].popupDesktopLanguage[5]];

  languageDesktopContainer.append(
    popupLanguageDesktop1,
    popupLanguageDesktop2,
    popupLanguageDesktop3,
    popupLanguageDesktop4,
    popupLanguageDesktop5,
    popupLanguageDesktop6,
  );

  desktopLanguage.appendChild(
    languageDesktopContainer,
  );

  const popupParagraph = document.createElement('p');
  popupParagraph.classList.add('popup_description');
  popupParagraph.innerHTML = projectInfo[i].popupCardParagraph;

  const popupMobileButtons = document.createElement('div');
  popupMobileButtons.classList.add('popup_buttons_mobile');

  popupMobileButtons.append(
    seeLiveBtn,
    seeSourceBtn,
  );

  const seeProject = document.querySelectorAll('.see-project');
  seeProject.forEach((project) => {
    project.addEventListener('click', () => {
      popupBackgrounds.classList.toggle('active');
      popupWindow.append(
        closeBtns,
        popupImg,
        containerForHeaderAndPopupButtons,
        mobileLanguage,
        desktopLanguage,
        popupParagraph,
        popupMobileButtons,
      );
      popupWindow.style.display = null;
      document.querySelector('body').style.overflow = 'hidden';
    });
  });

  popupMobileClose.addEventListener('click', () => {
    popupBackgrounds.classList.remove('active');
    popupWindow.style.display = 'none';
    document.querySelector('body').style.overflow = 'absolute';
  });
  popupDesktopClose.addEventListener('click', () => {
    popupBackgrounds.classList.remove('active');
    popupWindow.style.display = 'none';
    document.querySelector('body').style.overflow = 'absolute';
  });
}
const emailAddress = document.querySelector('.email');
const form = document.querySelector('.contact-form');
const name = document.querySelector('.fullName');
const message = document.querySelector('.cmt-area');
const validation = document.createElement('span');
validation.classList.add('errorMessage');

form.addEventListener('submit', (e) => {
  form.appendChild(validation);
  const messages = [];
  const regex = /^([a-z0-9_-]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (name.value.length === 0 || name.value.length === null) {
    messages.push('⛔ Name is Required');
    validation.innerHTML = messages.join(',');
  } else if (name.value.length >= 50) {
    messages.push('⛔ Name is too long');
    validation.innerHTML = messages.join(',');
  } else if (regex.test(emailAddress.value) === false) {
    messages.push('⛔ Incorrect Email');
    validation.innerHTML = messages.join(',');
  } else if (regex.test(emailAddress.value) === false) {
    validation.innerHTML = messages.join(',');
  } else if (emailAddress.value.length >= 100) {
    messages.push('⛔ Email Address is too long');
    validation.innerHTML = messages.join(',');
  } else if (message.value.length === 0 || message.value.length === null) {
    messages.push('⛔ Text area is Required');
    validation.innerHTML = messages.join(',');
  } else if (message.value.length < 20) {
    messages.push('⛔ Message cannot be less than 20 characters');
    validation.innerHTML = messages.join(',');
  }
  e.preventDefault();
});

let localInfo = {
  fullName: '',
  email: '',
  comment: '',
};

if (localStorage.getItem('localInfo') != null) {
  localInfo = JSON.parse(localStorage.getItem('localInfo'));
  name.value = localInfo.fullName;
  emailAddress.value = localInfo.email;
  message.value = localInfo.comment;
} else {
  form.addEventListener('submit', () => {
    localInfo.fullName = name.value;
    localInfo.email = emailAddress.value;
    localInfo.comment = message.value;
    localStorage.setItem('localInfo', JSON.stringify(localInfo));
  });
}