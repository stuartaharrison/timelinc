/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685540286")

  // update collection data
  unmarshal({
    "createRule": "userId = @request.auth.id || @request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "deleteRule": "@request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "listRule": "userId = @request.auth.id || @request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "updateRule": "userId = @request.auth.id || @request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "viewRule": "userId = @request.auth.id || @request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685540286")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
