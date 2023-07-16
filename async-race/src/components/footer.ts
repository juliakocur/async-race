export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  document.body.appendChild(footer);

  const footerLinks = document.createElement("div");
  footerLinks.classList.add("footer-links");
  footer.appendChild(footerLinks);

  const linkRS = document.createElement("a");
  linkRS.href = "https://rs.school/js/";
  footerLinks.appendChild(linkRS);

  const imgRs = document.createElement("img");
  imgRs.classList.add("rs");
  imgRs.src = "https://rollingscopes.com/images/logo_rs_text.svg";
  imgRs.alt = "logo_RSSchool";
  linkRS.appendChild(imgRs);

  const linkGit = document.createElement("a");
  linkGit.href = "https://github.com/juliakocur";
  footerLinks.appendChild(linkGit);

  const imgGit = document.createElement("img");
  imgGit.classList.add("git");
  imgGit.src =
    "https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg";
  imgGit.alt = "logo_GITHUB";
  linkGit.appendChild(imgGit);
}
