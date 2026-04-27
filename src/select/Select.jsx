import "./Select.css";

export default function Select({ data }) {
  const firstName = data?.result?.firstName || "Unknown";
  const lastName = data?.result?.lastName || "Unknown";
  const type = data?.result?.bot ? "A Bot" : "A Human";
  const account = data?.result?.verified ? "Verified" : "Not Verified";
  const premium = data?.result?.premium ? "Premium" : "Not Premium";
  const closeFriend = data?.result?.closeFriend
    ? "Close Friend"
    : "Not Close Friend";
  const username = data?.result?.username || "Empty";
  const phone = data?.result?.phone || "No phone";
  const status = data?.result?.status?.className;
  const lastOnline = new Date(data?.result?.status?.wasOnline * 1000);
  
  return (
    <div className="select-page">
      <div className="user">
        <div className="user-header">
          <h2>@{username}</h2>
          <span className="user-type">{type}</span>
        </div>
        <div className="user-info">
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Account:</strong> {account} | {premium}
          </p>
          <p>
            <strong>Situation:</strong> {closeFriend}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Last seen:</strong> {lastOnline.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}
