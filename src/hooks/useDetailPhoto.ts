import { useEffect, useState } from "react"

const photoNames = [
    "Bergenstock%20I"
]

// on mount, attempt to parse out the page's GUID. If not found, redirect to homepage
export const useDetailPhoto = () => {
  const [photoName, setPhotoName] = useState("")

  useEffect(() => {
    const parts = window.location.href.split("/")
    console.log(parts)
    if (parts.length === 5) {
        const photoName = parts[4]
        if (photoNames.includes(photoName)) {
            setPhotoName(photoName)
            return;
        }
    } 
    // invalid GUID - redirect to home
    console.error("Invalid photo!")
    window.location.href = `${window.location.protocol}//${window.location.host}`
  }, [])

  return { photoName }
}
