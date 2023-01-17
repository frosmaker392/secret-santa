migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = "@request.auth.wishlists.entries.id ?= id"
  collection.viewRule = "@request.auth.wishlists.entries.id ?= id"
  collection.updateRule = "@request.auth.wishlists.entries.id ?= id"
  collection.deleteRule = "@request.auth.wishlists.entries.id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
