migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.createRule = "@request.auth.wishlists.entries.id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.createRule = null

  return dao.saveCollection(collection)
})
