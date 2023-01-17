migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.user ?= @request.auth.id"
  collection.viewRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.user ?= @request.auth.id"
  collection.createRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.user ?= @request.auth.id"
  collection.updateRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.user ?= @request.auth.id"
  collection.deleteRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.user ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
