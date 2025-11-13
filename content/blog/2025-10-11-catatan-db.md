+++
title     = "Catatan Sistem Basis Data"
date      = "2025-10-11"
+++

**Saya menggunakan MYSQL**

## Data Definition Language (DDL)

### CREATE

Untuk membuat database, table atau objek lain dalam database.

Contoh untuk membuat database:

```sql
CREATE DATABASE mahasiswa;
```

> Nama database tidak boleh spasi dan tidak boleh memiliki nama yang sama dengan
> database lain.

Untuk membuat table:

```sql
CREATE TABLE mahasiswa (
  id INT NOT NULL PRIMARY KEY,
  nama VARCHAR(20) NOT NULL,
  alamat VARCHAR(50) NOT NULL
);
```

### ALTER

Untuk membuat perubahan pada struktur table tanpa menghapus.

Contoh:

```sql
ALTER TABLE mahasiswa
ADD alamat VARCHAR(50) NOT NULL;
```

### DROP

Untuk menghapus seluruh objek di dalam database.

Contoh:

```sql
DROP DATABASE mahasiswa;
```

### RENAME

## Data Manipulatian Language (DDL)

- `INSERT`
- `SELECT`
- `UPDATE`
- `DELETE`

## Join Table

- `INNER JOIN`
- `OUTER JOIN (LEFT JOIN, RIGHT JOIN)`

## Fungsi String dan Order

- String
- Order

## Aggregate dan DATE

- Aggregate
- DATE

## Sub-Query
