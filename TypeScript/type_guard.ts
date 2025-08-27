function typeCheck(value: any): string {
    const return_value = Object.prototype.toString.call(value);
    console.log("value: ", return_value)
    const type = return_value.substring(
        return_value.indexOf(" ") + 1,
        return_value.indexOf("]")
    );
    return type.toLowerCase();
}

console.log(typeCheck([]))
console.log(typeof [])