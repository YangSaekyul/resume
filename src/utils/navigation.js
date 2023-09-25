export const scrollToSection = (section) => {
  const element = document.getElementById(section);
  const headerHeight = 80;

  const yOffset = -headerHeight;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
