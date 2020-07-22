const {
    reasonOne,
    reasonTwo,
    reasonThree,
    reasonTurn,
    checkGameOver,
    battleFlow
} = require('./battleTest');

test("It checks that reasonOne appears on heroLife complete", ()=>{
    const heroLife = 2;
    expect(reasonTurn(heroLife)).toBe('reason One')
});
test("It checks that reasonTwo appears on heroLife = 1", ()=>{
    const heroLife = 1;
    expect(reasonTurn(heroLife)).toBe('reason Two')
});
test("It checks that reasonThree appears on heroLife = 0", ()=>{
    const heroLife = 0;
    expect(reasonTurn(heroLife)).toBe('reason Three')
});

test("Check that is game over with heroLife = 0", ()=>{
    const heroLife = 0;
    expect(checkGameOver(heroLife)).toBe('gameover')
});
test("Check that is NOT game over with heroLife = 2", ()=>{
    const heroLife = 2;
    expect(checkGameOver(heroLife)).toBe(false)
});
test("Check that is NOT game over with heroLife = 1", ()=>{
    const heroLife = 1;
    expect(checkGameOver(heroLife)).toBe(false)
});

test("Check a gameover battleFlow: ['attack'] ", ()=>{
    expect(battleFlow(['attack'])).toStrictEqual([
        [2,'gameover']
    ])
});

test("Check a gameover battleFlow: ['reason','attack'] ", ()=>{
    expect(battleFlow([
        'reason',
        'attack'
    ])).toStrictEqual([
        [1,'reason One'],
        [1,'gameover']
    ])
});
test("Check a gameover battleFlow: ['reason','reason','attack'] ", ()=>{
    expect(battleFlow([
        'reason',
        'reason',
        'attack'
    ])).toStrictEqual([
        [1,'reason One'],
        [0,'reason Two'],
        [0,"gameover"]
    ])
});
test("Check a gameover battleFlow: ['reason','reason','reason'] ", ()=>{
    expect(battleFlow([
        'reason',
        'reason',
        'reason'
    ])).toStrictEqual([
        [1,'reason One'],
        [0,'reason Two'],
        [-1,"gameover"]
    ])
});