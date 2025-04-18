+++
title   = "Aritmatika Polinom di dalam Medan Galois $GF(2^n)$"
date    = "2022-02-12"
+++


Galois Field (GF) yang banyak digunakan dalam kriptografi adalah $GF(2^n)$ karena setiap baris text direpresentasikan
sebagai barisan bit $0$ dan $1$ sepanjang $n$ bit.

Semua elemen dalam $GF(2^n)$ dinyatakan dalam bentuk polinom.

Bentuk umum polinom berderajat n adalah:

$$f(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \cdots + a_{2}x^{2} + a_{1}x + a_{0}$$

$a_{n}, a_{n-1}, a_{0}$ adalah koefisien-koefisien polinom, $n$ adalah derajat polinom.

$GF(2^{n})$ memiliki $2^n$ elemen, setiap elemen direpresentasikan sebagai polinom berderajat $n-1$ atau kurang, dengan
koefisien-koefisiennya adalah elemen $\{0, 1\}$:

$$GF(p^{n}) = \{a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + \cdots + a_{1}x + a_{0} | a_{i} \in \{0, 1\}\}$$

Contohnya:
$GF(2^{3}) = \{a_{2}x^{2} + a_{1}x^{1} + a_{0} | a_{i} \in \{0, 1\}\}$, memiliki derajat polinom $\geq 2$.

Di dalam $GF(2^{3})$, terdapat $2^{3} = 8$ polinom, yaitu:

- $0 \to 000$
- $1 \to 001$
- $x \to 010$
- $x+1 \to 011$
- $x^{2} \to 100$
- $x^{2}+1 \to 101$
- $x^{2}+x \to 110$
- $x^{2}+x+1 \to 111$

Operasi penjumlahan dan perkalian dilakukan dengan menerapkan penjumlahan koefisien-koefisiennya dalam $\bmod 2$.

Misalnya $a=(a_{n-1} \cdots a_{1}a_{0})$ dan $b=(b_{n-1} \cdots b_{1}b_{0})$, $a, b \in GF(2^n)$, maka:

1. penjumlahan $a + b = c = (c_{n-1} \cdots c_{1}c_{0}), c_{i} = (a_{i} + b_{i}) \bmod 2, c \in GF(2^n)$,
2. perkalian $a \times b = c (c_{n-1} \cdots c_{1}c_{0})$ dimana $c$ adalah sisa bagi dari polinom $a(x) \cdot b(x)$
   dengan _irreducible polynomial_ $f(x)$ derajat $n$, $c \in GF(2^n)$.

Contoh: $a = x^{3} + x^{2} + 1$, $b = x^{2} + x$, $a, b \in GF(2^{4})$,

\\[
\begin{aligned}
a+b &= x^{3} + x^{2} + 1 + x^{2} + x \bmod 2 \\\\
    &= x^{3} + 2x^{2} + x + 1 \bmod 2 \\\\
    &= x^{3} + x + 1
\end{aligned}
\\]

Operasi penjumlahan polinom $GF(p^2) \equiv$ operasi xor $(\oplus)$, misalnya:

\\[
\begin{aligned}
a \oplus b & = x^{3} + x^{2} + 1 + x^{2} + x \bmod 2 \\\\
           & = 1101 \oplus 0110 \\\\
           & = 1011 \equiv x^{3} + x + 1
\end{aligned}
\\]

Operasi perkalian sama persis dengan perkalian baisa, kecuali menghasilkan polinom dengan derajat $\geq n - 1$,

misalnya, $a = x^{2} + x, b = x + 1, a, b \in GF(2^{4})$,

\\[
\begin{aligned}
a \cdot b & = (x^{2} + x)(x + 1) \bmod 2 \\\\
        & = (x^{2} \cdot x) + (x^{2} \cdot 1) + (x \cdot x) + (x \cdot 1) \bmod 2 \\\\
        & = x^{3} + x^{2} + + x^{2} + x \bmod 2 \\\\
        & = x^{3} + 2(x^{2}) + x \bmod 2 \\\\
        & = x^{3} + x
\end{aligned}
\\]

Jika menghasilkan polinom $\geq n - 1$, maka direduksi dengan membagi secara modulo terhadap polinom
_irreducible polynomial_ $f(x)$ berderajat $n$. _Irreducible polynomial_ adalah polinom yang tidak dihasilkan dari
perkalian dua buah polinom lain (kecuali $1$ dan dirinya sendiri). Misalnya
$x^{2} + 1 \in  GF(2^{n})$, contoh lainnya
$x^{4} + x + 1$, tetapi $x^{5} + x^{2} + x + 1$ adalah polinom tereduksi karena
$x^{5} + x^{2} + x + 1 = (x^{5} + x^{2} + 1)(x^{2} + 1)$.

Misalnya $a = 1011, b = 1001, a, b \in GF(2^{4})$,

\\[
\begin{aligned}
a \times b & = (x^{3} + x + 1) \times (x^{3} + 1) \bmod 2 \\\\
           & = x^{6} + x^{4} + x + 1 \\\\
           & = x^{3} + x^{2}
\end{aligned}
\\]

$x^{3} + x^{2}$ dihasilkan dari membagi $x^{6} + x^{4} + x + 1$ dengan _irreducible polynomial_ $f(x) = x^{4} + x + 1.$

$f(x)/g(x)$ memberikan hasil $g(x)$ (quotient) dam sisa $r(x)$ (remainder), yang memenuhi:

\\[f(x) = q(x)g(x) + r(x)\\]
