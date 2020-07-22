function longestDynasty(reigns) {

    let longest = [];

    for (const reign of reigns) {
        const tmpReign = Object.entries(reign)[0];
        
        if (longest.length == 0) {
            longest = tmpReign;
        }else{
            const prevYear = convertYear(longest[1]);
            const curYear = convertYear(tmpReign[1]);

            if (prevYear < curYear) {
                longest = tmpReign;
            }
        }
    }

    return longest.length > 0 ? longest[0] : 'No Data';
}

function convertYear(year) {

    const ref = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const results = [];
    let numYear = 0;
    let dupRule = [0, 0];

    for (const c of year) {
        const val = ref[c];
        if (!val) return 'Invalid';

        // dup rule
        if (dupRule[0] == val) {
            dupRule[1] += 1;
        }else{
            dupRule = [val, 1];
        }

        if (dupRule[1] >= 4) return 'Invalid';
        
        const prev = results.length > 0 ? results[results.length - 1] : 0;

        // decend order
        if (results.length > 2) {
            const prev2 = results[results.length - 2];
            if (val > prev && val > prev2) return 'Invalid';
        }

        results.push(val);
        numYear += val;

        if (prev < val) {
            numYear -= prev; // remove prev val
            numYear -= val; // deduct current
            numYear += (val - prev);
        }
    }

    return numYear;
}

console.log('test: ', convertYear('MCCCXCVIII'));
console.log('test: ', convertYear('MCCCIIII'));
console.log('test: ', convertYear('MMMXICX'));
console.log('test: ', convertYear('MCMXLIX'));

const dynasty = [
    { 'San Dynasty': 'MXLI' },
    { 'Viloria Dynasty': 'MCCCIIII' },
    { 'Tan Dynasty': 'MCCCXCVIII' },
    { 'Bon Dynasty': 'MCDXLV' },
    { 'Maiko Dynasty': 'MDCLXIV' },
    { 'Paul Dynasty': 'MCMXLIX' },
    { 'Andre Dynasty': 'MMMXICX' }
];

const longest = longestDynasty(dynasty);
console.log('longest: ', longest);