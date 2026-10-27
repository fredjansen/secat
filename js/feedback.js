(function () {
  var REPO = "https://github.com/fredjansen/secat";
  var form = document.getElementById("feedback-form");
  var error = document.getElementById("feedback-error");
  var status = document.getElementById("feedback-status");

  function compose() {
    var data = new FormData(form);
    var type = data.get("type");
    var source = data.get("source");
    var rating = data.get("rating");
    var name = (data.get("name") || "").trim();
    var message = (data.get("message") || "").trim();

    var title = "[Feedback] " + type + (source ? ": " + source : "");
    var body = [
      "**Type:** " + type,
      "**Related source:** " + (source || "None / general"),
      "**Usefulness (1-5):** " + (rating || "not informed"),
      "**Name:** " + (name || "not informed"),
      "",
      "**Message:**",
      message,
      "",
      "_Sent from the feedback page of the catalog._"
    ].join("\n");
    return { title: title, body: body, message: message };
  }

  function validate(f) {
    error.hidden = f.message.length > 0;
    return f.message.length > 0;
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var f = compose();
    if (!validate(f)) return;
    var url = REPO + "/issues/new?title=" + encodeURIComponent(f.title) + "&body=" + encodeURIComponent(f.body);
    window.open(url, "_blank", "noopener");
    status.textContent = "A new GitHub issue was opened in another tab. Review it and select Submit to send your feedback.";
  });

  document.getElementById("feedback-copy").addEventListener("click", function () {
    var f = compose();
    if (!validate(f)) return;
    var text = f.title + "\n\n" + f.body;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        status.textContent = "Feedback copied to the clipboard.";
      }, function () {
        status.textContent = "Could not copy automatically. Select the message text and copy it manually.";
      });
    } else {
      status.textContent = "Could not copy automatically. Select the message text and copy it manually.";
    }
  });
})();
