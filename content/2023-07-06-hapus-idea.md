+++
title     = "Hapus .idea dari git"
date      = "2023-06-07"
+++

Folder <mark>.idea</mark> sangat mengganggu jika masuk kedalam github. Untuk menghapusnya, dapat melakukan:

1. tambahkan <mark>.idea</mark> di <mark>.gitignore</mark>,
2. check file dari main dengan `git checkout main -- .gitignore`
3. hapus <mark>.idea</mark> dari git tree dengan menggunakan `git rm --cached -r .idea`
4. commit, push.

Masalah selesai.
