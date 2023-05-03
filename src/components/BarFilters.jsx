import { Container } from '../styles/globals'
import { BarFiltersWrapper, ButtonClear, Tag } from './BarFilters.style.js'
import React from 'react'

const BarFilters = ({ activeTags, setActiveTags }) => {
    const handleClear = () => {
        setActiveTags([])
    }

    const removeTag = (tag) => {
        setActiveTags((prevTags) => prevTags.filter((t) => t !== tag))
    }

    return (
        <Container>
            <BarFiltersWrapper>
                <div>
                    {activeTags.map((tag) => (
                        <Tag key={tag}>
                            <span>{tag}</span>

                            <button onClick={() => removeTag(tag)}>X</button>
                        </Tag>
                    ))}
                </div>

                <ButtonClear onClick={handleClear}>Clear</ButtonClear>
            </BarFiltersWrapper>
        </Container>
    )
}

export default BarFilters
