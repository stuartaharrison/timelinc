/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "deleteRule": "@request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\"",
    "updateRule": "@request.auth.group = \"System Administrator\" || @request.auth.group = \"Account Manager\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
