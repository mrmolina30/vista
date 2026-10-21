(() => {
  "use strict";

  // Marca una reunión como realizada después de que haya pasado su fecha local.
  // Para cambiar fechas, edita el atributo data-date de cada .meeting-item en index.html.
  const today = new Date();
  const todayLocal = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  document.querySelectorAll(".meeting-item[data-date]").forEach((item) => {
    const meetingDate = item.dataset.date;
    const status = item.querySelector(".meeting-status");
    const completed = meetingDate < todayLocal;

    item.classList.toggle("is-completed", completed);
    if (status) {
      status.textContent = completed ? "Realizada" : "Programada";
    }
    if (completed) {
      item.setAttribute("aria-label", `${item.querySelector("h3")?.textContent || "Reunión"}: realizada`);
    }
  });
})();
