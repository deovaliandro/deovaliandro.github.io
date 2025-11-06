+++
title     = "Exception"
date      = "2025-10-11"
+++

Exception adalah informasi yang ditampilkan ketika terdapat error pada sebuah
program. Misalnya error karena membagi bilangan dengan nol (0), atau error
karena nama variabel yang dipanggil tidak ada. Contohnya:

```python
num1 = 7
num2 = 0
print(num1/num2)
```

Akan menghasilkan:

```python
ZeroDivisionError: division by zero
```

## Exception Handling

Untuk menangkap sebuah error, kita dapat menggunakan perintah `try/except`.
Perintah `try` akan dijalankan dan akan langsung pindah ke perintah `except`
ketika terdapat sebuah error. Jika tidak ada error, maka `except` tidak akan
dijalankan. Contohnya:

```python
try:
    num1 = 7
    num2 = 0
    print (num1 / num2)
    print("Done calculation")
except ZeroDivisionError:
    print("An error occurred")
    print("due to zero division")
```

Hasilnya:

```python
An error occurred
due to zero division
```

`try` dapat menggunakan multi `except` atau satu `except` dengan banyak
parameter. Contohnya:

```python
try:
    variable = 10
   print(variable + "hello")
   print(variable / 2)
except ZeroDivisionError:
    print("Divided by zero")
except (ValueError, TypeError):
    print("Error occurred")
```

Hasilnya:

```python
Error occurred
```

Sedangkan `try` tanpa parameter pada `except` akan menangkap semua error yang
masuk ke `except`, misalnya:

```python
try:
    word = "spam"
    print(word / 0)
except:
    print("An error occurred")
```

Hasilnya:

```python
An error occurred
```

## Finally

`finally` digunakan untuk menjalankan perintah tidak peduli terdapat error atau
tidak. Perintah `finally` diletakkan di bawah `try/except`.

> Kode yang ada pada `finally` akan selalu dijalankan.

Contohnya:

```python
try:
    print("Hello")
    print(1 / 0)
except ZeroDivisionError:
    print("Divided by zero")
finally:
    print("This code will run no matter what")
```

Hasilnya:

```python
Hello
Divided by zero
This code will run no matter what
```

Kode di dalam `finally` akan di jalankan terlebih dahulu walaupun terdapat error
yang tidak ditangkap oleh perintah `except`. Misalnya:

```python
try:
    print(1)
    print(10 / 0)
except ZeroDivisionError:
    print(unknown_var)
finally:
   print("This is executed last")
```

Hasilnya:

```python
1
This is executed last

ZeroDivisionError: division by zero
During handling of the above exception, another exception occurred:
NameError: name 'unknown_var' is not defined
```

## Raising exception

`exception` juga bisa dimunculkan dengan menggunakan perintah `raise` namun
harus jelas error yang akan dimunculkan. Contohnya:

```python
print(1)
raise ValueError
print(2)
```

Hasilnya:

```python
1
ValueError
```

atau contoh lain:

```python
raise NameError("Invalid name!")
```

Hasilnya:

```python
NameError: Invalid name!
```

Di dalam `except`,`raise` bisa digunakan tanpa memanggil error yang dimaksud.
Contohnya:

```python
try:
    num = 5 / 0
except:
    print("An error occurred")
    raise
```

Hasilnya:

```python
An error occurred

ZeroDivisionError: division by zero
```

## Assertions

Assertion adalah salah satu cara mengecek error yang akan dimunculkan ketika
program selesai dijalankan. Jika testing yang diberikan bernilai `false` maka
akan exception-nya akan muncul. Contohnya:

```python
print(1)
assert 2 + 2 == 4
print(2)
assert 1 + 1 == 3
print(3)
```

Hasilnya:

```python
1
2
AssertionError
```

> Assertion biasanya digunakan pada pengecekan input dan output sebuah fungsi.

Assertion juga bisa menerima parameter kedua yaitu output yang akan ditampilkan
ketika error terjadi. Contohnya:

```python
temp = -10
assert (temp >= 0), "Colder than absolute zero!"
```

Hasilnya:

```python
AssertionError: Colder than absolute zero!
```
