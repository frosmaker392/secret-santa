migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.viewRule = "@request.auth.wishlists.id = id"
  collection.updateRule = "@request.auth.wishlists.id = id"
  collection.deleteRule = "@request.auth.id = group.owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
