import { useGlobalContext } from './AppProvider.jsx'
import JobDetail from './components/JobDetail.jsx'
import Header from './components/Header.jsx'
import { Container } from './styles/globals.jsx'
import styled from 'styled-components'
import React, { useState } from 'react'
import BarFilters from './components/BarFilters.jsx'

export const JobList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
`

function App() {
    const { data } = useGlobalContext()
    const [activeTags, setActiveTags] = useState([])

    const handleTagClick = (tag) => {
        if (activeTags.includes(tag)) {
            setActiveTags(activeTags.filter((t) => t !== tag))
        } else {
            setActiveTags([...activeTags, tag])
        }
    }

    const filteredItems = data.filter((dataKey) => {
        return activeTags?.every(
            (tag) =>
                dataKey?.languages?.includes(tag) ||
                dataKey?.tools?.includes(tag) ||
                dataKey?.role?.includes(tag) ||
                dataKey?.level?.includes(tag)
        )
    })

    return (
        <>
            <Header />

            <Container>
                {activeTags.length > 0 && <BarFilters activeTags={activeTags} setActiveTags={setActiveTags} />}

                <JobList>
                    {filteredItems.map((item) => (
                        <JobDetail key={item?.id} data={item} activeTags={activeTags} onTagClick={handleTagClick} />
                    ))}
                </JobList>
            </Container>
        </>
    )
}

export default App
