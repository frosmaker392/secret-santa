migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = "@request.auth.id = user || @collection.wishlists.group ?= group"
  collection.viewRule = "@request.auth.id = user || @collection.wishlists.group ?= group"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
