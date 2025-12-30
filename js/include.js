async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const response = await fetch(file);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error("Error loading component:", file, error);
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");