import { useState } from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'

import { SearchHeader, ButtonAdd } from './styled'


function Search() {
    const [search, setSearch] = useState('')

    return (
        <SearchHeader>
            <label htmlFor='search'>
                <FaSearch size={24}/>
                <input
                    type="text"
                    placeholder='Search'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </label>
            <ButtonAdd>
                <FaPlus size={20} />
            </ButtonAdd>
        </SearchHeader>
    )
}

export { Search }