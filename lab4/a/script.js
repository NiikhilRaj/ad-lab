
// 1. Age Calculator
function calculateAge() {
    const dob = new Date(document.getElementById('dobInput')?.value);
    const now = new Date();
    if (!dob || isNaN(dob)) return;
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    if (months < 0 || (months === 0 && days < 0)) years--;
    const el = document.getElementById('res1');
    if (el) el.textContent = `Age: ${years} years`;
}

// 2. Dynamic List
function addListItem() {
    const val = document.getElementById('listInput')?.value;
    if (val) {
        const li = document.createElement('li');
        li.textContent = val;
        document.getElementById('dynamicList')?.appendChild(li);
        document.getElementById('listInput').value = '';
    }
}

// 3. Font Switcher
function changeFont(font) {
    const el = document.getElementById('fontText');
    if (el) el.style.fontFamily = font;
}

// 4. Factorial
function calculateFactorial() {
    let n = parseInt(document.getElementById('factInput')?.value || '0');
    if (isNaN(n) || n < 0) n = 0;
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    const el = document.getElementById('res4');
    if (el) el.textContent = `Factorial: ${f}`;
}

// 5. Keyword Highlight
function highlightText() {
    const textP = document.getElementById('searchableText');
    const key = document.getElementById('searchInput')?.value;
    if (!textP) return;
    textP.innerHTML = textP.textContent;
    if (key) {
        const regex = new RegExp(`(${key})`, 'gi');
        textP.innerHTML = textP.textContent.replace(regex, '<span class="highlight">$1</span>');
    }
}

// 6. Dynamic Table
function generateTable() {
    const r = parseInt(document.getElementById('rows')?.value || '0');
    const c = parseInt(document.getElementById('cols')?.value || '0');
    let html = '';
    for (let i = 0; i < r; i++) {
        html += '<tr>';
        for (let j = 0; j < c; j++) html += `<td>R${i + 1}C${j + 1}</td>`;
        html += '</tr>';
    }
    const table = document.getElementById('dynamicTable');
    if (table) table.innerHTML = html;
}

// 7. Image Preview
function previewImage(event) {
    const file = event?.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
        const img = document.getElementById('img-preview');
        if (img) img.src = reader.result;
    };
    reader.readAsDataURL(file);
}

// 8. To-Do List
function addTodo() {
    const task = document.getElementById('todoInput')?.value;
    if (task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `<span onclick="this.classList.toggle('completed')">${task}</span> <button style=\"width:auto; padding:2px 5px;\" onclick=\"this.parentElement.remove()\">X</button>`;
        document.getElementById('todoList')?.appendChild(li);
        document.getElementById('todoInput').value = '';
    }
}

// 9. Login Validation
function validateLogin() {
    const u = document.getElementById('uName')?.value;
    const p = document.getElementById('uPass')?.value;
    const res = document.getElementById('res9');
    if (!res) return;
    if (u === 'admin' && p === '1234') {
        res.textContent = "Success: Logged in!";
        res.style.color = "green";
    } else {
        res.textContent = "Error: Invalid credentials.";
        res.style.color = "red";
    }
}

// 10. Quiz
function checkQuiz() {
    const ans = document.getElementById('quizAnswer')?.value;
    const res = document.getElementById('res10');
    if (res) res.textContent = (ans === '4') ? "Correct! Score: 1/1" : "Wrong! Score: 0/1";
}

// 11. Word Count
function countWords() {
    const text = document.getElementById('wordInput')?.value.trim() || '';
    const count = text ? text.split(/\s+/).length : 0;
    const el = document.getElementById('res11');
    if (el) el.textContent = `Word Count: ${count}`;
}

// 13. Enable/Disable Button
function toggleButton() {
    const val = document.getElementById('toggleInput')?.value || '';
    const btn = document.getElementById('toggleBtn');
    if (!btn) return;
    if (val.length > 0) {
        btn.disabled = false;
        btn.textContent = "I am Enabled";
    } else {
        btn.disabled = true;
        btn.textContent = "I am Disabled";
    }
}

// 14. Toggle Text
function toggleText() {
    const el = document.getElementById('toggleBlock');
    if (!el) return;
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

// 15. Even/Odd
function checkEvenOdd() {
    const n = parseInt(document.getElementById('numInput')?.value || '0');
    const el = document.getElementById('res15');
    if (el) el.textContent = (n % 2 === 0) ? "Even" : "Odd";
}

// 16. Case Converter
function convertCase(type) {
    const input = document.getElementById('caseInput');
    const el = document.getElementById('res16');
    if (!input || !el) return;
    el.textContent = (type === 'upper') ? input.value.toUpperCase() : input.value.toLowerCase();
}

// 17. Counter
let count = 0;
function updateCounter(val) {
    count += val;
    const el = document.getElementById('counterVal');
    if (el) el.textContent = count;
}

// 18. Vowel Counter
function countVowels() {
    const str = document.getElementById('vowelInput')?.value || '';
    const matches = str.match(/[aeiou]/gi);
    const el = document.getElementById('res18');
    if (el) el.textContent = `Vowels: ${matches ? matches.length : 0}`;
}

// 19. Name Animation
function animateName() {
    const name = document.getElementById('animName')?.value || '';
    const display = document.getElementById('anim-display');
    if (!display) return;
    display.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        if (i < name.length) {
            display.textContent += name.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 300);
}

// 20. Reverse String
function reverseString() {
    const s = document.getElementById('revInput')?.value || '';
    const el = document.getElementById('res20');
    if (el) el.textContent = s.split('').reverse().join('');
}
