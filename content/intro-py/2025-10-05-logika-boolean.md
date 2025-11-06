+++
title     = "Logika Boolean"
date      = "2025-10-15"
+++

Ini adalah **Part 1** dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

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

## Operator presedence pada logika boolean

Seperti sudah dibahas sebelumnya, Python mengikuti aturan aturan PEMDAS. Hal ini
juga berlaku pada logika boolean. Contohnya:

```python
>>> False == False or True
True
>>> False == (False or True)
False
>>> (False == False) or True
True
```
