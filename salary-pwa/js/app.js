const grade = document.getElementById("grade");
const stage = document.getElementById("stage");

// تعبئة قائمة الدرجات
GRADES.forEach(item => {

    const option = document.createElement("option");

    option.value = item;
    option.textContent = "الدرجة " + item;

    grade.appendChild(option);

});

// عند تغيير الدرجة
grade.addEventListener("change", () => {

    stage.innerHTML = "<option value=''>اختر المرحلة</option>";

    const total = STAGES[grade.value];

    if (!total) return;

    for (let i = 1; i <= total; i++) {

        const option = document.createElement("option");

        option.value = i;
        option.textContent = "المرحلة " + i;

        stage.appendChild(option);

    }

    calculateSalary();

});

// جميع العناصر التي تؤثر على الحساب
const controls = [

    "stage",
    "certificate",
    "risk",
    "marital",
    "children"

];

// إعادة الحساب عند تغيير أي عنصر
controls.forEach(id => {

    document.getElementById(id).addEventListener("change", calculateSalary);

    document.getElementById(id).addEventListener("keyup", calculateSalary);

});

// زر الحساب (يبقى موجودًا أيضاً)
document.getElementById("calculate").addEventListener("click", calculateSalary);

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js");

    });

}