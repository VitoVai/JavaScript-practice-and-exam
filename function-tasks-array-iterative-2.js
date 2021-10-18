const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  function printItStudent(student) {
    if (student.faculty === 'Informatikos fakultetas') {
      console.log(student);
    }
  }

  students.forEach(printItStudent);
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  function printChStudent(student) {
    if (student.faculty === 'Chemijos fakultetas') {
      console.log(student);
    }
  }

  students.forEach(printChStudent);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  function printElectroStudent(student) {
    if (student.faculty === 'Elektros ir elektronikos fakultetas') {
      console.log(student);
    }
  }

  students.forEach(printElectroStudent);
}
console.groupEnd();


console.groupCollapsed('4. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  const studentsElectro = students.filter((student) => student.faculty === 'Elektros ir elektronikos fakultetas');
  
  function studentsSemesterAvg({ name, surname, modules }) {
    const creditCount = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits,
      0
    );
    
    
    return {
      fullname: name + ' ' + surname,
      avg: Math.round(100 * weightedSemesterAvgSum / creditCount) / 100
    }
    
  }
  
  console.table(studentsElectro.map(studentsSemesterAvg));
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti tik pirmo kurso studentus');
{
  function printFirstCourse(student) {
    if (student.course === 1) {
      console.log(student);
    }
  }

  students.forEach(printFirstCourse);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti tik antro kurso studentus');
{
  function printSecondCourse(student) {
    if (student.course === 2) {
      console.log(student);
    }
  }

  students.forEach(printSecondCourse);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik trečio kurso studentus');
{
  function printThirdCourse(student) {
    if (student.course === 3) {
      console.log(student);
    }
  }

  students.forEach(printThirdCourse);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik ketvirto kurso studentus');
{
  function printFourthCourse(student) {
    if (student.course === 4) {
      console.log(student);
    }
  }

  students.forEach(printFourthCourse);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  const studentsIT = students.filter((student) => student.faculty === 'Informatikos fakultetas');
  
  function studentsItSemesterAvg({ name, surname, modules }) {
    const creditCount = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits,
      0
    );
    
    
    return {
      fullname: name + ' ' + surname,
      avg: Math.round(100 * weightedSemesterAvgSum / creditCount) / 100
    }
    
  }
  
  console.table(studentsIT.map(studentsItSemesterAvg));
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  const studentsChemistry = students.filter((student) => student.faculty === 'Chemijos fakultetas');
  
  function studentsChSemesterAvg({ name, surname, modules }) {
    const creditCount = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + marks.reduce((sum, mark) => sum + mark) / marks.length * credits,
      0
    );
    
    
    return {
      fullname: name + ' ' + surname,
      avg: Math.round(100 * weightedSemesterAvgSum / creditCount) / 100
    }
    
  }
  
  console.table(studentsChemistry.map(studentsChSemesterAvg));
}
console.groupEnd();

console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  function studentsSemesterAvarage({ name, surname, modules }) {
    const totalCredits = modules.reduce((sum, { credits }) => sum + credits, 0);
    const weightedSemesterAvgSum = modules.reduce(
      (sum, { marks, credits }) => sum + (marks.reduce((sum, mark) => sum + mark) / marks.length) * credits,
      0
    );
    return {
      fullname: `${name} ${surname}`,
      avg: Math.round((100 * weightedSemesterAvgSum) / totalCredits) / 100,
    };
  }

  console.table(students.map(studentsSemesterAvarage));
}
