import { Button, Form, Input, Divider } from 'antd'
import { MailOutlined, KeyOutlined } from '@ant-design/icons'
import ButtonSocial from '../../components/auth/ButtonSocial'
import { useNavigate } from 'react-router-dom'
import './register.css'
const Register = () => {

  const navigate = useNavigate()

  const onFinish = (values) => {
    //eslint-disable-next-line
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    //eslint-disable-next-line
    console.log('Failed:', errorInfo)
  }
  const navLogin = () => {
    navigate('/login')
  }
  const buttonRegisterSocial = [
    {
      bg: '#fff',
      color: '#000',
      icon: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
      text: 'Tiếp tục với google'
    },
    {
      bg: '#096bd6',
      color: '#fff',
      icon: 'http://www.pngall.com/wp-content/uploads/2016/07/Facebook-PNG-HD.png',
      text: 'Tiếp tục với facebook'
    }
  ]

  return (
    <div className="bg-auth flex-center">
      <section className="bg-[#dfdfdf] absolutep rounded-md flex-col flex-center pt-6 overflow-hidden">
        <img className="w-[40px] h-[40px]" src="https://cdn0.iconfinder.com/data/icons/chess-26/128/7-1024.png" alt="" />
        <h1 className="my-8">ĐĂNG KÝ</h1>
        <Form
          name="basic"
          style={{
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 24,
            paddingRight: 24
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="gmail"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập gmail!'
              }
            ]}
          >
            <Input size="large" prefix={<MailOutlined />} placeholder="Gmail" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!'
              }
            ]}
          >
            <Input.Password size="large" prefix={<KeyOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="rePassword"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập lại mật khẩu!'
              }
            ]}
          >
            <Input.Password size="large" prefix={<KeyOutlined />} placeholder="Nhập lại password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="flex-center">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <Divider plain className="!px-6 !text-[20px] !font-[500px] !text-[#747474]">OR</Divider>
        <div className="w-[100%] flex flex-col gap-2 login-social-container px-6">
          {buttonRegisterSocial.map((btn, idx) => <ButtonSocial key={idx} bg={btn.bg} color={btn.color} icon={btn.icon} text={btn.text} />)}
        </div>
        <div className="p-6 text-center mt-3 bg-[#d5d5d5] w-[100%]">
          <a className="font-[600]">Nếu bạn đã có tài khoản? <span className="text-[#74a52d] cursor-pointer" onClick={navLogin}>Đăng nhập</span> </a>
        </div>
      </section>
    </div>
  )
}

export default Register
