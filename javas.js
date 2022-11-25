const hamburgerIcon = document.querySelector('.nav-icon');
const hamburgerIconCross = document.querySelectorAll('.bar2');
const navMenuMobile = document.querySelector('.desktop-nav-container');
const pageName = document.querySelector('.pagename');
const navHeader = document.querySelector('.mobile-navhead');
const mobileNav = document.querySelector('.nav-bar');
const workSection = document.querySelector('.mywork');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  navMenuMobile.classList.toggle('active');
  pageName.classList.toggle('active');
  navHeader.classList.toggle('active');
  mobileNav.classList.toggle('active');
  hamburgerIconCross.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerIcon.classList.remove('active');
  navMenuMobile.classList.remove('active');
  pageName.classList.remove('active');
  mobileNav.classList.remove('active');
  hamburgerIconCross.classList.remove('active');
}));

const cardInfo = [
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',
    popupTitle: 'Keeping track of hundreds of components',
    popupMobileTechnologies: ['Ruby on rails', 'css', 'JavScript'],
    PopupDesktopTechnology: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
    + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
    + 'type and scrambled it 1960s with the relea',
    popupDesktopButton1: 'See Live',
    popupDesktopButton2: 'See Source',
    popupMobileButton1: 'See Live',
    popupMobileButton2: 'See Source',
    popupImgClose: './tools/pop-up/Disabled.png',
    popupImgMobile: './tools/pop-up/Snapshoot Portfolio mobile.png',
    popupImgDesktop: './tools/pop-up/Snapshoot Portfolio.png',

  },
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',
    popupTitle: 'Keeping track of hundreds of components',
    popupMobileTechnologies: ['Ruby on rails', 'css', 'JavScript'],
    PopupDesktopTechnology: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
    + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
    + 'type and scrambled it 1960s with the relea',
    popupDesktopButton1: 'See Live',
    popupDesktopButton2: 'See Source',
    popupMobileButton1: 'See Live',
    popupMobileButton2: 'See Source',
    popupImgClose: './tools/pop-up/Disabled.png',
    popupImgMobile: './tools/pop-up/Snapshoot Portfolio mobile.png',
    popupImgDesktop: './tools/pop-up/Snapshoot Portfolio.png',

  },
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',
    popupTitle: 'Keeping track of hundreds of components',
    popupMobileTechnologies: ['Ruby on rails', 'css', 'JavScript'],
    PopupDesktopTechnology: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
    + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
    + 'type and scrambled it 1960s with the relea',
    popupDesktopButton1: 'See Live',
    popupDesktopButton2: 'See Source',
    popupMobileButton1: 'See Live',
    popupMobileButton2: 'See Source',
    popupImgClose: './tools/pop-up/Disabled.png',
    popupImgMobile: './tools/pop-up/Snapshoot Portfolio mobile.png',
    popupImgDesktop: './tools/pop-up/Snapshoot Portfolio.png',

  },
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',
    popupTitle: 'Keeping track of hundreds of components',
    popupMobileTechnologies: ['Ruby on rails', 'css', 'JavScript'],
    PopupDesktopTechnology: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
    + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
    + 'type and scrambled it 1960s with the relea',
    popupDesktopButton1: 'See Live',
    popupDesktopButton2: 'See Source',
    popupMobileButton1: 'See Live',
    popupMobileButton2: 'See Source',
    popupImgClose: './tools/pop-up/Disabled.png',
    popupImgMobile: './tools/pop-up/Snapshoot Portfolio mobile.png',
    popupImgDesktop: './tools/pop-up/Snapshoot Portfolio.png',

  },
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',
    popupTitle: 'Keeping track of hundreds of components',
    popupMobileTechnologies: ['Ruby on rails', 'css', 'JavScript'],
    PopupDesktopTechnology: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Codepen'],
    popupParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem '
    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
    + 'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of '
    + 'type and scrambled it 1960s with the relea',
    popupDesktopButton1: 'See Live',
    popupDesktopButton2: 'See Source',
    popupMobileButton1: 'See Live',
    popupMobileButton2: 'See Source',
    popupImgClose: './tools/pop-up/Disabled.png',
    popupImgMobile: './tools/pop-up/Snapshoot Portfolio mobile.png',
    popupImgDesktop: './tools/pop-up/Snapshoot Portfolio.png',

  },
  {
    cardTitle: 'Multi-Post Stories \n Gain+Glory',
    languages: ['Ruby on rails', 'css', 'html', 'JavScript'],
    projectButton: 'See Project',

  },
];

for (let i = 0; i < cardInfo.length; i += 1) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('story-contain');

  const cardTempalte = document.createElement('article');
  cardTempalte.classList.add('project-template');

  const placeHolder = document.createElement('span');
  placeHolder.classList.add('place-holder');

  const cardHeader = document.createElement('h3');
  cardHeader.innerHTML = cardInfo[i].cardTitle;

  const cardTechnology = document.createElement('ul');
  cardTechnology.classList.add('pr-language');

  const cardLanguage1 = document.createElement('li');
  cardLanguage1.classList.add('language');
  cardLanguage1.innerHTML = [cardInfo[i].languages[0]];

  const cardLanguage2 = document.createElement('li');
  cardLanguage2.classList.add('language');
  cardLanguage2.innerHTML = [cardInfo[i].languages[1]];

  const cardLanguage3 = document.createElement('li');
  cardLanguage3.classList.add('language');
  cardLanguage3.innerHTML = [cardInfo[i].languages[2]];

  const cardLanguage4 = document.createElement('li');
  cardLanguage4.classList.add('language');
  cardLanguage4.innerHTML = [cardInfo[i].languages[3]];

  const cardButtons = document.createElement('button');
  cardButtons.classList.add('button');
  cardButtons.type = 'button';
  cardButtons.innerHTML = cardInfo[i].projectButton;

  cardButtons.addEventListener('click', () => {
    const popupWindow = document.querySelector('.popupwindow');

    // popupWindow.classList.add('popupwindow');
    popupWindow.innerHTML = `
<div class="popupbody">
<div class="popup-imgs">
<img src="./tools/pop-up/Disabled.png" alt="close buton" class="popclosebtn">
<img src="./tools/pop-up/Snapshoot Portfolio mobile.png" alt="popmobile-img"class="popImg-Mobile">
<img src="./tools/pop-up/Snapshoot Portfolio.png" alt="popdesktop-img" class="popImg-Desktop">
</div>
<div class="popup-desktop">
<h2 class="poptitle">Keeping track of hundreds of
  components</h2>
<div class="popup-desktopbtns">
  <button class="live"><a href="https://ijosue16.github.io/">See Live </a><span class=><img src="./tools/pop-up/see live icon.svg" alt=""></span></button>
  <button class="live"><a href="https://github.com/ijosue16/Mobile-portofolio">See Source </a><span class=><img src="./tools/pop-up/Vector.png" alt=""></span></button>
</div>
</div>
<div class="popup-techs">
<ul class="mobile-techs">
<li class="pop-techs">Ruby on rails</li>
<li class="pop-techs">css</li>
<li class="pop-techs">JavScript</li>
</ul>

<ul class="desktop-techs">
<li class="pop-techs">Codekit</li>
<li class="pop-techs">GitHub</li>
<li class="pop-techs">Javasript</li>
<li class="pop-techs">Bootstrap</li>
<li class="pop-techs">Terminal</li>
<li class="pop-techs">Codepen</li>
</ul>
</div>
<p class="popup-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>

<div class="popup-mobilebtns">
<button class="live"><a href="https://ijosue16.github.io/">See Live </a><span class=""><img src="./tools/pop-up/see live icon.svg" alt=""></span></button>
<button class="live"><a href="https://github.com/ijosue16/Mobile-portofolio">See Source </a><span class=""><img src="./tools/pop-up/Vector.png" alt=""></span></button>
</div>
</div>
`;
  });

  //

  cardTechnology.append(cardLanguage1, cardLanguage2, cardLanguage3, cardLanguage4);
  placeHolder.append(cardHeader, cardTechnology, cardButtons);
  cardTempalte.appendChild(placeHolder);
  cardContainer.appendChild(cardTempalte);
  workSection.appendChild(cardContainer);
}

const emailAddress = document.querySelector('.email');
const form = document.querySelector('.form');
const names = document.querySelector('.fullname');
const message = document.querySelector('.cmt-area');
const validation = document.createElement('span');
validation.classList.add('errorMessage');

form.addEventListener('submit', (e) => {
  form.appendChild(validation);
  const messages = [];
  const regex = /^([a-z0-9_-]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (names.value.length === 0 || names.value.length === null) {
    messages.push('⛔ Name is Required');
    validation.innerHTML = messages.join(',');
  } else if (names.value.length >= 50) {
    messages.push('⛔ Name is too long');
    validation.innerHTML = messages.join(',');
  } else if (regex.test(emailAddress.value) === false) {
    messages.push('⛔ Use Lowercase alphabets for Email');
    validation.innerHTML = messages.join(',');
  } else if (emailAddress.value.length >= 100) {
    messages.push('⛔ Email Address is too long');
    validation.innerHTML = messages.join(',');
  } else if (message.value.length === 0 || message.value.length === null) {
    messages.push('⛔ Text area is Required');
    validation.innerHTML = messages.join(',');
  } else {
    validation.innerHTML = '';
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
  names.value = localInfo.fullName;
  emailAddress.value = localInfo.email;
  message.value = localInfo.comment;
} else {
  form.addEventListener('submit', () => {
    localInfo.fullName = names.value;
    localInfo.email = emailAddress.value;
    localInfo.comment = message.value;
    localStorage.setItem('localInfo', JSON.stringify(localInfo));
  });
}