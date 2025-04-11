---
title: Logika Matematika Biner
date: 2025-04-06
---

Logika matematika memuat aturan yang disepakati untuk konsistensi.

## Proposisi

Proposisi adalah pernyataan yang memiliki nilai kebenaran, entah benar atau
salah. Pernyataan terbuka berarti pernyataan yang belum memiliki nilai kebenaran
yang pasti, misalnya saja $2 + x = 6$. Nilai kebenaran menggunakan simbol **T**
untuk nilai benar (true) dan **F** untuk nilai salah (false).

> ada jenis logika matematika yang tidak hanya menggunakan **T** dan **F** yaitu
> logika fuzzy

## Tabel Logika

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

## Exclusive Or

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

## Conditional Statement (Jika Maka)

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
2. $\forall x \in \mathbb{R}, x^{2}+1 > 0$, kita tahu bahwa $\forall x \pm x,
   x \cdot x > 0$, maka dapat dibuktikan bahwa $x^{2} + 1 > 0$, untuk setiap $ x
   \in \mathbb{R}$.

Eksistensial sulit membuktikan salah, universal sulit membuktikan kebenarannya.

## Nested Kuantor

Kuantor yang bergabung menjadi menjadi suatu pernyataan. Misalnya
{{< sidenote 1 >}}Persamaan Umum Limit{{< /sidenote >}}:

$$\lim_{x \to 0} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0,
\ni: \forall x : 0 < x - a < \delta \Rightarrow | f(x) - L | < \epsilon$$
