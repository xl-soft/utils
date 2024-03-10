export function number(number: number) {
    const emoji = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
    const digits = String(number).split('')
    const result: string[] = []
    for (let i = 0; i < digits.length; i++) {
        result.push(emoji[Number(digits[i])])
    }
    return result
}