import generalData from './general.json'
import programmingData from './programming.json'
import educationData from './education.json'
import workData from './work.json'
import tagData from './tag.json'

const mergedData = {
  ...generalData,
  ...programmingData,
  ...educationData,
  ...workData,
  ...tagData,
}

export default function loadData({ language, showPersonalia, setData }) {
  const data = getDataInLanguage(language, mergedData)
  setData(data)
  if (showPersonalia) overwritePersonalia(language, setData)
}

function overwritePersonalia(language, setData) {
  import('./personalia.json')
    .catch(console.error)
    .then((personalia) =>
      setData((data) => ({
        ...data,
        personalia: getDataInLanguage(language, personalia),
      }))
    )
}

function getDataInLanguage(language, data) {
  if (hasLanguage(language, data)) return data[language]
  if (typeof data !== 'object' || data === null) return data
  return mapObjectOrArray(data, (subdata) =>
    getDataInLanguage(language, subdata)
  )
}

function hasLanguage(language, obj) {
  const languages = Object.keys(obj)
  return languages.includes(language)
}

function mapObjectOrArray(objOrArr, map) {
  if (Array.isArray(objOrArr)) return objOrArr.map(map)
  return mapObject(objOrArr, map)
}

function mapObject(obj, map) {
  const entries = Object.entries(obj)
  const mappedEntries = entries.map(([key, value]) => [key, map(value)])
  return Object.fromEntries(mappedEntries)
}
