import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message === 'success') {
          setIsFormSubmitted(true);
          form.current.reset();
        } else {
          setIsFormSubmitted(false);
          alert('Something went wrong. Please try again later.');
        }
      });
  };

  return (
    <div className='bg-gray-100 dark:bg-[#1E2226]' id='contact'>
      <main className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center'>
          <div className='flex md:flex-row flex-col justify-center gap-10 md:items-start items-center w-full py-16'>
            <div className='md:w-1/3 w-full flex flex-col'>
              <div className='flex flex-col justify-start items-center p-4 rounded-lg bg-white dark:bg-zinc-300 dark:text-gray-800 hover:bg-gray-100 text-dark shadow-2xl'>
                <MdOutlineEmail className='w-8 h-8' />
                <h4 className='font-bold mt-2'>Email</h4>
                <h5 className='font-semibold text-sm mb-2'>
                  dpkptnk00007@gmail.com
                </h5>
                <a href='mailto:dpkptnk00007@gmail.com' target='_blank'>
                  <p className='text-sm hover:text-blue-500'>Send a Message</p>
                </a>
              </div>
              <div className='mt-5 flex flex-col justify-start items-center p-4 rounded-lg bg-white dark:bg-zinc-300 dark:text-gray-800 hover:bg-gray-100 text-dark shadow-2xl'>
                <BsWhatsapp className='w-8 h-8' />
                <h4 className='font-bold mt-2'>WhatsApp</h4>
                <h5 className='font-semibold text-sm mb-2'>+91 9348564091</h5>
                <a
                  href='https://api.whatsapp.com/send?phone=+919348564091'
                  target='_blank'
                >
                  <p className='text-sm hover:text-blue-500'>Send a Message</p>
                </a>
              </div>
            </div>

            {!isFormSubmitted ? (
              <form
                className='md:w-1/3 w-full ml-6 flex flex-col justify-center items-center'
                ref={form}
                onSubmit={submitForm}
              >
                <div className='w-full mb-2'>
                  <input
                    type='text'
                    name='name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-300 dark:text-gray-800'
                    placeholder='Your Name'
                  />
                </div>
                <div className='w-full my-3'>
                  <input
                    type='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-300 dark:text-gray-800'
                    placeholder='Your Email'
                  />
                </div>
                <div className='w-full mt-2'>
                  <textarea
                    rows={7}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-300 dark:text-gray-800'
                    placeholder='Your Message'
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name='message'
                  />
                </div>
                <button
                  type='submit'
                  className='mt-5 rounded-md py-2 px-4 bg-black dark:text-white text-white dark:bg-[rgb(255,117,102)] text-lg font-semibold'
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className='md:mt-20 flex justify-center items-center h-full'>
                <h3 className='font-semibold ml-6 text-dark dark:text-gray-800 text-center text-2xl'>
                  Thank you for getting in touch
                </h3>
              </div>
            )}
          </div>
      </main>
    </div>
  );
};

export default contact;