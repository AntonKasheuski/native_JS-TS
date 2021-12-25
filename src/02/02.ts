export{}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Anton",
    age: 31,
    isActive: true,
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

console.log(student.technologies[0].title)