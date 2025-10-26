+++
title     = "Chained Exception"
date      = "2021-09-22"
+++

Exception berantai memungkinkan untuk menghubungkan dua exception, yaitu sebuah
exception menjelaskan penyebab exception yang lain.

Contoh kasusnya ketika terjadi exception `ArithmeticException` karena pembagian
dengan nol, namun kasus sebenarnya bukan pada pembagian dengan nol namun karena
input angka pembagi yang bermasalah (I/O error) sehingga dibutuhkan exception
lain yang menjelaskan kejadian tersebut karena `ArithmeticException` tidak akan
mengetahui penyebabnya, ia hanya mengetahui bahwa error karena pembagian nol.

Ada 2 constructor yang mendukung sistem exception berantai:

1. Throwable (Throwable cause)
2. Throwable (String str, Throwable cause)

Perbedaannya di nomor 2 memungkinkan kita menambahkan deskripsi tentang
exception yang terjadi, dalam String.

Contoh kasus:

```java
import java.io.IOException;

public class Main {
    public static void divide(int a, int b) {
        if (b==0) {
            ArithmeticException ae = new ArithmeticException("top layer");
            ae.initCause(new IOException("cause"));
            throw ae;
        } else {
            System.out.println(a/b);
        }
    }

    public static void main(String[] args) {
        try {
            divide(5, 0);
        } catch (ArithmeticException ae) {
            System.out.println( "caught : " +ae);
            System.out.println("actual cause: "+ae.getCause());
        }
    }
}
```

output:

```bash
caught:java.lang.ArithmeticException: top layer
actual cause: java.io.IOException: cause
```