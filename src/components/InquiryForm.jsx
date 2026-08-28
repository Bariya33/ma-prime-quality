import { useState } from 'react';
import './InquiryForm.css';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwrmDDMAs-1Q_j1ZEj4BIP4XhZGoV0tpjSAic1x4ds3aygN-rEWA0k7bZA6HuRKwkuuPQ/exec';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    projectType: '',
    otherProjectType: '',
    videoLength: '',
    quantity: '',
    footage: '',
    deadline: '',
    budget: '',
    reference: '',
    details: '',
    contactMethod: 'WhatsApp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,

      // Agar Other se koi aur project select kare,
      // to old Other text automatically clear ho jaye
      ...(name === 'projectType' && value !== 'Other'
        ? { otherProjectType: '' }
        : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! Your project inquiry has been sent successfully.');

        setFormData({
          name: '',
          email: '',
          phone: '',
          brand: '',
          projectType: '',
          otherProjectType: '',
          videoLength: '',
          quantity: '',
          footage: '',
          deadline: '',
          budget: '',
          reference: '',
          details: '',
          contactMethod: 'WhatsApp',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Inquiry submit error:', error);

      alert(
        'Unable to send your inquiry right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="inquiry">
      <div className="container inquiry__container">

        <div className="inquiry__intro">
          <span className="section-label__index">
            08 / PROJECT INQUIRY
          </span>

          <h2 className="inquiry__heading">
            TELL US ABOUT
            <br />
            YOUR PROJECT.
          </h2>

          <p className="inquiry__sub">
            Share your idea, footage, deadline and expectations.
            We’ll understand the project and get back to you with
            the right editing approach.
          </p>
        </div>

        <form
          className="inquiry__form"
          onSubmit={handleSubmit}
        >
          <div className="inquiry__grid">

            <div className="inquiry__field">
              <label>YOUR NAME *</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>

            <div className="inquiry__field">
              <label>EMAIL *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="inquiry__field">
              <label>WHATSAPP NUMBER *</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="inquiry__field">
              <label>BRAND / INSTAGRAM</label>

              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="@yourbrand"
              />
            </div>

            <div className="inquiry__field">
              <label>PROJECT TYPE *</label>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select project type
                </option>

                <option value="Wedding Film">
                  Wedding Film
                </option>

                <option value="Automotive Edit">
                  Automotive Edit
                </option>

                <option value="Event Aftermovie">
                  Event Aftermovie
                </option>

                <option value="Promotional Reel">
                  Promotional Reel
                </option>

                <option value="Gym / Fitness Edit">
                  Gym / Fitness Edit
                </option>

                <option value="Social Media Content">
                  Social Media Content
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              {formData.projectType === 'Other' && (
                <div className="inquiry__field inquiry__field--full">
                  <label>OTHER PROJECT DETAILS *</label>

                  <textarea
                    name="otherProjectType"
                    value={formData.otherProjectType}
                    onChange={handleChange}
                    placeholder="Please tell us what type of editing/project you need..."
                    rows="4"
                    required
                  />
                </div>
              )}
            </div>

            <div className="inquiry__field">
              <label>FINAL VIDEO LENGTH</label>

              <select
                name="videoLength"
                value={formData.videoLength}
                onChange={handleChange}
              >
                <option value="">
                  Select duration
                </option>

                <option value="Under 30 sec">
                  Under 30 sec
                </option>

                <option value="30-60 sec">
                  30–60 sec
                </option>

                <option value="1-3 min">
                  1–3 min
                </option>

                <option value="3-10 min">
                  3–10 min
                </option>

                <option value="10+ min">
                  10+ min
                </option>
              </select>
            </div>

            <div className="inquiry__field">
              <label>NUMBER OF VIDEOS</label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                placeholder="Example: 5"
              />
            </div>

            <div className="inquiry__field">
              <label>FOOTAGE READY?</label>

              <select
                name="footage"
                value={formData.footage}
                onChange={handleChange}
              >
                <option value="">
                  Select
                </option>

                <option value="Yes">
                  Yes, ready
                </option>

                <option value="Partially">
                  Partially ready
                </option>

                <option value="Not Yet">
                  Not yet
                </option>
              </select>
            </div>

            <div className="inquiry__field">
              <label>DEADLINE</label>

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>

            <div className="inquiry__field">
              <label>BUDGET RANGE</label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">
                  Select budget
                </option>

                <option value="Under ₹2,000">
                  Under ₹2,000
                </option>

                <option value="₹2,000 - ₹5,000">
                  ₹2,000 – ₹5,000
                </option>

                <option value="₹5,000 - ₹10,000">
                  ₹5,000 – ₹10,000
                </option>

                <option value="₹10,000+">
                  ₹10,000+
                </option>
              </select>
            </div>

            <div className="inquiry__field inquiry__field--full">
              <label>REFERENCE / STYLE</label>

              <input
                type="text"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                placeholder="Instagram reel / YouTube link / style reference"
              />
            </div>

            <div className="inquiry__field inquiry__field--full">
              <label>PROJECT DETAILS *</label>

              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about the footage, style, mood, platform and anything important..."
                rows="6"
                required
              />
            </div>

            <div className="inquiry__field inquiry__field--full">
              <label>PREFERRED RESPONSE</label>

              <div className="inquiry__radio-group">

                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="WhatsApp"
                    checked={
                      formData.contactMethod === 'WhatsApp'
                    }
                    onChange={handleChange}
                  />
                  WhatsApp
                </label>

                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    checked={
                      formData.contactMethod === 'Email'
                    }
                    onChange={handleChange}
                  />
                  Email
                </label>

                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Call"
                    checked={
                      formData.contactMethod === 'Call'
                    }
                    onChange={handleChange}
                  />
                  Call
                </label>

              </div>
            </div>

          </div>

          <button
            type="submit"
            className="inquiry__submit"
            data-cursor="SEND"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'SENDING...'
              : 'SEND PROJECT INQUIRY →'}
          </button>
        </form>

      </div>
    </section>
  );
}