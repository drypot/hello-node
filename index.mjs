const numbers = [33, 46, 76, 44, 32, 3]

for (let i = 0; i < numbers.length; i++) {
  console.log(`${i} ${numbers[i]}`)
}

for (const i in numbers) {
  console.log(`${i} ${numbers[i]}`)
}

for (const num of numbers) {
  console.log(`${num}`)
}

for (const [i, num] of numbers.entries()) {
  console.log(`${i} ${num}`)
}

numbers.forEach((num, i) => {
  console.log(`${i} ${num}`)
})

