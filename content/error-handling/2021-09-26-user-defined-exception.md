+++
title     = "User Defined Exception"
date      = "2021-09-26"
+++

Exception ada banyak jenisnya, namun Java mengizinkan kita membuat exception
sendiri.

Contohnya:

```java
class MyException extends Exception {
    private int ex;
    MyException(int a) {
        ex = a;
    }

    public String toString() {
        return "MyException[" + ex +"] is less than zero";
    }
}

class Demo {
    static void sum(int a,int b) throws MyException {
        if(a<0) {
            throw new MyException(a);
        } else {
            System.out.println(a+b);
        }
    }

    public static void main(String[] args) {
        try {
            sum(-10, 10);
        } catch(MyException me) {
            System.out.println(me);
        }
    }
}
```

Disini kita membuat exception untuk menangkap error ketika hasil operasi kurang
dari 0.

Contoh lainnya:

```java
class ItemNotFound extends Exception {
    public ItemNotFound(String s) {
        super(s);
    }
}

class Demo {
    static void find(int arr[], int item) throws ItemNotFound {
        boolean flag = false;

        for (int i = 0; i < arr.length; i++) {
            if(item == arr[i])
                flag = true;
        }

        if(!flag) {
            throw new ItemNotFound("Item Not Found");
        } else {
            System.out.println("Item Found");
        }
  }

    public static void main(String[] args){
        try {
            find(new int[]{12,25,45}, 10);
        } catch(ItemNotFound i) {
            System.out.println(i);
        }
    }
}
```

Fungsi program ini adalah untuk mencari suatu nilai didalam sebuah array. Jika
nilai yang dimaksud tidak ditemukan, maka akan memunculkan suatu exception
bahwa nilai tersebut tidak ditemukan.

## Beberapa point yang perlu diingat

1. Selalu gunakan class `extend Exception` untuk membuat exception sendiri.
2. Tidak perlu menggunakan method apapun, 
3. Kamu bisa membuat konstruktor sendiri jika mau,
4. fungsi `toString()` digunakan untuk menampilkan pesan sendiri.