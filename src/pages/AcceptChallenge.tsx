import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card } from 'antd'

const AcceptChallenge: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const handleSubmit = (values: { githubId: string; email: string }) => {
    // TODO: 这里可以添加表单验证和提交逻辑
    console.log('表单数据:', values)
    navigate('/submit')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">准备好接受挑战了吗？</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="GitHub ID"
            name="githubId"
            rules={[{ required: true, message: '请输入你的 GitHub ID' }]}
          >
            <Input size='large' placeholder="请输入你的 GitHub ID" />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入你的邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input size='large' placeholder="请输入你的邮箱" />
          </Form.Item>

          <Form.Item>
            <Button size='large' type="primary" htmlType="submit" block>
              开始挑战
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default AcceptChallenge 