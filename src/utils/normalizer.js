export const normalizer = (data) => {
  const entities = {}
  const ids = []

  data.forEach((item) => {
    const id = item.id
    ids.push(id)
    entities[id] = item
  })

  return {
    entities,
    ids
  }
}
