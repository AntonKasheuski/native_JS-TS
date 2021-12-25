import {GovernmentBuildingsType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map( b => b.address.street.title)
}