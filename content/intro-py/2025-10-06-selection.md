+++
title     = "Seleksi Kondisi"
date      = "2025-10-06"
+++

Ini adalah Part 2 dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

## Statemen If dan If-Else

If digunakan untuk melakukan perintah ketika suatu kondisi bernilai benar.
If bisa memiliki if lagi di dalamnya. Contohnya:

```python
foo = 2
if foo > 0:
 print(0)
```

Hasilnya:

```bash
0
```

```python
if foo > 0:
 print(0)
 if foo > 1:
  print(1)
  if foo == 2
   print(2)
```

```bash
0
1
2
```

else digunakan untuk sebagai alternatif jika kondisi if tidak terpenuhi, selain
else, dapat juga digunakan multi if atau `else if` yang disingkat `elif` dalam
Python. Contohnya:

```python
foo = 12
if foo/2 == 2:
 print(2)
else:
    print(4)
```

Hasilnya:

```bash
4
```

Contoh lain yang menggunakan else if menggabungkan else:

```python
foo = 12
if foo/2 == 2:
 print(2)
elif foo/2 == 4:
    print(4)
elif foo/2 == 6
 print(6)
else:
    print("Tidak ada")
```

Hasilnya:

```bash
6
```

## Operator while

Operator while bekerja seperti operator if, namun pada operator if hanya bisa
berjalan sekali, sedangkan pada operator while, bisa dijalankan terus menerus
selama kondisi yang diberikan terpenuhi. Contohnya:

```python
i = 1
while i <=5:
    print(i)
    i = i + 1

print("Finished!")
```

Hasilnya:

```bash
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
