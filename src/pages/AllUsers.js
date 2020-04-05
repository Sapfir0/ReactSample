import React, {Component} from 'react';

const users = [
    {id: 1, login: "1", email: "1@email.ru", password: "2131"},
    {id: 2, login: "2", email: "2@email.ru", password: "1909"},
    {id: 3, login: "3", email: "3@email.ru", password: "1943"},
    {id: 4, login: "4", email: "4@email.ru", password: "4345"}
]

export default function AllUsersTable(props) {
    let table = []

    for (const user of users) {
        table.push(<tr key={user.id}>
            <td>{user.login}</td>
            <td>{user.email} </td>
            <td>{user.password}</td>
        </tr>);
    }

    return (<table>
        <thead>
            <tr><th>login</th><th>email</th><th>password</th></tr>
        </thead>
        <tbody>{table}</tbody>
    </table>);
}

