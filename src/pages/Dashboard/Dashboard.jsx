import useRole from "../../hooks/useRole"

const Dashboard = () => {
  const [role] = useRole()
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {role === ""
          ? "You are blocked by admin."
          : "Welcome to catty dashboard"}
      </h1>
    </div>
  )
}

export default Dashboard
