const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      //   add active to target button
      e.target.classList.add("active");
    });
    //  hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // show article for target button
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
