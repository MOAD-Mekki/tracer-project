import './UserCard.css'

export default function Card({id, username }) {
    return (
        <div className="user-card">
            <div className="user-avatar">
                <span>{username.charAt(0).toUpperCase()}</span>
            </div>
            <div className="user-info">
                <h2 className="user-name">User: {username}</h2>
                <p className="user-id">ID: {id}</p>
            </div>
        </div>
    )
}