+++
title     = "Tipe Data"
date      = "2025-10-28"
+++

Ada banyak jenis data yang didukung oleh Python. Jenis data penting untuk
menghindari kesalahan dalam pengolahan data. Misalnya saja kita membagi dua
string, maka tentu saja akan error. Beberapa tipe data sederhana antara lain:

## Numerik

### Integer

Integer adalah tipe data angka (..., -2, -1, 0, 1, 2, ...). Contoh:

```python
i = 12
print(i)
print(type(i))
```

akan menghasilkan:

```txt
12
<class 'int'>
```

### Float

Float adalah tipe data desimal. Contohnya:

```python
pi = 3.141592653589793238462643383279502884197169399375105820974944
print(pi)
print(type(pi))
```

akan menghasilkan:

```txt
3.141592653589793
<class 'float'>
```

> Dengan membagi dua tipe data int maka akan menghasilkan tipe data float.

### Complex

## String

String adalah tipe data yang menampung karakter. Contoh:

```python
name = "John Doe"
print(name)
print(type(name))
```

akan menghasilkan:

```txt
John Doe
<class 'str'>
```

Ada beberapa karakter yang tidak dapat langsung di ketik pada string, misalnya
tanda <kbd>'</kbd> , untuk mengatasinya, digunakan tanda <kbd>\\</kbd>,
contohnya:

```python
"Ini tanda petik \"."
```

contoh lain adalah tanda `\n` (_newline_) untuk membuat baris baru dan karakter
<kbd>\\</kbd> (_backslash_) itu sendiri.

Menggunakan karakter tiga petik (<kbd>"""</kbd>) pada string, akan membuat
teks di print mengikuti penulisannya. Misalnya:

```python
print("""Halo,
         nama saya Deo""")
```

menghasilkan:

```txt
Halo,
nama saya Deo
```

salah satu operasi pada string adalah `len()` untuk mengetahui panjang string
tersebut. Contoh:

```python
name = "John Doe"
print(len(name))
```

akan menghasilkan:

```txt
8
```

## Boolean

Boolean adalah tipe data logika yang hanya mempunyai dua nilai, antara True atau
False. Contohnya:

```python
is_even = True
print(is_even)
print(type(is_even))
```

akan menghasilkan:

```txt
True
<class 'bool'>
```

Selain itu, boolean juga bisa terbentuk dari hasil operasi logika. Contoh:

```python
is_odd = not is_even
n = (2 > 4)
print(is_odd)
print(n)
print(type(is_odd))
print(type(n))
```

akan menghasilkan:

```txt
False
False
<class 'bool'>
<class 'bool'>
```

## Urutan/Sequence

Sequence adalah tipe data yang terdiri dari kumpulan elemen yang tersusun secara
berurutan dan dapat diakses melalui index.

### List

List adalah tipe data dalam Python yang berfungsi untuk menapung data dalam
bentuk indeks. List dibuat dengan menggunakan tanda kurung kotak (`[]`) dan
setiap item dipisahkan dengan tanda koma (,).

> Indeks list dimulai dari angka 0 (nol)

Contohnya:

```python
countrys = ["Indonesia", "Malaysia", "Singapura", "Thailand"]
print(countrys[0])
print(countrys[1])
print(countrys[2])
```

Hasilnya:

```bash
Indonesia
Malaysia
Singapura
```

List kosong dapat dibuat dengan menggunakan:

```python
empty_list = []
print(empty_list)
```

Hasilnya:

```bash
[]
```

List dapat menampung berbagai tipe data, misalnya int, string dan float dalam
satu list.

> List dapat menampung list lainnya

Contohnya:

```python
number = 3
things = ["string", 0, [1, 2, number], 4.56]
print(things[1])
print(things[2])
print(things[2][2])
```

Hasilnya:

```bash
0
[1, 2, 3]
3
```

> Membuat indeks di luar batas jumlah indeks akan menyebabkan error

Beberapa tipe data seperti string dapat dijadikan list, yang isinya adalah
setiap karakter dalam string. Namun untuk int dan float, akan menyebabkan
`TypeError`. Contohnya:

```python
str = "Hello world!"
print(str[6])
```

Hasilnya:

```bash
w
```

#### Operasi dalam list

Item di dalam indeks list dapat di ubah. Misalnya:

```python
nums = [7, 7, 7, 7, 7]
nums[2] = 5
print(nums)
```

Hasilnya:

```bash
[7, 7, 5, 7, 7]
```

List juga dapat ditambah atau dikalikan:

```python
nums = [1, 2, 3]
print(nums + [4, 5, 6])
print(nums * 3)
```

Hasilnya:

```bash
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Untuk mengecek suatu item di dalam suatu list, digunakan perintah `in` dan
hasilnya True jika tidak ada dan False jika tidak ada. Contohnya:

```python
foo = ["Aku", "Kamu", "Dia", "Mereka"]
print("Kamu" in foo)
print("Deo" in foo)
```

Hasilnya:

```bash
True
False
```

Untuk mengecek apakah suatu item tidak ada dalam list, maka digunakan `not`.
Misalnya:

```python
foo = ["Aku", "Kamu", "Dia", "Mereka"]
print("Kamu" not in foo)
print(not "Deo" in foo)
```

Hasilnya:

```bash
False
True
```

Untuk menghitung jumlah indeks dalam list, digunakan perintah `len()`.
Contohnya:

```pyhton
nums = [1, 3, 5, 2, 4]
print(len(nums))
```

Hasilnya:

```bash
5
```

Untuk mencari indeks suatu item di dalam list, dapat digunakan `.index()`.
Contohnya:

```python
letters = ['p', 'q', 'r', 's', 'p', 'u']
print(letters.index('r'))
print(letters.index('p'))
print(letters.index('z'))
```

Hasilnya:

```bash
2
0
ValueError: 'z' is not in list
```

> Mencari indeks item yang tidak ada dalam list akan menyebabkan error

Untuk menambahkan item ke dalam list, maka kita dapat menggunakan perintah:

##### append

perintah `append` digunakan untuk menambahkan item ke indeks terakhir. Misalnya:

```python
nums = [1, 2, 3]
nums.append(4)
print(nums)
```

Hasilnya:

```bash
[1, 2, 3, 4]
```

> append menggunakan `.` (dot) karena merupakan method

##### insert

perintah `insert` digunakan untuk menambahkan item ke indeks yang ditentukan.
Misalnya:

```python
words = ["Python", "fun"]
index = 1
words.insert(index, "is")
print(words)
```

Hasilnya:

```bash
['Python', 'is', 'fun']
```

##### remove

perintah `remove` digunakan untuk menghapus item. Contoh:

```python
num = [1, 2, 3, 4]
num.remove(4)

print(num)
```

hasilnya:

```bash
[1, 2, 3]
```

### Range

Range digunakan untuk menyatakan angka dalam suatu batas tertentu. Misalnya
untuk membuat list dengan isi angka 0 - 9, maka kita dapat menggunakan range
sebagai berikut:

```python
numbers = list(range(10))
print(numbers)
```

Maka hasilnya sebagai berikut:

```bash
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

range juga dapat menggunakan 2 parameter, yaitu parameter awal dan akhir.
Misalnya:

```python
numbers = list(range(4,10))
print(numbers)
```

Hasilnya:

```bash
[4, 5, 6,7, 8, 9]
```

range juga dapat menggunakan 3 parameter, di mana 2 parameter awal adalah
parameter awal dan akhir sedangkan parameter ke-3 adalah interval/ lompatan.

> Parameter ketiga haruslah integer

Contohnya:

```python
numbers = list(range(5, 20, 2))
print(numbers)
```

Hasilnya:

```bash
[5, 7, 9, 11, 13, 15, 17, 19]
```

## Slicing

--- Perlu ditambahkan