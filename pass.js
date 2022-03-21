var xyz = document.getElementById("pass");
function generate() {
    xyz.innerHTML = Math.random().toString(36).slice(2);
}     