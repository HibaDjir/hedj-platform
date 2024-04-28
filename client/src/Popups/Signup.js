import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Modal({ onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const errorTranslations = {
    'An error occurred. Please try again later.': 'حدث خطأ. يرجى المحاولة مرة أخرى في وقت لاحق.',
    '"Password" should contain at least 1 lower-cased letter': 'يجب أن تحتوي كلمة المرور على حرف صغير على الأقل.',
    '"Password" should be at least 8 characters long': 'يجب أن تكون كلمة المرور على الأقل ٨ أحرف.',
    '"Password" should contain at least 1 number': 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل.',
    '"Password" should contain at least 1 symbol': 'يجب أن تحتوي كلمة المرور على رمز واحد على الأقل.',
    'User with given email already Exist!': 'عذرًا، يبدو أن هذا البريد الإلكتروني مُرتبط بحساب آخر.'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    setIsLoading(true);

    axios.post('http://localhost:3000/api/users/signup', { firstName, lastName, email, password })
      .then(res => {
        setIsLoading(false);
        if (res.ok) {
          alert("تم إنشاء الحساب بنجاح! تفقد حسابك البريدي");
          onClose();
          // Clear form fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          // Show success alert
        } else {
          alert("created");
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
          }
        }
      }).catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          let translatedErrorMessage = errorTranslations[err.response.data.message] || 'حدث خطأ. يرجى المحاولة مرة أخرى في وقت لاحق.';
          setErrorMessage(translatedErrorMessage);
        } else {
          setErrorMessage('حدث خطأ. يرجى المحاولة مرة أخرى في وقت لاحق');
        }
        console.log(err);
      });
  };

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      dir="rtl"
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center n"
    >
      <div className="mt-10 flex flex-col gap-5 text-white bg-transparent rounded-2xl">
        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[600px] rounded-2xl bg-[#F4EFE7]">
          <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
            تسجيل حساب جديد
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="firstName">
                الإسم
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="text"
                placeholder="الإسم"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="lastName">
                القب
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="text"
                placeholder="القب"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="email">
                البريد اللإلكتروني
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="email"
                placeholder="البريد اللإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="password">
                كلمة السر
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="password"
                placeholder="كلمة السر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="confirmPassword">
                تأكيد كلمة السر
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="password"
                placeholder="تأكيد كلمة السر"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full"
            >
              {isLoading ? 'جاري المعالجة...' : 'تأكيد'}
            </button>
            {errorMessage && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 mt-2">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
