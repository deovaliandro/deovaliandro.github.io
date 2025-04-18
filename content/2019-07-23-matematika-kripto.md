+++
title     = "Landasan Matematika Kriptografi"
date      = "2020-07-23"
+++

## Set dan Fungsi

1. Set bilangan real = $\mathbb{R}$,
2. Set bilangan bulat = $\mathbb{Z}$,
3. Set bilangan rasional = $\mathbb{Q}$,
4. Set bilangan asli = $\mathbb{N}$, $\mathbb{Z}^+$ atau $\mathbb{Z}_{>0}$,
5. Set kosong = $\emptyset$ atau ${}$.

**Kardinalitas** adalah banyaknya anggota dari suatu set dengan notasi $\|S\|$.

Himpunan matrix $m \times n$ dengan entry bilangan real, diberi notasi $M^{m,n}(\mathbb{R})$.

### Hasil Kali Kartesius

Hasil kali dua himpunan tak kosong $ A $ dan $ B $ didefinisikan:

$$A \times B = \{(a, b) \|a \in A, b \in B\}$$

dengan

$$\|A \times B\| = \|A\|\times \|B\|$$

### Relasi Ekuvalensi

Misalnya terdapat himpunan tak kosong $A $, suatu subhimpunan $ R \subset A^2$ disebut relasi ekivalen pada $A$ jika
memenuhi:

- $\forall a \in A \Rightarrow (a, a) \in R$
- $\forall a_1, a_2 \in A: (a_1, a_2) \in R \Leftrightarrow (a_2, a_1) \in R$
- $\forall a_1,a_2,a_3 \in A:((a_1,a_2) \wedge (a_2,a_3)) \Rightarrow (a_1,a_3)$

Relasi ekivalensi sering diberi lambang $\sim$, sehingga $(a, b) \in R$ sering ditulis $aRb$ atau $a \sim b$.

Contohnya:

$$ \sim \subseteq \mathbb{Z}^2 $$ dengan aturan $$ (a, b) \in \sim \Leftrightarrow \exists k \in \mathbb{Z} : a - b = 4k $$

> fyi: $\mathbb{Z}^2$ is standard notation for the Cartesian square of the Integers; the set of all pairs of integers.
>
> $\mathbb{Z}^2 = { (x,y): x \in \mathbb{Z}, y \in \mathbb{Z} }$
>
> -- source: [math.stackexchange](https://math.stackexchange.com/questions/2187233/what-means-a-set-in-z2)

Karena $5 \sim 17$ dan $17 \sim -3$, maka $5 \sim -3$ (transitif), $17 \sim 5 $ dan $ -3 \sim 17$ (sifat simetri).

**Teorema** Jika $A$ adalah himpunan tidak kosong dan $\sim \subseteq A^{2}$ 
adalah sebuah relasi ekuivalen pada $A$, maka terdapat bilangan asli $n$ dan sub-subhimpunan $A_1, A_2, A_3, \cdots,A_n$ yang memenuhi sifat:

1. Sifat saling lepas, $\forall i, j \in \{ 1, 2, \cdots, n \}: A_i \cap A_j = \emptyset$,
2. Sifat partisi lengkap, $A_1 \cup A_2 \cup \cdots \cup A_n = A$

### Modulo

1. $a^n \bmod b = a^k \cdot a^l \bmod b$, dimana $k+l=m$.

## Aljabar Abstrak

Aljabar abstrak digunakan untuk mempelajari struktur aljabar dan sifatnya.

### Grup

Grup $(G, \ast)$ merupakan himpunan $G$ dengan operasi biner $\ast$ pada $G$
yang memenuhi:

- $\forall a, b \in G, a \ast b \in G$,
- $\exists a, b, c \in G, (a \ast b) \ast c = a \ast (b \ast c)$,
- $\exists e \ni \forall a \in G \to e \ast a = a \ast e = a$,
- $\forall a \in G, \exists a' \in G \ni a \ast a' = a' \ast a = e$,

Misalnya $(\mathbb{Z}, +)$, $(\mathbb{R}, +)$, $(\mathbb{Z}_2, \oplus)$,
$(\mathbb{Z}_3, \oplus)$, $(\mathbb{Z}_n, \oplus)$, $(\mathbb{Z}_p, \oplus)$,
$(\mathbb{Z}_p^\ast, \otimes)$.

Grup dikatakan __grup abelian__ jika memenuhi sifat komutatif, $\exists a, b \in G, a \ast b = b \ast a$.

Misalnya $(\mathbb{G}, +)$, $(\mathbb{Z}\_2, \oplus)$, $(\mathbb{Z}_3, \oplus)$.

### Ring

Ring $(R, +, \times)$ merupakan himpunan $R$, dengan operasi biner $ + $ dan $\times$ yang memenuhi:

1. $\exists e = 0$ untuk $(R, +)$ yang merupakan grup abelian,
2. $\exists a, b, c \in R, a \times (b \times c) = (a \times b) \times c,$,
3. $\exists e = 1, 1 \ne 0$ untuk $(R, \times) \ni 1 \times a = a, \times 1 = a \forall a \in R$,
4. operasi $\times$ distributif pada penjumlahan:
  1. $a \times (b + c) = (a \times b ) + (a \times c)$,
  2. $(b + c) \times a = (b \times a ) + (c \times a)$.

Contohnya $(\mathbb{Z}, +, \times)$.

Ring dikatakan __commutative ring__ jika $\exists a, b \in R, a \times b = b \times a$.

### Field

Field F adalah sebuah commutative ring dimana $\forall a \ne 0 \in F, \exists a^{-1} \in F \ni a \times a^{-1} = 1$.

Misalnya $(\mathbb{Q}, \times, +)$, $(\mathbb{R}, \times, +)$.

Field dikatakan __finite field__ jika himpunannya terhingga (orde n, dinotasikan $F_n$). Sebaliknya, elemen tidak
terbatas adalah __infinity field__.

Jumlah elemen dalam finite field disebut orde, jika orde $n$, dinotasikan $F_n$. Misalnya $F_2$ memiliki elemen $0, 1$.
Finite field digunakan dalam kriptografi, karena berada dalam himpunan berhingga.

Infinity field misalnya $(\mathbb{R}, +, \times)$ membentuk infinity field yang tidak memiliki aplikasi dalam
kriptografi.

### Galois Field

GF adalah finite field dengan $p^{n}$ elemen, $p \in P, n \geq 1$.

Dinotasikan dengan: $$GF(p^{2})$$

1. $GF(p)$

Bila $n=1$, maka $GF(p) = F_{p}$ dan elemennya $Z_{p} = \{0, 1, 2, ... , p-1\}$,
operasi penjumlahan dan perkalian dilakukan dalam $\bmod \space p$.

2. $GF(p^{n})$

Operasi penjumlahan dan perkalian dilakukan dalam polinom derajat $n$ (bentuk
$f(x)$).

## Reference

1. Munir. R. "Kriptografi Edisi Kedua". Informatika: Bandung. 2019.
