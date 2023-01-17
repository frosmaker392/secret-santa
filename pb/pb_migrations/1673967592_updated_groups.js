migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  collection.listRule = "@collection.wishlists.group ?= id && @collection.wishlists.user ?= @request.auth.id"
  collection.viewRule = "@collection.wishlists.group ?= id && @collection.wishlists.user ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
