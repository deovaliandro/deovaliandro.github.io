---
title: Teori Himpunan
date: 2025-04-11
---

## Pendahuluan

Himpunan adalah **koleksi** tak terurut dari objek-objek yang berbeda. Simbol $\varnothing$ menyatakan **himpunan kosong** (tidak memiliki anggota).

**Notasi Keanggotaan**:
- $a \in A$: "$a$ adalah anggota himpunan $A$"
- $a \notin A$: "$a$ bukan anggota himpunan $A$"

## Cara Penulisan Himpunan

1. **Enumerasi** (daftar anggota):  
   - $R = \{1, 2, 3\}$  
   - $K = \{\{\}\}$ (himpunan yang berisi himpunan kosong)  
   - $L = \{1, 2, 3, \dots, 100\}$

2. **Simbol Baku**:  
   - $\mathbb{P} = \{2, 3, 5, 7, \dots\}$ (himpunan bilangan prima)  
   - $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ (bilangan asli)  
   - $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ (bilangan bulat)  
   - $\mathbb{Q} = \frac{a}{b} \mid a,b \in \mathbb{Z},\ b \neq 0$ (bilangan rasional)  
   - $\mathbb{R} = (-\infty, \infty)$ (bilangan real)

3. **Notasi Pembentuk Himpunan**:  
   $$\{x \mid \varphi(x)\}$$  
   Contoh:  
   $$A = \{x \mid x \in \mathbb{N},\ x < 5\} = \{0, 1, 2, 3, 4\}$$

4. **Diagram Venn** (representasi visual).

## Hubungan Antar Himpunan

**Himpunan Bagian ($\subseteq$)**:  
$B \subseteq A$ jika dan hanya jika $\forall b \in B,\ b \in A$.

**Sifat**:
1. **Refleksif**: $A \subseteq A$  
   *Bukti*: Ambil sembarang $a \in A$, maka $a \in A$.
2. **Antisimetri**:  
   $A = B \iff (A \subseteq B) \land (B \subseteq A)$

**Contoh**:
- $A = \{x \in \mathbb{R} \mid x^2 < 3\} = (-\sqrt{3}, \sqrt{3})$  
- $B = \{x \in \mathbb{R} \mid x < 3\} = (-\infty, 3)$  
Maka $A \subseteq B$ karena $\sqrt{3} \approx 1.732 < 3$.

## Operasi Himpunan

### Gabungan (Union)
$$A \cup B = \{x \in S \mid x \in A \lor x \in B\}$$

### Irisan (Intersection)
$$A \cap B = \{x \in S \mid x \in A \land x \in B\}$$

**Himpunan Saling Lepas**:  
$A$ dan $B$ saling lepas jika $A \cap B = \varnothing$.

### Sifat-Sifat Operasi
1. **Inferensi**:  
   $A \subseteq A \cup B$ dan $B \subseteq A \cup B$
2. **Penyerapan**:  
   $A \cap B \subseteq A$ dan $A \cap B \subseteq B$
3. **Himpunan Kosong**:  
   $\varnothing \subseteq A$ untuk sembarang $A$.  
   *Bukti*: Implikasi $x \in \varnothing \implies x \in A$ selalu benar karena anteseden ($x \in \varnothing$) selalu salah.

## Produk Kartesius

**Definisi**:  
$$A \times B = \{(a, b) \mid a \in A,\ b \in B\}$$

**Contoh Visual**:  
![Produk Kartesius](/images/produk-kartesius.svg)  
*Diagram koordinat untuk $A = \{1, 2\},\ B = \{a, b\}$*

## Fungsi Injektif

Fungsi $f: A \to B$ disebut **injektif** jika:  
$$\forall x_1, x_2 \in A,\ f(x_1) = f(x_2) \implies x_1 = x_2$$

**Contoh 1**: $f: \mathbb{R} \to \mathbb{R},\ f(x) = 2x + 1$

*Bukti Aljabar*:  
Misalkan $f(x_1) = f(x_2)$:  
\[
\begin{aligned}
2x_1 + 1 &= 2x_2 + 1 \\
2x_1 &= 2x_2 \\
x_1 &= x_2
\end{aligned}
\]

*Bukti Kalkulus*:  
$f'(x) = 2 > 0$, sehingga $f$ monoton naik. Jika $x_1 \neq x_2$, maka $f(x_1) \neq f(x_2)$.

**Contoh 2**: $f: \mathbb{R} \to \mathbb{R},\ f(x) = x^3$

*Bukti*:  
Misalkan $x_1^3 = x_2^3$:  
\[
\begin{aligned}
0 &= x_1^3 - x_2^3 \\
&= (x_1 - x_2)(x_1^2 + x_1x_2 + x_2^2)
\end{aligned}
\]  
Karena $x_1^2 + x_1x_2 + x_2^2 > 0$ untuk $x_1 \neq x_2$, maka $x_1 = x_2$.
