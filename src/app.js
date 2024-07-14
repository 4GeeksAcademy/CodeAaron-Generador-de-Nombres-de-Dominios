/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateUrl();
};

const generateUrl = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io", "etc."];

  let Url = "";
  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        ext.forEach(e => {
          Url += p + a + n + e + "<br>";
        });
      });
    });
  });

  return Url;
};
