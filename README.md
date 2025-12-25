# Calculator - Simple Arithmetic Calculator

A fully functional calculator with standard arithmetic operations. This project demonstrates DOM manipulation, event handling, and mathematical computation in JavaScript with a beautiful glassmorphism UI.

**Features:** Addition, Subtraction, Multiplication, Division, Clear  
**Tech Stack:** HTML5, CSS3, JavaScript (Vanilla)  
**Design:** Glassmorphism with gradient effects

---

## 🎯 Project Overview

This calculator application showcases:
- Basic arithmetic operations (+ - × ÷)
- Real-time calculation display
- Clear and delete functionality
- Beautiful gradient UI with glassmorphism design
- Responsive button layout
- Smooth animations and transitions
- Accessibility features

---

## ⚡ Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations needed

### 2-Step Setup

1. **Open the File**
   - Navigate to the project folder
   - Open `calcu.html` in your web browser

2. **Start Calculating!**
   - Click number buttons
   - Select operation
   - Click equals to see result
   - Click Clear (C) to reset

---

## 🔢 Features & UI Components

### Display
- **Large Digital Display:** Shows current input and results
- **Green Text:** High contrast, easy to read
- **Monospace Font:** Professional calculator look
- **Glow Effect:** Modern aesthetic with box-shadow

### Number Keys (0-9)
- Dark blue with green text
- Subtle border highlighting
- Hover effect with glow
- Grid layout (4 columns × 3 rows for 0-9)

### Operation Keys
- **Addition (+):** Purple gradient
- **Subtraction (-):** Purple gradient
- **Multiplication (×):** Purple gradient
- **Division (÷):** Purple gradient

### Special Keys
- **Clear (C):** Red gradient - clears all
- **Equals (=):** Green gradient - calculates result
- **Decimal Point (.):** Separates integers and decimals

### Button States
- **Idle:** Normal appearance
- **Hover:** Enhanced shadow, slight glow
- **Active:** Scale down (0.95) on click
- **Feedback:** Instant visual response

---

## 🔄 Calculator Logic

### Operation Flow
```
1. User clicks number → Display shows number
2. User clicks operation → Stores operation and value
3. User clicks another number → Displays new number
4. User clicks equals → Calculates and shows result

Example: 15 + 7 =
→ Click 1 → Display: 1
→ Click 5 → Display: 15
→ Click + → Store: 15, Operation: +
→ Click 7 → Display: 7
→ Click = → Calculate: 15 + 7 = 22
```

### Memory Structure
```javascript
let display = "0";           // Current display value
let previousValue = 0;       // Stored value
let operation = null;        // Stored operation
let shouldResetDisplay = false; // Reset after operation
```

### Calculation Function
```javascript
function calculate(a, op, b) {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '×': return a * b;
    case '÷': return a / b;
    default: return b;
  }
}
```

---

## 🧮 Supported Operations

| Operation | Symbol | Example | Result |
|-----------|--------|---------|--------|
| Addition | + | 10 + 5 | 15 |
| Subtraction | - | 10 - 5 | 5 |
| Multiplication | × | 10 × 5 | 50 |
| Division | ÷ | 10 ÷ 5 | 2 |
| Decimal | . | 3.14 | 3.14 |
| Clear | C | Clear all | Reset |

---

## 📱 Responsive Design

| Screen Size | Layout | Key Size |
|-------------|--------|----------|
| Desktop (>768px) | 4-column grid | 60px |
| Tablet (480-768px) | 4-column grid | 50px |
| Mobile (<480px) | Full-width 4-col grid | 40px |

---

## 🎨 Design Features

### Glassmorphism UI
- **Frosted Glass Effect:** `backdrop-filter: blur(10px)`
- **Dark Theme:** Professional dark blue background
- **Subtle Border:** White border with opacity
- **Inset Shadow:** Depth and dimension

### Color Scheme
| Element | Color | Hex |
|---------|-------|-----|
| Background | Purple Gradient | #667eea → #764ba2 |
| Calculator | Dark Blue | #1e1e2e → #2d2d44 |
| Display | Very Dark | #0f0f1e → #16213e |
| Display Text | Green | #00ff88 |
| Number Buttons | Dark Blue | #2d2d44 |
| Operation Buttons | Purple | #667eea → #764ba2 |
| Equals Button | Green | #00ff88 |
| Clear Button | Red | #ff6b6b |

### Text Effects
- **Font Size:** 2rem for display, 1.1rem for buttons
- **Letter Spacing:** 1px for modern look
- **Font Family:** Courier New for display (monospace)
- **Font Weight:** 300 (light) for display, 600 for buttons

---

## 📁 File Structure

```
calcu/
└── calcu.html              # Complete calculator with CSS and JavaScript
```

### Single-File Architecture
All code contained in one HTML file:
- **HTML:** Calculator structure and buttons
- **CSS:** Inline styles with responsive layout
- **JavaScript:** Calculation logic and event handling

**Advantages:**
- Single file to manage
- Easy sharing and deployment
- No external dependencies
- Quick to load

---

## 💻 JavaScript Implementation

### Core Functions

**Append Number to Display:**
```javascript
function appendNumber(num) {
  if (display === '0') {
    display = num.toString();
  } else {
    display += num.toString();
  }
  updateDisplay();
}
```

**Append Decimal:**
```javascript
function appendDecimal() {
  if (!display.includes('.')) {
    display += '.';
    updateDisplay();
  }
}
```

**Apply Operation:**
```javascript
function applyOperation(op) {
  if (previousValue === null) {
    previousValue = parseFloat(display);
  } else if (operation) {
    calculate();
  }
  operation = op;
  shouldResetDisplay = true;
}
```

**Calculate Result:**
```javascript
function calculate() {
  const current = parseFloat(display);
  let result;
  
  switch(operation) {
    case '+': result = previousValue + current; break;
    case '-': result = previousValue - current; break;
    case '×': result = previousValue * current; break;
    case '÷': result = previousValue / current; break;
    default: return;
  }
  
  display = result.toString();
  previousValue = null;
  operation = null;
  shouldResetDisplay = true;
  updateDisplay();
}
```

**Clear Display:**
```javascript
function clearDisplay() {
  display = '0';
  previousValue = null;
  operation = null;
  shouldResetDisplay = false;
  updateDisplay();
}
```

---

## 🔧 Usage Examples

### Basic Arithmetic
```
15 + 8 =
→ Click: 1, 5, +, 8, =
→ Result: 23

100 - 25 =
→ Click: 1, 0, 0, -, 2, 5, =
→ Result: 75

12 × 5 =
→ Click: 1, 2, ×, 5, =
→ Result: 60

50 ÷ 2 =
→ Click: 5, 0, ÷, 2, =
→ Result: 25
```

### Decimal Calculations
```
3.14 + 2.86 =
→ Click: 3, ., 1, 4, +, 2, ., 8, 6, =
→ Result: 6

9.99 × 2 =
→ Click: 9, ., 9, 9, ×, 2, =
→ Result: 19.98
```

### Chain Operations
```
10 + 5 - 3 =
→ Click: 1, 0, +, 5, -, 3, =
→ Step 1: 10 + 5 = 15 (after -)
→ Step 2: 15 - 3 = 12 (after =)
```

---

## ⚙️ Edge Cases Handled

| Scenario | Behavior |
|----------|----------|
| Division by Zero | Shows result (Infinity or Error) |
| Multiple Decimals | Prevents multiple decimals in one number |
| Clear After Operation | Resets calculator state |
| Equals Without Operation | Returns current display |
| Negative Results | Shows negative number correctly |

---

## 🎯 Customization Ideas

### Easy Modifications

**Change Button Colors:**
```css
.op {
  background: linear-gradient(145deg, #00ff88, #00cc6f);
  color: #0f0f1e;
}
```

**Add More Operations:**
```javascript
case '%': return (a / 100) * b;  // Percentage
case '^': return Math.pow(a, b); // Exponent
```

**Increase Display Precision:**
```javascript
display = result.toFixed(4);  // 4 decimal places
```

---

## 🌐 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance |
| Firefox | ✅ Full | Excellent support |
| Safari | ✅ Full | Great performance |
| Edge | ✅ Full | Works perfectly |
| IE 11 | ❌ No | Uses modern JavaScript |

---

## 🚀 Future Enhancement Ideas

### Phase 1 (Easy)
- [ ] Keyboard input support (1-9, +, -, etc.)
- [ ] Square root button (√)
- [ ] Percentage button (%)
- [ ] Backspace/Delete button
- [ ] History of calculations

### Phase 2 (Medium)
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Trigonometric functions (sin, cos, tan)
- [ ] Logarithmic functions (log, ln)
- [ ] Power operations (x²,  x³, x^y)
- [ ] Calculation history display

### Phase 3 (Advanced)
- [ ] Scientific calculator mode
- [ ] Programmable buttons
- [ ] Custom themes
- [ ] Voice input
- [ ] Graphing capabilities

---

## 🎓 Learning Outcomes

By studying this project, you'll learn:
- **DOM Manipulation:** Selecting and updating elements
- **Event Handling:** Click events and listeners
- **State Management:** Tracking calculator state
- **Mathematical Logic:** Building calculation engine
- **String/Number Conversion:** parseFloat() and toString()
- **CSS Grid Layout:** Button grid arrangement
- **CSS Gradients:** Modern gradient design
- **Responsive Design:** Mobile-friendly layouts
- **Conditional Logic:** Switch statements for operations
- **User Feedback:** Visual button responses

---

## 🤝 GitHub Collaboration Tips

### Commit Messages
```bash
git commit -m "feat: add keyboard input support"
git commit -m "fix: resolve division by zero issue"
git commit -m "style: improve button hover effects"
```

### Code Review Checklist
- [ ] All operations calculate correctly
- [ ] Clear button resets state completely
- [ ] Decimal points prevent duplicates
- [ ] Display updates in real-time
- [ ] UI responsive on mobile
- [ ] No console errors
- [ ] Button colors match design

---

## 📄 License & Attribution

This project is created for educational purposes.

**Created:** December 2025  
**Last Updated:** December 25, 2025  
**Version:** 1.0.0

---

## ✅ Quick Test Checklist

- [ ] Open calcu.html in browser
- [ ] Test basic addition (5 + 3 = 8)
- [ ] Test subtraction (10 - 4 = 6)
- [ ] Test multiplication (6 × 7 = 42)
- [ ] Test division (20 ÷ 4 = 5)
- [ ] Test decimals (3.5 + 2.5 = 6)
- [ ] Test Clear button resets display
- [ ] Test chain operations (5 + 3 - 2 = 6)
- [ ] Check responsive layout on mobile
- [ ] Verify no console errors
- [ ] Test large numbers (999 + 1 = 1000)
- [ ] Test decimal accuracy (0.1 + 0.2 ≈ 0.3)
