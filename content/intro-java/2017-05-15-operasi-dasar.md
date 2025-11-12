---
title   : Operasi Dasar
date    : 2017-05-15
---

## Operator Aritmatika

Operator aritmatika yang dapat dilakukan adalah:

| Hasil | Operator |
|---|---|
| Additional                |  +  |
| Subtraction               |  -  |
| Multiplication            |  *  |
| Division                  |  /  |
| Modulus                   |  %  |
| Increment                 | ++  |
| Decrement                 | --  |
| Additional assignment     | +=  |
| Subtraction assignment    | -=  |
| Multiplication assignment | *=  |
| Division assignment       | /=  |
| Modulus asignement        | %=  |

Operator ini hanya bisa digunakan pada tipe data angka, tidak bisa digunakan
pada data `boolean`, tetapi dapat digunakan pada tipe data `char`, karena `char`
pada dasarnya adalah `int` di dalama Java.

Contoh:

```java
public class OperatorAritmatika {
    public static void main(String[] args) {
        System.out.println("Hasil 5 + 1 = " + (5 + 1));
        System.out.println("Hasil 8 % 2 = " + (8 % 2));
    }
}
```

## Operator pembanding

Operator pembanding yan dapat dilakukan:

|          Hasil           | Operator |
|---|---|
|         Equal to         |    == |
|       Not equal to       |    != |
|       Greater than       |    >  |
|        Less than         |    <  |
| Greater than or equal to |    >= |
|  Less than or equal to   |    <= |

Hasil operator ini adalah nilai boolean, bisa berupa true atau false.

Integer, floating-point numbers, characters, dan Booleans bisa digunakan pada
operator equal to dan not equal to, tetapi boolean tidak bisa digunakan pada
operator lain (operator order) hanya integer, floating-point numbers dan
characters.

Contoh:

```java
int i = 12, b = 3;

if (i < b) {
    System.out.println("True");
} else if (i == b) {
    System.out.println("Equal");
}
```

## Operator Logika

Operator logika yang bisa digunakan:

| Hasil | Operator |
|---|---|
|  AND  |    && |
|  OR   |   \|\| |
|  XOR  |    ^ |
|  NOT  |    ! |

Digunakan logika digunakan pada tipe data boolean untuk menyelesaikan
permasalahan yang membutuhkan nilai-nilai logika.

Contoh penggunaan:

```java
boolean a = true;
int b = 12;

if (a == true && b < 20) {
    System.out.println("True");
} else {
    System.out.println("False");
}
```
