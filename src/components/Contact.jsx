import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template_peb5v1h
// service_2fmos7y
// HdkzW4tSYGP4GCqb0
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_peb5v1h
    // service_2fmos7y
    // HdkzW4tSYGP4GCqb0
    emailjs
      .send(
        'service_2fmos7y',
        'template_peb5v1h',
        {
          from_name: form.name,
          to_name: 'Kevin',
          from_email: form.email,
          to_email: 'wbg.kevingarcia031@gmail.com',
          message: form.message,
        },
        'HdkzW4tSYGP4GCqb0'
      )
      .then(
        () => {
          setLoading(false);
          alert(
            'Thank you, message received and looking forward to hearing from you again.'
          );

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong.');
        }
      );
  };
  // #3c3350
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border-2 border-[#fcb726]">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>{' '}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold  border-2 border-[#fcb726] shadow-md shadow-primary rounded-br-xl">
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
        <button className="bg-tertiary my-4 py-3 px-8 outline-none w-fit text-white font-bold  border-2 border-[#fcb726] shadow-md shadow-primary rounded-br-xl">
          <a
            href="https://drive.google.com/file/d/1DW1ZPwpliMCXT4Ds4BgwB_C9lXNFdaVq/view?usp=share_link"
            target="blank">
            {loading ? 'Download CV' : 'Download CV'}
          </a>
        </button>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
