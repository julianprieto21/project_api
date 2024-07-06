export const LoginForm = () => {
  return (
    <section className="flex flex-col w-96 h-fit rounded-xl shadow-lg bg-neutral-900 gap-4">
      <form className="relative flex flex-col w-96 gap-4" role="form">
        <h2 className="text-4xl font-base text-center py-4 px-3">
          Inicia sesión
        </h2>
        <input
          type="text"
          id="l-user"
          name="user"
          autoComplete="username"
          className="p-2 mx-3 rounded-md disabled:cursor-not-allowed"
          placeholder="Username"
          required
        />
        <input
          type="password"
          id="l-password"
          name="password"
          autoComplete="current-password"
          className="p-2 mx-3 rounded-md disabled:cursor-not-allowed"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="text-left mx-4 w-fit border px-2 py-1 rounded-md border-neutral-600 text-neutral-500 hover:text-neutral-100 transition"
        >
          Login
        </button>
      </form>
      <hr className="border-t border-neutral-800 mx-3" />
      <form className="flex flex-col w-96 gap-4 mb-4" role="form">
        <h2 className="text-4xl font-base text-center pb-5 px-3">
          Crea tu cuenta
        </h2>

        <input
          type="text"
          id="s-user"
          name="user"
          className="p-2 mx-3 rounded-md"
          placeholder="Username"
          required
        />
        <input
          type="email"
          id="s-email"
          name="email"
          autoComplete="email"
          className="p-2 mx-3 rounded-md"
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="s-password"
          name="password"
          autoComplete="current-password"
          className="p-2 mx-3 rounded-md"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="text-left mx-4 w-fit border px-2 py-1 rounded-md border-neutral-600 text-neutral-500 hover:text-neutral-100 transition"
        >
          Signin
        </button>
      </form>
    </section>
  );
};
