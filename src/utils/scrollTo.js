/**
 * 특정 섹션으로 부드럽게 스크롤
 * @param {string} elementId - 스크롤할 요소의 ID
 */
export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};