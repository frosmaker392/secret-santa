migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user"
  collection.updateRule = "@request.auth.id = user"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nz6t8cmr",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null

  // remove
  collection.schema.removeField("nz6t8cmr")

  return dao.saveCollection(collection)
})
