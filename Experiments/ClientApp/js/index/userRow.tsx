import * as React from 'react'

function userRow() {
    return (
        <tr>
            <td className="avatar">Avatar</td>
            <td className="name">FirstName LastName</td>
            <td className="summary">Summary</td>
            <td className="actions">Buttons</td>
        </tr>
    );
}

export default userRow;