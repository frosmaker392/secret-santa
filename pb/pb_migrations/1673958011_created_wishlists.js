migrate((db) => {
  const collection = new Collection({
    "id": "8b8nujupput4coe",
    "created": "2023-01-17 12:20:11.409Z",
    "updated": "2023-01-17 12:20:11.409Z",
    "name": "wishlists",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "n8wfbaon",
        "name": "group",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "w716zn9b1gcaikz",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "wazjuih2",
        "name": "entries",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "l0j1agv9z621b0o",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8b8nujupput4coe");

  return dao.deleteCollection(collection);
})
