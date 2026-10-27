(function () {
  // Mobile menu toggle
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.querySelector(".menu-toggle");
  if (sidebar && toggle) {
    toggle.addEventListener("click", function () {
      var open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Logo fallback: show the institution name when the image file is missing
  document.querySelectorAll(".logo img").forEach(function (img) {
    function fail() {
      img.parentNode.classList.add("missing");
      img.remove();
    }
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  // Source list filter
  var search = document.getElementById("source-search");
  if (search) {
    var items = document.querySelectorAll(".source-list li");
    var empty = document.getElementById("source-empty");
    var count = document.getElementById("source-count");
    search.addEventListener("input", function () {
      var term = search.value.trim().toLowerCase();
      var visible = 0;
      items.forEach(function (li) {
        var match = li.textContent.toLowerCase().indexOf(term) !== -1;
        li.hidden = !match;
        if (match) visible++;
      });
      empty.hidden = visible !== 0;
      count.textContent = visible;
    });
  }
})();
