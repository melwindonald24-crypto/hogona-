const LoginComponent = () => {
  return (
    <form>
     
      <input type="email" id="email" name="email" required />

      <input type="password" id="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
