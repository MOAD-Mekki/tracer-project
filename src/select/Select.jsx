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
  const dataStatus = data?.result?.status?.className;
  let status = "Unknown";
  if (dataStatus === "userStatusRecently") status = "Recently online";
  else if (dataStatus === "userStatusOnline") status = "User online";
  else if (dataStatus === "userStatusOffline") status = "User offline";
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
        </div>
      </div>
    </div>
  );
}
