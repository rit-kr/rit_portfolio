import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import emailjs from '@emailjs/browser';

import { Button, Form, Input } from 'antd';
import { useRef } from "react";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

/* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//   }
// };
/* eslint-enable no-template-curly-in-string */

// const onFinish = (values) => {
//   console.log(values);
// };

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rit', 'template_rit', form.current, 'X471RlOMMI_kzQOPW')
      .then((result) => {
          console.log(result.text);
          window.location.reload(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="container pb-8">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-5xl p1/y my-8">Reach out to me</h3>
          <p className="basis-2/5 text-lg my-8">Want to discuss a project/up for any work, or just want to say Hello? My inbox is Open for all.</p>
        </div>
        <div className="flex justify-between">
          <div className="basis-2/5">
            <h4 className="text-xl my-4 ">Internet Community</h4>
            <ul className="flex flex-wrap justify-between align-center ">
              <li className=" flex basis-1/2  text-3xl py-2 -center"><AiFillLinkedin /> <a className="text-xl px-4" href={"https://www.linkedin.com/in/ritesh-kumar-626277202/"}>linkedin</a></li>
              <li className=" flex basis-1/2  text-3xl py-2 -center"><AiFillGithub /> <a className="text-xl px-4" href={"https://github.com/rit-kr"}>Git Hub</a></li>
              <li className=" flex basis-1/2  text-3xl py-2 -center"><SiCodewars /> <a className="text-xl px-4" href={"https://www.codewars.com/users/rit_229"}>Code War</a></li>
            </ul>
            <div className="flex flex-wrap justify-between align-center text-base py-4">
              <div className="basis-1/2">
                <ul>Address
                  <li className="text-xs">Delhi, India</li>
                </ul>
              </div>
              <div className="basis-1/2">
                <ul>Email
                  <li className="text-xs">
                    rit.kr.7@gmail.com
                  </li>
                </ul>
                <ul>Phone
                  <li className="text-xs">
                    +91-9910645499
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-2/5">
            <h4 className="text-xl my-4 self-center">Contact Me</h4>
            {/* <div className="text-base"> */}
            {/* 
              <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600, fontSize:'10rem'}}
                validateMessages={validateMessages}
              >
                <Form.Item name={['user', 'name'], } label="Name"  rules={[{ required: true, },]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email'],  'user_email'} label="Email" rules={[{ type: 'email', },]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message">
                  <Input.TextArea rows={4} />
                </Form.Item> */}
            {/* <Form.Item label="TextArea">
                         <TextArea rows={4} />
                        </Form.Item> */}
            {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8, }}>
                  <Button className="text-blue-600/70" htmlType="submit">Submit</Button>
                </Form.Item>
              </Form> */}
            {/* </div> */}
            <div>
              <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                <label className="text-base">Name</label>
                <input className="text-gray-800 p-2 rounded" type="text" name="from_name"  placeholder="Please enter your name"/>
                <label className="text-base">Email</label>
                <input className="text-gray-800 p-2 rounded" type="email" name="from_email" placeholder="Please enter your email"/>
                <label className="text-base">Message</label>
                <textarea  className=" text-gray-800 text-blue-600/70 p-2 rounded"name="message"rows={4} placeholder="Please enter your message" />
                <Button className="text-blue-600/70 my-1" htmlType="submit" value="Send">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};