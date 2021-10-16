import React, { useState } from 'react'
import "../../styles/UncleParkDetails/unclepark.css"

const UncleParkDetails = () => {

    const [name, setName] = useState("UncleParkDetails")

    return (
        <section class="column container-left">
            <div class="header">
                <h1 class="title is-size-2-desktop is-size-3-touch">
                    <span class="title-text-ly">Uncle</span>Park.
                </h1>
                <p class="content has-text-grey is-size-6">
                    Connect with your Friends and <br />Create memories
                </p>
            </div>
            <section class="image-container custom-center">
                <img src="../../assets/onlineConnection.svg" alt="" />
            </section>
        </section>
    )
}

export default UncleParkDetails
