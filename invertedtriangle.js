function invertedTriangle(n) {

    for (let i = n; i >= 1; i--) {

        let row = "";

        // spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // stars
        for (let k = 1; k <= i; k++) {
            row += "* ";
        }

        console.log(row);
    }
}

invertedTriangle(5);