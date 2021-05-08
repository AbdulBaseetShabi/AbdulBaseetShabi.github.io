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

function closeProjects(exception) {
  const projects = document.getElementsByClassName("project");
  for (let i = 0; i < projects.length; i++) {
    const project = projects.item(i);
    const image_and_details = project.children;
    if (exception !== project.getAttribute("position")) {
      image_and_details.item(1).style.display = "none";
      image_and_details.item(1).classList.remove("show-bottom");
    }
  }
}

function scrollToElement(id){
  const element = document.getElementById(id);
  element.scrollIntoView();
}

module.exports = {
  openLinkInNewTab,
  isElementInViewport,
  closeProjects,
  scrollToElement
};
