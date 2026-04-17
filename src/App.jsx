import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* MAIN SECTION */}
      <section
        id="center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <h1>Get started</h1>

          <button
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>

        {/* RIGHT SIDE FORM */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <form
            style={{
              maxWidth: "420px",
              margin: "0 auto",
              padding: "25px",
              borderRadius: "12px",
              background: "#1a1a2e",
              border: "1px solid #2a2a40",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#aaa" }}>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#aaa" }}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            {/* DOB */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#aaa" }}>Date of Birth</label>
              <input
                type="date"
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            {/* Gender */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#aaa" }}>Gender</label>
              <div style={{ display: "flex", gap: "15px", color: "#ddd" }}>
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
              </div>
            </div>

            {/* Country */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#aaa" }}>Country</label>
              <select
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#fff",
                }}
              >
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "12px",
                background: "linear-gradient(135deg, #646cff, #7c3aed)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* KEEP YOUR ORIGINAL BELOW */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li><a href="https://github.com/vitejs/vite">GitHub</a></li>
            <li><a href="https://chat.vite.dev/">Discord</a></li>
            <li><a href="https://x.com/vite_js">X.com</a></li>
            <li><a href="https://bsky.app/profile/vite.dev">Bluesky</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App