const mainNavContent = [
  {
    id: 1,
    project: 'My Tools',
    href: '',
    img: {
      src: '',
      alt: '',
    },
    type: 'heading',
  },
  {
    id: 2,
    project: 'GST vs GMT',
    href: 'html/assetdash.html',
    img: {
      src: 'assets/assetdash.webp',
      alt: 'assetdash-logo',
    },
    type: 'content',
  },
  {
    id: 3,
    project: 'Other Resources',
    href: '',
    img: {
      src: '',
      alt: '',
    },
    type: 'heading',
  },
  {
    id: 4,
    project: 'Shoe builder',
    href: 'https://stepn.guide/',
    img: {
      src: 'assets/stepn.webp',
      alt: 'stepn-logo',
    },
    type: 'content',
  },
  {
    id: 5,
    project: 'GST chart',
    href: 'https://www.coingecko.com/sv/coins/green-satoshi-token',
    img: {
      src: 'assets/charts.webp',
      alt: 'charts-logo',
    },
    type: 'content',
  },
  {
    id: 6,
    project: 'GMT chart',
    href: 'https://www.coingecko.com/sv/coins/stepn',
    img: {
      src: 'assets/charts.webp',
      alt: 'charts-logo',
    },
    type: 'content',
  },
];

const createMainContent = () => {
  const mainHtml = document.querySelector('.nav-container');
  const createMainNav = document.createElement('nav');
  createMainNav.classList.add('main-nav');
  mainHtml.appendChild(createMainNav);

  mainNavContent.forEach((index) => {
    //Create Content Container
    const createNavContentContainer = document.createElement('div');
    createMainNav.appendChild(createNavContentContainer);
    //Remove inner white space, make lower case letters
    const projectName = index.project.replace(/\s+/g, '').toLocaleLowerCase();
    createNavContentContainer.classList.add(projectName + 'Container');
    if (index.type === 'heading') {
      const createContentHeading = document.createElement('h2');
      createNavContentContainer.appendChild(createContentHeading);
      const createContentText = document.createTextNode(index.project);
      createContentHeading.appendChild(createContentText);
      createContentHeading.parentElement.classList.add(index.type);
    } else {
      //Content Link
      const createContentLink = document.createElement('a');
      createNavContentContainer.appendChild(createContentLink);
      createContentLink.setAttribute('href', index.href);
      createContentLink.setAttribute('target', '_blank');
      //Content heading
      const createContentHeading = document.createElement('h2');
      createContentLink.appendChild(createContentHeading);
      const createContentText = document.createTextNode(index.project);
      createContentHeading.appendChild(createContentText);
      createContentHeading.parentElement.parentElement.classList.add(
        index.type
      );
      //Content img
      createNavContentContainer.style.backgroundImage =
        'url(' + index.img.src + ')';
    }
  });
};

export { createMainContent };
