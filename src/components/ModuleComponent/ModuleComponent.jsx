import React from 'react'

const ModuleComponent = ({ data }) => {

    return (
        <div>
            <h2>{data.title}</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ maxWidth: '50%', paddingRight: '20px' }}>
                    <ul>
                        {data.value.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ maxWidth: '50%', paddingLeft: '20px' }}>
                    <ul>
                        {data.value.map((item, index) => (
                            <li key={index}>
                                {item.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModuleComponent