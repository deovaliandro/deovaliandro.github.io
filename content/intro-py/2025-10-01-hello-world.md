+++
title     = "Hello World!"
date      = "2025-10-01"
+++

Python adalah salah satu bahasa pemrograman tingkat tinggi dengan aplikasi pada
banyak area, mulai dari pada pemrograman web, data mining, keamanan, sampai pada
mikrocontroller. Python digunakan juga di banyak tempat seperti Google, NASA,
CIA dan sebagainya.

Python dijalankan menggunakan interpreter, yang artinya tidak perlu di compile
untuk menjalankannya.

Pada saat tulisan ini dibuat, Python sudah mencapai versi `3.14`.

## Instalasi Python

Untuk menginstal Python, pertama-tama dengan mendownload file installernya di
[website](https://www.python.org/) resmi dari Python.

Untuk Windows juga dapat menggunakan perintah

```powershell
winget search Python.Python
```

hasilnya akan memunculkan semua versi Python yang tersedia di katalog winget.
Pilih salah satunya, misalnya `Python.3.13`. Selanjutnya bisa kita install salah
satunya dengan perintah:

```powershell
winget install -e --id Python.Python.3.13 --scope machine
```

Atau bisa juga dengan menggunakan scoop:

```powershell
scoop install python
```

Atau jika menggunakan sistem operasi Linux, maka Python sudah menjadi bawaannya.
Untuk menggunakannya, dapat dengan membuka `cmd` atau `terminal`, lalu
mengetikkan `python` atau `python3`.

## Program pertama

Seperti pada setiap pemrograman, hal pertama yang dilakukan adalah menjalankan
`Hello World`. Untuk menjalankan program pertama, buka terminal atau cmd,
ketikkan `python`, lalu masukkan:

```python
print("Hello World")
```

Lalu, tekan <kbd>Enter</kbd>

```txt
Hello World
```

Yey, berhasil...!!! 😉

Dapat juga dengan membuat program dengan nama `helloworld.py`:

```python
print("Hello, World!")
```

Lalu dapat dijalankan dengan menggunakan perintah:

```bash
py helloworld.py
```

akan menghasilkan:

```txt
Hello, world!
```

Yey, berhasil juga...!!! 😉

## Komentar

Untuk komentar kita bisa menggunakan `#`, misalnya:

```python
# ini komentar
print("hahaha")
```

komentar tidak akan digunakan dalam program, tugasnya hanya sebagai penanda
penjelasan dan kebutuhan dokumentasi.

**Docstrings** (documentation strings) adalah tanda yang mirip komentar, tetapi
digunakan untuk menjelaskan kode yang ada, dan dapat lebih dari 1 baris.
Contohnya:

```python
def shout(word):
    """
    Print a word with an
    exclamation mark following it.
    """
    print(word + "!")


shout("spam")
```

Dan hasilnya:

```txt
spam!
```
