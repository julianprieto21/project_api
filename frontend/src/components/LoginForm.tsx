import { actions } from "astro:actions";
import { useAppStore } from "../store/appStore";
import { useState } from "react";

export const LoginForm = () => {
  const { setIsLogin, setUser, isLogin } = useAppStore((state) => state);
  return (
    <section className="flex flex-col w-96 h-fit rounded-xl shadow-lg bg-neutral-900 gap-4">
      <form
        className="relative flex flex-col w-96 gap-4"
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          if (isLogin) {
            setIsLogin(false);
            setUser("");
          }
          const formData = new FormData(e.target as HTMLFormElement);
          const result = await actions.login(formData);
          if (result[0]) {
            setIsLogin(true);
            setUser(result[1]);
          } else {
          }
        }}
      >
        <h2 className="text-4xl font-base text-center py-4 px-3">LOG IN</h2>

        {!isLogin ? (
          <span className="top-16 w-full text-center absolute text-red-500 font-normal text-xs">
            Nombre de usuario o contraseña incorrectos
          </span>
        ) : (
          <span className="top-16 w-full text-center absolute text-green-500 font-normal text-xs">
            Sesión iniciada correctamente!
          </span>
        )}
        <input
          type="text"
          id="l-user"
          name="user"
          autoComplete="username"
          className="p-2 mx-3 rounded-md disabled:cursor-not-allowed"
          placeholder="Username"
          disabled={isLogin}
          required
        />
        <input
          type="password"
          id="l-password"
          name="password"
          autoComplete="current-password"
          className="p-2 mx-3 rounded-md disabled:cursor-not-allowed"
          placeholder="Password"
          disabled={isLogin}
          required
        />
        <button
          type="submit"
          className={`text-left mx-4 w-fit border px-2 py-1 rounded-md border-neutral-600 text-neutral-500 ${
            isLogin ? "hover:text-red-500" : "hover:text-neutral-100"
          } transition`}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </form>
      <hr className="border-t border-neutral-800 mx-3" />
      <form
        className="flex flex-col w-96 gap-4 mb-4"
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const result = await actions.signin(formData);
          console.log(result);
        }}
      >
        <h2 className="text-4xl font-base text-center pb-5 px-3">SIGN IN</h2>

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
