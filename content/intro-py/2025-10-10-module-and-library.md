+++
title     = "Module dan Library"
date      = "2025-10-10"
+++

## Module

Modul atau module adalah kode yang sudah ditulis dengan tugas tertentu, misalnya
membuat angka random, operasi matematika dan fungsi lainnya.

Untuk menggunakan module, dapat digunakan perintah `import nama_modul`. Dan
untuk menggunakan module yang telah dipanggil, digunakan perintah
`nama_modul.variabel`. Contohnya:

```python
import random

for i in range(5):
    value = random.randint(1, 6)
    print(value)
```

Hasilnya:

```txt
5
3
2
5
1
```

Jika hanya dibutuhkan fungsi tertentu dari sebuah module, maka dapat digunakan
`from nama_modul import var`. Dan `var` dapat digunakan untuk melaksanakan tugas
tertentu. Contohnya, misalnya untuk memanggil `pi` dari module `math`.

```python
from math import pi

print(pi)
```

Hasilnya:

```python
3.141592653589793
```

Untuk memanggil beberapa fungsi tertentu dari module, dapat menggunakan tanda
koma (`,`). Misalnya:

```python
from math import pi, sqrt
```

Menggunakan tanda aterik (\*) dapat memanggil semua fungsi dari sebuah module,
misalnya:

```python
from math import *
```

Mengimpor modul yang tidak ada akan menyebabkan error, misalnya:

```python
import some_module
```

hasilnya:

```txt
ImportError: No module named 'some_module'
```

Fungsi yang di import dapat di beri nama lain dari nama fungsinya, misalnya:

```python
from math import sqrt as square_root
print(square_root(100))
```

Hasilnya:

```txt
10.0
```

## Library/pustaka standar dan pip

Ada tiga jenis module di Python yaitu modul yang anda bisa tulis sendiri, modul
yang diinstall dari sumber eksternal dan modul bawaan (pustaka standar).

Beberapa pustaka standar adalah: **string**, **re**, **datetime**, **math**,
**random**, **os**, **multiprocessing**, **subprocess**, **socket**, **email**,
**json**, **doctest**, **unittest**, **pdb**, **argparse** dan **sys**.

> Pustaka standar adalah salah satu kekuatan dari Python.

Beberapa standar pustaka ditulis dalam bahasa Python sendiri dan beberapa
ditulis dalam bahasa C.

Banyak modul eksternal Python yang disimpan di **Python Package Index (PyPI)**.
Untuk menggunakannya harus diinstall (membutuhkan download).
Untuk menginstallnya, dapat digunakan perintah pada `cmd` dan `terminal`:

```bash
pip install nama_pustaka
```

misalnya:

```bash
pip install pandas
```
