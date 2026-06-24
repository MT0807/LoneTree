const groveLoader = document.querySelector(".loader");
const groveTransition = document.querySelector(".grove-transition");
const groveBack = document.querySelector(".grove-back");
const groveForm = document.querySelector(".grove-form");
const groveGrid = document.querySelector(".grove-grid");
const groveBoard = document.querySelector(".grove-board");
const groveAuthError = document.querySelector("[data-grove-auth-error]");
const groveSubmit = groveForm.querySelector(".grove-submit");
const boardSearch = document.querySelector(".board-search input");
const profileButton = document.querySelector(".profile-button");
const profileMenu = document.querySelector(".profile-menu");
const signOutButton = document.querySelector(".sign-out-button");
const brandTabs = Array.from(document.querySelectorAll(".brand-tab"));
const brandSections = Array.from(document.querySelectorAll(".brand-section"));
const GROVE_SESSION_KEY = "lonetree-grove-authenticated";
const GROVE_AUTH_DIGEST = "995f8620d850e4776747d2b354991e13b776151089bf063790ca81a32937408f";

window.setTimeout(() => {
  groveLoader.classList.add("is-gone");
  document.body.classList.add("is-ready");
}, 500);

window.setTimeout(() => groveLoader.remove(), 1150);

const showBoard = (focusSearch = true) => {
  document.body.classList.add("is-board");
  groveGrid.hidden = true;
  groveBoard.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
  if (focusSearch) boardSearch.focus();
};

const showLogin = () => {
  document.body.classList.remove("is-board");
  groveBoard.hidden = true;
  groveGrid.hidden = false;
};

const digestCredential = async (value) => {
  const bytes = new TextEncoder().encode(value);
  const hash = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
};

const setAuthError = (message = "") => {
  groveAuthError.hidden = !message;
  groveAuthError.textContent = message;
};

groveForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = groveForm.elements.username.value.trim().toLowerCase();
  const password = groveForm.elements.password.value;

  if (!username || !password) {
    setAuthError("请输入账号和密码。");
    return;
  }

  groveSubmit.disabled = true;
  setAuthError();

  try {
    const digest = await digestCredential(`${username}:${password}`);
    if (digest !== GROVE_AUTH_DIGEST) {
      setAuthError("账号或密码不正确。");
      return;
    }

    window.sessionStorage.setItem(GROVE_SESSION_KEY, "true");
    groveForm.reset();
    showBoard();
  } catch {
    setAuthError("当前浏览器无法完成安全校验，请使用最新版浏览器。");
  } finally {
    groveSubmit.disabled = false;
  }
});

if (window.sessionStorage.getItem(GROVE_SESSION_KEY) === "true") {
  showBoard(false);
}

groveBack.addEventListener("click", (event) => {
  event.preventDefault();
  groveTransition.classList.add("is-active");
  window.setTimeout(() => {
    window.location.href = groveBack.href;
  }, 380);
});

const setProfileMenu = (open) => {
  profileButton.setAttribute("aria-expanded", String(open));
  profileMenu.hidden = !open;
};

profileButton.addEventListener("click", () => {
  setProfileMenu(profileMenu.hidden);
});

signOutButton.addEventListener("click", () => {
  window.sessionStorage.removeItem(GROVE_SESSION_KEY);
  showLogin();
  setProfileMenu(false);
  groveForm.reset();
  setAuthError();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-wrap")) {
    setProfileMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setProfileMenu(false);
  }
});

const filterBoards = () => {
  const activeBrand = document.querySelector(".brand-tab.is-active").dataset.brandFilter;
  const query = boardSearch.value.trim().toLowerCase();

  brandSections.forEach((section) => {
    const brandMatch = activeBrand === "all" || section.dataset.brand === activeBrand;
    const textMatch = !query || section.textContent.toLowerCase().includes(query) || section.dataset.keywords.toLowerCase().includes(query);
    section.classList.toggle("is-hidden", !brandMatch || !textMatch);
  });
};

brandTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    brandTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    filterBoards();
  });
});

boardSearch.addEventListener("input", filterBoards);
