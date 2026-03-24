# Практична робота №2: Трансформація даних

## Фрагменти коду з App.jsx

### Використання .sort() та .map() для всіх студентів:
```javascript
const sortedStudents = [...students].sort((a, b) => b.score - a.score);

// ... в JSX:
<ul className="students-list">
  {sortedStudents.map(student => (
    <li 
      key={student.id} 
      className="student-item"
      style={!student.isActive ? { 
        color: '#9ca3af', 
        textDecoration: 'line-through', 
        opacity: 0.6 
      } : {}}
    >
      <strong>{student.name}</strong> — {student.score} балів
    </li>
  ))}
</ul>
```

### Використання .filter().map() для топ-студентів:
```javascript
const activeTopStudents = students
  .filter(student => student.isActive && student.score > 60);

// ... в JSX:
<ul className="students-list">
  {activeTopStudents.map(student => (
    <li key={student.id} className="student-item active-top">
      <strong>{student.name}</strong> — {student.score} балів
    </li>
  ))}
</ul>
```

### Використання .reduce() для середнього бала:
```javascript
const activeStudents = students.filter(student => student.isActive);
const averageScore = activeStudents.length > 0 
  ? activeStudents.reduce((acc, student) => acc + student.score, 0) / activeStudents.length
  : 0;

// ... в JSX:
<p>Середній бал активних студентів: <span className="accent-text">{averageScore.toFixed(1)}</span></p>
```

## Відповіді на контрольні запитання

### 1. Чому обов'язково використовувати атрибут key і що буде без нього?
Атрибут `key` є обов'язковим для правильної роботи алгоритму Reconciliation. React використовує ключі, щоб відстежувати, які саме елементи у списку були змінені, додані або видалені між рендерами. Без унікального ключа React не зможе точно ідентифікувати елементи, що призведе до повного перемалювання списку (втрата продуктивності), можливої некоректної прив'язки локального стану (state) до неправильних DOM-вузлів і появи попереджень у консолі.

### 2. У чому різниця між .map() та .forEach() і чому останній не підходить для JSX?
Метод `.map()` створює і повертає **новий масив**, заповнений результатами виклику переданої функції для кожного елемента. React може безпосередньо відрендерити цей новий масив JSX-елементів. 
Натомість `.forEach()` просто виконує передану функцію для кожного елемента масиву, але **повертає `undefined`**. Оскільки JSX очікує отримати масив елементів для відтворення, повернений `undefined` від `.forEach()` призведе до того, що на екрані нічого не з'явиться.

### 3. Чому не рекомендується використовувати індекс масиву як ключ при зміні списку?
Якщо використовувати індекс (0, 1, 2...) як `key`, то при зміні списку (наприклад, при сортуванні, додаванні нових елементів на початок або видаленні) індекси елементів зсунуться. React вважатиме, що компонент з `key="0"` залишився тим самим (навіть якщо тепер це зовсім інший елемент даних), і не оновить його належним чином, або помилково залишить його внутрішній стан (наприклад, введений текст в інпут) для нового елемента, який став на його місце.
