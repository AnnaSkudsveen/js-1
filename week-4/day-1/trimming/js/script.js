const carName = "   B M W   ";
console.log(carName);

// trim() will removw spaces and leave a perfect string
const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, " ");
console.log(trimmedCarName);

const family = "👨‍👩‍👧‍👦".split(/(?:)/u);
console.log(family);
