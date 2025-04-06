+++
title       = "Logika Matematika Biner"
date        = "2025-04-06"
+++

Sekumpulan aturan yang disepakati untuk konsistensi.

Misalkan $p$ dan $q$ adalah pernyataan, maka:

| $p$ | $\neg p$ |
|---|---|
| T | F |
| F | T |

Kita bisa perluas menjadi:

| $p$ | $q$ | $\neg p$ | $\neg q$ | $p \land q$ | $p \lor q$ | $\neg (p \land q)$ | $\neg p \lor \neg q$ | $\neg (p \lor q)$ | $\neg p \land \neg q$ |
|---|---|---|---|---|---|---|---|---|---|
| T | T | F | F | T | T | F | F | F | F |
| T | F | F | T | F | T | T | T | F | F |
| F | T | T | F | F | T | T | T | F | F |
| F | F | T | T | F | F | T | T | T | T |

Dapat kita lihat bahwa $\neg (p \land q) \equiv \neg p \lor \neg q$.

Tautologi adalah kondisi tabel kebenaran semuanya bernilai benar.

Kontradiksi adalah kondisi tabel kebenaran semuanya bernilai salah.

## Kuantor

Suatu pernyataan $p$ yang bergantung pada suatu faktor $x$ kita tulis menjadi
$p(x)$. Hal ini membuat kuantor muncul:

1. kuantor eksistensial, yaitu terdapat atau ada dengan simbol $\exists$,
2. kuantor universal, yaitu setiap atau semua dengan simbol $\forall$.

Untuk kuantor eksistensial, pembuktiannya cukup membuktikan sat bukti sedangkan
untuk kuantor universal, kita harus membuktikan semuanya.

Contoh: $\exists x \in \mathbb{R}, x^{2}+1 > 0$. Misalnya ambil $x = 1$, maka
$1^{2}+1 > 0$ sudah membuktikan terpenuhi dan cukup hanya 1 pembuktian saja.
