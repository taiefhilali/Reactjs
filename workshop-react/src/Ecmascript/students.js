



let students = [
    { name:'John', id: 123,marks:98},
    {name: 'Baba', id: 101, marks:23 },
    {name: 'John', id: 200, marks:45 },
    {name :'Wick', id: 115, marks:75 },];
    
    




function CalculateTotaladdbonus(students) {
    return students
      .map(student => {
        if (student.marks < 50) {
          student.marks += 15;
        }
        return student;
      })
      .filter(student => student.marks > 50)
      .reduce((total, student) => total + student.marks, 0);
  }


console.log(CalculateTotaladdbonus(students))