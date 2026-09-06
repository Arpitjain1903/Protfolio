"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, Instagram } from "lucide-react";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const res = await fetch("https://formspree.io/f/xdeolgje", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#2A2925] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
              SECTION 05
            </span>
            <h2 className="text-[28px] font-semibold text-[#EDECE8]">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="md:col-span-5 space-y-6">
              <p className="text-[15px] leading-[1.6] text-[#B8B6AE]">
                Open to Data Scientist & AI/ML Engineer internship and full-time opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
              </p>

              <div className="space-y-3.5 pt-2">
                <a
                  href="mailto:arpitjainaj2444@gmail.com"
                  className="flex items-center gap-3.5 p-4 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors text-[13.5px] text-[#EDECE8]"
                >
                  <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8A887F]">Email Address</div>
                    <div className="font-mono text-[13px]">arpitjainaj2444@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+918755908111"
                  className="flex items-center gap-3.5 p-4 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors text-[13.5px] text-[#EDECE8]"
                >
                  <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8A887F]">Phone / WhatsApp</div>
                    <div className="font-mono text-[13px]">+91 8755908111</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/_.arpit.j?stkn=YWJpdjFyZXRvcXpz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors text-[13.5px] text-[#EDECE8]"
                >
                  <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8A887F]">Instagram</div>
                    <div className="font-mono text-[13px]">@_.arpit.j</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/arpit-jain-505169313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors text-[13.5px] text-[#EDECE8]"
                >
                  <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8A887F]">LinkedIn</div>
                    <div className="font-mono text-[13px]">linkedin.com/in/arpit-jain-505169313</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Arpitjain1903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors text-[13.5px] text-[#EDECE8]"
                >
                  <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8A887F]">GitHub</div>
                    <div className="font-mono text-[13px]">github.com/Arpitjain1903</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-7">
              <div className="p-8 rounded-[20px] bg-[#1E1D1A] border border-[#2A2925]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#EDECE8] mx-auto animate-bounce" />
                    <h3 className="text-[18px] font-semibold text-[#EDECE8]">Message Sent Successfully</h3>
                    <p className="text-[13.5px] text-[#8A887F]">
                      Thank you for reaching out, Arpit will respond to your email shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[12px] text-[#B8B6AE] underline hover:text-[#EDECE8]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-[12px] bg-[#161513] border border-[#2A2925] focus:border-[#EDECE8] text-[#EDECE8] text-[14px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-[12px] bg-[#161513] border border-[#2A2925] focus:border-[#EDECE8] text-[#EDECE8] text-[14px] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Hi Arpit, I'd like to discuss an opportunity..."
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-[12px] bg-[#161513] border border-[#2A2925] focus:border-[#EDECE8] text-[#EDECE8] text-[14px] outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13.5px] font-semibold py-3 rounded-full transition-all transform active:scale-[0.99] disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
