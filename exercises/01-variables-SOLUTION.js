/* =====================================================================
   РЕШЕНИЕ: Глава 1 — ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ
   ---------------------------------------------------------------------
   КАК РАБОТАТЬ С ЭТИМ ФАЙЛОМ:

   1. Везде, где видишь комментарий  ← ИЗМЕНИ МЕНЯ
      напиши свой ответ вместо значения-заглушки.

   2. Файл УЖЕ запускается (ошибок синтаксиса нет).
      Запусти:  node exercises/01-variables-SOLUTION.js

   3. Сначала все задачи будут ✗ (заглушки неправильные).
      Решай по одной, запускай, смотри как ✗ превращаются в ✓.

   4. Застрял — читай подсказку рядом с задачей.
   ===================================================================== */

let passed = 0;
let failed = 0;

function check(condition, taskName, hint) {
  if (condition) {
    console.log("  ✓ " + taskName);
    passed++;
  } else {
    console.log("  ✗ " + taskName);
    if (hint) console.log("    💡 " + hint);
    failed++;
  }
}


console.log("\n=== ЗАДАЧА 1: Объявление переменных ===");
// Объяви: city (строка, const), year (число, const), tasksLeft (число 3, let)

const city = "Москва";      // ← ИЗМЕНИ МЕНЯ: напиши свой город
const year = 2026;                   // ← ИЗМЕНИ МЕНЯ: напиши текущий год
let tasksLeft = 3;                // ← ИЗМЕНИ МЕНЯ: должно быть 3

check(
  typeof city === "string" && typeof year === "number" && tasksLeft === 3,
  "Переменные объявлены правильно",
  "city — строка в const, year — число в const, tasksLeft — число 3 в let"
);


console.log("\n=== ЗАДАЧА 2: Шаблонная строка ===");
// Создай greeting через backticks: "Привет! Я из [город], сейчас [год] год."
// Используй ${city} и ${year} для подстановки

const greeting = "ИЗМЕНИ_МЕНЯ";   // ← ИЗМЕНИ МЕНЯ: используй `...` с ${city} и ${year}

check(
  greeting === `Привет! Я из ${city}, сейчас ${year} год.`,
  "Шаблонная строка правильная",
  "Используй обратные кавычки `...` и ${переменная}"
);


console.log("\n=== ЗАДАЧА 3: let vs const ===");
// Уменьши tasksLeft на 1 (выполнил одну задачу)
// Помни: tasksLeft объявлен через let, значит его можно менять

// ← ИЗМЕНИ МЕНЯ: уменьши tasksLeft на 1 (одной строкой ниже)
// tasksLeft = ...

check(
  tasksLeft === 2,
  "tasksLeft уменьшен до 2",
  "tasksLeft = tasksLeft - 1  (или tasksLeft -= 1, или tasksLeft--)"
);


console.log("\n=== ЗАДАЧА 4: typeof — определи тип ===");
// Напиши строку с названием типа. Например: typeof 42 → "number"

const type1 = "ИЗМЕНИ_МЕНЯ";      // ← typeof 42       (число)
const type2 = "ИЗМЕНИ_МЕНЯ";      // ← typeof "привет" (строка)
const type3 = "ИЗМЕНИ_МЕНЯ";      // ← typeof true     (логическое)
const type4 = "ИЗМЕНИ_МЕНЯ";      // ← typeof undefined
const type5 = "ИЗМЕНИ_МЕНЯ";      // ← typeof null  (ПОДВОХ! вспомни баг)
const type6 = "ИЗМЕНИ_МЕНЯ";      // ← typeof 123n  (BigInt)

check(type1 === "number", "typeof 42 → " + type1, "Должно быть 'number'");
check(type2 === "string", "typeof 'привет' → " + type2, "Должно быть 'string'");
check(type3 === "boolean", "typeof true → " + type3, "Должно быть 'boolean'");
check(type4 === "undefined", "typeof undefined → " + type4, "Должно быть 'undefined'");
check(type5 === "object", "typeof null → " + type5 + " (баг JS!)", "null → 'object'");
check(type6 === "bigint", "typeof 123n → " + type6, "BigInt → 'bigint'");


console.log("\n=== ЗАДАЧА 5: null vs undefined ===");
// purposefulEmpty — программист НАМЕРЕННО сказал «пусто» (это null)
// notAssigned     — объявлена без значения (получится undefined)

const purposefulEmpty = "ИЗМЕНИ_МЕНЯ";  // ← ИЗМЕНИ МЕНЯ: должно быть null
let notAssigned = "ИЗМЕНИ_МЕНЯ";        // ← ИЗМЕНИ МЕНЯ: оставь без значения (убери присваивание)

check(purposefulEmpty === null, "purposefulEmpty равен null", "null = намеренное «пусто»");
check(notAssigned === undefined, "notAssigned равен undefined", "let x; без = даёт undefined");


console.log("\n=== ЗАДАЧА 6: NaN и проверка ===");
// maybeNumber — это NaN. Проверь правильно (не через === NaN).

const maybeNumber = Number("не число");  // это NaN
const isNaN_correct = false;             // ← ИЗМЕНИ МЕНЯ: используй Number.isNaN(maybeNumber)

check(
  isNaN_correct === true,
  "NaN правильно определён через Number.isNaN()",
  "Number.isNaN(maybeNumber) — единственный правильный способ"
);


console.log("\n=== ЗАДАЧА 7: Преобразование типов ===");
// broken = "52" (баг: + склеил строку и число).
// Сделай fixed = 7, преобразовав "5" в число ЯВНО.

const broken = "5" + 2;     // "52"
const fixed = 0;            // ← ИЗМЕНИ МЕНЯ: Number("5") + 2  или  +"5" + 2

check(fixed === 7, "fixed равен 7", "Number('5') + 2 или +'5' + 2 (унарный плюс)");


console.log("\n=== ЗАДАЧА 8: == vs === ===");
// Предскажи результаты. Впиши true или false.

const cmp1 = false;   // ← ИЗМЕНИ МЕНЯ: 0 === false  (строгое, разные типы)
const cmp2 = false;   // ← ИЗМЕНИ МЕНЯ: 0 == false   (нестрогое, оба → 0)
const cmp3 = false;   // ← ИЗМЕНИ МЕНЯ: "" === false (строгое)
const cmp4 = false;   // ← ИЗМЕНИ МЕНЯ: "" == false  (оба → 0)
const cmp5 = false;   // ← ИЗМЕНИ МЕНЯ: null === undefined
const cmp6 = false;   // ← ИЗМЕНИ МЕНЯ: null == undefined (особое правило)

check(cmp1 === false, "0 === false → false", undefined);
check(cmp2 === true,  "0 == false → true", undefined);
check(cmp3 === false, '"" === false → false', undefined);
check(cmp4 === true,  '"" == false → true', undefined);
check(cmp5 === false, "null === undefined → false", undefined);
check(cmp6 === true,  "null == undefined → true", undefined);


console.log("\n=== ЗАДАЧА 9: Falsy и Truthy ===");
// Предскажи: Boolean(x) даст true или false?

const t1 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean(0)
const t2 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean("")
const t3 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean("0")  (ПОДВОХ!)
const t4 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean(null)
const t5 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean([])   (ПОДВОХ!)
const t6 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean("текст")
const t7 = false;     // ← ИЗМЕНИ МЕНЯ: Boolean(NaN)

check(t1 === false, "Boolean(0) = false", undefined);
check(t2 === false, 'Boolean("") = false', undefined);
check(t3 === true,  'Boolean("0") = true (непустая!)', 'Непустая строка — truthy');
check(t4 === false, "Boolean(null) = false", undefined);
check(t5 === true,  "Boolean([]) = true (массивы truthy!)", 'Объекты и массивы всегда truthy');
check(t6 === true,  'Boolean("текст") = true', undefined);
check(t7 === false, "Boolean(NaN) = false", undefined);


console.log("\n=== ЗАДАЧА 10: Методы строк ===");
const text = "Hello, World!";

// ← ИЗМЕНИ МЕНЯ в каждой строке:
const textLength = 0;              // text.length
const upper = "ИЗМЕНИ_МЕНЯ";       // text.toUpperCase()
const containsWorld = false;       // text.includes("World")
const sliced = "ИЗМЕНИ_МЕНЯ";      // text.slice(7, 12)

check(textLength === 13, "Длина = 13", "text.length");
check(upper === "HELLO, WORLD!", "toUpperCase", "text.toUpperCase()");
check(containsWorld === true, "includes('World') → true", 'text.includes("World")');
check(sliced === "World", 'slice(7, 12) → "World"', "text.slice(7, 12)");


// ===================== ИТОГ =====================
console.log("\n══════════════════════════════");
console.log("Пройдено: " + passed + " | Провалено: " + failed);
if (failed === 0) {
  console.log("✅ ВСЕ ТЕСТЫ ЗЕЛЁНЫЕ! Глава 1 освоена.");
} else {
  console.log("❌ Есть проваленные. Читай подсказки 💡 и пробуй снова.");
}
