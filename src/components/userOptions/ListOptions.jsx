import React from 'react'
import Option from './Option'

export default function ListOptions({ user }) {
    return (
        <div className="list-options">
            <Option title="Mes informations" icon="fa-solid fa-user" infos={user} />
            {user.admin && <Option title="Mode administrateur" icon="fa-solid fa-pen-to-square" color="gray-200"/>}
        </div>
    )
}
