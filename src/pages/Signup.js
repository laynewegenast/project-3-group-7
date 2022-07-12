import React, { useState } from 'react';
import Header from '../components/Header';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
//   const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addUser({
    //     variables: { ...formState },
    //   });

    //   Auth.login(data.addUser.token);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <main>
        <Header />
      <div >
        <div >
        
          <div >
            <form onSubmit={handleFormSubmit}>
            <h2>CREATE AN ACCOUNT:</h2>
            <label for="username">USERNAME</label>
              <input
                className = "form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <label for="email">EMAIL</label>
              <input
              className = "form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <label for="password">PASSWORD</label>
              <input
                className = "form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button id="signup" type="submit">
                Submit
              </button>
            </form>
            <img class="image1" src="./assets/images/painting7.png" alt="" />
            {/* {error && <div>Signup failed</div>} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
