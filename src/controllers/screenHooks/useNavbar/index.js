import { useState, useEffect } from 'react'

const useNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen(p => !p)
  }
  return { menuOpen, menuToggleHandler }
}

export { useNavbar }
