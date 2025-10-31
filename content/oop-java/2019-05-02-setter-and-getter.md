---
title   : Setter dan Getter
date    : 2019-05-02
---

Setter dan Getter adalah istilah untuk method dengan access modifier public yang
digunakan untuk mengubah (Set) atau mengambil (Get) nilai suatu attribute
private atau protected dalam sebuah Class.

> Setter adalah sarana untuk mengambil nilai di dalam sebuah *atribut private*
>
> Getter adalah sarana untuk mengubah nilai di dalam sebuah *atribut private*

Setter dan getter ini memiliki akses *public*, sehingga dapat diakses kelas
lainnya, sedangkan method utamanya tidak perlu diketahui oleh orang lain.

```java
class Manusia {

    private String nama, jenisKelamin;
    int umur;

    public Manusia(String nama, String jenisKelamin, int umur) {
        this.nama = nama;
        this.jenisKelamin = jenisKelamin;
        this.umur = umur;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getJenisKelamin() {
        return jenisKelamin;
    }

    public void setJenisKelamin(String jenisKelamin) {
        this.jenisKelamin = jenisKelamin;
    }

    public int getUmur() {
        return umur;
    }

    public void setUmur(int umur) {
        this.umur = umur;
    }
}
```
