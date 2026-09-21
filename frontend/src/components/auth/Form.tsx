
import { Link } from "react-router-dom";
import type { SubmitEventHandler } from "react";

type AuthFormProps = {
  formTitle: string;
  confirmPassword?: boolean;
  buttonName: string;
  link: string;
  linkText: string;
  textparagraph: string;
  onSubmit?: SubmitEventHandler<HTMLFormElement>;
};

function AuthForm({
  formTitle,
  confirmPassword = false,
  buttonName,
  link,
  linkText,
  textparagraph,
  onSubmit,
}: AuthFormProps) {
  return (
    <div className="w-full max-w-md rounded-xl bg-base-200 p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-base-content">
        {formTitle}
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            autoComplete={
              confirmPassword ? "new-password" : "current-password"
            }
            required
            className="input input-bordered w-full"
          />
        </div>

        {confirmPassword && (
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium"
            >
              Confirmar senha
            </label>

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              autoComplete="new-password"
              required
              className="input input-bordered w-full"
            />
          </div>
        )}

        <p className="text-sm text-base-content/70">
          {textparagraph}{" "}
          <Link
            to={link}
            className="font-bold text-primary hover:underline"
          >
            {linkText}
          </Link>
        </p>

        <button
          type="submit"
          data-theme="queuehub"
          className="btn btn-primary mt-2 w-full"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;