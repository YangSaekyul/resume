export const scrollToSection = (section: string): void => {
  const element = document.getElementById(section);
  const headerHeight = 80;

  if (!element) return;
  const yOffset = -headerHeight;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
