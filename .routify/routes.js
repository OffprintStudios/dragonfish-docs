
/**
 * @roxi/routify 2.12.4
 * File generated Fri Feb 12 2021 18:10:06 GMT-0800 (Pacific Standard Time)
 */

export const __version = "2.12.4"
export const __timestamp = "2021-02-13T02:10:06.355Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isPage": true,
      "path": "/Home",
      "id": "_Home",
      "component": () => import('../src/pages/Home.svelte').then(m => m.default)
    }
  ],
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

