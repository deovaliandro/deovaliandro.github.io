+++
title     = "Logika Boolean"
date      = "2025-10-15"
+++

Ini adalah Part 1 dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

Boolean adalah tipe data yang memiliki dua nilai, yaitu `TRUE` dan `FALSE`.
Boolean dapat dibuat dengan membandingkan variabel dengan menggunakan simbol:

- `==` untuk sama dengan
- `!=` untuk tidak sama dengan
- `>` untuk lebih besar (untuk int dan float)
- `<` untuk lebih kecil (untuk int dan float)
- `>=` untuk lebih besar atau sama dengan (untuk int dan float)
- `<=` untuk lebih kecil atau sama dengan (untuk int dan float)

```python
>>> my_bool = True
True
>>> 1 == 2
False
>>> "foo" == "foo"
True
```

## Logika Boolean

Logika boolean yaitu `and`, `or` dan `not`.

- `and` akan bernilai benar jika kedua pernyataan benar,
- `or` akan bernilai benar jika salah satu pernyataan benar atau keduanya benar,
- `not` akan memberikan nilai balikan.

Contohnya:

```python
if 3 > 2 and 5 >= 4:
    print(True)
else:
    print(False)
```

Hasilnya:

```bash
True
```

Contoh lainnya:

```python
>>> 1 == 1 and 2 == 2
True
>>> 1 == 1 and 2 == 3
False
>>> 1 != 1 or 2 == 2
True
>>> 2 < 1 or 3 > 6
False
>>> not 1 == 1
False
```

## Operator presedence

Di dalam Python, urutan pengerjaan suatu proses mengikuti aturan PEMDAS:

1. P - Parentheses
2. E - Exponentiation  
3. M - Multiplication
4. D - Division
5. A - Addition
6. S - Subtraction

atau jika lebih rinci:

1. `()` (Parentheses)
2. `**` (Exponentiation)
3. `+x`, `-x`, `~x` (Unary)
4. `*`, `/`, `//`, `%` (Multiplication/Division)
5. `+`, `-` (Addition/Subtraction)
6. `<<`, `>>` (Bitwise Shifts)
7. `&` (Bitwise AND)
8. `^` (Bitwise XOR)
9. `|` (Bitwise OR)
10. `==`, `!=`, `>`, `>=`, `<`, `<=`, is, is not, in, not in (Comparisons)
11. `not` (Boolean NOT)
12. `and` (Boolean AND)
13. `or` (Boolean OR)
14. `=` (Assignment)

Contohnya:

```python
>>> False == False or True
True
>>> False == (False or True)
False
>>> (False == False) or True
True
```
