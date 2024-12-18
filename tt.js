// Lấy phần tử hiển thị thông báo
const message = document.getElementById('message');

// Thêm sự kiện cho nút "Yes" và "No" của từng câu hỏi
document.getElementById('yes1').addEventListener('click', function() {
    message.textContent = "Chúc mừng! Bạn đã chọn đúng, Đạt rất đẹp trai!";
    message.style.color = 'green';
});

document.getElementById('no1').addEventListener('click', function() {
    message.textContent = "Buồn quá! Bạn chọn sai rồi, Đạt rất đẹp trai mà.";
    message.style.color = 'red';
});

document.getElementById('yes2').addEventListener('click', function() {
    message.textContent = "Chính xác! Đạt là người tốt bụng.";
    message.style.color = 'green';
});

document.getElementById('no2').addEventListener('click', function() {
    message.textContent = "Ôi không! Bạn chọn sai, Đạt rất tốt bụng.";
    message.style.color = 'red';
});

document.getElementById('yes3').addEventListener('click', function() {
    message.textContent = "Cảm ơn Uyên nhé! Đạt rất vui!";
    message.style.color = 'green';
});

document.getElementById('no3').addEventListener('click', function() {
    message.textContent = "Uyên không cho tiền Đạt? Buồn quá!";
    message.style.color = 'red';
});
