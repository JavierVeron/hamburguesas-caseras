import { describe, it, expect } from 'vitest'
import { TITULO, PRECIO, IMG_DESTACADA, LOGO } from '../src/content.js'

describe('content', () => {
  it('el título es "Hamburguesas Caseras"', () => {
    expect(TITULO).toBe('Hamburguesas Caseras')
  })

  it('el título no está vacío', () => {
    expect(TITULO.length).toBeGreaterThan(0)
  })

  it('el precio es "$8000"', () => {
    expect(PRECIO).toBe('$8000')
  })

  it('el precio comienza con $', () => {
    expect(PRECIO.startsWith('$')).toBe(true)
  })

  it('el valor numérico del precio es positivo', () => {
    const valor = parseInt(PRECIO.replace('$', '').replace('.', ''))
    expect(valor).toBeGreaterThan(0)
  })

  it('la ruta de la imagen destacada no está vacía', () => {
    expect(IMG_DESTACADA.length).toBeGreaterThan(0)
  })

  it('la imagen destacada es un jpg', () => {
    expect(IMG_DESTACADA.endsWith('.jpg')).toBe(true)
  })

  it('la ruta del logo no está vacía', () => {
    expect(LOGO.length).toBeGreaterThan(0)
  })

  it('el logo es un svg', () => {
    expect(LOGO.endsWith('.svg')).toBe(true)
  })
})
