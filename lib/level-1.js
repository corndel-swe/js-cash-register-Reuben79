import { drawer } from '../drawer.js'

// Level 1

/**
 * Goes into the given drawer and removes 1 item with the given name.
 * E.g. ('penny', drawer) removes 1 penny from the given drawer.
 * @param {string} name - the name of the currency to remove
 * @param {object[]} drawer - the drawer of currency
 * @returns {object[]} - the drawer, after removing the item
 */
export function removeItem(name, drawer) {
  // code here
  const index = drawer.findIndex(item => item.name === name) 
  if (index !== -1 && drawer[index].quantity > 0) { 
    drawer[index].quantity -= 1 
    if (drawer[index].quantity === 0) { 
      drawer.splice(index, 1) 
    } 
  } 
  return drawer

  
}

/**
 * The same as removeItem but adds an item of currency instead
 * @param {string} name
 * @param {object[]} drawer
 * @returns {object[]}
 */
export function addItem(name, drawer) {
  // code here
  const index = drawer.findIndex(item => item.name === name)
   if (index !== -1) { 
    drawer[index].quantity += 1 
  } else { 
    drawer.push({ name: name, quantity: 1 }) 
  } 
  return drawer


}
