+++
title     = "Iterasi"
date      = "2025-10-06"
+++

Ini adalah Part 3 dari 3 bagian yang membahas mengenai struktur kontrol pada
Python.

Iterasi atau perulangan.

## While

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

