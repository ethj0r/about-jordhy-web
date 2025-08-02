document.addEventListener('DOMContentLoaded', () => {
  // Buka link saat klik card atau tombol detail
  document.querySelectorAll('.card').forEach(card => {
    const url = card.dataset.link;
    // klik area kartu
    card.addEventListener('click', () => {
      window.open(url, '_blank');
    });
    // klik tombol View Details
    const btn = card.querySelector('.btn-detail');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      window.open(url, '_blank');
    });
  });
});
