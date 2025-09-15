if (!document.location.href.startsWith('file://')) {
  const bg = document.createElement('div');
  bg.className = "modal-bg";

  const modal = document.createElement('div');
  modal.className = "modal-content";
  modal.innerHTML = `
    <h2>Dashboard Online Demo</h2>
    <p>Welcome to the online demo for Dashboard offline.</p>
    <p>You can change how dashboards open in the dropdown 
      <b>"Open Dashboard Mode"</b>.</p>
    <p>If you enjoy the site and want it offline, download it 
      <a href="https://github.com/Dashboard-Offline/Dashboard/archive/refs/heads/main.zip">here</a>.
    </p>
    <blockquote><i>Right-click (or two-finger tap) → "Save link as..." usually works better.</i></blockquote>
    <button id="closeModal">Close</button>
  `;

  document.body.appendChild(bg);
  document.body.appendChild(modal);

  document.getElementById("closeModal").onclick = () => {
    bg.remove();
    modal.remove();
  };
  bg.onclick = () => {
    bg.remove();
    modal.remove();
  };
}
