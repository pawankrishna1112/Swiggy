import React from 'react'

const TopBar = () => {
  return (
    <section className="topBarSection">
    <div className="companyTitle">
        <h2>Swiggy</h2>
    </div>
    <div className="searchBar">
        <input type="text" placeholder='search' />
    </div>
    <div className="userAuth">

        Login/SignUp
    </div>
    </section>)
}

export default TopBar