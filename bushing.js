// MODAL WINDOW

const modal = document.getElementById("my_modal");
const btn = document.getElementById("btn_modal_window");
const span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//МАСКА ДЛЯ ТЕЛЕФОНА 

window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        let keyCode;
        let FormText = document.getElementById('text');
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+375 (__)___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            if (new_value[6] == 5 || new_value[6] == 6 || new_value[6] == 7 || new_value[6] == 8 || new_value[6] == 9 ||
                new_value[6] == 0) {
                FormText.textContent = 'Пожалуйста, ведите номер в верном формате';
            } else if (new_value[7] == 1 || new_value[7] == 2 || new_value[7] == 6 || new_value[7] == 8 || new_value[7] == 0 ||
                new_value[7] == 5 || new_value[7] == 7 || new_value[7] == 4) {
                FormText.textContent = 'Пожалуйста, ведите номер в верном формате';
            }
            if (new_value[6] == 1 && new_value[7] == 7 || new_value[6] == 2 && new_value[7] == 5 || new_value[6] == 2 &&
                new_value[7] == 9 || new_value[6] == 3 && new_value[7] == 3 || new_value[6] == 4 && new_value[7] == 4) {
                FormText.textContent = '';
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
