const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html>
      <head>
          <link rel="stylesheet" type="text/css" href="form2.css">
          <title>
              Reg-Frorm
          </title>
      </head>
  
      <body style="background-color: black; color: white;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
          <header>
              <h1 class="title">Enter Your Details Here</h1>
          </header>
          <br>
          <main>
              <div>
                  <b>Personal Information</b>
                  <hr><br>
  
                  <label for="firstname">First Name</label>
                  <input type="text" name="firstname" placeholder="Enter Your First Name" required>
                  <span style="display: inline-block; width: 100px;"></span>
  
                  <label for="middlename">Midle Name</label>
                  <input type="text" name="middlename" placeholder="Enter Your Middlle Name" >
                  <span style="display: inline-block; width: 100px;"></span>
  
                  <label for="lastname">Last Name</label>
                  <input type="text" name="lastname" placeholder="Enter Your Last Name" required>
  
                  <br><br>
  
                  <label for="fathername">Father's Full Name</label>
                  <input type="text" name="fathername" placeholder="Enter Your Father's Full Name" required>
                  <span style="display: inline-block; width: 100px;"></span>
  
                  <label for="mothername">Mother's Full Name</label>
                  <input type="text" name="mothertname" placeholder="Enter Your Mother's Full Name" required>
                  <span style="display: inline-block; width: 100px;"></span>
  
                  <br><br>
  
                  <label for="age">Age</label>
                  <input type="number" name="age" placeholder="Enter your Age" required>
                  <span style="display: inline-block; width: 100px;"></span>
  
                  <lable for="dob">Date of Birth</lable>
                  <input type="date" name="dob" required>
  
                  <br> <br>
  
                  Gender:
                  <input type="radio" name="gender">
                  <lable for="gender">Male</lable>
                  <span style="display: inline-block; width: 30px;"></span>
                  
                  <input type="radio" name="gender">
                  <lable for="gender">Female</lable>
                  <span style="display: inline-block; width: 30px;"></span>
  
                  <input type="radio" name="gender">
                  <lable for="gender">Others</lable>
  
                  <br><br>
  
                  <label for="email">Email ID</label>
                  <input type="email" name="email" placeholder="abcd@example.com" required>
  
                  <br><br><br>
              </div>
              <div>
                  <b>Eductional Information</b>
                  <hr><br>
                  work on progress visit soon
                  <br><br><br>
              </div>
          </main>
  
          <footer>
              <div>
                  <input type="checkbox" name="agree">
                  <label for="agree">I accept all </label>
                  <a href="https://www.youtube.com/channel/UCOcZ_NXVu1p7m_sW0RO4_VA" target="_blank">Terms and Conditions</a>
                  <br><br>
                  <button type="submit">Submit</button>
              </div>
          </footer>
      </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
