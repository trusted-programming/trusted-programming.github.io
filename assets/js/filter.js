function filterContribs(filter, selector) {
  const elems = Array.prototype.slice.call(document.querySelectorAll(selector));
  elems.forEach(elem => {
    const status = elem.querySelector(".status");
    if (status !== null && status.innerText === filter.value) {
      if (filter.checked) {
        elem.classList.remove("hidden");
      } else {
        elem.classList.add("hidden");
      }
    }
  });
}
