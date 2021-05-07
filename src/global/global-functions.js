function openLinkInNewTab(link) {
  window.open(link, "_blank");
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

module.exports = {
  openLinkInNewTab,
  isElementInViewport
};
