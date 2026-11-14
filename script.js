const languageButtons = document.querySelectorAll("[data-language]");
const translatedElements = document.querySelectorAll("[data-hu][data-en]");

function setLanguage(language) {
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  document.title = document.querySelector("title").textContent;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language;
  document.querySelector(".main-nav").setAttribute(
    "aria-label",
    language === "hu" ? "Fő navigáció" : "Main navigation"
  );
  document.querySelector(".language-switch").setAttribute(
    "aria-label",
    language === "hu" ? "Nyelvválasztó" : "Language selector"
  );
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
