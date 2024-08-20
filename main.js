const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

function mineSweeper(src) {
    // الحصول على عدد الصفوف والأعمدة في المصفوفة
    const rows = src.length;
    const cols = src[0].length;
    
    // إنشاء مصفوفة جديدة لتخزين النتيجة
    const result = Array.from(Array(rows), () => Array(cols).fill(0));
    
    // التحرك عبر جميع الخلايا في المصفوفة الأصلية
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (src[i][j] === 1) {
                result[i][j] = 9; // استبدال اللغم بالرقم 9
            } else {
                let mineCount = 0;
                
                // التفقد في 8 اتجاهات حول الخلية الحالية
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const newRow = i + x;
                        const newCol = j + y;
                        
                        // التحقق من أن الخلية المجاورة ضمن الحدود وأنها تحتوي على لغم
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && src[newRow][newCol] === 1) {
                            mineCount++;
                        }
                    }
                }
                result[i][j] = mineCount; // تعيين عدد الألغام المجاورة في الخلية
            }
        }
    }
    
    return result; // إرجاع المصفوفة المعدلة
}

// اختبار الدالة
console.log(mineSweeper(input));
