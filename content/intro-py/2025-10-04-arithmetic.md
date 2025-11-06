+++
title     = "Aritmetika"
date      = "2025-10-14"
+++

Python dapat berfungsi sebagai kalkulator sederhana, coba saja jalankan python
di terminal[^1] dengan perintah `python` atau `python3`, lalu masukkan:

```bash
>>> 2 + 2
4
>>> 3 * 2 + 10
15
```

Kita bisa juga bisa melakukan operasi aritmetika seperti penjumlahan,
pengurangan, perkalian, pembagian, eksponensial. Misalnya:

```python
print(1 + 2)
print(2 - 2)
print(2 * 3)
print(10 / 2)
print(2 ** 2)
```

Membagi dengan angka 0 (nol) akan dianggap error dalam Python:

```python
>>> 11 / 0
Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

kita juga bisa menggabungkan operasi aritmetika dengan menggunakan kurung `()`,
misalnya:

```python
print(((1 + 3) * (9 - 2) / 2) ** 2)
```

## Operator presedence

Di dalam Python, urutan pengerjaan suatu proses mengikuti aturan PEMDAS:

1. P - Parentheses
2. E - Exponentiation  
3. M - Multiplication
4. D - Division
5. A - Addition
6. S - Subtraction

atau jika lebih rinci:

1. `()` (Parentheses)
2. `**` (Exponentiation)
3. `+x`, `-x`, `~x` (Unary)
4. `*`, `/`, `//`, `%` (Multiplication/Division)
5. `+`, `-` (Addition/Subtraction)
6. `<<`, `>>` (Bitwise Shifts)
7. `&` (Bitwise AND)
8. `^` (Bitwise XOR)
9. `|` (Bitwise OR)
10. `==`, `!=`, `>`, `>=`, `<`, `<=`, is, is not, in, not in (Comparisons)
11. `not` (Boolean NOT)
12. `and` (Boolean AND)
13. `or` (Boolean OR)
14. `=` (Assignment)

Contohnya:

```python
print(15 // 2 % 3)
print(5 + 3 > 2 * 3)
```

## Math

Terdapat modul math dalam Python yang menyediakan fungsi-fungsi matematika.
Beberapa diantaranya adalah:

### akar dan pangkat

Contohnya:

```python
import math

# Akar kuadrat
print(math.sqrt(25))      # 5.0
print(math.sqrt(2))       # 1.4142135623730951

# Pangkat
print(math.pow(2, 3))     # 8.0 (2³)
print(math.pow(4, 0.5))   # 2.0 (akar kuadrat)

# Eksponen
print(math.exp(1))        # 2.718281828459045 (e¹)
```

### pembulatan

Contohnya:

```python
import math

# Akar kuadrat
print(math.sqrt(25))      # 5.0
print(math.sqrt(2))       # 1.4142135623730951

# Pangkat
print(math.pow(2, 3))     # 8.0 (2³)
print(math.pow(4, 0.5))   # 2.0 (akar kuadrat)

# Eksponen
print(math.exp(1))        # 2.718281828459045 (e¹)
```

### nilai abs dan tanda

Contohnya:

```python
import math

# Nilai absolut
print(math.fabs(-7.5))    # 7.5 (selalu return float)
print(abs(-7.5))          # 7.5 (built-in, bisa int/float)

# Tanda bilangan
print(math.copysign(5, -1))   # -5.0 (copy tanda dari -1 ke 5)
```

### trigonometri

```python
import math

# Konversi derajat ↔ radian
print(math.radians(180))  # 3.141592653589793 (π radian)
print(math.degrees(math.pi))  # 180.0

# Fungsi trigonometri dasar
angle = math.radians(30)  # 30 derajat ke radian
print(math.sin(angle))    # 0.49999999999999994 (sin 30° ≈ 0.5)
print(math.cos(angle))    # 0.8660254037844387  (cos 30° ≈ √3/2)
print(math.tan(angle))    # 0.5773502691896257  (tan 30° ≈ 1/√3)

# Fungsi invers trigonometri
print(math.degrees(math.asin(0.5)))   # 30.0 (arcsin)
print(math.degrees(math.acos(0.5)))   # 60.0 (arccos)
print(math.degrees(math.atan(1)))     # 45.0 (arctan)

# Hypotenuse
print(math.hypot(3, 4))   # 5.0 (√(3² + 4²))
```

### logaritma

Contohnya:

```python
import math

# Logaritma natural (basis e)
print(math.log(10))       # 2.302585092994046 (ln(10))

# Logaritma basis 10
print(math.log10(100))    # 2.0 (log₁₀100)

# Logaritma basis 2
print(math.log2(8))       # 3.0 (log₂8)

# Logaritma dengan basis custom
print(math.log(8, 2))     # 3.0 (log₂8)
```

### faktorial dan kombinasi

Contohnya:

```python
import math

# Faktorial
print(math.factorial(5))  # 120 (5! = 5×4×3×2×1)

# Kombinasi (n choose k)
print(math.comb(5, 2))    # 10 (C(5,2) = 5!/(2!×3!))

# Permutasi (n permute k)
print(math.perm(5, 2))    # 20 (P(5,2) = 5!/3!)
```

### konstanta matematik

Contohnya:

```python
import math

print(math.pi)           # 3.141592653589793
print(math.e)            # 2.718281828459045 (bilangan Euler)
print(math.tau)          # 6.283185307179586 (2π)
print(math.inf)          # inf (tak hingga)
print(-math.inf)         # -inf (negatif tak hingga)
print(math.nan)          # nan (bukan angka)
```

### pembagian dan sisa

Contohnya:

```python
import math

# Pembagian dengan hasil integer dan sisa
print(math.divmod(10, 3))    # (3, 1) → 10 = 3*3 + 1

# Sisa pembagian (modulo)
print(math.fmod(10, 3))      # 1.0

# Pembulatan ke integer terdekat
print(math.trunc(3.7))       # 3 (potong bagian desimal)
print(math.trunc(-3.7))      # -3
```

### fungsi spesial

Contohnya:

```python
import math

# Error function
print(math.erf(1))       # 0.8427007929497149

# Gamma function
print(math.gamma(5))     # 24.0

# Fungsi jarak
print(math.dist([0,0], [3,4]))  # 5.0 (jarak Euclidean)
```

## Operator Increment, Decrement dan lainnya.

> Python tidak memiliki operator `--` dan `++` karena alasan Explicit is better
> than implicit (Python mengutamakan kejelasan) untuk menghindari kebingungan
> dengan operator unary `+` dan `-`.

Terdapat opereator addition assignment yaitu `+=`, yaitu menambahkan nilai
dirinya sendiri dengan nilai yang ada di sebelah kanannya. Contohnya:

```python
# Penambahan angka
x = 10
x += 5      # Sama dengan: x = x + 5
print(x)    # 15

# Bisa juga dengan bilangan negatif
y = 20
y += -3     # Sama dengan: y = y + (-3)
print(y)    # 17
```

Hal ini juga berlaku di dalam string, set atau list.

Terdapat juga operator subtraction assignment yaitu `-=` yang mengurangi nilai
dirinya sendiri dengan angka yang di sebelah kanan. Contohnya:

```python
# Pengurangan angka
x = 20
x -= 5      # Sama dengan: x = x - 5
print(x)    # 15

y = 100
y -= 25     # Sama dengan: y = y - 25
print(y)    # 75
```

Hal ini juga berlaku di dalam string, set atau list.

Semua operator juga bisa dilakukan hal yang sama, misalnya perkalian, pembagian,
eksponen, modulus, or dll.

[^1]: Windows 11 sudah menggunakan "Terminal" juga 🙂‍↔️.
