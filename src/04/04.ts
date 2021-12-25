const ages = [20, 30, 100, 15, 50, 35];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150},
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150},
]