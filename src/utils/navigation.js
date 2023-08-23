export const scrollToSection = (section) => {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: "smooth" });
};
