function toggleSH() {
  const spans = document.querySelectorAll('.sidenote');
  const isKecil = window.innerWidth < 992;

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
  const paragraf = document.querySelectorAll("p, li");
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

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua heading dari h2 sampai h6
  const headings = document.body.querySelectorAll("h2, h3, h4, h5, h6");
  const counters = [0, 0, 0, 0, 0]; // untuk h2 - h6 (5 level)

  headings.forEach((el) => {
    const level = parseInt(el.tagName.substring(1)) - 2; // h2 jadi index 0
    counters[level]++;

    // Reset semua level di bawahnya
    for (let i = level + 1; i < counters.length; i++) {
      counters[i] = 0;
    }

    // Buat string nomor seperti "1.2.3"
    const numbering = counters.slice(0, level + 1).join(".");

    // Tambahkan nomor ke isi heading
    el.innerHTML = `${numbering}. ${el.innerHTML}`;
  });
});