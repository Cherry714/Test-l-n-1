<script>
    const options = document.querySelectorAll('.options li');
    const submitBtn = document.getElementById('submitBtn');
    let selectedAnswer = null;

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedAnswer = option.getAttribute('data-answer');
        submitBtn.disabled = false;
      });
    });

    submitBtn.addEventListener('click', () => {
      if (selectedAnswer) {
        alert(`Bạn đã chọn: ${selectedAnswer}`);
        // Tại đây, bạn có thể xử lý thêm như gửi dữ liệu hoặc chuyển sang câu hỏi tiếp theo
      }
    });
  </script>

</body>
</html>
