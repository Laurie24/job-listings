import React from 'react'
import { ContainerCard, ContentInfos, SectionInfos, SectionLanguages } from './JobDetail.style.js'

const JobDetail = ({ data, onTagClick }) => {
    const tags = data?.languages.concat(data?.tools)
    tags.push(data?.role)
    tags.push(data?.level)

    return (
        <ContainerCard>
            <SectionInfos>
                <img alt={''} src={data?.logo} />

                <ContentInfos>
                    <p>{data?.company}</p>
                    <p className="position">{data?.position}</p>
                    <div>
                        {data?.postedAt} ・ {data?.contract} ・ {data?.location}
                    </div>
                </ContentInfos>
            </SectionInfos>

            <SectionLanguages>
                {tags?.map((tag) => (
                    <button key={tag} onClick={() => onTagClick(tag)}>
                        {tag}
                    </button>
                ))}
            </SectionLanguages>
        </ContainerCard>
    )
}

export default JobDetail
