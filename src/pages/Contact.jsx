import {useState} from "react";

export default function Contact() {
  const [form, setForm] = useState({name: "", email: "", message: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all required fields");
    }
    alert("Thank you! Your message has been sent!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({...form, message: e.target.value})}
      />
      <button type="submit">Send</button>
    </form>
  );
}