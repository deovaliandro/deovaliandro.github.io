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