import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import {SiCodewars } from "react-icons/si";
import { NavLink } from "react-router-dom";

import { Button, Form, Input} from 'antd';

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

export default function Contact(){
    return(
        <>
            <div className="flex flex-col items-center py-5">
                <h3 className="font-semibold text-3xl p1/y">Reach out to me</h3>
                <p>Want to discuss a project/up for any work, or just want to say Hello? My inbox is Open for all.</p>
            </div>
            <div className="flex justify-evenly">
            <div>
                <h4>Internet Community</h4>
                <ul className="justify-items-start">
                <NavLink to="https://www.linkedin.com/in/ritesh-kumar-626277202/">
                    <li><AiFillLinkedin /> linkedin</li>
                </NavLink>
                    <li><AiFillGithub /> <a href={"https://github.com/rit-kr"}>Git Hub</a></li>
                    <li><SiCodewars /> <a href={"https://www.codewars.com/users/rit_229"}>Code War</a></li>
                </ul>
            </div>
            <div className="">
                <h4>Contact Me</h4>
                <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600,}} 
                    validateMessages={validateMessages}
                    >
                    <Form.Item name={['user', 'name']} label="Name" rules={[{required: true,},]}>
                      <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{type: 'email',},]}>
                      <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'message']} label="Message">
                      <Input.TextArea ows={4}/>
                    </Form.Item>
                    {/* <Form.Item label="TextArea">
                         <TextArea rows={4} />
                        </Form.Item> */}
                    <Form.Item wrapperCol={{...layout.wrapperCol,offset: 8,}}>
                      <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            </div>
        </>
    )
};