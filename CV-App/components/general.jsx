import { useState } from 'react';

function GeneralInfoSection() {
  const [info, setInfo] = useState({ name: '', familyName: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(true);

  return isEditing ? (
    <>
    <label>
        <strong>Name:</strong> <input name="name" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} placeholder="Enter your name" />
    </label>
    <label>
        <strong>Family Name:</strong> <input name="familyName" value={info.familyName} onChange={(e) => setInfo({ ...info, familyName: e.target.value })} placeholder="Enter your family name" />
    </label>
    <label>
        <strong>Email:</strong> <input name="email" type="email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} placeholder="Enter your email" />
    </label>
    <label>
        <strong>Phone:</strong> <input name="phone" type="tel" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} placeholder="Enter your phone number" />
    </label>
    <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Family Name:</strong> {info.familyName}</p>
      <p><strong>Email:</strong> {info.email}</p>
      <p><strong>Phone:</strong> {info.phone}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}

export default GeneralInfoSection;
