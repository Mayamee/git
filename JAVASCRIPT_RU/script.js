window.helloGitty = function (name) {
  const container = document.querySelector("#message");
  const elem = document.createElement("div");
  elem.innerHTML = `Hello, ${name}!`;
  container.appendChild(elem);
};
