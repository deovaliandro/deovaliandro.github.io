+++
title     = "Tahun Kabisat"
date      = "2018-06-13"
+++

> "Although the Genius Myth of the solo software developer still persists, the truth is that no one really goes it
> alone."
> -- Software Engineering at Google

Tahun kabisat (bahasa Inggris: Leap year) merupakan tahun yang mengalami penambahan satu hari dengan tujuan untuk
menyesuaikan penanggalan dengan tahun astronomi. Dalam satu tahun tidak secara persis terdiri dari 365 hari, tetapi 365
hari 5 jam 48 menit 45,1814 detik. Jika hal ini tidak dihiraukan, maka setiap empat tahun akan kekurangan hampir 1 hari
(tepatnya 23 jam 15 menit 0,7256 detik). Maka untuk mengkompensasi hal ini, setiap 4 tahun sekali (tahun yang bisa
dibagi 4), diberi 1 hari ekstra: 29 Februari. Tetapi karena 5 jam 48 menit 45,1814 detik kurang dari 6 jam, maka
tahun-tahun yang bisa dibagi 100 (seperti tahun 1900), bukan tahun kabisat, kecuali bisa dibagi dengan 400 (seperti
tahun 2000)[^1].

Pseudocode

```bash
if year is divisible by 400 then is_leap_year
else if year is divisible by 100 then not_leap_year
else if year is divisible by 4 then is_leap_year
else not_leap_year
```

Dalam Python:

```py
year = input("Year = ")

if (year % 400 == 0):
    print ("Leap year")
elif (year % 100):
    print ("Not leap year")
elif (year % 4 == 0):
    print ("Leap year")
else:
    print ("Not leap year")
```

[^1]: https://id.wikipedia.org/wiki/Tahun_kabisat