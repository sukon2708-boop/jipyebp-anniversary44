const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
3 months with you
3 เดือนแล้วววว ฮี่ฮี่ ขอบคุณเธอที่เข้ามาเป็นความสุขในชีวิตเค้านะ เธอทำให้เค้ามีความสุขมากๆ แล้วก็ทำให้เค้ายิ้มได้ทุกวันเลย ถึงจะเป็นวันที่เค้าเหนื่อย แต่แค่มีเธออยู่ เค้าก็ยิ้มได้แล้ว

ขอบคุณที่คอยดูแลเค้าดีมากๆ เลยนะ ไม่ว่าเค้าจะทำอะไร เพราะเค้าเป็นคนซุ่มซ่ามมากๆ แต่เธอก็คอยดูแลเค้าดีตลอดเลย ขอบคุณที่รักและดูแลเค้าขนาดนี้นะ

เค้าอยากให้เธอรู้ไว้นะว่า เค้ารักเธอที่เธอเป็นเธอแบบนี้เลย รักที่เธอชอบกวน ชอบแกล้งเค้า แล้วก็อยากให้เธอเป็นแบบนี้กับเค้าไปนานๆเลยนะ

ขอบคุณที่คอยซัพพอร์ตเค้าในทุกๆ เรื่องเลยนะ ต่อจากนี้เค้าก็จะคอยซัพพอร์ตเธอในทุกๆ เรื่องเหมือนกัน ไม่ว่าจะเจออะไร เค้าจะอยู่ข้างๆ เธอนะ

รักอ้วนที่สุดเลยนะ ขอบคุณที่เข้ามาอยู่ในชีวิตเค้านะ ขอให้เราได้อยู่ด้วยกันแบบนี้ไปนานๆ เลยยย🤍
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
