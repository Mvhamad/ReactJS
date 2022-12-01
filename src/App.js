import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Registration</h2>
      <p>Please complete this form to register.</p>
      <div className="form-contener">
        <form>
        <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input type="text" class="form-control" id="username" />
            
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <div id="passwordHelp" class="form-text">Never share your password with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">I accept the terms of the contract</label>
          </div>
          <button type="button" class="btn btn-success">Confirm</button>
        </form>

      </div>
    </div>
  );
}

export default App;
