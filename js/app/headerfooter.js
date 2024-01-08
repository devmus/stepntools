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
  if (title !== 'StepN Tools') {
    heading1.textContent = 'StepN Tools > ' + title;
  } else {
    heading1.textContent = title;
  }

  const updateHeadingSize = () => {
    heading1.removeAttribute('style');
    const headingDefaultSize = parseFloat(
      getComputedStyle(heading1)
        .getPropertyValue('font-size')
        .match(/[\d\.]+/)[0]
    );
    const headingAdjustMultiplier =
      (100 - heading1.textContent.length * 2) / 100;
    const headingNewSize = headingDefaultSize * headingAdjustMultiplier;
    heading1.style.fontSize = `${headingNewSize}px`;
  };
  updateHeadingSize();
  window.addEventListener('resize', updateHeadingSize);
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
