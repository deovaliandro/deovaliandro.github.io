+++
title     = "Aritmetika dan Variabel"
date      = "2025-10-14"
+++

## Aritmetika

Kita bisa juga bisa melakukan operasi aritmetika seperti penjumlahan,
pengurangan, perkalian, pembagian, eksponensial. Misalnya:

```python
print(1 + 2)
print(2 - 2)
print(2 * 3)
print(10 / 2)
print(2 ** 2)
```

kita juga bisa menggabungkan operasi aritmetika dengan menggunakan kurung `()`,
misalnya:

```python
print(((1 + 3) * (9 - 2) / 2) ** 2)
```

## Komentar

Untuk komentar kita bisa menggunakan `#`, misalnya:

```python
# ini komentar
print("hahaha")
```

komentar tidak akan digunakan dalam program, tugasnya hanya sebagai penanda
penjelasan dan kebutuhan dokumentasi.

## Variabel

### Membuat variabel

Variabel di python adalah dynamic-typing, artinya tidak perlu menjelaskan secara
eksplisit tipe datanya, berbeda dengan Java dan kawannya. Kita cukup memasukkan
datanya maka python akan menentukan tipe datanya.

Python menggunakan aturan `name = value`. Contohnya:

```python
nama = "John Doe"
```

maka `nama` akan menggunakan tipe data string.

Secara umum, aturan penamaan variabel menurut
[PEP-8](https://peps.python.org/pep-0008/) adalah:

1. tidak boleh ada spasi,
2. hanya boleh karakter, angka dan underscore (`_`),
3. tidak boleh berawalan angka.

Untuk tipe data lain, dapat langsung dibuat, misalnya:

```python
n = 12
b = True
f = 12.3
```

### Manipulasi variabel

Isi variabel dapat berubah dengan cara kita overriding dari nilai sebelumnya.
Contoh:

```python
n = 12
n = 13

print(n)
```

Hasilnya akan menampilkan 13 karena isi terakhir adalah angka 13.

Variabel tidak dapat langsung diakses jika terbatas hanya pada fungsi tertentu.
Misalnya:

```python
def my_func():
  local_var = 12
  print(local_var)

print(local_var)
```

akan menghasilkan:

```bash
NameError: name 'local_var' is not defined
```

Hal ini karena `local_var` terdefinisi di dalam fungsi `my_func`. Hal ini
berkaitan dengan lifetime.

Kita juga dapat menggunakan variabel sebagai nilai variabel lain, misalnya:

```python
a = 12
b = 13
c = a + b
```
