---
title: Logika Matematika Biner
date: 2025-04-06
draft: true
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

Proposisi sering menggunakan simbol $p$, $q$, $r$, $s$, dan seterusnya.

## Operasi Logika

1. Negasi ($\neg$): Menyatakan bahwa proposisi tidak benar. Jika p adalah benar,
   maka $\neg p$ adalah salah.
2. Konjungsi ($\land$): Menyatakan "dan" $p \land q$, benar jika dan hanya jika
   $p$ dan $q$ keduanya benar.
3. Disjungsi ($\lor$): Menyatakan "atau" $p \lor q$, benar jika paling tidak
   salah satu dari $p$ atau $q$ benar.
4. Implikasi ($\to$): Menyatakan "jika $\cdots$ maka $\cdots$", $p \to q$ benar 
   kecuali $p$ benar dan $q$ salah.
5. Biimplikasi ($\Leftrightarrow$): Menyatakan "jika dan hanya jika",
   $p \Leftrightarrow q$ benar jika $p$ dan $q$ memiliki nilai kebenaran yang
   sama.

## Tabel Logika

Misalkan $p$ dan $q$ adalah pernyataan, maka:

| $p$ | $\neg p$ |
|---|---|
| T | F |
| F | T |

Kita bisa perluas menjadi:

| $p$ | $q$ | $\neg p$ | $\neg q$ | $p \land q$ | $p \lor q$ |
|---|---|---|---|---|---|
| T | T | F | F | T | T |
| T | F | F | T | F | T |
| F | T | T | F | F | T |
| F | F | T | T | F | F |

Kemudian bisa diperluas:

|$\neg (p \land q)$|$\neg p \lor \neg q$|$\neg (p \lor q)$|$\neg p \land \neg q$|
|---|---|---|---|
| F | F | F | F |
| T | T | F | F |
| T | T | F | F |
| T | T | T | T |

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
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

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

## Hukum Aljabar Proposisi

1. Hukum identitas:
   1. $p \lor F \iff p$
   2. $p \land T \iff p$
2. Hukum null/dominasi:
   1. $p \land F \iff F$
   2. $p \lor T \iff T$
3. Hukum negasi:
   1. $p \lor \neg p \iff T$
   2. $p \land \neg p \iff F$
4. Hukum idempoten:
   1. $p \lor p \iff p$
   2. $p \land p \iff p$
5. Hukum involusi (negasi ganda): $\neg (\neg p) \iff p$
6. Hukum komutatif:
   1. $p \lor q \iff q \lor p$
   2. $p \land q \iff q \land p$
7. Hukum asosiatif:
   1. $p \lor (q \lor r) \iff (p \lor q) \lor r$
   2. $p \land (q \land r) \iff (p \land q) \land r$
8. Hukum distributif:
   1. $p \lor (q \land r) \iff (p \lor q) \land (p \lor r)$
   2. $p \land (q \lor r) \iff (p \land q) \lor (p \land r)$
9. Hukum De Morgan:
   1. $\neg (p \land q) \iff \neg p \lor \neg q$
   2. $\neg (p \lor q) \iff \neg p \land \neg q$

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
3. $\forall x : x^{2} < 4 \to x < 2$, diketahui bahwa $x^{2} = -2 < x < 2$.
   Pernyataan ini akan salah jika premis benar tetapi konklusi salah.
   Misalkan $x = 3$, maka $3^{2} < 4 \to 3 < 2$ adalah salah. Hal ini
   menunjukkan bahwa $x^{2} < 4$ tidak selalu benar, tetapi jika kita
   menggunakan $x^{2} < 4 \to x < 3$ maka sudah benar. Hal ini menunjukkan
   bahwa $x^{2} < 4$ tidak selalu benar, tetapi jika kita menggunakan
   $x^{2} < 4 \to x < 3$ maka sudah benar.

Eksistensial sulit membuktikan salah, universal sulit membuktikan kebenarannya.

### Nested Kuantor

Kuantor yang bergabung menjadi menjadi suatu pernyataan. Contoh
{{< sidenote 1 >}}Persamaan Umum Limit{{< /sidenote >}}:

$$\lim_{x \to 0} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0,
\ni: \forall x : 0 < | x - a | < \delta \to | f(x) - L | < \epsilon$$

Contoh lain: Teori grup, misalkan $(\mathbb{G}, +)$ sebuah grup, maka:
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
1. Kasus pertama, $m < 0 \implies m \leq -1$, $n^{2} < m \iff m \leq 0 < n$,
   misal $n = -1$ tidak memenuhi.
2. Kasus kedua, $m = 0$, tidak ada $\mathbb{Z}$ yang bisa memenuhi, sama dengan
   kasus pertama.
3. Kasus ketiga, $m > 0 \implies m \geq 1$, $n^{2} < m \iff n < 1 \leq m$, misal
   $n = 0$, maka akan memenuhi.

Pernyataan ini salah karena hanya kondisi ketiga yang memenuhi.

Contoh lain: $\exists m \forall n: n < m^{2}, (m, n \in \mathbb{Z})$. Kita cukup
membuktikan satu nilai, $\forall m \in \mathbb{Z}: m^{2} \geq 0 > -1$, misalnya
$n = -1$, akibatnya $n = -1 < 0 \leq m^{2}, \forall m \in \mathbb{Z}$.

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

## Inferensi

Inferensi atau kesimpulan-kesimpulan yang bisa ditarik dari beberapa proposisi.

### Modus Ponen

Didasarkan pada tautologi $p \land (p \to q) \to q$. Jika $p$ dan $p \to q$
bernilai benar maka $q$ bernilai benar.

$$
\frac{p \to q \quad p}{q}
$$

Pembuktian, jika:

$$p \to q \equiv \neg p \lor q$$

maka:

\\[
\begin{aligned}
p \land (\neg p \lor q) & = (p \land \neg p) \lor (p \land q) \\\\
                        & = q
\end{aligned}
\\]

### Modus Tollen

Didasarkan pada tautologi $[\neg q \land (p \to q)] \to \neg p$.

$$
\frac{p \to q \quad \neg q}{\neg p}
$$

Pembuktian, jika:

$$\neg p \land (p \to q)] \to \neg p$$

maka:

\\[
\begin{aligned}
\neg p \land (p \to q)  & = (\neg q \land \neg p) \lor (\neg q \land q) \\\\
                        & = \neg p
\end{aligned}
\\]

### Silogisme Hipotesis

Didasarkan pada tautologi $[(p \to q) \land (q \to r)] \to (p \to r)$.

$$
\frac{p \to q \quad \neg q \to r}{\neg p \to r}
$$

Pembuktian:
1. $p \to q$ (premis),
2. $q \to r$ (premis),
3. asumsikan p,
4. dari (1) dan (3): $q$ (modus ponens),
5. dari (2) dan (4): $r$ (modus ponens),
6. karena dari asumsi $p$ diperoleh $r$, maka $p \to r$.

Disini muncul anekdot $p$ jika saya lapar maka saya makan, $q$ jika saya makan
maka saya kenyang, sehingga kesimpulannya jika saya lapar maka saya kenyang.

### Silogisme Disjungtif

Didasarkan pada tautologi $[(p \lor q) \land (\neg p)] \to q$.

$$
\frac{p \lor q \quad \neg p}{q}
$$

Pembuktian:
1. $p \lor q$ (premis),
2. $\neg p$ (premis),
3. $q$.

Jika diberikan disjungsi maka minimal sala satunya benar, tetapi jika $\neg p$,
maka satu-satunya yang harus benar adalah $q$.

### Simplifikasi

Didasarkan pada tautologi $[(p \land q) \to p]$.

$$
\frac{p \land q}{p}
$$

Pembuktian:
1. $p \land q$ (premis)
2. $p$

### Penjumlahan

Didasarkan pada tautologi $p \to (p \lor q)$.

$$
\frac{p}{p \lor q}
$$

Pembuktian:
1. $p$ (premis)
2. $p \lor q$ (penjumlahan)

Jika diketahui $p$ benar, maka apapun nilai $q$ pasti benar karena menggunakan
atau.

### Konjungsi

Didasarkan pada tautologi $((p) \land (q)) \to (p \land q)$.

$$
\frac{p \quad q}{p \land q}
$$

Pembuktian:
1. $p$ (premis)
2. $q$ (premis)
3. $p \land q$ (konjungsi)

Jika diandaikan $p$ dan $q$ benar, maka pasti $p \land q$ benar.
