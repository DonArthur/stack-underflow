export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>

        <input
          placeholder="Username"
          className="w-full border p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}