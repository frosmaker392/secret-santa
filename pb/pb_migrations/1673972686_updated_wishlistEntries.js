migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.createRule = "@collection.wishlists.user ?= @request.auth.id && @collection.wishlists.id ?= @request.query.wishlistId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o")

  collection.createRule = null

  return dao.saveCollection(collection)
})
