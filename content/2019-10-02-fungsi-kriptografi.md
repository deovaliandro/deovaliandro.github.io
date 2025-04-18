+++
title     = "Fungsi dalam Kriptografi"
date      = "2019-10-02"
+++

Fungsi adalah sebuah relasi khusus pada dua himpunan.

$$f: A \to B$$

yaitu $f$ memetekan $A$ ke $B$.

Fungsi adalah relasis khusus yang memiliki dua hal penting:

1. Tiap elemen di himpunan $A$, yang merupakan domain $f$, harus digunakan oleh prosedur yang mendefinsikan $f$,
2. Jika $(a, b) \in f$ and $(a, c) \in f$, maka $b = c$.

Misalnya: $A = {1, 2, 3}$ ke $B = {u, v, w}$, yang mengasilkan $F = {(1, u), (2, v), (3, w)}$.

Kriptografi menggunakan fungsi dalam proses enkripsi dan dekripsi, yaitu pemetaan plainteks ke cipherteks.

Fungsi enkripsi sebagai: $E(p) = c$, dan fungsi dekripsi sebagai $D(c) = p$. Dan karena fungsi enkripsi dan dekripsi
mengembalikan nilai ke nilai awal, maka $D(E(p)) = p$ haruslah bernilai benar.

## Fungsi Satu-ke-satu

Fungsi $f$ dari set $A$ ke set $B$ adalah fungsi satu-ke-satu/injektif jika tidak ada dua elemen di $A$ yang memiliki
bayangan yang sama.

$$\exists (a, b) \in A \Rightarrow f(a) \ne f(b) \Leftrightarrow a \ne b$$

Jika $(a, b) \in A$, maka $f(a) \ne f(b)$, jika $a \ne b$.

Misalnya, $f = {(1, w), (2, u), (3, v)}$ dari $A = {1, 2, 3}$ ke $B = {u, v, w, x}$.

Contoh lain adalah $f : \mathbb{Z} \to \mathbb{Z}$, dengan $f(x) = x - 1$.

## Fungsi Pada

Fungsi $f$ dari set $A$ ke set $B$ adalah fungsi pada/surjektif jika setiap elemen set $B$ merupakan bayangan dari satu
atau lebih elemen set $A$.

$$\forall b \in B, f(a)$$
