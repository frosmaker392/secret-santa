migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.id ?= @request.query.wishlistId"
  collection.viewRule = "@collection.wishlists.entries.id ?= id && @collection.wishlists.id ?= @request.query.wishlistId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
