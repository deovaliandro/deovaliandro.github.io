function toggleSH() {
  const spans = document.querySelectorAll('.sidenote');
  const isKecil = window.innerWidth < screen.width * 0.5;

  spans.forEach(span => {
    if (isKecil) {
      span.classList.add('layar-kecil');
    } else {
      span.classList.remove('layar-kecil');
    }
  });
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', toggleSH);

// Jalankan juga setiap kali ukuran jendela diubah
window.addEventListener('resize', toggleSH);


function tambahNomorDenganSupSebelumSpan() {
  const paragraf = document.querySelectorAll('p');
  let index = 1;

  paragraf.forEach(p => {
    const span = p.querySelector('span');
    if (span) {
      const sup = document.createElement('sup');
      sup.textContent = index;
      sup.className = 'nomor-catatan';
      p.insertBefore(sup, span);
      index++;
    }
  });
}

document.addEventListener('DOMContentLoaded', tambahNomorDenganSupSebelumSpan);