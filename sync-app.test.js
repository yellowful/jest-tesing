const googleSearch = require('./sync-app');

dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
]

// 不是測試googleSearch，純練習熟悉jest
it('difference of .toBe and .toEqual tests', ()=>{
    expect('hello').toBe('hello');
    expect('hello').toEqual('hello');
    expect(true).toBe(true);
    expect([1,2]).toEqual([1,2]);
    expect([{
        name:'richard',
        car:{
            color:'white',
            engine:1800
        }
    },
    {
        name:'mary',
        car:{
            color:'black',
            engine:3000
        }
    }])
    .toEqual([{
        name:'richard',
        car:{
            color:'white',
            engine:1800
        }
    },
    {
        name:'mary',
        car:{
            color:'black',
            engine:3000
        }
    }])
    expect({ a: undefined, b: 2 }).toEqual({ b: 2 })
})

// 不是測試googleSearch，純練習熟悉jest
it('string test',()=>{
    expect('la la la').toEqual(expect.any(String))
    // console.dir(expect.any(String));
})


it('google database test',()=>{
    expect(googleSearch('dog',dbMock)).toHaveLength(2);
    expect(googleSearch('cheese',dbMock)).toEqual(['cheesepuff.com'])
})

test('use test instead of it for testing',()=>{
    expect(googleSearch('dog',dbMock)).toHaveLength(2);
    expect(googleSearch('cheese',dbMock)).toEqual(['cheesepuff.com'])
})