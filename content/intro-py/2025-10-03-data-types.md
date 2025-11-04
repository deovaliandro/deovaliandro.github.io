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
