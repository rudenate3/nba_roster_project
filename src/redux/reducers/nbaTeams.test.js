import nbaTeams from './nbaTeams'

describe('nbaTeams', () => {
  it('should return the initial state', () => {
    expect(nbaTeams(undefined, {})).toEqual({
      entities: {},
      ids: []
    })
  })

  it('should handle FETCH_NBA_TEAMS', () => {
    expect(
      nbaTeams(undefined, {
        type: 'FETCH_NBA_TEAMS',
        payload: [
          {
            id: '1',
            name: 'Lakers'
          },
          {
            id: '2',
            name: 'Warriors'
          }
        ]
      })
    ).toEqual({
      entities: {
        1: {
          id: '1',
          name: 'Lakers'
        },
        2: {
          id: '2',
          name: 'Warriors'
        }
      },
      ids: ['1', '2']
    })
  })
})
