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

Complex adalah tipe data yang merepresentasikan bilangan kompleks yang terdiri
dari bilangan real dan imajiner.

Bilangan kompleks memiliki bentuk:

$$a + bj$$

dimana:

- $a$ adalah suatu bilangan real,
- $b$ adalah bilangan imajiner
- $j$ adalah unit imajiner ($\sqrt{-1}$)

Contoh:

```python
z = 3 + 4j
print(z)    # (3+4j)
```

atau bisa menggunakan fungsi `complex()`:

```python
z = complex(3, 4)   # 3 + 4j
```

kita bisa mengaksesnya dengan:

```python
z = 3 + 4j

print(z.real)    # 3.0   (bagian real)
print(z.imag)    # 4.0   (bagian imajiner)
print(type(z.real))  # <class 'float'> (selalu float)
```

### String

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

### Boolean

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

Selain itu, boolean juga bisa terbentuk dari hasil operasi logika yaitu
membandingkan variabel dengan menggunakan simbol:

- `==` untuk sama dengan
- `!=` untuk tidak sama dengan
- `>` untuk lebih besar (untuk int dan float)
- `<` untuk lebih kecil (untuk int dan float)
- `>=` untuk lebih besar atau sama dengan (untuk int dan float)
- `<=` untuk lebih kecil atau sama dengan (untuk int dan float)

Contoh:

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

## Collection

Koleksi adalah tipe data yang terdiri dari kumpulan elemen yang tersusun secara
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

```txt
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

```txt
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

```txt
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

```txt
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

```txt
[7, 7, 5, 7, 7]
```

List juga dapat ditambah atau dikalikan:

```python
nums = [1, 2, 3]
print(nums + [4, 5, 6])
print(nums * 3)
```

Hasilnya:

```txt
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

```txt
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

```txt
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

```txt
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

```txt
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

```txt
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

```txt
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

```txt
[1, 2, 3]
```

### Tuple

Tuple mirip dengan list hanya saja sifatnya immutable, artinya ketika sudah
dibuat, maka tidak akan bisa diubah lagi. Contoh:

```python
# Tuple kosong
tuple_kosong = ()
print(tuple_kosong)  # ()

# Tuple dengan satu elemen (perlu koma)
tuple_satu = (5,)
print(tuple_satu)    # (5,)
print(type(tuple_satu))  # <class 'tuple'>

# Tuple multiple elemen
tuple_angka = (1, 2, 3, 4, 5)
tuple_campuran = (1, "hello", 3.14, True)
print(tuple_campuran)  # (1, 'hello', 3.14, True)
```

cara lain adalah tanpa menggunakan kurung:

```python
# Otomatis menjadi tuple
tuple_tanpa_kurung = 1, 2, 3, 4, 5
print(tuple_tanpa_kurung)  # (1, 2, 3, 4, 5)
print(type(tuple_tanpa_kurung))  # <class 'tuple'>

# Multiple assignment sebenarnya tuple packing
a, b, c = 1, 2, 3  # Right side adalah tuple (1, 2, 3)
```

atau dapat juga menggunakan `tuple()`, misalnya:

```python
tuple_dari_list = tuple([1, 2, 3, 4])
```

Operasi yang dapat dilakukan pada tuple antara lain:

#### elemen

mengecek elemen pada indeks ke-n:
Misalnya:

```python
my_tuple = (10, 20, 30, 40, 50)
print(my_tuple[0])
```

#### slicing

memotong

### Range

Range digunakan untuk menyatakan angka dalam suatu batas tertentu. Misalnya
untuk membuat list dengan isi angka 0 - 9, maka kita dapat menggunakan range
sebagai berikut:

```python
numbers = list(range(10))
print(numbers)
```

Maka hasilnya sebagai berikut:

```txt
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

range juga dapat menggunakan 2 parameter, yaitu parameter awal dan akhir.
Misalnya:

```python
numbers = list(range(4,10))
print(numbers)
```

Hasilnya:

```txt
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

```txt
[5, 7, 9, 11, 13, 15, 17, 19]
```

## Binary

Tipe data binary digunakan untuk data raw seperti pada file, jaringan dan binary
protocol.

### bytes

Digunakan pada data biner yang tidak berubah karena sifatnya immutable. Contoh:

```python
data1 = bytes([65, 66, 67])  # ASCII: A, B, C
print(data1)  # Output: b'ABC'
```

atau bisa juga:

```python
data = b'hello'
print(data)  # Output: b'hello'
print(type(data))  # Output: <class 'bytes'>
```

Karena sifatnya immutable, maka operasi yang bisa dilakukan hanya berupa akses
elemen, iterasi, beberapa method seperti `upper()` atau `replace()` yang akan
menghasilkan data baru.

### bytesarray

Digunakan pada data biner yang masih bisa  berubah karena sifatnya mutable.
Contoh:

```python
data1 = bytearray([65, 66, 67])  # A, B, C
print(data1)  # Output: bytearray(b'ABC')
```

atau bisa juga:

```python
data2 = bytearray('hello', 'utf-8')
print(data2)  # Output: bytearray(b'hello')
```

Karena sifatnya mutable, maka bisa dilakukan operasi apa saja, misalnya
modifikasi data, ubah elemen ke-n, tambah data, dll.

### memoryview

--- tambahkan

## None

Tipe data `None` yang mereprentasikan nilai kosong, mirip dengan `null` di
bahasa pemrograman lain. Contoh:

```python
empty_var = None
print(empty_var)  # Output: None
print(type(empty_var))  # Output: <class 'NoneType'>
```

`None` juga adalah return value fungsi yang tidak memiliki return value.

## Tipe data spesial

### frozenset

frozenset adalah set yang bersifat immutable, sehingga tidak bisa diubah setelah
dibuat. Operasi yang dapat dilakukan pada frozenset adalah semua operasi yang
bisa dilakukan pada set kecuali `add()` dan `remove()`.

### enumerate

fungsi enumerate menambah counter ke dalam data yang iterable dan hasilnya
berupa objek enumerate. Contohnya:

```python
fruits = ['apple', 'banana', 'durian']
enumerate(fruits, start=0)
```

kita bisa mengaksesnya dengan:

```python
for index, value in enumerate(fruits):
    print(f"Index: {index}, Value: {value}")
```

### zip

fungsi zip adalah fungsi bawaan python untuk menggabungkan beberapa data
iterable menjadi satu iterable tuple. Contohnya:

```python
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]

zipped = zip(names, ages)
print(list(zipped))     # [('Alice', 25), ('Bob', 30), ('Charlie', 35)]
```

## Konversi Data

### Konversi eksplisit

```python
string_ke_int = int("123")           # 123
int_ke_string = str(123)             # "123"
float_ke_int = int(3.99)             # 3 (truncate)
list_ke_tuple = tuple([1, 2, 3])     # (1, 2, 3)
```

#### Konversi implisit (type coercion)

```python
hasil = 10 + 3.14     # 13.14 (int → float)
hasil = True + 5      # 6 (bool → int, True=1)
```
