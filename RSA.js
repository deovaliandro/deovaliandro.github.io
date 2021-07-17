function gcd(n1, n2) {
    var temp = 0;
    while (n2 != 0) {
        temp = n1 % n2;
        n1 = n2;
        n2 = temp;
    }
    return n1;
}
