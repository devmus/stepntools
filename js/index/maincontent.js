const listTools = [
  {
    id: 1,
    project: 'My Tools',
    href: '',
    img: {
      src: '',
      alt: '',
    },
    type: 'heading',
    creator: 'none',
  },
  {
    id: 2,
    project: 'Run logs',
    href: 'html/runlogs.html',
    img: {
      src: 'assets/runlogs.webp',
      alt: 'run-logo',
    },
    type: 'content',
    creator: 'me',
  },
  {
    id: 3,
    project: 'GST vs GMT',
    href: 'html/gstvsgmt.html',
    img: {
      src: 'assets/gstvsgmt.webp',
      alt: 'gstvsgmt-logo',
    },
    type: 'content',
    creator: 'me',
  },
  {
    id: 4,
    project: 'Other Resources',
    href: '',
    img: {
      src: '',
      alt: '',
    },
    type: 'heading',
    creator: 'none',
  },
  {
    id: 5,
    project: 'Shoe builder',
    href: 'https://stepn.guide/',
    img: {
      src: 'assets/stepn.webp',
      alt: 'stepn-logo',
    },
    type: 'content',
    creator: 'other',
  },
  {
    id: 6,
    project: 'GST chart',
    href: 'https://www.coingecko.com/sv/coins/green-satoshi-token',
    img: {
      src: 'assets/charts.webp',
      alt: 'charts-logo',
    },
    type: 'content',
    creator: 'other',
  },
  {
    id: 7,
    project: 'GMT chart',
    href: 'https://www.coingecko.com/sv/coins/stepn',
    img: {
      src: 'assets/charts.webp',
      alt: 'charts-logo',
    },
    type: 'content',
    creator: 'other',
  },
];

const createMainContent = () => {
  const contentContainer = document.querySelector('.content-container');
  const toolsContainer = document.createElement('div');
  toolsContainer.classList.add('main-nav');
  contentContainer.appendChild(toolsContainer);

  listTools.forEach((index) => {
    //Create Content Container
    const toolContainer = document.createElement('div');
    toolsContainer.appendChild(toolContainer);
    //Remove inner white space, make lower case letters
    const projectName = index.project.replace(/\s+/g, '').toLocaleLowerCase();
    toolContainer.classList.add(projectName + 'Container');

    if (index.type === 'heading') {
      const toolHeadingContainer = document.createElement('h2');
      toolContainer.appendChild(toolHeadingContainer);
      const toolText = document.createTextNode(index.project);
      toolHeadingContainer.appendChild(toolText);
      toolHeadingContainer.parentElement.classList.add(index.type);
    } else {
      //Content Link
      const createContentLink = document.createElement('a');
      toolContainer.appendChild(createContentLink);
      createContentLink.setAttribute('href', index.href);
      //Content heading
      const toolHeadingContainer = document.createElement('h2');
      createContentLink.appendChild(toolHeadingContainer);
      const toolText = document.createTextNode(index.project);
      toolHeadingContainer.appendChild(toolText);
      toolHeadingContainer.parentElement.parentElement.classList.add(
        index.type
      );
      //Content img
      toolContainer.style.backgroundImage = 'url(' + index.img.src + ')';
      if (index.creator === 'me') {
        createContentLink.setAttribute('target', '_self');
      } else {
        createContentLink.setAttribute('target', '_blank');
      }
    }
  });
};

export { createMainContent };
