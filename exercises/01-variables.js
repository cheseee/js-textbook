/* =====================================================================
   УПРАЖНЕНИЯ К ГЛАВЕ 1: ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ (расширенная версия)
   ---------------------------------------------------------------------
   10 задач, каждая покрывает конкретное понятие из главы.

   Как решать:
   1. Создай копию: exercises/01-variables-MY-SOLUTION.js
   2. Замени все ??? на свой код
   3. Запусти: node exercises/01-variables-MY-SOLUTION.js
   4. Все 10 задач должны показать ✓
   5. Если ✗ — читай подсказку, пробуй снова

   ⚠️ НЕ подглядывай в ответы ниже по файлу (их нет — решай сам).
   ===================================================================== */

// Счётчик для итоговой сводки
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
// Объяви переменные по правилам:
//   - city      — название твоего города (используй const)
//   - year      — текущий год (число, const)
//   - tasksLeft — сколько задач осталось (число, let, начни с 3)

// ??? напиши здесь

check(
  typeof city === "string" && typeof year === "number" && tasksLeft === 3,
  "Переменные объявлены правильно",
  "city — строка в const, year — число в const, tasksLeft — число 3 в let"
);


console.log("\n=== ЗАДАЧА 2: Шаблонная строка ===");
// Создай строку greeting через backticks (`...`), вставив city и year:
//   "Привет! Я из [город], сейчас [год] год."

// ??? напиши здесь

check(
  greeting === `Привет! Я из ${city}, сейчас ${year} год.`,
  "Шаблонная строка правильная",
  "Используй обратные кавычки `...` и ${переменная} для подстановки"
);


console.log("\n=== ЗАДАЧА 3: let vs const ===");
// Уменьши tasksLeft на 1 (выполнил одну задачу).
// Затем попробуй понять (не запуская): можно ли переприсвоить const city?

// ??? уменьши tasksLeft здесь

check(
  tasksLeft === 2,
  "tasksLeft уменьшен до 2",
  "tasksLeft объявлен через let, значит его можно менять: tasksLeft = tasksLeft - 1"
);


console.log("\n=== ЗАДАЧА 4: typeof — определи тип ===");
// Напиши, чему равно typeof для каждого значения.
// Подсказка: вернётся СТРОКА с названием типа ("number", "string", ...)

const type1 = typeof 42;          // ???
const type2 = typeof "привет";    // ???
const type3 = typeof true;        // ???
const type4 = typeof undefined;   // ???
const type5 = typeof null;        // ??? (ПОДВОХ! вспомни баг из главы)
const type6 = typeof 123n;        // ??? (BigInt)

check(type1 === "number", "typeof 42 → " + type1, "Должно быть 'number'");
check(type2 === "string", "typeof 'привет' → " + type2, "Должно быть 'string'");
check(type3 === "boolean", "typeof true → " + type3, "Должно быть 'boolean'");
check(type4 === "undefined", "typeof undefined → " + type4, "Должно быть 'undefined'");
check(type5 === "object", "typeof null → " + type5 + " (это баг JS!)", "null → 'object', это известный баг");
check(type6 === "bigint", "typeof 123n → " + type6, "BigInt → 'bigint'");


console.log("\n=== ЗАДАЧА 5: null vs undefined ===");
// Создай две переменные:
//   - purposefulEmpty — программист НАМЕРЕННО сказал «пусто» (используй null)
//   - notAssigned     — переменная объявлена, но значение не задано (получится undefined)

// ??? напиши здесь

check(
  purposefulEmpty === null,
  "purposefulEmpty равен null",
  "null — это когда программист сам говорит «пусто»"
);
check(
  notAssigned === undefined,
  "notAssigned равен undefined",
  "Если объявить let x; без значения — будет undefined"
);


console.log("\n=== ЗАДАЧА 6: NaN и проверка на него ===");
// Переменная maybeNumber — результат неудачного преобразования строки в число.
// Проверь, является ли она NaN, используя ПРАВИЛЬНЫЙ способ.

const maybeNumber = Number("не число");  // это NaN
const isNaN_correct = /* ??? */;

check(
  isNaN_correct === true,
  "NaN правильно определён через Number.isNaN()",
  "NaN === NaN даёт false! Используй Number.isNaN(maybeNumber)"
);
check(
  maybeNumber !== maybeNumber,
  "Бонус: NaN не равен самому себе (maybeNumber !== maybeNumber = true)",
  undefined
);


console.log("\n=== ЗАДАЧА 7: Преобразование типов — починить баг ===");
// Этот код выводит '52' вместо 7. JS склеил строку и число через +.
// Почини: преобразуй "5" в число ЯВНО, чтобы получилось 7.

const broken = "5" + 2;        // "52" — неправильно
const fixed = /* ??? */;        // должно быть 7 (число)

check(
  fixed === 7,
  "fixed равен 7",
  "Используй Number('5') + 2 или +'5' + 2 (унарный плюс)"
);


console.log("\n=== ЗАДАЧА 8: == vs === ===");
// Предскажи (не запуская) результат сравнений. Впиши true или false.

const cmp1 = (0 === false);          // ??? (строгое: разные типы)
const cmp2 = (0 == false);           // ??? (нестрогое: оба → 0)
const cmp3 = ("" === false);         // ???
const cmp4 = ("" == false);          // ??? (оба → 0, поэтому true!)
const cmp5 = (null === undefined);   // ???
const cmp6 = (null == undefined);    // ??? (особое правило)

check(cmp1 === false, "0 === false → false (разные типы)", undefined);
check(cmp2 === true,  "0 == false → true (оба → 0)", undefined);
check(cmp3 === false, '"" === false → false (разные типы)', undefined);
check(cmp4 === true,  '"" == false → true (оба → 0)', undefined);
check(cmp5 === false, "null === undefined → false", undefined);
check(cmp6 === true,  "null == undefined → true (особое правило)", undefined);


console.log("\n=== ЗАДАЧА 9: Falsy и Truthy значения ===");
// В JS есть 8 falsy значений. Вспомни их из главы.
// Для каждого значения ниже предскажи, что даст Boolean(x): true или false.

const t1 = Boolean(0);          // ???  (ноль)
const t2 = Boolean("");         // ???  (пустая строка)
const t3 = Boolean("0");        // ???  (строка с нулём — ПОДВОХ!)
const t4 = Boolean(null);       // ???
const t5 = Boolean([]);         // ???  (пустой массив — ПОДВОХ!)
const t6 = Boolean("текст");    // ???
const t7 = Boolean(NaN);        // ???

check(t1 === false, "Boolean(0) = false", undefined);
check(t2 === false, 'Boolean("") = false', undefined);
check(t3 === true,  'Boolean("0") = true (непустая строка!)', 'Любая непустая строка truthy, даже "0"');
check(t4 === false, "Boolean(null) = false", undefined);
check(t5 === true,  "Boolean([]) = true (пустой массив — truthy!)", 'Массивы и объекты всегда truthy, даже пустые');
check(t6 === true,  'Boolean("текст") = true', undefined);
check(t7 === false, "Boolean(NaN) = false", undefined);


console.log("\n=== ЗАДАЧА 10: Методы строк ===");
// Используй методы строк, чтобы выполнить задания.
// Подсказка: ищи в главе раздел «Полезные методы строк».

const text = "Hello, World!";

// 10a: Получи длину строки (свойство .length)
const textLength = /* ??? */;

// 10b: Переведи строку в верхний регистр (метод .toUpperCase())
const upper = /* ??? */;

// 10c: Проверь, содержит ли строка слово "World" (метод .includes())
const containsWorld = /* ??? */;

// 10d: Вырежи "World" из строки (метод .slice(начало, конец))
//   Подсказка: "World" начинается с индекса 7 и заканчивается ДО индекса 12
const sliced = /* ??? */;

check(textLength === 13,   "Длина строки = 13", "text.length");
check(upper === "HELLO, WORLD!", "toUpperCase → 'HELLO, WORLD!'", "text.toUpperCase()");
check(containsWorld === true, "includes('World') → true", "text.includes('World')");
check(sliced === "World", 'slice(7, 12) → "World"', "text.slice(7, 12)");


// ===================== ИТОГ =====================
console.log("\n══════════════════════════════");
console.log("Пройдено: " + passed + " | Провалено: " + failed);
if (failed === 0) {
  console.log("✅ ВСЕ ТЕСТЫ ЗЕЛЁНЫЕ! Глава 1 освоена.");
} else {
  console.log("❌ Есть проваленные задачи. Разберись с подсказками 💡 и попробуй снова.");
  console.log("   Не получается — спроси агента: «объясни задачу N».");
}

/* =====================================================================
   ОТВЕТЫ (не подглядывай! попробуй сам сначала)
   =====================================================================
   Ниже — ответы для самопроверки после того, как решил.

   Задача 1:
     const city = "Москва";
     const year = 2026;
     let tasksLeft = 3;

   Задача 2:
     const greeting = `Привет! Я из ${city}, сейчас ${year} год.`;

   Задача 3:
     tasksLeft = tasksLeft - 1;   // или tasksLeft -= 1; или tasksLeft--;

   Задача 4:
     const type1 = "number";
     const type2 = "string";
     const type3 = "boolean";
     const type4 = "undefined";
     const type5 = "object";   // баг JS!
     const type6 = "bigint";

   Задача 5:
     const purposefulEmpty = null;
     let notAssigned;   // без значения → undefined

   Задача 6:
     const isNaN_correct = Number.isNaN(maybeNumber);

   Задача 7:
     const fixed = Number("5") + 2;   // или: +"5" + 2

   Задача 8:
     const cmp1 = false;   // 0 === false
     const cmp2 = true;    // 0 == false
     const cmp3 = false;   // "" === false
     const cmp4 = true;    // "" == false
     const cmp5 = false;   // null === undefined
     const cmp6 = true;    // null == undefined

   Задача 9:
     t1 = false, t2 = false, t3 = true, t4 = false, t5 = true, t6 = true, t7 = false

   Задача 10:
     const textLength = text.length;           // 13
     const upper = text.toUpperCase();         // "HELLO, WORLD!"
     const containsWorld = text.includes("World"); // true
     const sliced = text.slice(7, 12);         // "World"
   ===================================================================== */
