// ✅SOLUTION:

    solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
        let kelvin = 273.15 + temp;
        let gasConst = 0.082;
        total = ((givenMass1/molarMass1 + givenMass2/molarMass2) * gasConst *  kelvin)/volume
        return total
    }

console.log('solution: ', solution(44, 30, 3, 2, 5, 50))