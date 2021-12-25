import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return (a + b)
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget;
}

export function repairHouse(house: HousesType) {
    house.repaired = true
}

export const toFireStaff = (governmentBuildingsType: GovernmentBuildingsType, staff: number) => {
    governmentBuildingsType.staffCount -= staff;
}
export function toHireStaff(governmentBuildingsType: GovernmentBuildingsType, staff: number) {
    governmentBuildingsType.staffCount += staff;
}

export const createMessage = (city: CityType) => {
    //return ("Hello " + city.title + " citizens! All of " + city.citizensNumber + " people.")
    return (`Hello ${city.title} citizens! All of ${city.citizensNumber} people.`)

}