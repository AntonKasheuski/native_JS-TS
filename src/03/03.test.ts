import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";


let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Anton",
        age: 31,
        isActive: false,
        address: {
            streetTitle: "Skripnikova",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "CSS"
            },
            {
                id: 2,
                title: "HTML"
            },
            {
                id: 1,
                title: "React"
            },
            {
                id: 1,
                title: "TS"
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(4);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("JS");
    expect(student.technologies[4].id).toBeDefined();
})

test('student should be active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test("does student live in city?", () =>{
    //expect(student.address.city.countryTitle).toBe("Belarus");
    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})