function filterContribs(filter, selector) {
  while (!filter.classList.contains("filters") && filter.tagName !== "BODY") {
    filter = filter.parentElement;
  }
  const values = Array.prototype.slice.call(
    filter.querySelectorAll(".filter input[type='checkbox']")
  ).filter(f => f.checked).map(f => f.value);
  const elems = Array.prototype.slice.call(document.querySelectorAll(selector));
  elems.forEach(elem => {
    const status = elem.querySelector(".status");
    if (status !== null) {
      if (values.includes(status.innerText)) {
        elem.classList.remove("hidden");
      } else {
        elem.classList.add("hidden");
      }
    }
  });
}

(function() {
  const filters = Array.prototype.slice.call(document.querySelectorAll('.filters'));
  filterContribs(filters[0], ".contrib-item");
  filterContribs(filters[1], ".project-item");
}());
