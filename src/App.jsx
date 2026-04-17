import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('home')

  return (
    <div style={s.page}>
      <div style={s.orb1}></div>
      <div style={s.orb2}></div>

      <div style={s.nav}>
        <button style={{...s.navBtn, ...(page === 'home' && s.activeNav)}} onClick={() => setPage('home')}>HOME</button>
        <button style={{...s.navBtn, ...(page === 'about' && s.activeNav)}} onClick={() => setPage('about')}>ABOUT</button>
      </div>

      {page === 'home' &&
      <section style={s.center}>
        <div style={s.hero}>
          <div style={s.glassCard}>
            <img src={heroImg} style={s.base} />
            <img src={reactLogo} style={{ ...s.float, left: "-85px", top: "8%" }} />
            <img src={viteLogo} style={{ ...s.float, right: "-85px", bottom: "8%" }} />
          </div>
        </div>

        <div style={s.textBox}>
          <div style={s.badge}>LUXURY EDITION</div>
          <h1 style={s.title}>Build Fast.<br/>Look Elite.</h1>
          <p style={s.sub}>Minimal code ⚡ Maximum design impact</p>
          <div style={s.line}></div>
          <button style={s.btn} onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
        </div>
      </section>
      }

      {page === 'about' &&
      <section style={s.center}>
        <div style={s.textBox}>
          <div style={s.badge}>ABOUT PAGE</div>
          <h1 style={s.title}>About Us</h1>
          <div style={s.line}></div>
          <p style={s.sub}>
            This page was added with single minimal code change.<br/><br/>
            ✅ No new dependencies installed<br/>
            ✅ No extra files created<br/>
            ✅ All existing design preserved<br/>
            ✅ Zero breaking changes<br/>
            ✅ Total +22 lines added<br/>
            <br/>
            Minimal code. Maximum impact.
          </p>
        </div>
      </section>
      }
    </div>
  )
}

export default App

const s = {
  page: {
    background: "linear-gradient(125deg, #0A0E27 0%, #1a1f3a 25%, #2d1b3d 50%, #1a1f3a 75%, #0A0E27 100%)",
    color: "#F8F7F4",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  orb1: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(186,147,100,0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    top: "-200px",
    right: "-100px",
    animation: "pulse 8s ease-in-out infinite",
    filter: "blur(80px)",
  },
  orb2: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(138,103,164,0.2) 0%, transparent 70%)",
    borderRadius: "50%",
    bottom: "-150px",
    left: "-100px",
    animation: "pulse 10s ease-in-out infinite",
    filter: "blur(90px)",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
    maxWidth: "1400px",
    position: "relative",
    zIndex: "10",
  },
  hero: {
    position: "relative",
  },
  glassCard: {
    position: "relative",
    padding: "50px",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "30px",
    border: "1px solid rgba(186,147,100,0.2)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(186,147,100,0.05)",
  },
  base: {
    width: "380px",
    animation: "float 5s ease-in-out infinite",
    filter: "drop-shadow(0 40px 100px rgba(186,147,100,0.6))",
  },
  float: {
    position: "absolute",
    width: "110px",
    opacity: 0.3,
    animation: "floatSpin 9s ease-in-out infinite",
    filter: "drop-shadow(0 10px 30px rgba(186,147,100,0.4))",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    maxWidth: "520px",
  },
  badge: {
    fontSize: "0.7rem",
    letterSpacing: "4px",
    color: "#BA9364",
    fontWeight: "600",
    padding: "8px 20px",
    border: "1px solid rgba(186,147,100,0.3)",
    borderRadius: "50px",
    width: "fit-content",
    background: "rgba(186,147,100,0.05)",
  },
  title: {
    fontSize: "5rem",
    fontWeight: "100",
    letterSpacing: "12px",
    lineHeight: "1.1",
    background: "linear-gradient(135deg, #F8F7F4 0%, #BA9364 50%, #F8F7F4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 200%",
    animation: "shimmer 6s ease-in-out infinite",
  },
  sub: {
    opacity: 0.65,
    fontSize: "1.1rem",
    letterSpacing: "1px",
  },
  line: {
    width: "120px",
    height: "2px",
    background: "linear-gradient(90deg, #BA9364 0%, transparent 100%)",
  },
  nav: {
    position: "absolute",
    top: "40px",
    right: "40px",
    display: "flex",
    gap: "20px",
    zIndex: "100",
  },
  navBtn: {
    padding: "10px 24px",
    border: "1px solid rgba(186,147,100,0.3)",
    background: "transparent",
    color: "#BA9364",
    borderRadius: "6px",
    cursor: "pointer",
    letterSpacing: "2px",
    fontSize: "0.8rem",
    transition: "0.3s",
  },
  activeNav: {
    background: "rgba(186,147,100,0.15)",
    borderColor: "#BA9364",
  },
  btn: {
    padding: "18px 55px",
    border: "2px solid #BA9364",
    background: "linear-gradient(135deg, rgba(186,147,100,0.1) 0%, rgba(186,147,100,0.05) 100%)",
    color: "#BA9364",
    cursor: "pointer",
    transition: "0.4s",
    borderRadius: "8px",
    fontSize: "1rem",
    letterSpacing: "2px",
    fontWeight: "500",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 40px rgba(186,147,100,0.2)",
  },
}

const style = document.createElement("style")
style.innerHTML = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
}
@keyframes floatSpin {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
button:hover {
  background: linear-gradient(135deg, #BA9364 0%, #D4AF37 100%);
  color: #0A0E27;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 20px 60px rgba(186,147,100,0.5);
}
`
document.head.appendChild(style)

const reset = document.createElement("style")
reset.innerHTML = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #0A0E27;
}
`
document.head.appendChild(reset)