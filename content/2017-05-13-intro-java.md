+++
title       = "Pengantar Pemrograman dengan Java"
date        = "2017-05-13"
+++

<details>
    <summary>ToC</summary>

- [Struktur Dasar](#struktur-dasar)
  - [Struktur program](#struktur-program)
  - [Aturan Penamaan](#aturan-penamaan)
  - [Menjalankan program](#menjalankan-program)
- [Input dan Output](#input-dan-output)
  - [Input](#input)
    - [Dengan menggunakan Scanner](#dengan-menggunakan-scanner)
    - [Dengan menggunakan BufferReader](#dengan-menggunakan-bufferreader)
  - [Output](#output)
    - [System.out.print()](#systemoutprint)
    - [System.out.printf](#systemoutprintf)
- [Operasi Dasar](#operasi-dasar)
  - [Operator Aritmatika](#operator-aritmatika)
  - [Operator pembanding](#operator-pembanding)
  - [Operator Logika](#operator-logika)
- [Tipe Data](#tipe-data)
  - [Tipe Data Primitif](#tipe-data-primitif)
    - [Integer](#integer)
      - [byte](#byte)
      - [short](#short)
      - [int](#int)
      - [long](#long)
    - [Floating-point numbers](#floating-point-numbers)
      - [float](#float)
      - [double](#double)
    - [Characters](#characters)
      - [char](#char)
    - [Boolean](#boolean)
  - [Tipe Data Reference](#tipe-data-reference)
    - [String](#string)
  - [Deklarasi variabel](#deklarasi-variabel)
    - [Deklarasi](#deklarasi)
    - [Inisiasi](#inisiasi)
    - [Inisiasi dinamis](#inisiasi-dinamis)
  - [Mengubah tipe ke tipe data lain](#mengubah-tipe-ke-tipe-data-lain)
    - [Konversi otomatis](#konversi-otomatis)
- [Penyeleksian Kondisi](#penyeleksian-kondisi)
  - [If-Else](#if-else)
  - [Switch](#switch)
- [Perulangan](#perulangan)
  - [For](#for)
  - [While](#while)
  - [Do-while](#do-while)
  - [For-each](#for-each)
- [Jump Statement](#jump-statement)
  - [Break](#break)
  - [Continue](#continue)
  - [Return](#return)
- [Array](#array)
  - [Deklarasi Array](#deklarasi-array)
  - [Mengisi](#mengisi)
  - [Mengakses](#mengakses)
  - [Array multi-dimensi](#array-multi-dimensi)
  - [Panjang Array](#panjang-array)
- [Method](#method)
- [File IO](#file-io)
- [string](#string-1)
  - [Menthod dalam class String](#menthod-dalam-class-string)
    - [equals()](#equals)
    - [length()](#length)
    - [charAt()](#charat)
- [Daftar Pustaka](#daftar-pustaka)

</details>

[Java](https://en.wikipedia.org/wiki/Java_(programming_language)) adalah bahasa pemrograman level tinggi, robust
(mempunyai Garbage Collector dan Exception Handling), object-oriented dan secure/stable tetapi tidak pure
object-oriented language karena masih mendukung primitive data types seperti `int`, `char`, dll.

## Struktur Dasar

Sintaks Java mirip dengan `C/C++`, tetapi Java tidak support dengan low-level programming seperti pointer
(sebenarnya Java punya pointer, semua turunan object adalah pointer. Akan tetapi, anda bisa jadi programmer Java
profesional tanpa perlu tahu fakta ini[^1]. Kode Java selalu ditulis didalam sebuah class dan objek.

### Struktur program

Struktur dasar sebuah bahasa pemrograman Java adalah sebagai berikut:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

`class Main` Adalah class utama, nama `Main` harus sesuai dengan nama file. Aturan penulisannya adalah dengan
menggunakan huruf kapital di huruf pertama. Misalnya: `Main`, `Utama`, dsb-nya.

`public static void main(String args[])` adalah kode utama yang akan dijalankan ketika kita menjalankan sebuah program
Java.

Dengan keluarnya jdk22[^2] maka ada perubahan besar, yaitu:

```java
class HelloWorld {
    void main() {
        System.out.println("Meoworld");
    }
}
```

### Aturan Penamaan

Dalam penulisan nama variabel perlu diperhatikan terdapat beberapa aturan khusus dalam Java yang harus dipatuhi seperti:

1. tidak boleh diawali dengan angka,
2. tidak boleh disertai symbol khusus seperti `@`, `!`, `*`, `#`,
3. tidak boleh menggunakan reserved word sebagai nama variable,
4. boleh diawali dengan underscore atau symbol `$`, dan
5. nama variable tidak boleh mengandung spasi.

Menurut Convention over configuration Java[^3], penulisan nama variable menggunakan lowerCamel case misalnya
`namaVariabel`, dan penulisan nama class menggunakan uppercamel case misalnya `main`.

### Menjalankan program

Java adalah bahasa yang dicompile terlebih dahulu sebelum dirun.

Untuk mengcompile java:

```bash
javac NamaFile.java
```

dan kemudian akan menghasilkan sebuah file dengan nama `NamaFile.class`. File inilah yang kemudian dijalankan dengan
menggunakan perintah:

```bash
java NamaFile
```

perhatikan, untuk menjalankan, tidak perlu menggunakan `NamaFile.class`, cukup dengan menggunakan `NamaFile` saja.

Dengan update dari Java 11, maka sebuah program Java dapat dijalankan tanpa perlu mengcompilenya terlebih dahulu[^4].

Misalnya:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

dapat langsung dijalankan dengan:

```bash
java NamaFile.java
```

## Input dan Output

IO atau input output adalah mekanisme memasukkan suatu data kedalam program dan bagaimana mengeluarkan hasil dari
program tersebut. Meskipun pengertian I/O secara lebih luas lebih dari hal tersebut, namun disini kita akan menggunakan
terbatas pada input dan output di terminal.

### Input

Input di Java dapat menggunakan 2 cara (yang umum digunakan).

#### Dengan menggunakan Scanner

```java
import java.util.Scanner;

class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int i = scan.nextInt();
    }
}
```

#### Dengan menggunakan BufferReader

```java
import java.io.BufferedReader;
import java.io.StreamReader;

class Main{
    public static void main(String args[]){
        BufferedReader r = new BufferedReader(new StreamReader(System.in));
        int a = Integer.parseInt(b.readLine());
    }
}
```

### Output

Output di Java dapat menggunakan 2 cara (yang umum digunakan).

#### System.out.print()

Fungsi `print()` meskipun kita menuliskan kodenya dua baris namun hasil atau outputnya tidak menjadi dua baris,
solusinya kita bisa menggunakan fungsi yang kedua yaitu `println()` dimana dengan fungsi tersebut dapat menambahkan
baris baru pada outputnya.

```java
class Main{
    public static void main(String args[]){
        System.out.println("Hello world");
        System.out.print("Hello world");
    }
}
```

#### System.out.printf

```java
class Main{
    public static void main(String args[]){
        String data = "Hello world";
        System.out.printf("%s", data);
    }
}
```

## Operasi Dasar

### Operator Aritmatika

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

Operator ini hanya bisa digunakan pada tipe data angka, tidak bisa digunakan pada data `boolean`, tetapi dapat digunakan
pada tipe data `char`, karena `char` pada dasarnya adalah `int` di dalama Java.

Contoh:

```java
public class OperatorAritmatika {
    public static void main(String[] args) {
        System.out.println("Hasil 5 + 1 = " + (5 + 1));
        System.out.println("Hasil 8 % 2 = " + (8 % 2));
    }
}
```

### Operator pembanding

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

Integer, floating-point numbers, characters, dan Booleans bisa digunakan pada operator equal to dan not equal to, tetapi
boolean tidak bisa digunakan pada operator lain (operator order) hanya integer, floating-point numbers dan characters.

Contoh:

```java
int i = 12, b = 3;

if (i < b) {
    System.out.println("True");
} else if (i == b) {
    System.out.println("Equal");
}
```

### Operator Logika

Operator logika yang bisa digunakan:

| Hasil | Operator |
|---|---|
|  AND  |    && |
|  OR   |   \|\| |
|  XOR  |    ^ |
|  NOT  |    ! |

Digunakan logika digunakan pada tipe data boolean untuk menyelesaikan permasalahan yang membutuhkan nilai-nilai logika.

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

## Tipe Data

Java merupakan bahasa pemrograman yang strongly typed (setiap data harus diberikan tipe data), maka kita tidak bisa
mengabaikan tipe data. Kita harus tahu data seperti apa yang disimpan ke dalam variabel. Selain itu, Java juga
bersifat statically typed, yang artinya setiap variabel harus dideklarasikan terlebih dahulu sebelum digunakan.

### Tipe Data Primitif

Tipe data primitif adalah tipe data standar yang tidak diturunkan dari objek manapun. Tipe data primitif telah
ditentukan dengan kata kuncinya masing-masing. Terdapat 8 (delapan) tipe data primitif yang Java dukung, antara lain:

#### Integer

##### byte

tipe data yang menampung angka 8 bit dengan range -127 - 128 ($2^4$). Tipe data
byte memiliki nilai default `0`.

```java
byte n = 12;
```

##### short

tipe data yang menampung angka 16 bit dengan range -32.768 - 32.767 ($2^{16}$).
Tipe data byte memiliki nilai default `0`.

```java
short n = 1200;
```

##### int

tipe data yang menampung angka 32 bit dengan range -2,147,483,648 - 2,147,483,
647 ($2^{32}$). Tipe data byte memiliki nilai default `0`.

```java
int n = 289000;
```

##### long

tipe data yang lebih panjang dari int, yaitu -9,223,372,036,854,775,808 sampai
9,223,372,036,854,775,807 ($2^{64}$). Tipe data long memiliki nilai default
`0L`.
  
```java
long n = 122334445;
```

#### Floating-point numbers

##### float

tipe data untuk bilangan desimal seperti 3.14, 2.1 atau bilangan desimal
lainnya. Tipe data ini bisa nemapung nilai $2^{32}$. Nilai default-nya `0.0f`.
  
```java
float n = 3.14f;
```

penulisannya ditambahkan huruf `f` di belakang angkanya, ini untuk menandai
bahwa bilangan tersebut adalah `float` bukan `double`.

##### double

tipe data yang mirip dengan float kecuali data yang bisa ditampungnya lebih
besar yaitu $2^{64}$. Nilai default-nya `0.0d`.
  
```java
double n = 144.2;
```

#### Characters

##### char

tipe data yang hanya bisa menampung satu karakter]. Nilai yang bisa ditampung
adalah 0 to 65.535. Char digunakan untuk menampung karakter Unicode[^5].

```java
char c = 'a';
```

Nilai yang diberikan disimpan dalam satu tanda kutip. Nilai defaulnya adalah
`\u0000`. Char dalam spesifikasi resminya tergolong kedalam _integer type_ yang
termasuk dalam kategori int, short, dll. Namun karena prinsipnya yang digunakan
untuk menampung karakter Unicode, maka dibuat dalam kategori tersendiri.
Sehingga char dapat ditulis seperti ini:

```java
char c = 88;
```

yang mana akan menghasilkan nilai `X`, 98 adalah nilai desimal dari X dalam sistem ASCII dan Unicode.

#### Boolean

Boolean, tipe data yang bisa menampung dua nilai, yaitu `true` atau `false`. Tipe data ini akan banyak digunakan
kemudian. Nilai default-nya `false`.

```java
boolean b = true;
```

### Tipe Data Reference

Tipe data reference merupakan sebuah tipe data yang merujuk ke sebuah objek atau instance dari sebuah class. Salah satu
tipe data yang termasuk ke dalam tipe data reference adalah `string`. Tipe data string menunjuk ke instance dari class
`java.lang.String`.

#### String

String adalah tipe data yang menampung karakter. String bisa menampung lebih dari satu karakter, misalnya kata, kalimat
atau paragraf.

```java
String name = "Deo";
```

perhatikan, penulisan `String` menggunakan kapital di awal kata, kemudian isinya
disimpan di dalam tanda kutip dua (`" "`).

### Deklarasi variabel

Sebuah data dapat disimpan ke dalam variabel. Format penulisannya sebagai berikut:

```java
type namaVariabel;
```

#### Deklarasi

Deklarasi adalah pembuatan sebuah variabel, namun belum di isi dengan suatu nilai. Contoh:

```java
int n;
boolean b;
char c;
```

#### Inisiasi

Inisiasi adalah pengisian sebuah variabel dengan data. Cara ini disarankan untuk dilakukan dibandingkan dengan hanya
mendeklarasikan saja tipe variabel kosong. Misalnya:

```java
n = 12;
b = false;
c = 'A';
```

Deklarasi sekaligus inisiasi juga dapat dilakukan, misalnya dengan:

```java
float f = 21.0f;
boolean b = false;
```

#### Inisiasi dinamis

Dua atau lebih data dapat di isi secara bersamaan dalam satu baris dengan syarat tipe datanya sama. Contoh:

```java
int a = 12, b = 13, c = 14;
```

atau bisa juga jika semua data memiliki nilai yang sama, misalnya:

```java
int x = y = z = 100;
```

### Mengubah tipe ke tipe data lain

Suatu tipe data dapat di ubah ke tipe data lain, misalnya dari byte ke int. Syaratnya adalah:

1. kedua tipe data kompatible, misalnya antara byte dengan int, int dengan float, tetapi char dan boolean tidak memiliki
   kompatible.
2. tipe data yang dituju memiliki ruang penyimpanan yang lebih besar, misalnya byte memiliki ruang penyimpanan $2^8$,
   akan diubah ke int yang memiliki penyimpanan $2^{32}$. Tetapi jika dari tipe data int ke byte, maka jika nilai yang
   akan diubah lebih besar dari $2^8$, maka akan menyebabkan nilai akhir adalah hasil modulo dari ukuran byte.

Cara mengubah tipe data dapat dicontohkan sebagai berikut:

```java
int n = 12;
byte b = (int) n;
```

Bagaimana jika int ke float, silahkan coba sendiri.

#### Konversi otomatis

Misalnya terdapat a, b, c yang merupakan byte, kemudian dilakukan operasi sebagai berikut:

```java
byte a = 40;
byte b = 50;
byte c = 100;
int d = a * b / c;
```

maka nilai a, b dan c akan otomatis diubah menjadi int.

Aturan promosi ini adalah:

1. byte, short, char akan di ubah ke int,
2. jika operasinya adalah long, maka akan diubah ke long,
3. float akan di ubah ke double,
4. jika operasi melibatkan double, maka otomatis akan diubah semua ke double.

## Penyeleksian Kondisi

Peyeleksian adalah pilihan atau opsi dengan suatu syarat tertentu. Jika syarat yang diberikan memenuhi, maka semua
statement dalam blok kondisi tersebut akan dijalankan, namun jika tidak maka semua stetement dalam blok itu dilewati
dan tidak dijalankan. Contohnya, jika nilai sama dengan atau lebih dari 90 maka mahasiswa tersebut mendapatkan nilai A,
jika nilainya adalah dalam rentang 80-90 maka mahasiswa tersebut mendapatkan nilai B, dan seterusnya.

Disini dilakukan perulangan dengan mengecek nilai mahasiswa tersebut, jika memenuhi atau terdapat dalam rentang
tertentu, maka mahasiswa tersebut akan mendapat nilai ini.

Dalam Java terdapat dua macam penyeksian kondisi yaitu `If-else` dan `Switch`.

### If-Else

Bentuk if-else adalah bentuk jika-maka, jika memenuhi syarat ini, lakukan ini, jika tidak maka cek ke syarat berikutnya.

Bentuk umumnya adalah:

```java
if ( syarat1 ) {
    //dijalankan ketika syarat1 = true
} if else ( syarat2 ) {
    //dijalankan ketika syarat2 = true
} else {
    //dijalankan ketika semua syarat false
}
```

Aturannya:

Berikut ini hal yang harus diketahui ketika menggunakan "If-else":

1. If statement bisa tidak memiliki "else" statement, "else" statement harus terletak setelah semua "else If" statement
   (jika ada).
2. If statement bisa memiliki banyak "else if" statement dan semuanya harus terletak sebelum "else" statement.
3. Ketika salah satu "else if" statement dijalankan, tidak ada "else if" lainnya yang akan dijalankan.

Contoh:

```java
int nilai = 50;

if (nilai <= 50) {
    System.out.println("C");
} if else (nilai <= 85) {
    System.out.println("B");
} if else (nilai > 85) {
    System.out.println("A");
} else {
    System.out.println("Eror");
}
```

### Switch

Pada switch terdapat syarat yang digunakan untuk pengujian terhadap daftar nilai yang ada.

Setiap nilai (daftar nilai) ini disebut case, dan syarat akan diperiksa untuk setiap case. Jika daftar case tidak ada
yang memenuhi, maka akan otomatis ke `default`.

Bentuk umumnya:

```java
switch ( test_variable) {
    case value :
        //statement
        break;
    case value :
        //statement
        break;
    default :
        //statement
}
```

Switch memerlukan `break` untuk menghentikan pengujian ketika pengujian itu sudah memenuhi persyaratan yang diberikan.
`break` digunakan untuk menghentikan pencarian jika kondisi yang dicari sudah memenuhi.

Contoh penggunaan:

```java
int a = 5;
switch (a) {
    case 1:
        System.out.println("You chose One");
        break;
    case 2:
        System.out.println("You chose Two");
        break;
    case 3:
        System.out.println("You chose Three");
        break;
    case 4:
        System.out.println("You chose Four");
        break;
    case 5:
        System.out.println("You chose Five");
        break;
    default:
        System.out.println("Invalid Choice");
}
```

## Perulangan

Perulangan (Looping) adalah suatu blok kode yang akan terus berjalan selama syarat yang diberikan masih memenuhi.

Setiap perulangan memiliki empat bagian, yaitu `inisialisasi`, `body`, `iterasi`, dan `terminasi/kondisi`.

1. Inisialisasi adalah statement yang menyatakan keadaan awal sebuah perulangan.
2. Body atau badan program adalah blok statement yang akan dijalankan terus menerus selama perulangan berlangsung.
3. Iterasi adalah statement atau bagian program yang nilainya terus berubah (ascending, descending atau cara lainnya)
   untuk mencapai batas atau keadaan untuk berhenti.
4. Terminasi atau kondisi adalah statement bernilai Boolean yang menyatakan batas atau keadaan untuk menghentikan
   perulangan.

Pada Java dikenal tiga macam bentuk perulangan, yaitu: `while`, `do-while`, dan `for`.

Pada dasarnya semua perulangan dalam Java memiliki cara kerja yang sama yaitu selama kondisi masih bernilai true maka
perulangan akan terus dilakukan hinggi kondisi bernilai false.

### For

For adalah perulangan yang banyaknya perulangan diketahui atau banyaknya perulangan sudah jelas(tentu).

Bentuk umum:

```java
for (inisialisasi; kondisi; iterasi) {
    //body
}
```

Contoh:

```java
int n = 99;

for (int i=0; i<n; i++) {
    System.out.println(i);
}
```

### While

While adalah perulangan yang banyaknya perulangan tidak menentu dan lebih sederhana dari pada perulangan for.

Bentuk umum:

```java
Inisialisasi;

while (kondisi) {
    //body
    Iterasi; //opsional
}
```

Contoh:

```java
int n = 19;
int i = 0;

while (i<n) {
    System.out.println(i);
    i++;
}
```

### Do-while

Pada perulangan ini bagian body (semua dalam kurung kurawal setelah "do") dijalankan terlebih dahulu sebelum pengecekan
kondisi. Sehingga walaupun kondisi dari awal bernilai false, bagian body tetap dijalankan sekali. Berbeda dengan
perulangan while apabila kondisi diawal bernilai false maka bagian body tidak akan dijalankan.

Bentuk umum:

```java
Inisialisasi;

do {
    //body
    Iterasi; //opsional
} while (kondisi);
```

Contoh:

```java
int n = 19;
int i = 0;

do {
    i++;
} while (i<n)

System.out.println(i);
```

### For-each

For-each bukanlah keyword dari Java, melainkan cara yang lebih sederhana untuk membuat perulangan for.

Bentuk umum:

```java
for (type var: array) { 
    statements using var;
}
```

Sama nilainya dengan

```java
for (int i=0; i<arr.length; i++) {
    type var = arr[i];
    statements using var;
}
```

Ini biasa digunakan pada array atau koleksi (seperti ArrayList).

Contoh:

```java
int[] arr = { 125, 132, 95, 116, 110 };

for (int i: arr) {
    System.out.println(i);
}
```

Namun for-each memiliki batasan:

1. Tidak bisa digunakan jika ingin memodifikasi nilai array,
2. Tidak bisa melacak nomor index,
3. Hanya bisa melakukan perulangan kedepan sekali.

## Jump Statement

Jump statement adalah perintah untuk memindahkan alur program ke program yang lain. Java mengenal tiga buah perintah
tersebut yaitu `break`, `continue` dan `return`.

### Break

Break merupakan perintah yang dapat digunakan untuk menghentikan proses
perulangan dengan paksa. Berikut ini contoh penggunaan break dalam while,
program akan berhenti ketika nilai i = 2.

Contoh:

```java
int n = 10;
int i = 0;

while (i<n) {
    System.out.println(i);
    i++;
    
    if (i == 2) {
        break;
    }
}
```

### Continue

Continue adalah perintah yang dapat digunakan untuk meloncati proses perulangan. Continue hanya akan meloncati proses
perulangan satu kali proses perulangan masih tetap berjalan selama hasil lompatannya itu masih berlaku dalam perulangan
tersebut.

Contoh:

```java
for (int i=0; i<10; i++) {
    if (i == 5) {
        continue;
    }

    System.out.println(i);
}
```

Program di atas akan menampilkan bilangan mulai dari 0 sampai 10, tetapi angka 5 tidak akan ditampilkan karena ketika
nilai i = 5 maka perintah `continue` akan dijalankan.

### Return

Return adalah perintah dalam java yang digunakan di dalam method. Return akan mengembalikan suatu nilai dari sebuah
method yang dipanggil.

## Array

Array adalah kelompok data dengan tipe yang sama. Dalam Java, pada saat mendeklarasikan sebuah array panjang array harus
ditentukan, dan tidak dapat diubah setelahnya (nilai fix). Setiap item dalam sebuah array disebut element, dan setiap
element dapat diakses dengan indexnya. Index array selalu mulai dari 0 sampai n-1, dengan n adalah panjang array.

### Deklarasi Array

Sebelum digunakan, Array harus dideklarasikan terlebih dahulu dengan menentukan tipe data dan panjangnya.

Bentuk umum:

```java
tipeData[] namaArray = new tipeData[n];
//atau
tipeData namaArray[] = new tipeData[n];
```

Contoh:

```java
int[] arr = new int[20];
```

### Mengisi

Ada beberapa cara untuk menginisialisasi array, diantaranya adalah:

```java
tipeData[] namaArray = { element1, element2, element3, element4 };
//atau
tipeData[] namaArray = new int[4];
namaArray[0] = element1;
namaArray[1] = element2;
namaArray[2] = element3;
namaArray[3] = element4;
```

Contoh:

```java
int[] arr = { 132, 11, 134, 33};
//atau
int[] arr = new int[4];
arr[0] = 132;
arr[1] = 11;
arr[2] = 134;
arr[3] = 33;
```

### Mengakses

Untuk mengakses element tertentu pada array cukup dengan menyebutkan nama array disertai dengan kurung siku dan index
element yang ingin diakses.

Bentuk umum:

```java
namaArray[index];
```

> Indeks array dimulai dari 0

Jadi jika mempunyai data:

```java
int[] arr = { 132, 11, 134, 33};
System.out.println(arr[0]);
```

akan menampilkan:

```bash
132
```

dan kemudian diikuti oleh indeks berikutnya.

### Array multi-dimensi

Array multidimensi dapat diilustrasikan sebagai array dalam array. Artinya setiap element pada array tersebut adalah
sebuah array juga (Array dua dimensi). Hal ini juga berlaku untuk Array NxN dimensi.

Contoh:

```java
int[][] arr = new int[4][5];
```

Kemudian untuk mengisinya dengan:

```java
int[][] arr = {
    {1, 1, 1, 1, 1},
    {1, 1, 1, 1, 1},
    {1, 1, 1, 1, 1},
    {1, 1, 1, 1, 1}
};
```

Untuk mengaksesnya, digunakan cara yang sama dengan array 1-dimensi, misalnya:

```java
System.out.println(arr[0][1]);
```

### Panjang Array

Untuk menentukan panjang suatu array, digunakan fungsi `.length`. Contohnya:

```java
int[] arr = { 132, 11, 134, 33};
System.out.println(arr.length);
```

output:

```bash
4
```

nilainya bukan dihitung dari angka indeks terakhir melainkan jumlah indeknya, sehingga walaupun indeksnya dimulai dari
angka `0` namun panjangnya tetap akan mengikuti jumlah indeksnya.

Contoh lain:

```java
int[][] arr = {
    {1, 1, 1, 1},
    {1, 1, 1, 1, 1},
    {1, 1, 1, 1, 1, 1},
    {1, 1, 1, 1, 1, 1, 1}
};

System.out.println(arr.length);
System.out.println(arr[0].length);
System.out.println(arr[1].length);
```

output:

```java
4
4
5
```

## Method

Method adalah suatu fungsi. Method melaksanakan suatu tugas tertentu (menurut prinsip SOLID).

Method pada Java memiliki bentuk umum seperti berikut ini:

```java
return-type methodName(parameter-list) {
    //body of method
}
```

dimana:

1. `return-type` adalah jenis nilai yang akan dikembalikan oleh method tersebut.
2. methodName adalah nama method
3. parameter-list adalah daftar nilai yang dikirim ke method tersebut.

Contohnya:

sebuah method yang berfungsi untuk menghitung hasil perkalian dua buah bilangan.

```java
public int multipication(int a, int b) {
    return a*b;
}
```

`int` adalah tipe data yang akan dikembalikan oleh method tersebut, yaitu hasil perkalian a dengan b. `multipication`
adalah nama method tersebut, `int a` dan `int b` adalah 2 jenis parameter yang diterima oleh method tersebut, parameter
ini akan berguna sebagai nilai yang akan diolah oleh method tersebut.

Sedangkan untuk memanggil method tersebut, kita dapat memanggil dengan menggunakan namanya, misalnya kita akan memanggil
method yang telah kita buat diatas:

```java
int hasil = multipication(12, 14);
```

12 dan 14 disini adalah argumen yang dikirim.

> untuk mengembalikan multiple values, dapat menggunakan return array

Sebuah method juga dapat mengembalikan object. Misalnya:

```java
class Demo{
    int a;
    double b;
    int c;

    Demo(int m, double d, int a) {
        a = m;
        b = d;
        c = a;
    }
}

class MethodDemo4{ 
    static Demo get(int x, int y) {
        return new Demo(x * y, (double)x / y, (x + y)); 
    }

    public static void main(String[] args) {
        Demo ans = get(25, 5); 
        System.out.println("Multiplication = " + ans.a); 
        System.out.println("Division = " + ans.b); 
        System.out.println("Addition = " + ans.c); 
    } 
}
```

> Java menggunakan call-by-value bukan call-by-reference

Note: tambahkan call-by-value vs call-by-reference

## File IO

Input dan output pada file digunakan untuk mengolah file tersebut. Untuk membaca suatu file, kita menggunakan class
`FileReader` dan untuk menulis pada suatu file, kita menggunakan class `FileWriter`.

Contoh kasusnya, menyalin suatu isi file ke file lain. Disini kita akan menggunakan `FileReader` untuk membaca isi file
tersebut, lalu kita akan menulis dengan menggunakan `FileWriter` kepada file lainnya.

```java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
 
public class Main {
    public static void main(String[] args) {
        try {
            FileReader fileReader = new FileReader("source.txt");
            FileWriter fileWriter = new FileWriter("destination.txt");

            int i;

            while( ( i = fileReader.read()) != -1 ){
                fileWriter.write(i);
            }
            
            fileReader.close();
            fileWriter.close();
        } catch (FileNotFoundException e) {
            System.out.println("File tidak ada! " + e);
        } catch (IOException e) {
            System.out.println("Terdapat masalah ada I/O" + e);
        }
    }
}
```

## string

Di dalam bahasa pemrograman Java, string merupakan sebuah tipe data reference.
Tipe data ini diperlakukan sebagai sebuah obyek. String adalah kumpulan beberapa
karakter (char).

String sendiri sebenarnya merupakan sebuah class yang terdapat dalam library
Java dan digunakan untuk memanipulasi karakter. Contoh sintaks untuk
mendeklarasikan sebuah string:

```java
String str = "Hay";
```

String adalah tipe data immutable; ketika objek `String` dibuat, maka kontennya tidak bisa diubah lagi.

Untuk menggabungkan beberapa string, Java menggunakan `+`, misalnya:

```java
String nama = "John " + "Doe";
System.out.println(nama);
```

menghasilkan:

```bash
John Doe
```

### Menthod dalam class String

Ada beberapa method yang ada di dalam class `String`:

#### equals()

Digunakan untuk menentukan apakah dua buah `String` adalah sama, misalnya:

```java
String str0 = "Kamu";
String str1 = "Kami";

if(str0.equal(str1)) {
    System.out.println("Sama");
} else {
    System.out.println("Tidak sama");
}
```

`str1` menunjukkan bahwa `str1` adalah nilai yang dijadikan pembanding. `equals()` menghasilkan nilai `boolean`.

#### length()

Digunakan untuk menentukan panjangnya suatu string, misalnya:

```java
String str = "Nona manis";
int l = str.length();

System.out.println(l);
```

`length()` menghasilkan nilai `int`.

#### charAt()

Digunakan untuk menentukan `char` pada posisi tertentu pada sebuah `String`, misalnya:

```java
String nama = "Deo Valiandro"
char p2 = nama.charAt(2);

System.out.println(p2);
```

angka 2 menunjukkan index char yang diinginkan dalam sebuah `String`. `charAt()` mengahasilkan nilai `char`.

Dan masih banyak lagi method-method lainnya.

## Daftar Pustaka

[^1]: [Jekjektuanakal](https://jekjektuanakal.my.id/post/peta-jalan-pejuang-cpp-2/)
[^2]: [JEP-445](https://openjdk.org/jeps/445)
[^3]: [Java Code Conventions](https://www.oracle.com/technetwork/java/codeconventions-150003.pdf)
[^4]: [JEP-330](https://openjdk.java.net/jeps/330)
[^5]: [Unicode](http://www.unicode.org)
