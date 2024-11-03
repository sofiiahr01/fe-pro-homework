function Student (firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.age = new Date().getFullYear() - birthYear;

    this.currentLesson = 0;

    this.marks = new Array(10);
    this.attendance = new Array(10);
}

Student.prototype._setAttendance = function (isLessonAttended) {
    if(typeof isLessonAttended !== 'boolean') throw new Error('isLessonAttended should be a boolean');
    if(this.currentLesson >= 10) throw new Error('Lessons exceeded');

    this.attendance[this.currentLesson] = isLessonAttended;
    this.currentLesson += 1;
}

Student.prototype.present = function () {
    this._setAttendance(true)
}
Student.prototype.absent = function () {
    this._setAttendance(false)
}
Student.prototype.mark = function (grade) {
    const minMark = 0;
    const maxMark = 10;
    if(typeof grade !== 'number') throw new Error('Mark should be a valid number');
    if(grade < minMark || grade > maxMark) throw new Error(`Mark should be in range on ${minMark} and ${maxMark}`);

    const currentLessonIndex = this.currentLesson - 1;
    if(!this.attendance[currentLessonIndex]) throw new Error(`Cannot set mark for lesson that was not visited`);

    this.marks[currentLessonIndex] = grade;
}

Student.prototype._calcAvgMark = function () {
    if(this.marks.every(mark => typeof mark !== 'number')) {
        return 'Cannot calc avg mark due to lack of marks';
    }

    const marksData = this.marks.reduce(
        (acc, item) => {
            if(typeof item !== 'number') return acc;
            acc.marksCount += 1;
            acc.marksSum += item;

            return acc;
        },
        {
            marksCount: 0,
            marksSum: 0,
        }
)

return marksData.marksSum / marksData.marksCount;
}

Student.prototype._calcAvgAttd = function () {
    if(typeof this.attendance[0] !== 'boolean') {
        return 'Cannot calc avg attendance because no lessons was created';
    }

    const visitedLessonsCount = this.attendance.filter(Boolean).length;
    return visitedLessonsCount / this.currentLesson;
}

Student.prototype.summary = function () {
    return {
        avgMark: Number(this._calcAvgMark().toFixed(1)),
        avgAttd: Number(this._calcAvgAttd().toFixed(1)),
    }
}
export default Student;