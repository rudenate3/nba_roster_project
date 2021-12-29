import nbaPlayers from './nbaPlayers'

describe('nbaPlayers', () => {
  it('should return the initial state', () => {
    expect(nbaPlayers(undefined, {})).toEqual({
      entities: {},
      ids: []
    })
  })

  it('should handle FETCH_NBA_PLAYERS', () => {
    expect(
      nbaPlayers(undefined, {
        type: 'FETCH_NBA_PLAYERS',
        payload: [
          {
            id: '1',
            firstName: 'Kobe',
            lastName: 'Bryant'
          },
          {
            id: '2',
            firstName: 'Michael',
            lastName: 'Jordan'
          }
        ]
      })
    ).toEqual({
      entities: {
        1: {
          id: '1',
          firstName: 'Kobe',
          lastName: 'Bryant'
        },
        2: {
          id: '2',
          firstName: 'Michael',
          lastName: 'Jordan'
        }
      },
      ids: ['1', '2']
    })
  })
})
