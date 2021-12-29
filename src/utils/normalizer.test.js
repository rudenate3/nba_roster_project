import { normalizer } from './normalizer'

describe('normalizer', () => {
  it('normalizes data', () => {
    const data = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ]

    const expected = {
      entities: {
        1: { id: 1, name: 'John Doe' },
        2: { id: 2, name: 'Jane Doe' }
      },
      ids: [1, 2]
    }

    expect(normalizer(data)).toEqual(expected)
  })
})
