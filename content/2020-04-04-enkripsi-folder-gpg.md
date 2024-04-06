+++
title     = "Enkripsi Folder dengan GPG"
date      = "2021-11-11T12:10:12"
+++

Demi menjaga keamanan data, saya berencana mengenkripsi beberapa file 🔑, salah satu caranya adalah dengan menggunakan
https://gnupg.org/.


## Kompresi dan Enkripsi

Untuk compress folder:

```bash
tar -zcvf archive.tar.gz directory
```

dengan keterangan:

- -z: compress dengan gzip
- -c: buat archive
- -v: tampilkan progress
- -f: nama archive

kemudian enkripsi file dengan:

```bash
gpg --symmetric --cipher-algo AES256 namafile.tar.gz
```


## Dekrisi dan dekompresi

Dekripsi file dengan:

```bash
gpg -d namafile.tar.gz.gpg
```

kemudian uncompress dengan:

```bash
tar -zxvf namafile.tar.gz
```
