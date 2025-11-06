+++
title     = "Jump Statemen"
date      = "2025-10-06"
+++

Jump statement adalah perintah untuk menghentikan atau melangkahi dalam
iterasi dalam kondisi yang kita tentukan.

## break

untuk menghentikan perlangan tanpa mengikuti semua kemungkinan maka digunakan
`break`. Contohnya:

```python
i = 0

while 1 == 1:
    print(i)
    i = i + 1

    if i >= 5:
        print("Breaking")
        break


print("Finished")
```

Hasilnya:

```txt
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

## continue

continue digunakan untuk melompati suatu perulangan ketika terdapat kondisi
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

```txt
1
Skipping 2
3
4
Breaking
Finished
```

> Menggunakan perintah continue di luar operasi perulangan seperti while akan
> menyebabkan error

## pass

pass tidak akan tidak melakukan apa-apa, contohnya:

```python
for i in range(3):
    pass  # Tidak melakukan apa-apa
```
