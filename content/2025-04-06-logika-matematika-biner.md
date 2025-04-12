---
title: Logika Matematika Biner
date: 2025-04-06
---

Tulisan ini adalah catatan saya ketika mengikuti kelas **Logika dan Himpunan**
di [Gradient Academy](https://gradient.academy/).

Logika matematika memuat aturan yang disepakati untuk konsistensi.

## Proposisi

Proposisi adalah pernyataan yang memiliki nilai kebenaran, entah benar atau
salah. Pernyataan terbuka berarti pernyataan yang belum memiliki nilai kebenaran
yang pasti, misalnya saja $2 + x = 6$. Nilai kebenaran menggunakan simbol **T**
untuk nilai benar (true) dan **F** untuk nilai salah (false).

> ada jenis logika matematika yang tidak hanya menggunakan **T** dan **F** yaitu
> logika fuzzy

### Tabel Logika

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

Dapat kita lihat bahwa $\neg (p \land q) \equiv \neg p \lor \neg q$. Kenapa
equivalen, karena nilai kebenarannya sama. $\neg (p \land q)$ artinya jika $p$
salah atau $q$ salah, maka dia bernilai benar. Kapan $p \land q$ bernilai salah?
Nilainya benar jika keduanya benar, tetapi jika salah satunya salah maka akan
bernilai salah. Sehingga menjadi $\neg p \lor \neg q$.

Tautologi adalah kondisi tabel kebenaran semuanya bernilai benar. Kontradiksi
adalah kondisi tabel kebenaran semuanya bernilai salah.

### Exclusive Or

Inclusive or adalah atau yang biasa kita kenal, tetapi exclusive or atau xor
adalah kondisi khusus or yang tidak keduanya. Xor hanya bisa memilih salah
satunya. Contoh xor adalah ketika kita ditawari minum kopi atau teh, kita hanya
bisa memilih salah satunya.

| $p$ | $q$ | $p \oplus q$ |
|---|---|---|
| B | B | S |
| B | S | B |
| S | B | B |
| S | S | S |

### Conditional Statement (Jika Maka)

Menggunakan hipotesis $p$ maka terjadi konklusi $q$.

| $p$ | $q$ | $p \to q$ |
|---|---|---|
| B | B | B |
| B | S | S |
| S | B | B |
| S | S | B |

Misalnya kamu dijanjikan hadiah oleh ayahmu jika kamu naik kelas. Jika kamu naik
kelas dan ayahmu memberi hadiah maka tentu saja, semuanya akan baik-baik saja.
Jika kamu tidak naik kelas dan ayahmu memberimu hadiah pun tidak masalah, atau
jika kamu tidak naik kelas dan ayahmu tidak memberimu hadiah pun wajar, tetapi
jika kamu naik kelas dan ayahmu ingkar janji maka tentu saja itu salah.

Nilai $p \to q \equiv \neg p \lor q$, pembuktiannya:

\\[
\begin{aligned}
p \to q        & \equiv \neg p \lor q  \\\\
\neg (p \to q) & \equiv \neg (\neg p \lor q)  \\\\
               & \equiv \neg (\neg p) \land \neg q  \\\\
               & \equiv p \land \neg q
\end{aligned}
\\]

## Kuantor

Suatu pernyataan $p$ yang bergantung pada suatu faktor $x$ kita tulis menjadi
$p(x)$. Hal ini membuat kuantor muncul:

1. kuantor eksistensial, yaitu terdapat atau ada dengan simbol $\exists$,
2. kuantor universal, yaitu setiap atau semua dengan simbol $\forall$.

Untuk kuantor eksistensial, pembuktiannya cukup membuktikan sat bukti sedangkan
untuk kuantor universal, kita harus membuktikan semuanya.

Contoh:

1. $\exists x \in \mathbb{R}, x^{2}+1 > 0$, misalnya ambil $x = 1$, maka
   $1^{2}+1 > 0$ sudah membuktikan terpenuhi dan cukup hanya 1 pembuktian saja.
2. $\forall x \in \mathbb{R}, x^{2}+1 > 0$, kita tahu bahwa
   $\forall x \pm x, x \cdot x > 0$, maka dapat dibuktikan bahwa
   $x^{2} + 1 > 0$, untuk setiap $ x \in \mathbb{R}$.
3. $\forall x : x^{2} < 4$, maka $x < 2$, kita mengetahui bahwa
   $x^{2} = -2 < x < 2$. Sebenarnya yang menjadi masalah adalah $p$-nya, selama
   $p$ dipenuhi maka q tidak menjadi masalah. Misalnya saja $x = -3$, maka
   $x < 2$ bernilai benar, tetapi ketika disubtitusi ke persamaan $p$,
   $x^{2} < 4 = 9 < 4$ menjadi bernilai salah.

Eksistensial sulit membuktikan salah, universal sulit membuktikan kebenarannya.

### Nested Kuantor

Kuantor yang bergabung menjadi menjadi suatu pernyataan. Contoh
{{< sidenote 1 >}}Persamaan Umum Limit{{< /sidenote >}}:

$$\lim_{x \to 0} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0,
\ni: \forall x : 0 < x - a < \delta \Rightarrow | f(x) - L | < \epsilon$$

Contoh lain: Teori grub, misalkan $(\mathbb{G}, +)$ sebuah grub, maka:
- $\forall a, b, c \in \mathbb{G}$, berlaku $(a + b ) + c = a + (b + c )$;
- $\exists e \in \mathbb{G}$, sehingga $e + a = a \forall a \in \mathbb{G}$;
- $\forall a \in \mathbb{G}, \exists a^{-1} \in \mathbb{G}$, sehingga
  $a + a^{-1} = e$.

Point ke-2 menunjukkan pertama terdapat maka dipastikan yang dibelakangnya akan
memenuhi, sedangkan pada point ke-3 menunjukkan semua pertama, maka terdapat
di belakang akan bergantung pada nilai untuk setiapnya.

Contoh lain: $\forall m \exists n: n^{2} < m, (m, n \in \mathbb{Z})$. Hal ini
menunjukkan bahwa nilai n bergantung dari m, atau n(m).
Penyelesaiannya:
1. Kasus pertama, $m < 0 \implies m \leq -1. n^{2} < m \iff m \leg 0 < n$, misal
   $n = -1$ tidak memenuhi.
2. Kasus kedua, $m = 0$, tidak ada $\mathbb{Z}$ yang bisa memenuhi, sama dengan
   kasus pertama.
3. Kasus ketiga, $m > 0 \implies m \geq 1. n^{2} < m \iff n < 1 \leg m$, misal
   $n = 0$, maka akan memenuhi.

Pernyataan ini salah karena hanya kondisi ketiga yang memenuhi.

Contoh lain: $\exists m \foall n: n < m{2}, (m, n \in \mathbb{Z})$. Kita cukup
membuktikan satu nilai, $\forall m \in \mathbb{Z}: m^{2} \geq 0 > -1$, misalnya
$n = -1$, akibatnya $n = -1 < 0 \leg m^{2}, \forall m \in \mathbb{Z}$.

### Menegasikan Kuantor

Kuantor dinegasikan dengan proposisinya, misalnya $\forall$ dinegasikan
$\exists$, $p$ dinegasikan $\neg p$. Semua dinegasikan ada, bukan tidak ada.
Contoh:
1. $\neg (\forall x: p(x)) \equiv \exists x \to \neg p(x)$.
2. $\neg (\exists x: p(x)) \equiv \forall x \to \neg p(x)$.

Contoh lain: $\forall m, \exists n: n^{2} < m$, bernilai salah karena jika
$m = -1$ maka tidak akan memenuhi. Jika pernyataan ini salah maka negasinya
pastilah bernilai benar.

Negasinya: $\exists m, \forall n: n^{2} \geq m$, kita cukup memilih $m = -1$,
maka sudah memenuhi.

Hal ini memberikan alternatif jika kesulitan untuk membuktikan pernyataan, maka
cukup dinegasikan untuk mendapatkan pembuktian yang lebih mudah.
