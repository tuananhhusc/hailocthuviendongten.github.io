const locThanh = [
    "Lộc thánh 1: An khang thịnh vượng",
    "Lộc thánh 2: Vạn sự như ý",
    "Lộc thánh 3: Tài lộc dồi dào",
    "Lộc thánh 4: Sức khỏe dồi dào",
    "Lộc thánh 5: Gia đình hạnh phúc",
    // Thêm nhiều lộc thánh khác ở đây
];

function randomLocThanh() {
    const randomIndex = Math.floor(Math.random() * locThanh.length);
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = locThanh[randomIndex];
}