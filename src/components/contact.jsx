

import React, { useState } from "react";
import { HiUser, HiMail, HiOutlinePencilAlt, HiChatAlt2 } from "react-icons/hi";

const initialState = {
	fullName: "",
	email: "",
	subject: "",
	message: "",
};

function validateEmail(email) {
	// Simple email regex
	return /^\S+@\S+\.\S+$/.test(email);
}

const Contact = () => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let newErrors = {};
		if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
		if (!form.email.trim()) newErrors.email = "Email is required";
		else if (!validateEmail(form.email)) newErrors.email = "Invalid email format";
		if (!form.subject.trim()) newErrors.subject = "Subject is required";
		if (!form.message.trim()) newErrors.message = "Message is required";
		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
			setSubmitted(true);
			setForm(initialState);
			setTimeout(() => setSubmitted(false), 3000);
		}
	};

		return (
			<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-2">
				<div className="w-full max-w-2xl p-1 rounded-3xl bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-2xl">
					<form
						className="w-full bg-white rounded-3xl p-10 md:p-14 shadow-xl relative"
						onSubmit={handleSubmit}
						noValidate
					>
						<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full p-3 shadow-lg">
							<HiChatAlt2 className="text-white text-4xl" />
						</div>
						<h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
							<div>
								<label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="fullName">
									<HiUser className="text-blue-500" /> Full Name
								</label>
								<input
									className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
										errors.fullName ? "border-red-400" : "border-gray-200"
									}`}
									type="text"
									id="fullName"
									name="fullName"
									value={form.fullName}
									onChange={handleChange}
									required
									placeholder="Your full name"
								/>
								{errors.fullName && (
									<p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
								)}
							</div>
							<div>
								<label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="email">
									<HiMail className="text-blue-500" /> Email Address
								</label>
								<input
									className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
										errors.email ? "border-red-400" : "border-gray-200"
									}`}
									type="email"
									id="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
									placeholder="you@email.com"
								/>
								{errors.email && (
									<p className="text-red-500 text-xs mt-1">{errors.email}</p>
								)}
							</div>
							<div className="md:col-span-2">
								<label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="subject">
									<HiOutlinePencilAlt className="text-blue-500" /> Subject
								</label>
								<input
									className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
										errors.subject ? "border-red-400" : "border-gray-200"
									}`}
									type="text"
									id="subject"
									name="subject"
									value={form.subject}
									onChange={handleChange}
									required
									placeholder="Subject of your message"
								/>
								{errors.subject && (
									<p className="text-red-500 text-xs mt-1">{errors.subject}</p>
								)}
							</div>
							<div className="md:col-span-2">
								<label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2" htmlFor="message">
									<HiChatAlt2 className="text-blue-500" /> Message
								</label>
								<textarea
									className={`w-full px-4 py-3 border-2 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none min-h-[120px] ${
										errors.message ? "border-red-400" : "border-gray-200"
									}`}
									id="message"
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									placeholder="Type your message here..."
								/>
								{errors.message && (
									<p className="text-red-500 text-xs mt-1">{errors.message}</p>
								)}
							</div>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 text-lg tracking-wide mt-2"
						>
							Send Message
						</button>
						{submitted && (
							<p className="text-green-600 text-center mt-6 text-lg font-semibold animate-fade-in">Thank you for contacting us!</p>
						)}
					</form>
				</div>
			</div>
		);
};

export default Contact;

