
function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

/*test('big reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)


})*/

test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary';

    expect(user.address.title).toBe('Kanary')
})