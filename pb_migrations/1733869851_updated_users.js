/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1841317061",
    "maxSelect": 1,
    "name": "group",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Standard Account",
      "Account Manager",
      "System Administrator"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1841317061",
    "maxSelect": 1,
    "name": "group",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "1Standard Account",
      "Account Manager",
      "System Administrator"
    ]
  }))

  return app.save(collection)
})
