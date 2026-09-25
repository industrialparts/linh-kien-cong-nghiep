const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
toggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});
function sendMessage(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const message = document.querySelector('#message').value;
  const text = `Xin chào, tôi là ${name}. Số liên hệ: ${phone}. Nội dung: ${message}`;
  alert('Nội dung yêu cầu đã được tạo:\\n\\n' + text + '\\n\\nAnh cần thay chức năng này bằng liên kết Zalo hoặc dịch vụ nhận form để nhận tin nhắn thực tế.');
}
