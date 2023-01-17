migrate((db) => {
  const collection = new Collection({
    "id": "w716zn9b1gcaikz",
    "created": "2023-01-17 12:15:26.390Z",
    "updated": "2023-01-17 12:15:26.390Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w8zi6zrd",
        "name": "owner",
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
        "id": "ane8cu7a",
        "name": "exchangeDate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "1kufbyut",
        "name": "budget",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0de6cgtb",
        "name": "details",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.auth.id = owner.id",
    "updateRule": "@request.auth.id = owner.id",
    "deleteRule": "@request.auth.id = owner.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w716zn9b1gcaikz");

  return dao.deleteCollection(collection);
})
