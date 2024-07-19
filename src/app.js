import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#pronouns").innerHTML = printAll(pronouns);
  document.querySelector("#adjs").innerHTML = printAll(adjs);
  document.querySelector("#nouns").innerHTML = printAll(nouns);
  document.querySelector("#extemcions").innerHTML = printAll(extencions);
  document.querySelector("#domains").innerHTML = generateDomain();
};

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extencions = [".com", ".net", ".us", ".io", ".etc"];
let spacing = "<br>";

const generateDomain = () => {
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
function printAll(pronouns) {
  let result = "";
  pronouns.forEach(element => {
    result += element + "<br>";
  });
  return result;
}
