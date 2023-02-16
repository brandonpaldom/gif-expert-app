import { useState } from 'react'
import PropTypes from 'prop-types'

export function AddNewCategory({ handleAddNewCategory }) {
  const [categoryInputValue, setCategoryInputValue] = useState('')

  function handleCategoryInputChange({ target }) {
    setCategoryInputValue(target.value)
  }

  function handleCategorySubmit(e) {
    e.preventDefault()
    if (categoryInputValue.trim().length <= 1) return
    handleAddNewCategory(categoryInputValue.trim())
    setCategoryInputValue('')
  }

  return (
    <form
      onSubmit={handleCategorySubmit}
      className="flex flex-col"
      aria-label="form"
    >
      <input
        type="text"
        placeholder="Search for gifs..."
        value={categoryInputValue}
        onChange={handleCategoryInputChange}
        className="border-none bg-neutral-900 px-4 py-3 transition-colors duration-300 placeholder:text-neutral-600 focus:border-none focus:bg-neutral-800 focus:outline-none focus:ring-0"
      />
    </form>
  )
}

AddNewCategory.propTypes = {
  handleAddNewCategory: PropTypes.func.isRequired,
}
