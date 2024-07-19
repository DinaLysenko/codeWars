// ❓DESCRIPTION:
// Return the nth term of the Recamán's sequence.
//
// a(0) = 0;
//
//        a(n-1) - n, if this value is positive and not yet in the sequence
//       /
// a(n) <
//       \
//         a(n-1) + n, otherwise
// input range: 0 – 30 000

// ✅SOLUTION:

function recaman(n) {
    const sequence = [0];

    for (let i = 1; i <= n; i++) {
        const prev = sequence[i - 1];
        const next = prev - i;

        if (next > 0 && !sequence.includes(next)) {
            sequence.push(next);
        } else {
            sequence.push(prev + i);
        }
    }

    return sequence[n];
}

