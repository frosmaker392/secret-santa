migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.updateRule = null

  // remove
  collection.schema.removeField("n8j4cbmx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe")

  collection.updateRule = "@request.auth.id = user.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n8j4cbmx",
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
})
