migrate((db) => {
  const collection = new Collection({
    "id": "l0j1agv9z621b0o",
    "created": "2023-01-17 12:17:02.034Z",
    "updated": "2023-01-17 12:17:02.034Z",
    "name": "wishlistEntries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iydnfcga",
        "name": "name",
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
        "id": "zqfnliea",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "wpetmbal",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l0j1agv9z621b0o");

  return dao.deleteCollection(collection);
})
