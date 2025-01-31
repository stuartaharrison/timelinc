/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685540286")

  // add field
  collection.fields.addAt(5, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor18589324",
    "maxSize": 0,
    "name": "notes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file1204091606",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/pdf",
      "application/msword",
      "image/png",
      "image/vnd.mozilla.apng",
      "image/jpeg",
      "image/gif",
      "image/bmp",
      "text/csv",
      "text/plain",
      "audio/mp4",
      "video/x-matroska",
      "video/x-msvideo",
      "video/mp4",
      "audio/mpeg",
      "application/vnd.ms-excel",
      "application/zip",
      "application/x-7z-compressed"
    ],
    "name": "attachments",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1685540286")

  // remove field
  collection.fields.removeById("editor18589324")

  // remove field
  collection.fields.removeById("file1204091606")

  return app.save(collection)
})
