test ('should take old men older than 90', () => {
    const ages = [20, 30, 100, 15, 50, 35];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})