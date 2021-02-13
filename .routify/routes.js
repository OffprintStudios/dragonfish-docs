
/**
 * @roxi/routify 2.12.4
 * File generated Sat Feb 13 2021 01:20:13 GMT-0800 (Pacific Standard Time)
 */

export const __version = "2.12.4"
export const __timestamp = "2021-02-13T09:20:13.694Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/alyx/Projects/dragonfish-docs/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svx",
      "filepath": "/about.svx",
      "name": "about",
      "ext": "svx",
      "badExt": false,
      "absolutePath": "/Users/alyx/Projects/dragonfish-docs/src/pages/about.svx",
      "importPath": "../src/pages/about.svx",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => import('../src/pages/about.svx').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/api/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/alyx/Projects/dragonfish-docs/src/pages/api/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "introduction.svelte",
          "filepath": "/api/introduction.svelte",
          "name": "introduction",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/alyx/Projects/dragonfish-docs/src/pages/api/introduction.svelte",
          "importPath": "../src/pages/api/introduction.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/api/introduction",
          "id": "_api_introduction",
          "component": () => import('../src/pages/api/introduction.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/api/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/api",
      "id": "_api__layout",
      "component": () => import('../src/pages/api/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/alyx/Projects/dragonfish-docs/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

