const SymbolMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
} as const;

const times = (count: number) => Array.from(Array(count).keys());

export const toRoman = (num: number) => {
    const numberArray = num.toString().split('').map(Number).map((digit, index) => {
        return digit * 10 ** (num.toString().length - index - 1)
    }).filter(Boolean)

    const result = [];

    numberArray.forEach(digit => {
        let rem = digit;
        for (const symbol in SymbolMap) {
            const value = SymbolMap[symbol];
            const subtractValue = (10 ** (digit.toString().length - 1));

            if(value - digit === subtractValue) {
                //exception
                result.push(Object.keys(SymbolMap).find(key => SymbolMap[key] === subtractValue));
                result.push(symbol);
                return;
            }

            const repeat = Math.floor(rem / value);
            if(repeat > 0) {
                times(repeat).forEach(() => {
                    result.push(symbol);
                })
                rem = rem % value;
            }
        }
    })


    return result.join('');
}
