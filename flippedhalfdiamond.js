function flippedHalfDiamond(n) {

    // upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        for (let k = 1; k <= i; k++) {
            row += "*";
        }

        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        for (let k = 1; k <= i; k++) {
            row += "*";
        }

        console.log(row);
    }
}

flippedHalfDiamond(5);