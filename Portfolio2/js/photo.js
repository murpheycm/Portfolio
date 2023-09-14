const Boxlayout = (() => {
    const wrapper = document.body,
      sections = [...document.querySelectorAll(".section")],
      closeButtons = [...document.querySelectorAll(".close-section")],
      expandedClass = "is-expanded",
      hasExpandedClass = "has-expanded-item";
  
    const initEvents = () => {
      sections.forEach((element) => {
        element.addEventListener("click", () => openSection(element));
      });
      closeButtons.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          closeSection(element.parentElement);
        });
      });
    };
  
    const openSection = (element) => {
      if (element.classList.contains(expandedClass)) return;
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
    };
  
    const closeSection = (element) => {
      if (!element.classList.contains(expandedClass)) return;
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
    };
  
    return { init: initEvents };
  })();
  
  Boxlayout.init();