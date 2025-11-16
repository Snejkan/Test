import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
  
}
function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}



export default About