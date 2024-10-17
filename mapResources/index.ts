// Description:
// Replacing resources in data with their URLs.
// The data contains references to resources using the format "resource:<resource-id>".
// The resources are provided as a list of objects with an ID and a URL.
// The data should be returned with the references replaced with the URLs.

export type Data = string | { [key: string]: string | Data | string[] | Data[] } | Data[]
export type Resources = { id: string; url: string }
export function mapResources(resources: Resources[], data: Data): Data { // O(n*m)
  if (typeof data === 'string') { // O(1)
    if (data.startsWith('resource')) { // O(n)
      const resourceId = data.split(':')[1] // O(n)
      const resource = resources.find((value) => value.id === resourceId) // O(n)
      return resource!.url // O(1)
    } else {
      return data // O(1)
    }
  }
  if (Array.isArray(data)) { // O(1)
    return data.map(entry => mapResources(resources, entry)) // O(n*m)
  }
  if (typeof data === 'object') { // O(1)
    const objectEntries = Object.entries(data) // O(n)
    return Object.fromEntries( // O(n)
      objectEntries.map(entry => { // O(n)
        return [entry[0], mapResources(resources, entry[1])] // O(n*m)
      })
    )
  }
  return data
}