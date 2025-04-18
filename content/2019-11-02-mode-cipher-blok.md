+++
title     = "Mode Operasi Cipher Blok"
date      = "2019-11-02"
+++

Beberapa mode cipher block

## Electronic Code Book (ECB)

Tiap blok $P_i$ di enkripsi secara individual dan independen dari blok lain menjadi blok $C_i$. Hal ini memungkinkan
enkripsi blok secara acak. Namun kelemahannya adalah jika terdapat blok yang sama, maka akan menghasilkan blok cipher
yang sama.

## Cipher Block Chaining (CBC)

Blok plaintext $P_i$ di xor dengan $C_i - 1$. Untuk $P_1$, digunakan IV (initialization vector). Hasil tiap blok akan
berbeda walaupun memiliki isi yang sama. Namun, kesalahan pada satu bit akan membuat ciphertext blok berikutnya.

## Cipher Feedback (CFB)

Data di enkripsi dalam unit kecil dari blok, bisa berupa 1-bit, 2-bit, dsb-nya. CFB mengenkirpsi plaintext sebanyak
$p, p \geq n$. CFB membutuhkan queue.

## Output Feedback (OFB)

Mirip dengan CFB kecuali hasil enkripsi diletakkan di elemen bagian paling kiri.

## Counter Mode

Mirip dengan ECB kecuali penambahan blok counter $Co_i$ yang di enkripsi kemudian di xor dengan $P_i$. Nilai counter
harus berbeda untuk tiap bloknya.
