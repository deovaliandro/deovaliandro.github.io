+++
title     = "Pengkondisian"
date      = "2025-10-15"
+++

## Boolean

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

Di dalam Python, urutan pengerjaan suatu proses adalah sebagai berikut:

![operator-presendence](https://techvidvan.com/tutorials/wp-content/uploads/2019/12/Python-operator-precedence-1.jpg)

Contohnya:

```python
>>> False == False or True
True
>>> False == (False or True)
False
>>> (False == False) or True
True
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

### break

untuk menghentikan while tanpa mengikuti semua kemungkinan maka digunakan
`break`. Contohnya:

```python
i = 0
while 1==1:
  	print(i)
  	i = i + 1
  	if i >= 5:
    	print("Breaking")
    	break

print("Finished")
```

Hasilnya:

```bash
0
1
2
3
4
Breaking
Finished
```

> Menggunakan perintah break di luar operasi perulangan seperti while akan
> menyebabkan error

### continue

continue digunakan untuk melompati suatu while ketika terdapat kondisi
tertentu. Contohnya:

```python
i = 0
while True:
   	i = i +1
   	if i == 2:
      	print("Skipping 2")
      	continue
   	if i == 5:
      	print("Breaking")
      	break
   	print(i)

print("Finished")
```

Hasilnya:

```bash
1
Skipping 2
3
4
Breaking
Finished
```

> Menggunakan perintah continue di luar operasi perulangan seperti while akan
> menyebabkan error