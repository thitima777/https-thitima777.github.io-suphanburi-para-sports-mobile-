/* ===== MOBILE MAIN JS ===== */

/* 1) เมนูพับ (Hamburger Menu) */
function toggleMenu() {
  const nav = document.querySelector('.mobile-nav');

  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
}

/* 2) ปิดเมนูอัตโนมัติเมื่อกดลิงก์ (มือถือ) */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.mobile-nav a');
  const nav = document.querySelector('.mobile-nav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.style.display = 'none';
      }
    });
  });
});

/* 3) เอฟเฟกต์เลื่อนเข้า (Fade In) เบา ๆ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll(
  '.mobile-content section, .activity-card, .achievement-card, .donate-card, .contact-card'
).forEach(el => {
  observer.observe(el);
});

/* 4) ข้อความขอบคุณหลังส่งฟอร์ม Donate */
const donateForm = document.querySelector('.donate-form');

if (donateForm) {
  donateForm.addEventListener('submit', function (e) {
    e.preventDefault();

    alert('🙏 ขอบพระคุณสำหรับการสนับสนุนชมรมกีฬาคนพิการจังหวัดสุพรรณบุรี');

    donateForm.reset();
  });
}
