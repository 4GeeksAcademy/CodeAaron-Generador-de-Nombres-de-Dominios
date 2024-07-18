import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateDomain();
};

const generateDomain = () => {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extencions = [".com", ".net", ".us", ".io", ".etc"];
  let spacing = "<br>";

  let domain = "";

  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        extencions.forEach(extencion => {
          domain += pronoun + adj + noun + extencion + spacing;
        });
      });
    });
  });

  return domain;
};
