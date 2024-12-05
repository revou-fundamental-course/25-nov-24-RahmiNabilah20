//ini file javascript

function calculateBMI(){
    const weight = parseFloat(document.getElementById("berat-badan-input").value);
    const height = parseFloat(document.getElementById("tinggi-badan-input").value)/100;

    if (isNaN(weight) || isNaN(height) || weight <=0 || height <= 0){
        alert("Harap masukkan nilai berat dan tinggi badan yang valid.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("bmi-value").textContent = `BMI: ${bmi}`;

    let category = "";
    let advice = "";

    if (bmi < 18.5) {
        category = "Berat Badan Kurang";
        advice = "Anda disarankan untuk meningkatkan asupan kalori.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        advice = "Selamat! Berat badan Anda berada dalam kategori normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Berat Badan Lebih";
        advice = "Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.";
    } else {
        category = "Obesitas";
        advice = "Segera konsultasikan dengan dokter atau ahli gizi.";
    }

    document.getElementById("bmi-category").textContent = `Kategori: ${category}`;
    document.getElementById("bmi-advice").textContent = advice;
}

function downloadResult() {
    const bmiValue = document.getElementById("bmi-value").textContent;
    const bmiCategory = document.getElementById("bmi-category").textContent;
    const advice = document.getElementById("bmi-advice").textContent;

    const content = `${bmiValue}\n${bmiCategory}\n${advice}`;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "BMI_Result.txt";
    link.click();
}
