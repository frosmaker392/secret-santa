migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  collection.createRule = "@request.auth.id = owner"
  collection.updateRule = "@request.auth.id = owner"
  collection.deleteRule = "@request.auth.id = owner"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
