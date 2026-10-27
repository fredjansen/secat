(function () {
  var C = window.CATALOG;
  var NA = "__na__";
  var NUMERIC_ESTIMATES = [13, 14, 18, 19];

  var featureById = {};
  C.categories.forEach(function (c) {
    c.features.forEach(function (f) { featureById[f.id] = f; });
  });

  var state = { search: "", topic: "all", filters: [] };

  var el = {
    search: document.getElementById("f-search"),
    topic: document.getElementById("f-topic"),
    feature: document.getElementById("f-feature"),
    value: document.getElementById("f-value"),
    add: document.getElementById("f-add"),
    chips: document.getElementById("f-chips"),
    clear: document.getElementById("f-clear"),
    count: document.getElementById("f-count"),
    total: document.getElementById("f-total"),
    out: document.getElementById("collections"),
    empty: document.getElementById("collections-empty")
  };

  function make(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function valuesOf(answer) {
    if (answer === null) return [NA];
    return Array.isArray(answer) ? answer.map(String) : [String(answer)];
  }

  function valueLabel(v) {
    return v === NA ? "Not available" : v;
  }

  function formatAnswer(fid, answer) {
    if (answer === null) return { text: "—", muted: true, title: "Not available" };
    if (Array.isArray(answer)) {
      return answer.length ? { text: answer.join(", ") } : { text: "n/a", muted: true, title: "Not applicable" };
    }
    if (typeof answer === "number" && NUMERIC_ESTIMATES.indexOf(fid) !== -1) {
      return { text: "≈ " + answer.toLocaleString("en-US") };
    }
    return { text: String(answer) };
  }

  function matches(source) {
    if (state.search) {
      var hay = (source.name + " " + source.url).toLowerCase();
      if (hay.indexOf(state.search) === -1) return false;
    }
    return state.filters.every(function (f) {
      return valuesOf(source.answers[f.fid]).indexOf(f.value) !== -1;
    });
  }

  function renderTable(category, sources) {
    var section = make("section", "collection");
    var h2 = make("h2", "", category.id + ". " + category.name);
    h2.id = "topic-" + category.id;
    section.appendChild(h2);
    section.appendChild(make("p", "", category.description + "."));

    var wrap = make("div", "table-wrap");
    var table = make("table", "collection-table");
    var thead = make("thead");
    var hr = make("tr");
    hr.appendChild(make("th", "sticky-col", "Source"));
    category.features.forEach(function (f) {
      var th = make("th", "", f.name);
      th.title = f.description;
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    table.appendChild(thead);

    var tbody = make("tbody");
    sources.forEach(function (s) {
      var tr = make("tr");
      var first = make("td", "sticky-col source-cell");
      var link = make("a", "", s.name + " ↗");
      link.href = s.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      var details = make("a", "details-link", "details");
      details.href = "sites/" + s.slug + ".html";
      first.appendChild(link);
      first.appendChild(details);
      tr.appendChild(first);

      category.features.forEach(function (f) {
        var a = formatAnswer(f.id, s.answers[f.id]);
        var td = make("td", a.muted ? "muted" : "", a.text);
        if (a.title) td.title = a.title;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    section.appendChild(wrap);
    return section;
  }

  function renderChips() {
    el.chips.innerHTML = "";
    state.filters.forEach(function (f, i) {
      var chip = make("span", "chip chip-filter", featureById[f.fid].name + ": " + valueLabel(f.value) + " ");
      var remove = make("button", "chip-remove", "×");
      remove.type = "button";
      remove.setAttribute("aria-label", "Remove filter");
      remove.addEventListener("click", function () {
        state.filters.splice(i, 1);
        render();
      });
      chip.appendChild(remove);
      el.chips.appendChild(chip);
    });
    el.clear.hidden = state.filters.length === 0 && !state.search && state.topic === "all";
  }

  function render() {
    var sources = C.sources.filter(matches);
    el.out.innerHTML = "";
    if (sources.length) {
      C.categories.forEach(function (c) {
        if (state.topic === "all" || String(c.id) === state.topic) {
          el.out.appendChild(renderTable(c, sources));
        }
      });
    }
    el.empty.hidden = sources.length !== 0;
    el.count.textContent = sources.length;
    renderChips();
  }

  function fillValues() {
    var fid = el.feature.value;
    el.value.innerHTML = "";
    el.value.appendChild(new Option("Choose a value...", ""));
    if (!fid) {
      el.value.disabled = true;
      el.add.disabled = true;
      return;
    }
    var seen = {};
    C.sources.forEach(function (s) {
      valuesOf(s.answers[fid]).forEach(function (v) { seen[v] = (seen[v] || 0) + 1; });
    });
    Object.keys(seen)
      .sort(function (a, b) {
        if (a === NA) return 1;
        if (b === NA) return -1;
        return a.localeCompare(b, undefined, { numeric: true });
      })
      .forEach(function (v) {
        el.value.appendChild(new Option(valueLabel(v) + " (" + seen[v] + ")", v));
      });
    el.value.disabled = false;
    el.add.disabled = true;
  }

  el.search.addEventListener("input", function () {
    state.search = el.search.value.trim().toLowerCase();
    render();
  });
  el.topic.addEventListener("change", function () {
    state.topic = el.topic.value;
    render();
  });
  el.feature.addEventListener("change", fillValues);
  el.value.addEventListener("change", function () {
    el.add.disabled = !el.value.value;
  });
  el.add.addEventListener("click", function () {
    var f = { fid: Number(el.feature.value), value: el.value.value };
    var dup = state.filters.some(function (x) { return x.fid === f.fid && x.value === f.value; });
    if (!dup) state.filters.push(f);
    el.feature.value = "";
    fillValues();
    render();
  });
  el.clear.addEventListener("click", function () {
    state = { search: "", topic: "all", filters: [] };
    el.search.value = "";
    el.topic.value = "all";
    render();
  });

  el.total.textContent = C.sources.length;
  render();
})();
