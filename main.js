function Calc (operator, a , b) {

    const operations = {
        "sub": a - b,
        "sum": a + b,
        "mult": a * b,
        "div": a / b,
    }
    if (operator in operations && 
        typeof a === "number" && 
        typeof b === "number" && 
        a === a && 
        b === b) {
            return operations[operator];
        } else if (!(operator in operations)) {
            return "unknown operation";
        } else return "error";
}
console.log(Calc("subg", 20, 20));