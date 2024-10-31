import s from './UsersPage.module.css'
import { useEffect } from 'react'
import { useState } from 'react'

export function UsersPage() {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <section>
            <div className="container">
                <div className={s.users}>
                    {
                        users.map(user => {
                            return (
                                <div className={s.user}>{user.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )

}   