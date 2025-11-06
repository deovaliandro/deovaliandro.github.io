+++
title     = "Seleksi Kondisi"
date      = "2025-10-06"
+++

Ini adalah **Part 2** dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

Seleksi kondisi adalah pilihan atau opsi dengan suatu syarat tertentu. Jika
syarat yang diberikan memenuhi, maka semua statement dalam blok kondisi tersebut
akan dijalankan, namun jika tidak maka semua stetement dalam blok itu dilewati
dan tidak dijalankan. Contohnya, jika nilai sama dengan atau lebih dari 90 maka
mahasiswa tersebut mendapatkan nilai A, jika nilainya adalah dalam rentang 80-90
maka mahasiswa tersebut mendapatkan nilai B, dan seterusnya.

Perbedaan seleksi kondisi dan iterasi adalah pada selesi kondisi, kode akan
terseksekusi sekali saja. Sedangkan pada iterasi, selama kondisi masih memenuhi
maka program akan terus dijalankan.

Python memiliki beberapa seleksi kondisi:

1. if
2. if-else
3. if-elif
4. if-elif-else
5. nested if
6. ternary
7. match

## if

if digunakan pada satu kondisi dan satu cabang yaitu hanya dijalankan ketika
bernilai `True`. Contoh:

```python
if n > 20:
    print("n lebih besar dari 20")
```

## if-else

if-else digunakan pada satu kondisi tetapi dua cabang, jika bernilai `True`
dan jika bernilai `False`. Contoh:

```python
if n > 20:
    print("n lebih besar dari 20")
else:
    print("n lebih kecil dari 20")
```

else digunakan untuk sebagai alternatif jika kondisi if tidak terpenuhi.

## if-elif

multi if atau `else if` yang disingkat `elif` memiliki 2 kondisi dan jumlah
cabang 2 + else (opsional). Contoh:

```python
if n > 20:
    print("n lebih besar dari 20")
elif n > 15:
    print("n lebih besar dari 15")
```

## if-elif-else

if-elif-else adalah gabungan. Jumlah cabangnya adalah n kondisi dengan cabang
n+1. Contoh:

```python
if foo/2 == 2:
    print(2)
elif foo/2 == 4:
    print(4)
elif foo/2 == 6:
    print(6)
else:
    print("Tidak ada")
```

## nested if

nested if berarti if di dalam if, jumlah kondisinya tidak terbatas dan cabangnya
kompleks. Contoh

```python
if foo > 0:
 print(0)
 if foo > 1:
  print(1)
  if foo == 2
   print(2)
```

## ternary

ternary adalah if-else yang ditulis dalam satu baris. Contoh:

```python
umur = 20
status = "Dewasa" if umur >= 18 else "Anak-anak"
```

## match

> Python tidak memiliki switch karena Zen of Python: "There should be one
> --and preferably only one-- obvious way to do it", sehingga if-elif-else sudah
> dianggap sebagai cara yang "obvious" untuk seleksi multi-cabang.

tetapi Python 3.10 memperkenalkan match dan case yang dapat digunakan untuk
tujuan yang sama dengan switch tetapi lebih powerful karena berbasis pattern
matching. Contoh:

```python
match status:
    case 200:
        return "OK"
    case 404:
        return "Not Found"
    case 500:
        return "Server Error"
    case _:
        return "Unknown status"
```

contoh powerfull dari match adalah:

```python
def process_data(data):
    match data:
        case []:
            print("List kosong")
        case [x]:
            print(f"List dengan satu elemen: {x}")
        case [x, y, *rest]:
            print(f"List dengan minimal 2 elemen: {x}, {y}")
        case {"name": name, "age": age}:
            print(f"User: {name}, usia: {age}")
        case _:
            print("Format tidak dikenali")

process_data([1, 2, 3, 4]) # List dengan minimal 2 elemen
process_data({"name": "Alice", "age": 25}) # User: Alice, usia: 25
```
