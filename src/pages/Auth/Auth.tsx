import { Button, Checkbox, Form, Input } from 'antd';
import styles from './Auth.module.scss'
<<<<<<< HEAD
import { login } from '../../store/user/userActions';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksState';
=======
import { useAppDispatch, useAppSelector } from '../../hooks/hooksState';
import { userLogin } from '../../store/user/userActions';
import { userLoginData } from '../../store/user/userTypes';
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { USER_LOGOUT } from '../../store/user/userSlice';

function Auth() {
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const { isLoading, error, isSuccess, curUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  

  useEffect(() => {
=======
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess, error, curUser } = useAppSelector((state) => state.user)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (location.pathname == '/logout') {
      dispatch(USER_LOGOUT());
      navigate('/auth');
    }

>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
    if (isSuccess && curUser) {
      navigate('/');
    }

    if (error) {
      console.log(error)
    }
<<<<<<< HEAD
  }, [isSuccess, error]);

  const onFinish = (values: any) => {
    dispatch(login(values));
=======


  }, [isSuccess, error])

  const onFinish = (values: userLoginData) => {
    dispatch(userLogin(values));
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {error && <p className={styles.test}>Введенные данные не верны</p>}
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Auth