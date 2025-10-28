---
title: Teori Himpunan
date: 2025-04-11
---

## Pendahuluan

Himpunan adalah kolesi tak terurut dari objek-objek. Tetapi juga ada
$\varnothing$ yaitu himpunan yang anggotanya tidak ada.

Suatu $A$ adalah sebuah himpunan, maka anggotanya adalah $a \in A$ dan relasi
antar anggota hanyalah relasi keanggotaan yaitu $a \in A \oplus a \notin A$.

Set dapat ditulis dengan:

1. enumerasi, setiap anggota dituliskan secara rinci, misanya
   $R = \\{1, 2, 3\\}$, $K = \\{\\{\\}\\}$, $L = \\{1, 2, 3, \cdots, 100\\}$,
2. simbol baku, misalnya $\mathbb{P} = \\{1, 2, 3\\}$,
   $\mathbb{N} = \\{0, 1, 2, 3, \cdots\\}$,
   $\mathbb{Z} = \\{\cdots, -2, -1, 0, 1, 2, \cdots\\}$,
   $\mathbb{Q} = \\{\dfrac{1}{10}, \dfrac{2}{10}, \dfrac{3}{10}, \cdots\\}$,
   $\mathbb{R} = \\{\cdots, -2.1, 1.4, 3.14, \cdots\\}$,
3. notasi, $\\{x | \varphi(x)\\}$, dimana $\varphi(x)$ adalah syarat yang harus
   yang harus dipenuhi agar suatu objek bisa termasuk kedalam himpunan. Misalnya
   $A = \\{x | x \in \mathbb{P}, x < 5\\}$,
4. diagram venn.

Jika $A$, $B$ adalah dua buah himpunan, maka $B \subseteq A$ jika dan hanya jika
berlaku $\forall b \in B$ maka $b \in A$.

Sifat:

1. $A \subseteq A$, bukti: ambil $a \in A$ maka $a \in A$,
2. $A = B \Leftrightarrow A \subseteq B$ dan $B \subseteq A$.

Jika $p: x \in B, q: x \in A, p \Rightarrow q$ atau $B \subseteq A$.

Contoh: jika $x^{2} < 3$ dan $x < 3$, $x \in \mathbb{R}$.

- $A: { x \in \mathbb{R} | x^{2} < 3 } = (\sqrt{-3}, \sqrt{3})$
- $B: { x \in \mathbb{R} | x < 3 } = (-\infty, 3)$

maka $A \subseteq B$.

## Opersi Himpunan

### Gabungan Himpunan

$$A \cup B := {x \in S | x \in A \lor x \in B}$$

### Irisan Himpunan

$$A \cup B := {x \in S | x \in A \land x \in B}$$

$A$ dan $B$ saling lepas jika $A \cap B = \varnothing$.

## Sifat-Sifat

1. $A \subseteq A \cup B$ atau $B \subseteq A \cup B$ (sifat inferensi)
2. $A \cap A \subseteq A$ atau $B \cap A \subseteq B$
3. $\varnothing$ adalah subset dari sembarang himpunan. Pembuktian: jika
   $x \in \varnothing \rightarrow x \in A$ karena
   $x \in \varnothing \rightarrow$ bernilai salah maka $x \in A$ harus benar.

## Produk Kartesius

Misalkan $A, B$ adalah dua buah himpunan:

$$A \times B = {(a, b) | a \in B, b \in B}$$

![Produk Kartesius](/images/produk-kartesius.svg)

$$R = {(a, b) | a \in B, b \in B, a R b}$$

Hal ini sebenarnya adalah fungsi yang memetakan $f: A \to B$ dimana
$a \to b = f(n), (a, f(a))$

$f$ akan injektif jika $x_1, x_2 \in A, y_1, y_2 \in B$

- $f(x_1) = y_1$
- $f(x_2) = y_2$

maka $y_1 = y_2 \to x_1 = x_2$.

Contoh $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x + 1$ adalah fungsi injektif.

Bukti:

1. Bukti 1: misalkan $x_1, x_2 \in \mathbb{R}$ dengan $f(x_1) = f(x_2)$.

   \\[
   \begin{aligned}
   f(x_1) - f(x_2) & = 0 \\\\
   & = 2x_{1} + 1 - 2x_{2} + 1 \\\\
   & = 2(x_1 - x_2)
   \end{aligned}
   \\]

   $$\therefore x_1 - x_2 = 0 \Leftrightarrow x_1 = x_2$$

2. Bukti 2: menggunakan kalkulus.  
   Jika $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$ maka kontraposisinya juga
   $x_1 \neq x_2 \Rightarrow f(x_1) \neq f(x_2)$ juga harus dipenuhi.  
   $f'(x) = 2 > 0$ yang adalah fungsi monoton lain, artinya
   $x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$ terpenuhi.

Contoh $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^{3}$ adalah fungsi injektif.

Bukti: misalkan $x_1, x_2 \in \mathbb{R}$ sedemikian sehingga
$x_1^{3} = x_2^{3}$.

$$
\begin{aligned}
0 &= x_1^{3} = x_2^{3} \\\\
  &= (x_1 - x_2)\left( \left(x_1 + \frac{1}{2} x_2 \right) ^ {2} + \frac{3}{4}x_2^{2} \right)
\end{aligned}
$$
