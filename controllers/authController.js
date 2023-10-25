const jwt = require("jsonwebtoken");
const Signup = require("../models/signupModal");
const nodemailer = require("nodemailer");

/**
 * The login function checks if a user exists and if the provided password matches, then generates a
 * JWT token for authentication.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is typically
 * provided by the web framework or server handling the request.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, sending JSON data, or redirecting the client to another URL.
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });

    if (user) {
      if (user.password === password) {
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          "your-secret-key",
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          message: "Login successful",
          user: {
            name: user.name,
            email: user.email,
          },
          token: token,
        });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "This user doesn't exist." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * The signUp function creates a new account and returns a success message if successful, or an error
 * message if there is an error.
 * @param req - The `req` parameter is an object that represents the HTTP request made by the client.
 * It contains information such as the request headers, request body, request method, request URL, and
 * other relevant information.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body. In this case, the `res` object is
 * used
 */
const signUp = async (req, res) => {
  try {
    // Create the user account
    const signup = await Signup.create(req.body);

    // Send a welcome email to the user
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ranjeet.xotiv@gmail.com",
        pass: "egeigozunododypa",
      },
    });

    const mailOptions = {
      from: "ranjeet.xotiv@gmail.com",
      to: signup.email,
      subject: "Welcome to Our Service",
      html: `
        <html>
          <head>
            <style>
              /* Define your inline CSS styles here */
              body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to Our Service</h1>
              <p>Thank you for signing up for our service! We are excited to have you as a member.</p>
              <p>Your credentials:</p>
              <ul>
                <li>Email: ${signup.email}</li>
                <li>Password: ${signup.password}</li>
              </ul>
            </div>
          </body>
        </html>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    // Respond with a success message
    res.status(200).json({ signup, message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login, signUp };
