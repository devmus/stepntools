const createHeaderContent = () => {
  const headerHtml = document.querySelector('.header-container');
  const createLink = document.createElement('a');
  const createToolsIcon = document.createElement('span');
  const heading1 = document.createElement('h1');
  const title = document.title;
  headerHtml.appendChild(createLink);
  headerHtml.appendChild(heading1);
  createLink.appendChild(createToolsIcon);
  createLink.href = '/index.html';
  createToolsIcon.classList.add('material-symbols-outlined');
  createToolsIcon.textContent = 'handyman';
  heading1.textContent = title;
};

const createFooterContent = () => {
  const footerHtml = document.querySelector('.footer-container');
  const footerDiv = document.createElement('div');
  footerHtml.appendChild(footerDiv);
  footerDiv.textContent = '\u00A9 2023 Devmus ';
  footerDiv.classList.add('copy-footer');
};

const initHeaderFooter = () => {
  createHeaderContent();
  createFooterContent();
};

export { initHeaderFooter };
