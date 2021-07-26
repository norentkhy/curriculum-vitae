import React, { createContext, useContext } from 'react'

const TagContext = createContext()

export function useTagContext() {
  return useContext(TagContext)
}

export function TagProvider({ tag, children }) {
  return <TagContext.Provider value={tag}>{children}</TagContext.Provider>
}
