+++
title     = "Try with Resource Management"
date      = "2021-09-22"
+++

`Try` dengan memperkenalkan `automatic resource management`.

Semua objek yang mengimplementasikan `java.lang.AutoCloseable` atau
`java.io.Closeable` akan bisa menggunakan try. `try-with-resources statement`
akan otomatis meng-`close` semua objek yang digunakan pada try tanpa dilakukan
penutupan secara eksplisit. Resource disini dimaksudkan semua objek yang perlu
ditutup setelah program selesai.

Bentuk umumnya:

```java
try(resource-specification(there can be more than one resource)) {
    //use the resource
} catch() {
    // handler code
}
```

Contoh try tanpa menggunakan resource statement.

```java
try {
    String str;
    BufferedReader br = new BufferedReader(new FileReader("d:\\myfile.txt"));
    while((str=br.readLine())!=null) {
        System.out.println(str);
    }
    br.close();
} catch(IOException ie) {
    System.out.println("I/O Exception "+ie);  
}
```

Terlihat, resource `BufferedReader` yang diinisiasikan, ditutup kembali.

Contoh try dengan menggunakan resource management (Java 7).

```java
try(BufferedReader br = new BufferedReader(new FileReader("none.txt"))) {
    String str;
    while((str = br.readLine()) != null) {
        System.out.println(str);
    }
} catch(IOException ie) {
    System.out.println("I/O Exception "+ie);
}
```

Resource `BufferedReader` tidak memerlukan `close`.

Dengan Java 9, resource bisa dideklarasikan diluar try itu sendiri. Misalnya:

```java
BufferedReader br = new BufferedReader(new FileReader("none.txt"))
try(br) {
    String str;
    while((str = br.readLine()) != null) {
        System.out.println(str);
    }
} catch(IOException ie) {
    System.out.println("I/O Exception "+ie);
}
```