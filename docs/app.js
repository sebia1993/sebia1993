(() => {
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const skillRows = Array.from(document.querySelectorAll('.skill-table tbody tr[data-status]'));

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      skillRows.forEach((row) => {
        const statuses = (row.dataset.status || '').split(/\s+/).filter(Boolean);
        const visible = filter === 'all' || statuses.includes(filter);
        row.classList.toggle('hidden', !visible);
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
