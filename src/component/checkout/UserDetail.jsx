import React, { useState } from "react";
import ErrorInput from "../inputComponent/ErrorInput";

const UserDetail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [addressDescription, setAddressDescription] = useState("");
  const [error, setError] = useState(false);
  console.log(firstName, lastName, contactNumber, email, city, street);
  return (
    <div className="flex flex-1 flex-col p-4 overflow-y-auto pb-10 gap-7">
      <div className="flex gap-15">
        <ErrorInput
          title={"First Name"}
          data={firstName}
          setRecived={setFirstName}
          errorMessage={"please enter your name"}
          error={error}
        />
        <ErrorInput
          title={"Last Name"}
          data={lastName}
          setRecived={setLastName}
          errorMessage={"please enter your last name"}
          error={error}
        />
      </div>
      <div className="flex gap-15">
        <ErrorInput
          title={"Contact Number"}
          data={contactNumber}
          setRecived={setContactNumber}
          errorMessage={"please enter your Phone Number"}
          error={error}
        />
        <ErrorInput
          title={"Email"}
          data={email}
          setRecived={setEmail}
          errorMessage={"please enter your Email"}
          error={error}
        />
      </div>

      <div className="flex gap-15">
        <ErrorInput
          title={"City"}
          data={city}
          setRecived={setCity}
          errorMessage={"please enter your city"}
          error={error}
        />
        <ErrorInput
          title={"Street"}
          data={street}
          setRecived={setStreet}
          errorMessage={"please enter your last name"}
          error={error}
        />
      </div>
      <div>
        <div className="text-slate-700 font-medium">Address Description</div>
        <textarea
          className="border bg-slate-100 w-140 rounded-lg p-4 text-slate-700"
          rows={5}
          onChange={(e) => setAddressDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default UserDetail;
