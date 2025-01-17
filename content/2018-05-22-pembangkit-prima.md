+++
title     = "Pembangkit Bilangan Prima"
date      = "2018-05-22"
+++

Metode untuk pengujian bilangan prima yang paling sederhana adalah brute force, yaitu membagi $n$ dengan
$p \in \mathbb{P}, p \leq \sqrt{n}$.

Jika $n$ habis dibagi dengan salah satu bilangan prima, maka $n$ adalah bilangan komposit, jika tidak bisa dibagi dengan
salah satu bilangan prima maka $n$ adalah bilangan prima. Kompleksitasnya $O(\sqrt{n})$, sehingga tidak efektif.
Terdapat algoritma lain yang lebih efektif,

## Algoritma Lehmann

1. Bangkitkan bilangan acak $p$ sepanjang $n$ angka,
2. uji brute force terhadap $p$ dengan bilangan $p < 256$, ini akan mengeliminasi bilangan prima $80%$,
3. kemudian uji $p$ dengan algoritma Lehmann:
4.  bangkitkan bilangan acak $a, a < p$,
    1. hitung $a^{(p-1)/2} \bmod p$,
    2. jika $a^{(p-1)/2} \not\equiv 1$ atau $-1 \bmod p$, maka $p$ tidak prima,
    3. jika $a^{(p-1)/2} \equiv 1$ atau $-1 \bmod p$, maka peluang $p$ prima adalah $50%$,
5. ulangi pengujian algoritma Lehmann sebanyak $t$ kali (dengan nilai $a$ berbeda), jika hasil hitung langkah kedua
  algoritma Lehmann sama dengan 1 atau -1, tetapi tidak selalu sama dengan 1, maka peluang $p$ adalah prima mempunyai
  kesalahan tidak lebih dari $1/2^{t}$.

Jumlah pengujian yang disarankan adalah lima kali[^1].

## Algoritma Rabin-Miller

Sebelumnya:

1. bangkitkan nilai $p$ yang akan diuji keprimaannya,
2. kemudian hitung nilai $b$, dimana $2^b$ adalah nilai pangkat 2 terbesar yang habis membagi $p - 1$,
3. hitung $m$ sedemikian sehingga $p = 1 + 2^{b} m$.

Kemudian jalankan algoritma ini:

1. ambil bilangan sembarangan $a, a < p$,
2. $j = 0$, hitung $z = a^{m} \bmod p$,
3. jika $z = 1$ atau $z = p - 1$, maka $p$ mungkin prima, jika $z > 0$ dan $z = 1$ maka bukan prima,
4. `j++`, jika $j < b$ dan $z \neq p - 1$, maka $z = z^{2} \bmod p$ dan kembali ke langkah 3,
5. jika $j = b$ dan $z \neq p - 1$, maka $p$ tidak prima.

[^1]: Munir. R. "Kriptografi Edisi Kedua". Informatika: Bandung. 2019.
