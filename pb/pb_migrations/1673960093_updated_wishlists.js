migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = "@request.auth.wishlists.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = null

  return dao.saveCollection(collection)
})
