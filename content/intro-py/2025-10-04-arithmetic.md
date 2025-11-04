+++
title     = "Aritmetika"
date      = "2025-10-14"
+++

## Aritmetika

Python dapat berfungsi sebagai kalkulator sederhana, coba saja jalankan python
di terminal[^1] dengan perintah `python` atau `python3`, lalu masukkan:

```bash
>>> 2 + 2
4
>>> 3 * 2 + 10
15
```

Kita bisa juga bisa melakukan operasi aritmetika seperti penjumlahan,
pengurangan, perkalian, pembagian, eksponensial. Misalnya:

```python
print(1 + 2)
print(2 - 2)
print(2 * 3)
print(10 / 2)
print(2 ** 2)
```

Membagi dengan angka 0 (nol) akan dianggap error dalam Python:

```python
>>> 11 / 0
Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

kita juga bisa menggabungkan operasi aritmetika dengan menggunakan kurung `()`,
misalnya:

```python
print(((1 + 3) * (9 - 2) / 2) ** 2)
```

[^1]: Windows 11 sudah menggunakan "Terminal" juga 🙂‍↔️.
