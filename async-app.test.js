const fetch = require('node-fetch');
const jokes = require('./async-app');

describe('async basic tests', () => {
  it('test data', () => {
    expect.assertions(2);
    return jokes(fetch)
      .then(data => {
        expect(data.total).toBe(5);
        expect(data.result).toHaveLength(5);
      })
  })

  it('test done', (done) => {
    expect.assertions(2);
    jokes(fetch)
      .then(data => {
        expect(data.total).toBe(5);
        expect(data.result).toHaveLength(5);
        done();
      })
  })
})


describe('async mock tests', () => {
  it('mock fetch with mockReturnValue', () => {
    const mockFetch = jest.fn()
    // 是在模擬那個import進來的fetch，不是摸擬jokes
    mockFetch.mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({
          total: 5,
          result: [1, 2, 3, 4, 5]
        })
      })
    )
    expect.assertions(2)
    return jokes(mockFetch)
      .then(data => {
        expect(data.total).toBe(5);
        expect(data.result).toHaveLength(5);
      })
  })

  it('mock fetch with mockResolvedValue', () => {
    const mockFetch = jest.fn()
    // 是在模擬那個import進來的fetch，不是摸擬jokes
    mockFetch.mockResolvedValue(
      {
        json: () => Promise.resolve({
          total: 5,
          result: [1, 2, 3, 4, 5]
        })
      }
    )
    expect.assertions(2)
    return jokes(mockFetch)
      .then(data => {
        expect(data.total).toBe(5);
        expect(data.result).toHaveLength(5);
      })

  })


  it('mock fetch with mockResolvedValue', () => {
    const mockFetch = jest.fn()
    // 是在模擬那個import進來的fetch，不是摸擬jokes
    mockFetch.mockResolvedValue(
      {
        json: () => Promise.resolve({
          total: 5,
          result: [1, 2, 3, 4, 5]
        })
      }
    )
    expect.assertions(4)
    return jokes(mockFetch)
      .then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        // 這裡要放正確的URL，原程式碼"=crazy"改成"=cra"測試就不會過
        // 要記得傳進來的mockFetch是在模擬fetch
        // .toBeCalledWith這個測試是在測mockFetch傳進jokes裡面的時候，丟進去mockFetch的parameter是不是"...=crazy"
        expect(mockFetch).toBeCalledWith('https://api.chucknorris.io/jokes/search?query=crazy')
        expect(data.total).toBe(5);
        expect(data.result).toHaveLength(5);
      })
  })
})