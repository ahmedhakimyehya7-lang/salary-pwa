
function formatNumber(number) {

    return Number(number).toLocaleString("en-US");

}
function calculateSalary() {

    const grade = document.getElementById("grade").value;
    const stage = document.getElementById("stage").value;
    const certificate = document.getElementById("certificate").value;
    const risk = Number(document.getElementById("risk").value);
    const marital = document.getElementById("marital").value;
    const children = Number(document.getElementById("children").value);

    if (grade === "" || stage === "") {
        alert("يرجى اختيار الدرجة والمرحلة");
        return;
    }

    let basicSalary = 0;

    if (SALARIES[grade] && SALARIES[grade][stage]) {
        basicSalary = SALARIES[grade][stage];
    }

    // مخصصات الشهادة
    const certificatePercent = CERTIFICATES[certificate] || 0;
    const certificateAllowance = basicSalary * certificatePercent / 100;

    // مخصصات الخطورة
    const riskAllowance = basicSalary * risk / 100;

    // مخصصات الزوجية
    let maritalAllowance = 0;

    if (marital === "متزوج") {
        maritalAllowance = 50000;
    }

    // مخصصات الأطفال
    const childrenAllowance = children * 10000;

    // استقطاع التقاعد (مؤقت)
    const retirementDeduction = basicSalary * 0.10;

    // الراتب الكلي
    const totalSalary =
        basicSalary +
        certificateAllowance +
        riskAllowance +
        maritalAllowance +
        childrenAllowance -
        retirementDeduction;

 // عرض النتائج
document.getElementById("basic").textContent =
    formatNumber(basicSalary);

document.getElementById("certificateAllowance").textContent =
    formatNumber(certificateAllowance);

document.getElementById("riskAllowance").textContent =
    formatNumber(riskAllowance);

document.getElementById("maritalAllowance").textContent =
    formatNumber(maritalAllowance);

document.getElementById("childrenAllowance").textContent =
    formatNumber(childrenAllowance);

document.getElementById("retirementDeduction").textContent =
    formatNumber(retirementDeduction);

document.getElementById("totalSalary").textContent =
    formatNumber(totalSalary);
}