'use strict';

function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.attendance = Array(10).fill(null);
    this.marks = Array(10).fill(null);
}

Student.prototype.getAge = function() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - this.birthYear;
};

Student.prototype.addAttendance = function(value) {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = value;
    }
};

Student.prototype.present = function() {
    this.addAttendance(true);
};

Student.prototype.absent = function() {
    this.addAttendance(false);
};

    Student.prototype.mark = function(score) {
        if (score < 0 || score > 10) {
            console.log("Оцінка має бути від 0 до 10.");
            return;
        }
        const index = this.marks.indexOf(null);
        if (index !== -1) {
            this.marks[index] = score;
        }
    };


Student.prototype.getAverageMark = function() {
    const validMarks = this.marks.filter(mark => mark !== null);
    const sum = validMarks.reduce((acc, mark) => acc + mark, 0);

    if (validMarks.length) {
        return sum / validMarks.length;
    } else {
        return 0;
    }
};

Student.prototype.getAttendanceRate = function() {
    const validAttendance = this.attendance.filter(day => day !== null);
    const presentDays = validAttendance.filter(day => day === true).length;

    if (validAttendance.length) {
        return presentDays / validAttendance.length;
    } else {
        return 0;
    }
};


Student.prototype.summary = function() {
        const averageMark = this.getAverageMark();
        const attendanceRate = this.getAttendanceRate();

        if (averageMark > 9 && attendanceRate > 0.9) {
            return "Ух ти, який молодчинка!";
        } else if (averageMark > 9 || attendanceRate > 0.9) {
            return "Нормально, але можна краще";
        } else {
            return "Редька!";
        }
    };

    const student1 = new Student("Alex", "Kim", 2001);

    student1.present();
    student1.absent();
    student1.mark(10);

    console.log(student1.getAge());
    console.log(student1.getAverageMark());
    console.log(student1.getAttendanceRate());
    console.log(student1.summary());