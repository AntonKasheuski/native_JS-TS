export type UserType = {
    name: string,
    hair: number,
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export type CompanyType = {
    id: number,
    title: string
}

export function moveUser(u: UserWithLaptopType, newAddress: string) {
    return  {
        ...u,
        address: {
            ...u.address,
            city: newAddress}
    }
}

export function upgradeLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: newLaptop}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) {
    return {
        ...u,
        books: u.books.map( b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType,
                           removedBook: string) {
    return {
        ...u,
        books: [...u.books.filter( b => b !== removedBook )]
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: string) {
    return {
        ...u,
        companies: [...u.companies, {id: 3, title: newCompany}]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType,
                                   companyId: number,
                                   newTitle: string) {
    return {
        ...u,
        companies: u.companies.map( c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map( c => (
        c.id === companyId ? {...c, title: newTitle} : c
    ))
    return companyCopy
}