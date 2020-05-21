// https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
export function getCoords(elem) { // crossbrowser version
  const box = elem.getBoundingClientRect();

  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;
  const { width, height } = box;
  return {
    top, left, width, height
  };
}

export default {};
