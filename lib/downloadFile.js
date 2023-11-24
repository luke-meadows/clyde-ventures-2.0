export function downloadFile() {
  // Create a link and set the URL using `createObjectURL`
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href =
    'https://go.clydeventures.com/l/1049802/2023-11-24/6sy/1049802/1700843606Zy3Ijgts/Sustainable_Energy_Futures_MBA_brochure.pdf';
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
