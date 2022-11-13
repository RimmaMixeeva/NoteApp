function RegisterPage() {
  return (
    <div className="max-w-sm mx-auto pb-5 pt-5 mt-5 ">
      <div className="text-black  flex justify-center pb-5 pt-5 mt-8 text-3xl font-semibold">
        Sign up
      </div>

      <form
        action=""
        method="get"
        className="text-black pb-5 pt-5 mt-3 text-3xl"
      >
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            className="bg-gray-300 pt-3 pb-3 pl-3 mt-5"
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Repeat password"
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="register"
            className="bg-gray-300 pt-3 pb-3 pl-3 pr-3 mt-5 flex justify-center mx-auto w-60"
          />
        </div>
      </form>
    </div>
  );
}
export default RegisterPage;
