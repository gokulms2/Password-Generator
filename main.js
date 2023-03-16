function genpsw() {
    let output = document.getElementById("output")
    let char = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*+-?_"
    let length = document.getElementById("length").value - 1
    let password = ""
    for (let i = 0; i <= length; i++) {
        let random = Math.floor(Math.random() * char.length)
        password += char.substring(random, random + 1)
    }
    output.value = password
}
function copypsw() {
    output.select()
    document.execCommand("copy")
}
function reload() {
    document.getElementById("reload").reset();


}