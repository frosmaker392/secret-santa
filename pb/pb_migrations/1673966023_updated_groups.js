migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p1dfe5qq",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz")

  // remove
  collection.schema.removeField("p1dfe5qq")

  return dao.saveCollection(collection)
})
