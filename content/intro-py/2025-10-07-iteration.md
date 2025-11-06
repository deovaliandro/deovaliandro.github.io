+++
title     = "Iterasi"
date      = "2025-10-06"
+++

Ini adalah **Part 3** dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

Iterasi atau perulangan mirip dengan penyeleksi kondisi, perbedaan terdapat pada
selama kondisinya masih memenuhi maka blok yang ada di dalam perulangannya akan
terus dieksekusi.

Pyton memiliki beberapa perintah iterasi:

1. for
2. while

## for

for digunakan untuk mengiterasi elemen dalam suatu sequence (list, tuple,
string, dll). Jumlah iterasinya biasanya diketahui atau tergantung pada panjang
data. Contohnya:

```python
buah = ["apel", "jeruk", "mangga"]
for item in buah:
    print(item)
```

contoh lainnya:

```python
for char in "Python":
    print(char)
```

contoh lainnya:

```python
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):       # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(i)
```

selain dengan menggunakan `in` dan `range()`, for juga dapat menggunakan:

```python
buah = ["apel", "jeruk", "mangga"]
for index, value in enumerate(buah):
    print(f"Index {index}: {value}")

# Dengan start index
for index, value in enumerate(buah, start=1):
    print(f"#{index}: {value}")
```

atau dengan menggunakan `zip`:

```python
nama = ["Alice", "Bob", "Charlie"]
umur = [25, 30, 35]
kota = ["Jakarta", "Surabaya", "Bandung"]

for n, u, k in zip(nama, umur, kota):
    print(f"{n} ({u} tahun) dari {k}")
```

atau dengan dict:

```python
mahasiswa = {"nama": "Budi", "umur": 20, "jurusan": "Informatika"}

# Iterasi keys
for key in mahasiswa:
    print(key)

# Iterasi values
for value in mahasiswa.values():
    print(value)

# Iterasi key-value pairs
for key, value in mahasiswa.items():
    print(f"{key}: {value}")
```

atau bisa juga menggunakan comprehension:

```python
# List Comprehension
kuadrat = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

# Dict Comprehension
square_dict = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}

# Set Comprehension
unik = {x for x in [1,2,2,3,3,4]}  # {1, 2, 3, 4}

# Generator Expression
gen = (x**2 for x in range(5))
for num in gen:
    print(num)
```

dapat juga menggunakan `next` dan `iter`:

```python
angka = [1, 2, 3, 4, 5]
iterator = iter(angka)

print(next(iterator))  # 1
print(next(iterator))  # 2
print(next(iterator))  # 3

# Atau dengan loop
iterator = iter(angka)
while True:
    try:
        item = next(iterator)
        print(item)
    except StopIteration:
        break
```

bisa juga menggunakan fungsi `lambda`:

```python
numbers = [1, 2, 3, 4, 5]
kuadrat = map(lambda x: x**2, numbers)

for result in kuadrat:
    print(result)  # 1, 4, 9, 16, 25
```

## while

while bekerja seperti operator if, namun pada operator if hanya bisa berjalan
sekali, sedangkan pada operator while, bisa dijalankan terus menerus selama
kondisi yang diberikan terpenuhi (True). Jumlah iterasinya tidak harus diketahui
di awal, dan bergantung pada kondisi. Contohnya:

```python
i = 1
while i <=5:
    print(i)
    i = i + 1

print("Finished!")
```

Hasilnya:

```txt
1
2
3
4
5
Finished!
```

salah satu manfaat dari operator while adalah infinity loop,

```python
while 1==1:
   print("In the loop")
```

> Program infinity loop dapat dihentikan dengan mengetikkan
<kbd>CTRL</kbd> + <kbd>C</kbd> atau dengan menutup program
