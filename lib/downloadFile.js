export function downloadFile() {
  // Create a link and set the URL using `createObjectURL`
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href =
    'https://drive.google.com/file/d/1Hq-m2wLRYmnRJuoKoZLg7muoAR-irKz6/view?usp=sharing)';
  link.target = '_blank';
  // It needs to be added to the DOM so it can be clicked
  document.body.appendChild(link);
  link.click();

  // To make this work on Firefox we need to wait
  // a little while before removing it.
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.parentNode.removeChild(link);
  }, 0);
}
