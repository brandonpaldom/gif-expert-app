import { fireEvent, render, screen } from '@testing-library/react'
import { AddNewCategory } from '../../components'

describe('AddNewCategory', () => {
  test('Debe cambiar el valor del input', () => {
    render(<AddNewCategory handleAddNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Pikachu' } })
    expect(input.value).toBe('Pikachu')
  })

  test('Debe llamar a handleAddNewCategory si el valor del input es mayor a 1', () => {
    const value = 'Pikachu'
    const handleAddNewCategory = jest.fn()
    render(<AddNewCategory handleAddNewCategory={handleAddNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value } })
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(handleAddNewCategory).toHaveBeenCalledWith(value)
  })

  test('No debe llamar a handleAddNewCategory si el valor del input es menor a 1', () => {
    const handleAddNewCategory = jest.fn()
    render(<AddNewCategory handleAddNewCategory={handleAddNewCategory} />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(handleAddNewCategory).not.toHaveBeenCalled()
  })
})
