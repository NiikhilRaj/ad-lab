// Shared JS for 30 questions
// Q1
function p1_add() { document.getElementById('p1_dest').innerHTML += '<p>New Paragraph</p>'; }
// Q2
function p2_update() { document.querySelector('#p2_table tr td').innerText = document.getElementById('p2_in').value; }
// Q3: handled inline
// Q4
function startClock() { setInterval(() => { if (document.getElementById('p4_clock')) document.getElementById('p4_clock').innerText = new Date().toLocaleTimeString(); }, 1000); }
// Q5: handled inline
// Q6
function p6_val() { let e = document.getElementById('p6_email').value; document.getElementById('p6_err').innerText = e.includes('@') ? "" : "Invalid Email"; }
// Q7: handled inline
// Q8
function p8_change() { const map = { 'Fruits': ['Apple', 'Mango'], 'Tech': ['AI', 'Web'] }; const val = document.getElementById('p8_cat').value; const sub = document.getElementById('p8_sub'); sub.innerHTML = map[val].map(i => `<option>${i}</option>`).join(''); }
// Q9: handled inline
// Q10
function p10_move() { const b = document.getElementById('p10_box'); let pos = 0; let id = setInterval(() => { if (pos == 300) clearInterval(id); else { pos++; b.style.left = pos + 'px'; } }, 1); }
// Q11
function initTheme() { if (localStorage.getItem('theme')) document.body.style.backgroundColor = localStorage.getItem('theme'); }
// Q12
function p12_gen() { const c = document.getElementById('p12_chart'); c.innerHTML = '';[50, 80, 30, 90, 20].forEach(h => { let b = document.createElement('div'); b.style.height = h + 'px'; b.style.width = '20px'; b.style.background = 'blue'; b.style.margin = '2px'; c.appendChild(b); }); }
// Q13
function p13_add() { document.getElementById('p13_cart').innerHTML += '<li>Item <button onclick="this.parentElement.remove()">Remove</button></li>'; }
// Q14
async function p14_fetch() { const r = await fetch('https://jsonplaceholder.typicode.com/users/1'); const d = await r.json(); document.getElementById('p14_res').innerText = d.name; }
// Q15
function p15_filter(input) { document.querySelectorAll('#p15_list li').forEach(li => { li.style.display = li.innerText.toLowerCase().includes(input.value.toLowerCase()) ? 'block' : 'none'; }); }
// Q16
function p16_count(txt) { document.getElementById('p16_disp').innerText = `${txt.value.length}/20`; if (txt.value.length >= 18) alert("Limit close!"); }
// Q17
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) { ev.preventDefault(); var data = ev.dataTransfer.getData("text"); ev.target.appendChild(document.getElementById(data)); }
// Q18
function p18_page(n) { document.getElementById('p18_content').innerText = n === 1 ? "Page 1 Data: Alice, Bob" : "Page 2 Data: Charlie, Dave"; }
// Q19
let imgIdx = 0; const imgs = ['https://via.placeholder.com/150/0000FF', 'https://via.placeholder.com/150/FF0000']; function p19_nav(d) { imgIdx = (imgIdx + d + imgs.length) % imgs.length; document.getElementById('p19_img').src = imgs[imgIdx]; }
// Q20
function p20_add() { let d = document.getElementById('p20_desc').value; let a = document.getElementById('p20_amt').value; document.getElementById('p20_list').innerHTML += `<li>${d}: $${a}</li>`; }
// Q21: handled inline
// Q22
function p22_tab(n) { document.getElementById('p22_c').innerText = n === 0 ? "Content 1" : "Content 2"; document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active-tab', i === n)); }
// Q23: handled inline
// Q24
function p24_high(e) { if (e.target.tagName === 'TD') e.target.parentElement.style.background = '#eee'; }
function p24_low(e) { if (e.target.tagName === 'TD') e.target.parentElement.style.background = 'white'; }
// Q25
function p25_filt(cat) { document.querySelectorAll('#p25_l li').forEach(li => { li.style.display = (cat === 'all' || li.classList.contains(cat)) ? 'block' : 'none'; }); }
// Q26
function startRotator() { setInterval(() => { const img = document.getElementById('p26_img'); if (img) img.style.transform = `rotate(${new Date().getSeconds() * 6}deg)`; }, 1000); }
// Q27: handled inline
// Q28
function setGreeting() { const h = new Date().getHours(); const m = h < 12 ? "Good Morning" : h < 18 ? "Good Afternoon" : "Good Evening"; if (document.getElementById('p28_msg')) document.getElementById('p28_msg').innerText = m; }
// Q29: handled inline
// Q30: handled inline
