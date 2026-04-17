const LoginComponent = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };

  return (
    <form className="flex flex-col items-center w-full" onSubmit={submitHandler}>
      <label htmlFor="email" className="form-label">
        EMAIL:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        className="form-input"
      />

      <label htmlFor="password" className="form-label">
        PASSWORD:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        autoComplete="current-password"
        placeholder="Enter your password"
        className="form-input mb-[40px]"
      />

      <button
        type="submit"
        className="form-button"
      >
        Login
      </button>
    </form>
  );
};

export default LoginComponent;
