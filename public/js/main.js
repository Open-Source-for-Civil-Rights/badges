function copyMarkdown(link) {
  const markdown = `[![opensourceforcivilrights](${link})](https://opensourceforcivilrights.com)`
  navigator.clipboard.writeText(markdown).then(function() {
    const snack = document.getElementById("success-snack");
    snack.classList.add("show")
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
  }, function() {
    const snack = document.getElementById("fail-snack");
    snack.classList.add("show")
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 3000);
  });
}

