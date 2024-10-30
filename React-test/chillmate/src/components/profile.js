import React, { useState } from "react";
import "./style.css";
import Navbar from "./navbar";

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: "Sneha",
        lastName: "Katturu",
        phoneNumber: "123-456-7890",
        address: "123 Market St, San Francisco, CA",
        sfsuId: "12345678",
        sfsuEmail: "skatturu@sfsu.edu",
        password: "",
        confirmPassword: "",
        emergencyContactFirstName: "Vidyasagar",
        emergencyContactLastName: "Katturu",
        emergencyPhoneNumber: "987-654-3210",
        emergencyAddress: "456 Elm St, San Francisco, CA",
        relationship: "Parent" // default relationship option
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div className="profile">
            <Navbar />
            <div className="profile-container">
                <h2>Profile</h2>

                <form className="profile-form">
                    <div>
                        <label>First Name*:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleInputChange}
                            onBlur={() => console.log("First Name updated:", profile.firstName)}
                            required
                        />
                    </div>

                    <div>
                        <label>Last Name*:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Last Name updated:", profile.lastName)}
                            required
                        />
                    </div>

                    <div>
                        <label>Phone Number*:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={profile.phoneNumber}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Phone Number updated:", profile.phoneNumber)}
                            required
                        />
                    </div>

                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Address updated:", profile.address)}
                        />
                    </div>

                    <div>
                        <label>SFSU ID*:</label>
                        <input
                            type="text"
                            name="sfsuId"
                            value={profile.sfsuId}
                            onChange={handleInputChange}
                            onBlur={() => console.log("SFSU ID updated:", profile.sfsuId)}
                            required
                        />
                    </div>

                    <div>
                        <label>SFSU Email*:</label>
                        <input
                            type="email"
                            name="sfsuEmail"
                            value={profile.sfsuEmail}
                            onChange={handleInputChange}
                            onBlur={() => console.log("SFSU Email updated:", profile.sfsuEmail)}
                            required
                        />
                    </div>

                    <div>
                        <label>Password*:</label>
                        <input
                            type="password"
                            name="password"
                            value={profile.password}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Password updated:", profile.password)}
                            required
                        />
                    </div>

                    <div>
                        <label>Confirm Password*:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={profile.confirmPassword}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Confirm Password updated:", profile.confirmPassword)}
                            required
                        />
                    </div>

                    <h3>Emergency Contact</h3>

                    <div>
                        <label>Emergency Contact First Name*:</label>
                        <input
                            type="text"
                            name="emergencyContactFirstName"
                            value={profile.emergencyContactFirstName}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Emergency Contact First Name updated:", profile.emergencyContactFirstName)}
                            required
                        />
                    </div>

                    <div>
                        <label>Emergency Contact Last Name*:</label>
                        <input
                            type="text"
                            name="emergencyContactLastName"
                            value={profile.emergencyContactLastName}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Emergency Contact Last Name updated:", profile.emergencyContactLastName)}
                            required
                        />
                    </div>

                    <div>
                        <label>Emergency Contact Phone Number*:</label>
                        <input
                            type="tel"
                            name="emergencyPhoneNumber"
                            value={profile.emergencyPhoneNumber}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Emergency Contact Phone Number updated:", profile.emergencyPhoneNumber)}
                            required
                        />
                    </div>

                    <div>
                        <label>Emergency Contact Address:</label>
                        <input
                            type="text"
                            name="emergencyAddress"
                            value={profile.emergencyAddress}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Emergency Contact Address updated:", profile.emergencyAddress)}
                        />
                    </div>

                    <div>
                        <label>Relationship with Emergency Contact:</label>
                        <select
                            name="relationship"
                            value={profile.relationship}
                            onChange={handleInputChange}
                            onBlur={() => console.log("Relationship updated:", profile.relationship)}
                        >
                            <option value="Parent">Parent</option>
                            <option value="Sibling">Sibling</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}
