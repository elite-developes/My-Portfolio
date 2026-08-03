import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  MdEmail,
  MdLocationOn,
  MdWork,
} from "react-icons/md";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SectionHeading from "../ui/SectionHeading";
import ContactInfoCard from "../ui/ContactInfoCard";
import Button from "../ui/Button";

import {
  contactInfo,
} from "../../data/portfolioData";

function Contact() {
  const icons = {
    email: <MdEmail />,
    location: <MdLocationOn />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    availability: <MdWork />,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus(
        "✅ Message sent successfully! I'll get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus(
        "❌ Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeading
          subtitle="Contact"
          title="Let's Build Something Amazing"
          description="Whether you have a project, internship opportunity or just want to say hello, I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Left */}

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <ContactInfoCard
                key={item.id}
                icon={icons[item.type]}
                title={item.title}
                value={item.value}
                href={item.href}
              />
            ))}
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/95">

            {status && (
              <div
                className={`mb-6 rounded-xl p-4 ${
                  status.startsWith("✅")
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                }`}
              >
                {status}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
              />

              <Button
                type="submit"
                disabled={loading}
                text={
                  loading
                    ? "⏳ Sending..."
                    : "Send Message"
                }
                fullWidth
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;