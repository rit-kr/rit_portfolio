import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";

import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  }
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

// const { TextArea } = Input;

export default function Contact() {
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
            <div>

              <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600, }}
                validateMessages={validateMessages}
              >
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true, },]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', },]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message">
                  <Input.TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item label="TextArea">
                         <TextArea rows={4} />
                        </Form.Item> */}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8, }}>
                  <Button htmlType="submit">Submit</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};