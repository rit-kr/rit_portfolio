import { NavLink } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
const DownloadButton = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
        
        <NavLink className="flex p-5" to="/assets/pdf/Rit_Resume_web.pdf" target="_blank" download>
          <Button className='text-blue-600/70' icon={<DownloadOutlined />} size={size}>
              Resume
            </Button>
        </NavLink>
    </>
  )
} 

export default DownloadButton

