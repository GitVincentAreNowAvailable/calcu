const display = document.getElementById('display');
let expr = '';

function updateDisplay() {
  display.textContent = expr === '' ? '0' : expr;
}

function pushValue(v) {
  // Prevent multiple leading zeros
  if (expr === '0' && v === '0') return;
  // Avoid two dots in the same number
  if (v === '.') {
    const parts = expr.split(/[\+\-\*\/%]/);
    if (parts[parts.length - 1].includes('.')) return;
  }
  expr += v;
  updateDisplay();
}

function applyBack() {
  expr = expr.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  expr = '';
  updateDisplay();
}

function safeEvaluate(s) {
  // Replace unicode symbols with JS operators
  const clean = s.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
  // Disallow letters and unsafe characters
  if (/[^0-9+\-*/%.() ]/.test(clean)) return 'Error';
  try {
    // Use Function for evaluation (simple and small); acceptable for local pages
    const result = Function('"use strict"; return (' + clean + ')')();
    if (!isFinite(result)) return 'Error';
    return String(result);
  } catch {
    return 'Error';
  }
}

document.querySelector('.keys').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const v = btn.dataset.value;
  const action = btn.dataset.action;

  if (action === 'clear') return clearAll();
  if (action === 'back') return applyBack();
  if (action === 'equals') {
    const res = safeEvaluate(expr || '0');
    expr = res === 'Error' ? '' : res;
    display.textContent = res;
    return;
  }
  if (v) {
    // operator normalization: use JS operators
    const map = { '÷': '/', '×': '*', '−': '-' };
    pushValue(map[v] || v);
  }
});

// Keyboard support
window.addEventListener('keydown', (ev) => {
  if ((ev.key >= '0' && ev.key <= '9') || ev.key === '.') pushValue(ev.key);
  if (['+', '-', '*', '/','%','(',')'].includes(ev.key)) pushValue(ev.key);
  if (ev.key === 'Backspace') applyBack();
  if (ev.key === 'Escape') clearAll();
  if (ev.key === 'Enter') {
    ev.preventDefault();
    const res = safeEvaluate(expr || '0');
    expr = res === 'Error' ? '' : res;
    display.textContent = res;
  }
});
